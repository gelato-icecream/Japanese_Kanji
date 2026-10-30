/* ═══════════════════════════════════════════════
   Kanji Yomi — app logic
   ═══════════════════════════════════════════════ */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // ───────── Persistent state ─────────
  const store = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem("kanjiYomi." + key)) ?? fallback; }
      catch { return fallback; }
    },
    set(key, val) { localStorage.setItem("kanjiYomi." + key, JSON.stringify(val)); },
  };

  const state = {
    known: new Set(store.get("known", [])),
    cat: "All",
    search: "",
    current: 0,
    quizMode: "reading",
    score: store.get("score", { right: 0, wrong: 0, streak: 0, best: 0 }),
    quiz: null,
  };

  // ───────── Helpers ─────────
  const kataToHira = (s) => s.replace(/[\u30A1-\u30F6]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /** Highlight the target kanji inside a string */
  const hl = (text, k) => esc(text).split(k).join(`<span class="hl">${k}</span>`);

  /** Convert "[漢字|かんじ]" markup to <ruby> HTML */
  const toRuby = (s, k) =>
    s.replace(/\[([^|\]]+)\|([^\]]+)\]/g, (_, base, rt) => `<ruby>${k ? hl(base, k) : esc(base)}<rt>${esc(rt)}</rt></ruby>`);

  /** Kana-only version of a sentence (for accurate text-to-speech) */
  const toKana = (s) => s.replace(/\[([^|\]]+)\|([^\]]+)\]/g, "$2");

  /** Small coloured on/kun/mixed/special tag shown inside furigana */
  const typeTag = (t) => (t && TYPE_INFO[t] ? `<span class="rt-type ${t}">${TYPE_INFO[t].jp} ${TYPE_INFO[t].label}</span>` : "");

  /** Hidden furigana (reading + reading type) that is revealed on hover/click depending on settings */
  const peek = (baseHTML, reading, type) =>
    `<ruby class="peek"><span class="rb-base">${baseHTML}</span><rt>${typeTag(type)}<span class="rt-text">${esc(reading)}</span></rt></ruby>`;

  /** Render a kun'yomi like "た-べる" with dimmed okurigana */
  const fmtKun = (r) => {
    const i = r.indexOf("-");
    if (i === -1) return esc(r);
    if (i === 0) return `<span class="oku">-</span>${esc(r.slice(1))}`;
    if (i === r.length - 1) return `${esc(r.slice(0, -1))}<span class="oku">-</span>`;
    return `${esc(r.slice(0, i))}<span class="oku">${esc(r.slice(i + 1))}</span>`;
  };
  const kunPlain = (r) => r.replace(/-/g, "");
  const kunStem = (r) => (r.startsWith("-") ? r.slice(1) : r.split("-")[0]);

  // ───────── Speech ─────────
  let jaVoice = null;
  const loadVoices = () => {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    jaVoice = voices.find((v) => v.lang === "ja-JP" && /Google|Nanami|Kyoko|Haruka/i.test(v.name))
      || voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("ja")) || null;
  };
  if (window.speechSynthesis) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  const speak = (text) => {
    if (!window.speechSynthesis) { alert("Speech is not supported in this browser."); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    u.rate = 0.85;
    if (jaVoice) u.voice = jaVoice;
    speechSynthesis.speak(u);
  };
  const speakBtn = (text, title = "Listen") => `<button class="speak" data-say="${esc(text)}" title="${title}">🔊</button>`;

  document.addEventListener("click", (e) => {
    const s = e.target.closest("[data-say]");
    if (s) { e.stopPropagation(); speak(s.dataset.say); }
  });

  // ───────── Navigation (hash routing) ─────────
  const showView = (name) => {
    $$(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
    const tab = name === "detail" ? "browse" : name;
    $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.nav === tab));
    window.scrollTo(0, 0);
  };

  const route = () => {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h.startsWith("kanji/")) {
      const idx = KANJI.findIndex((x) => x.k === h.slice(6));
      if (idx >= 0) { state.current = idx; renderDetail(); showView("detail"); return; }
    }
    if (h === "rules") return showView("rules");
    if (h === "quiz") { if (!state.quiz) newQuestion(); return showView("quiz"); }
    renderGrid();
    showView("browse");
  };
  window.addEventListener("hashchange", route);

  document.addEventListener("click", (e) => {
    const n = e.target.closest("[data-nav]");
    if (n) location.hash = n.dataset.nav === "browse" ? "" : n.dataset.nav;
  });
  const openKanji = (k) => { location.hash = "kanji/" + encodeURIComponent(k); };

  // ───────── Toggles ─────────
  const bindToggle = (id, cls, key) => {
    const el = $(id);
    el.checked = store.get(key, true);
    const apply = () => { document.body.classList.toggle(cls, !el.checked); store.set(key, el.checked); };
    el.addEventListener("change", apply);
    apply();
  };
  bindToggle("#toggleFurigana", "no-furigana", "furigana");
  bindToggle("#toggleEnglish", "no-english", "english");

  // ───────── Settings (dark mode + reveal mode) ─────────
  const settingsEl = $("#settings");
  const openSettings = () => { settingsEl.hidden = false; $("#closeSettings").focus(); };
  const closeSettings = () => { settingsEl.hidden = true; };
  $("#openSettings").addEventListener("click", openSettings);
  $("#closeSettings").addEventListener("click", closeSettings);
  settingsEl.addEventListener("click", (e) => { if (e.target === settingsEl) closeSettings(); });

  const darkEl = $("#toggleDark");
  darkEl.checked = store.get("dark", window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false);
  const applyDark = () => { document.body.classList.toggle("dark", darkEl.checked); store.set("dark", darkEl.checked); };
  darkEl.addEventListener("change", applyDark);
  applyDark();

  const autoSpeakEl = $("#toggleAutoSpeak");
  autoSpeakEl.checked = store.get("autoSpeak", true);
  autoSpeakEl.addEventListener("change", () => store.set("autoSpeak", autoSpeakEl.checked));

  const REVEAL_MODES = ["hover", "click", "never"];
  const applyReveal = (mode) => {
    if (!REVEAL_MODES.includes(mode)) mode = "hover";
    REVEAL_MODES.forEach((m) => document.body.classList.toggle("reveal-" + m, m === mode));
    $$("#revealMode input").forEach((r) => { r.checked = r.value === mode; });
    $$(".revealed").forEach((el) => el.classList.remove("revealed"));
    store.set("reveal", mode);
  };
  $("#revealMode").addEventListener("change", (e) => applyReveal(e.target.value));
  applyReveal(store.get("reveal", "hover"));

  // ───────── Device mode (auto / mobile / desktop) ─────────
  const DEVICE_MODES = ["auto", "mobile", "desktop"];
  const mqlMobile = window.matchMedia("(max-width: 768px)");
  const isMobileDevice = () =>
    mqlMobile.matches || /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.matchMedia("(pointer: coarse)").matches && window.innerWidth <= 1024);

  const applyDeviceMode = (mode) => {
    if (!DEVICE_MODES.includes(mode)) mode = "auto";
    store.set("device", mode);
    $$("#deviceMode input").forEach((r) => { r.checked = r.value === mode; });

    const isMobile = mode === "mobile" || (mode === "auto" && isMobileDevice());
    const isDesktop = mode === "desktop" || (mode === "auto" && !isMobileDevice());

    document.body.classList.toggle("is-mobile", isMobile);
    document.body.classList.toggle("is-desktop", isDesktop);
  };

  $("#deviceMode").addEventListener("change", (e) => applyDeviceMode(e.target.value));

  const onViewportChange = () => {
    if (store.get("device", "auto") === "auto") {
      applyDeviceMode("auto");
    }
  };
  if (mqlMobile.addEventListener) {
    mqlMobile.addEventListener("change", onViewportChange);
  } else if (mqlMobile.addListener) {
    mqlMobile.addListener(onViewportChange);
  }
  window.addEventListener("resize", onViewportChange);
  applyDeviceMode(store.get("device", "auto"));

  // Click-to-reveal: toggle hidden furigana / blurred English
  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("reveal-click")) return;
    const el = e.target.closest("ruby, .sentence-en, .word-meaning, .q-meaning");
    if (el) el.classList.toggle("revealed");
  });

  // ───────── Browse grid ─────────
  const cats = ["All", ...new Set(KANJI.map((k) => k.cat)), "★ Learned", "Not learned"];
  $("#catFilters").innerHTML = cats.map((c) => `<button class="chip${c === "All" ? " active" : ""}" data-cat="${c}">${c}</button>`).join("");
  $("#catFilters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    state.cat = b.dataset.cat;
    $$("#catFilters .chip").forEach((c) => c.classList.toggle("active", c === b));
    renderGrid();
  });
  $("#search").addEventListener("input", (e) => { state.search = e.target.value.trim().toLowerCase(); renderGrid(); });

  const matches = (k) => {
    if (state.cat === "★ Learned" && !state.known.has(k.k)) return false;
    if (state.cat === "Not learned" && state.known.has(k.k)) return false;
    if (!["All", "★ Learned", "Not learned"].includes(state.cat) && k.cat !== state.cat) return false;
    const q = state.search;
    if (!q) return true;
    const qh = kataToHira(q);
    const hay = [k.k, k.meaning, ...k.on.map(kataToHira), ...k.kun.map(kunPlain), ...k.words.flatMap((w) => [w[0], w[1], w[2]])]
      .join(" ").toLowerCase();
    return hay.includes(q) || hay.includes(qh);
  };

  const renderProgress = () => {
    const n = state.known.size, t = KANJI.length;
    $("#progressFill").style.width = (n / t) * 100 + "%";
    $("#progressText").textContent = `${n} / ${t} kanji learned`;
  };

  function renderGrid() {
    const list = KANJI.filter(matches);
    $("#kanjiGrid").innerHTML = list.length
      ? list.map((k) => `
        <div class="kcard${state.known.has(k.k) ? " known" : ""}" data-k="${k.k}" tabindex="0">
          <div class="k">${k.k}</div>
          <div class="m">${esc(k.meaning)}</div>
          <div class="r"><span class="o">${k.on.slice(0, 2).join("・")}</span>${k.kun.length ? " / " : ""}<span class="u">${k.kun.slice(0, 2).map(kunPlain).join("・")}</span></div>
        </div>`).join("")
      : `<div class="empty">No kanji found 🤔</div>`;
    renderProgress();
  }
  $("#kanjiGrid").addEventListener("click", (e) => {
    const c = e.target.closest("[data-k]");
    if (c) openKanji(c.dataset.k);
  });
  $("#kanjiGrid").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.dataset.k) openKanji(e.target.dataset.k);
  });

  // ───────── Detail ─────────
  const typeBadge = (t, long = false) =>
    `<span class="badge ${t}${long ? " long" : ""}" title="${TYPE_INFO[t].label}: ${TYPE_INFO[t].desc}">${long ? TYPE_INFO[t].label : TYPE_INFO[t].jp}</span>`;

  function renderDetail() {
    const k = KANJI[state.current];
    const known = state.known.has(k.k);

    const onHTML = k.on.length
      ? k.on.map((r) => `<span class="rpill" data-say="${kataToHira(r)}" title="Click to hear">${r}</span>`).join("")
      : `<span class="none">No on'yomi</span>`;
    const kunHTML = k.kun.length
      ? k.kun.map((r) => `<span class="rpill" data-say="${kunPlain(r)}" title="Click to hear">${fmtKun(r)}</span>`).join("")
      : `<span class="none">No kun'yomi — only on'yomi is used!</span>`;

    const wordsHTML = k.words.map(([w, r, m, t, note]) => `
      <div class="word">
        <div class="word-jp">${peek(hl(w, k.k), r, t)}</div>
        <div>
          <div class="word-reading">${esc(r)}</div>
          <div class="word-meaning">${esc(m)}</div>
          ${note ? `<div class="word-note">${esc(note)}</div>` : ""}
        </div>
        <div class="badge-col">${typeBadge(t, true)}</div>
        ${speakBtn(r)}
      </div>`).join("");

    const sentHTML = k.sentences.map(([jp, en]) => `
      <div class="sentence-card">
        ${speakBtn(toKana(jp), "Listen to sentence")}
        <div>
          <div class="sentence">${toRuby(jp, k.k)}</div>
          <div class="sentence-en">${esc(en)}</div>
        </div>
      </div>`).join("");

    $("#detail").innerHTML = `
      <div class="detail-top">
        <div class="big-card">
          <div class="big-kanji">${k.k}</div>
          <div class="meaning">${esc(k.meaning)}</div>
          <div class="cat">${esc(k.cat)} · ${state.current + 1} of ${KANJI.length}</div>
        </div>
        <div class="readings">
          <div class="rbox on">
            <h3>${typeBadge("on")} On'yomi 音読み</h3>
            <div class="sub">Chinese-based · mostly in kanji compounds</div>
            <div class="rlist">${onHTML}</div>
          </div>
          <div class="rbox kun">
            <h3>${typeBadge("kun")} Kun'yomi 訓読み</h3>
            <div class="sub">Native Japanese · alone or with hiragana</div>
            <div class="rlist">${kunHTML}</div>
          </div>
          <div class="tip">
            <h4>💡 When to use which reading</h4>
            ${k.tip}
          </div>
        </div>
      </div>

      <h2 class="section-title">📖 Example words</h2>
      <div class="legend">
        ${Object.keys(TYPE_INFO).map((t) => `<span>${typeBadge(t)} ${TYPE_INFO[t].label} — ${TYPE_INFO[t].desc}</span>`).join("")}
      </div>
      <div class="words">${wordsHTML}</div>

      <h2 class="section-title">✏️ Example sentences</h2>
      <div class="sentences">${sentHTML}</div>

      <div class="detail-actions">
        <button class="btn ${known ? "success" : "primary"}" id="toggleKnown">${known ? "✓ Learned (click to undo)" : "Mark as learned"}</button>
        <button class="btn" id="quizThis">🎯 Quiz me on this kanji</button>
      </div>`;

    $("#toggleKnown").onclick = () => {
      known ? state.known.delete(k.k) : state.known.add(k.k);
      store.set("known", [...state.known]);
      renderDetail();
      renderProgress();
    };
    $("#quizThis").onclick = () => { newQuestion(state.current); location.hash = "quiz"; };
  }

  const step = (d) => openKanji(KANJI[(state.current + d + KANJI.length) % KANJI.length].k);
  $("#prevKanji").onclick = () => step(-1);
  $("#nextKanji").onclick = () => step(1);

  // ───────── Quiz ─────────
  $$(".quiz-modes .chip").forEach((b) => b.addEventListener("click", () => {
    state.quizMode = b.dataset.mode;
    $$(".quiz-modes .chip").forEach((c) => c.classList.toggle("active", c === b));
    newQuestion();
  }));

  const renderScore = () => {
    $("#scoreRight").textContent = state.score.right;
    $("#scoreWrong").textContent = state.score.wrong;
    $("#scoreStreak").textContent = state.score.streak;
    $("#scoreBest").textContent = state.score.best;
  };

  /** All plausible single-kanji readings in hiragana */
  const kanjiReadings = (k) => [...k.on.map(kataToHira), ...k.kun.map(kunStem)];

  /** Build wrong-but-plausible readings for a word */
  function distractors(word, correct, kanji, n = 3) {
    const out = new Set();
    // 1) Swap the kanji's reading if the word is "kanji + kana" (e.g. 食べる → しょくべる, 山 → さん)
    const kanjiChars = [...word].filter((c) => /[\u4E00-\u9FFF]/.test(c));
    if (kanjiChars.length === 1 && kanjiChars[0] === kanji.k) {
      kanjiReadings(kanji).forEach((r) => out.add(word.replace(kanji.k, r)));
    }
    // 2) Readings of other words that share a kanji
    const related = KANJI.filter((x) => kanjiChars.includes(x.k));
    related.forEach((x) => x.words.forEach(([w, r]) => { if (w !== word) out.add(r); }));
    // 3) Substitute one of the target kanji's readings for another inside the correct reading
    const reads = kanjiReadings(kanji);
    reads.forEach((a) => reads.forEach((b) => {
      if (a !== b && correct.includes(a)) out.add(correct.replace(a, b));
    }));
    out.delete(correct);
    let list = shuffle([...out].filter((x) => x && Math.abs(x.length - correct.length) <= 3));
    // 4) Fallback: random readings of similar length
    if (list.length < n) {
      const pool = shuffle(KANJI.flatMap((x) => x.words.map((w) => w[1])))
        .filter((r) => r !== correct && !list.includes(r));
      list = list.concat(pool.slice(0, n - list.length));
    }
    return list.slice(0, n);
  }

  function newQuestion(kanjiIdx) {
    const ki = kanjiIdx ?? Math.floor(Math.random() * KANJI.length);
    const k = KANJI[ki];
    const mode = state.quizMode;
    let q;

    if (mode === "sentence") {
      const [jp, en] = pick(k.sentences);
      const segs = [...jp.matchAll(/\[([^|\]]+)\|([^\]]+)\]/g)].filter((m) => m[1].includes(k.k));
      const seg = pick(segs);
      const [full, base, reading] = seg;
      const explain = explainFor(k, base);
      const type = explain?.type || guessType(k, base, reading);
      const html = toRuby(jp.replace(full, "\u0000"), null)
        .replace("\u0000", `<span class="target">${peek(esc(base), reading, type)}</span>`);
      q = {
        k, ki, mode, prompt: "How is the underlined part read?",
        display: `<div class="q-sentence">${html}</div>`,
        meaning: en, answer: reading,
        options: shuffle([reading, ...distractors(base, reading, k)]),
        say: toKana(jp), word: base,
        explain,
      };
    } else {
      const [w, r, m, t, note] = pick(k.words);
      const display = `<div class="q-word">${peek(hl(w, k.k), r, t)}</div>`;
      if (mode === "type") {
        q = {
          k, ki, mode, prompt: `What type of reading is used? (read: ${r})`,
          display,
          meaning: m, answer: t,
          options: ["on", "kun", "mixed", "special"],
          say: r, word: w, reading: r, note,
        };
      } else {
        q = {
          k, ki, mode, prompt: "How do you read this word?",
          display,
          meaning: m, answer: r,
          options: shuffle([r, ...distractors(w, r, k)]),
          say: r, word: w, reading: r, type: t, note,
        };
      }
    }
    state.quiz = q;
    renderQuestion();
  }

  function explainFor(k, word) {
    const entry = k.words.find((w) => w[0] === word);
    return entry ? { type: entry[3], note: entry[4] } : null;
  }

  /** Guess on/kun for a single kanji read in a sentence (e.g. [食|た]べる → kun) */
  function guessType(k, base, reading) {
    if (base !== k.k) return null;
    if (k.on.some((r) => kataToHira(r) === reading)) return "on";
    if (k.kun.some((r) => kunStem(r) === reading)) return "kun";
    return null;
  }

  function renderQuestion() {
    const q = state.quiz;
    const label = (o) => (q.mode === "type" ? `${TYPE_INFO[o].jp} ${TYPE_INFO[o].label}` : esc(o));
    $("#quizCard").classList.remove("answered");
    $("#quizCard").innerHTML = `
      <div class="q-label">${esc(q.prompt)}</div>
      ${q.display}
      <div class="q-meaning">“${esc(q.meaning)}”</div>
      <div class="options">
        ${q.options.map((o, i) => `<button class="opt" data-opt="${esc(o)}"><span class="num">${i + 1}</span>${label(o)}</button>`).join("")}
      </div>
      <div class="feedback" id="feedback"></div>`;
    $$("#quizCard .opt").forEach((b) => b.addEventListener("click", () => answer(b.dataset.opt)));
    renderScore();
  }

  function answer(choice) {
    const q = state.quiz;
    if (q.answered) return;
    q.answered = true;
    const ok = choice === q.answer;
    $("#quizCard").classList.add("answered");

    $$("#quizCard .opt").forEach((b) => {
      b.disabled = true;
      if (b.dataset.opt === q.answer) b.classList.add("correct");
      else if (b.dataset.opt === choice) b.classList.add("wrong");
    });

    const s = state.score;
    if (ok) { s.right++; s.streak++; s.best = Math.max(s.best, s.streak); }
    else { s.wrong++; s.streak = 0; }
    store.set("score", s);
    renderScore();

    // Build explanation
    let detail = "";
    const type = q.mode === "type" ? q.answer : q.type || q.explain?.type;
    const note = q.note || q.explain?.note;
    if (q.mode === "type") {
      detail = `<p><b class="jp">${esc(q.word)}</b> is read <b class="jp">${esc(q.reading)}</b> — ${TYPE_INFO[type].label}: ${TYPE_INFO[type].desc}.</p>`;
    } else {
      detail = `<p><b class="jp">${esc(q.word)}</b> is read <b class="jp">${esc(q.answer)}</b>${type ? ` ${typeBadge(type, true)}` : ""}</p>`;
    }
    if (note) detail += `<p>💡 ${esc(note)}</p>`;
    detail += `<p class="tipline"><b>${q.k.k}</b>: ${q.k.tip}</p>`;

    const fb = $("#feedback");
    fb.className = "feedback show " + (ok ? "good" : "bad");
    fb.innerHTML = `
      <h3>${ok ? "✅ Correct!" : "❌ Not quite"}</h3>
      ${detail}
      <div class="row">
        <div>${speakBtn(q.say)} <button class="btn ghost" id="seeKanji">Open ${q.k.k} page</button></div>
        <button class="btn primary" id="nextQ">Next →</button>
      </div>`;
    $("#nextQ").onclick = () => newQuestion();
    $("#seeKanji").onclick = () => openKanji(q.k.k);
    if (store.get("autoSpeak", true)) speak(q.say);
  }

  // ───────── Keyboard shortcuts ─────────
  document.addEventListener("keydown", (e) => {
    if (!settingsEl.hidden) { if (e.key === "Escape") closeSettings(); return; }
    if (e.target.matches("input, textarea")) return;
    const view = $(".view.active")?.id;
    if (view === "view-detail") {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "Escape") location.hash = "";
    }
    if (view === "view-quiz" && state.quiz) {
      if (/^[1-4]$/.test(e.key) && !state.quiz.answered) {
        const b = $$("#quizCard .opt")[+e.key - 1];
        if (b) b.click();
      }
      if (e.key === "Enter" && state.quiz.answered) newQuestion();
    }
  });

  // ───────── Init ─────────
  renderScore();
  route();
})();
