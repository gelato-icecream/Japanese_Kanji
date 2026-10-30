/*
 * Kanji data
 * ----------
 * Each entry:
 *   k        – the kanji
 *   meaning  – English meaning(s)
 *   cat      – category used for filtering
 *   on       – on'yomi (Chinese-derived readings, katakana)
 *   kun      – kun'yomi (native Japanese readings, hiragana; text after "-" is okurigana)
 *   tip      – when to use which reading
 *   words    – [word, reading, meaning, type, note?]
 *              type: "on" | "kun" | "mixed" | "special"
 *   sentences – [japanese, english]
 *              Furigana markup: [漢字|かんじ]
 */
const KANJI = [
  // ───────────── Numbers ─────────────
  {
    k: "一", meaning: "one", cat: "Numbers",
    on: ["イチ", "イツ"], kun: ["ひと-つ", "ひと-"],
    tip: "Use <b>イチ</b> when counting with Chinese numbers (一, 一月, 一年). Use <b>ひと</b> with native counting (一つ) and in 一人. Before k/s/t/p sounds イチ often shrinks to <b>いっ</b> (一緒, 一本).",
    words: [
      ["一", "いち", "one (the number)", "on"],
      ["一つ", "ひとつ", "one (thing)", "kun", "Native counting system: ひとつ、ふたつ、みっつ…"],
      ["一緒", "いっしょ", "together", "on", "いち → いっ before the しょ sound"],
      ["一人", "ひとり", "one person; alone", "special", "Irregular — not いちにん"],
      ["一日", "ついたち", "1st day of the month", "special", "But 一日 meaning 'one day (duration)' is いちにち"],
    ],
    sentences: [
      ["りんごを[一|ひと]つください。", "One apple, please."],
      ["[一緒|いっしょ]に[行|い]きましょう。", "Let's go together."],
      ["[一人|ひとり]で[映画|えいが]を[見|み]ました。", "I watched a movie alone."],
    ],
  },
  {
    k: "二", meaning: "two", cat: "Numbers",
    on: ["ニ"], kun: ["ふた-つ", "ふた-"],
    tip: "Use <b>ニ</b> for the number and with most counters (二月, 二本). Use <b>ふた</b> for native counting (二つ) and 二人. Day 2 of the month is the special reading <b>ふつか</b>.",
    words: [
      ["二月", "にがつ", "February", "on"],
      ["二つ", "ふたつ", "two (things)", "kun"],
      ["二人", "ふたり", "two people", "special", "Irregular — not ににん"],
      ["二日", "ふつか", "2nd of the month; two days", "special"],
    ],
    sentences: [
      ["[二人|ふたり]で[旅行|りょこう]に[行|い]きました。", "The two of us went on a trip."],
      ["[二月|にがつ]はとても[寒|さむ]いです。", "February is very cold."],
    ],
  },
  {
    k: "三", meaning: "three", cat: "Numbers",
    on: ["サン"], kun: ["み", "みっ-つ"],
    tip: "<b>サン</b> for the number and almost all counters (三月, 三人, 三本 → さんぼん). <b>みっ</b> for native counting (三つ) and the day of the month 三日 (みっか).",
    words: [
      ["三月", "さんがつ", "March", "on"],
      ["三つ", "みっつ", "three (things)", "kun"],
      ["三日", "みっか", "3rd of the month; three days", "kun", "Days 2–10 of the month use native numbers + か"],
      ["三本", "さんぼん", "three (long things)", "on", "Counter 本 changes: いっぽん、にほん、さんぼん"],
    ],
    sentences: [
      ["[三月|さんがつ]に[桜|さくら]が[咲|さ]きます。", "Cherry blossoms bloom in March."],
      ["みかんを[三|みっ]つ[買|か]いました。", "I bought three mandarins."],
    ],
  },

  // ───────────── Days & Time ─────────────
  {
    k: "日", meaning: "day, sun, Japan", cat: "Days & Time",
    on: ["ニチ", "ジツ"], kun: ["ひ", "-び", "-か"],
    tip: "<b>ニチ</b> in most compounds (毎日, 日曜日). <b>ひ</b> when standing alone (\"day / sun\"). <b>か</b> when counting days 2–10 (三日 = みっか). It becomes <b>び</b> at the end of words like 日曜日 (sound change called <i>rendaku</i>). 今日 is a special whole-word reading.",
    words: [
      ["毎日", "まいにち", "every day", "on"],
      ["日本", "にほん", "Japan", "on", "ニチ shortened to ニ"],
      ["日曜日", "にちようび", "Sunday", "mixed", "First 日 = ニチ (on), last 日 = び (kun + rendaku)"],
      ["休日", "きゅうじつ", "holiday, day off", "on", "Less common on'yomi ジツ"],
      ["日", "ひ", "day; sun", "kun", "Alone → kun'yomi"],
      ["今日", "きょう", "today", "special", "Whole-word reading (熟字訓)"],
    ],
    sentences: [
      ["[毎日|まいにち][日本語|にほんご]を[勉強|べんきょう]します。", "I study Japanese every day."],
      ["[今日|きょう]はいい[日|ひ]ですね。", "Today is a nice day, isn't it?"],
      ["[日曜日|にちようび]に[友達|ともだち]と[会|あ]います。", "I'm meeting a friend on Sunday."],
    ],
  },
  {
    k: "月", meaning: "moon, month", cat: "Days & Time",
    on: ["ゲツ", "ガツ"], kun: ["つき"],
    tip: "<b>ガツ</b> for the <i>names</i> of months (一月 = January). <b>ゲツ</b> for durations (一か月 = one month long) and 月曜日. <b>つき</b> for the moon, or after native-style words like 毎月 (まいつき).",
    words: [
      ["四月", "しがつ", "April", "on", "Month name → ガツ"],
      ["一か月", "いっかげつ", "(a period of) one month", "on", "Duration → ゲツ"],
      ["月曜日", "げつようび", "Monday", "mixed"],
      ["月", "つき", "moon", "kun"],
      ["毎月", "まいつき", "every month", "mixed", "毎 (on) + 月 (kun)"],
    ],
    sentences: [
      ["[四月|しがつ]に[日本|にほん]へ[行|い]きます。", "I'm going to Japan in April."],
      ["[今夜|こんや]は[月|つき]がきれいです。", "The moon is beautiful tonight."],
      ["[一|いっ]か[月|げつ][東京|とうきょう]に[住|す]みました。", "I lived in Tokyo for one month."],
    ],
  },
  {
    k: "火", meaning: "fire", cat: "Days & Time",
    on: ["カ"], kun: ["ひ", "-び", "ほ-"],
    tip: "<b>カ</b> in compounds (火曜日, 火山). <b>ひ</b> alone (\"fire\"). Becomes <b>び</b> at the end of native compounds (花火).",
    words: [
      ["火曜日", "かようび", "Tuesday", "mixed"],
      ["火山", "かざん", "volcano", "on", "山 サン → ザン (rendaku)"],
      ["火", "ひ", "fire", "kun"],
      ["花火", "はなび", "fireworks", "kun", "ひ → び (rendaku)"],
    ],
    sentences: [
      ["[火曜日|かようび]に[会|あ]いましょう。", "Let's meet on Tuesday."],
      ["[夏|なつ]に[花火|はなび]を[見|み]ました。", "I watched fireworks in summer."],
    ],
  },
  {
    k: "水", meaning: "water", cat: "Days & Time",
    on: ["スイ"], kun: ["みず"],
    tip: "<b>スイ</b> in Chinese-style compounds (水曜日, 水道). <b>みず</b> alone and in native compounds (水着).",
    words: [
      ["水曜日", "すいようび", "Wednesday", "mixed"],
      ["水道", "すいどう", "water supply, tap water", "on"],
      ["水", "みず", "water", "kun"],
      ["水着", "みずぎ", "swimsuit", "kun", "着 き → ぎ (rendaku)"],
    ],
    sentences: [
      ["[水|みず]を[一杯|いっぱい]ください。", "A glass of water, please."],
      ["[水曜日|すいようび]は[休|やす]みです。", "Wednesday is my day off."],
    ],
  },
  {
    k: "木", meaning: "tree, wood", cat: "Days & Time",
    on: ["モク", "ボク"], kun: ["き", "こ-"],
    tip: "<b>モク</b> in 木曜日 and words about wood/material. <b>き</b> for \"tree\" on its own. <b>こ</b> appears in a few old native words (木の葉, 木陰).",
    words: [
      ["木曜日", "もくようび", "Thursday", "mixed"],
      ["大木", "たいぼく", "large tree", "on"],
      ["木", "き", "tree", "kun"],
      ["木の葉", "このは", "tree leaves", "kun", "Rare kun'yomi こ"],
    ],
    sentences: [
      ["[公園|こうえん]に[大|おお]きい[木|き]があります。", "There is a big tree in the park."],
      ["[木曜日|もくようび]にテストがあります。", "There's a test on Thursday."],
    ],
  },
  {
    k: "金", meaning: "gold, money", cat: "Days & Time",
    on: ["キン", "コン"], kun: ["かね", "かな-"],
    tip: "<b>キン</b> for gold (金 alone = gold!) and in compounds (金曜日). <b>かね</b> for money, usually as お金. A great example that a single kanji can still use on'yomi.",
    words: [
      ["金曜日", "きんようび", "Friday", "mixed"],
      ["金", "きん", "gold", "on", "Single kanji but on'yomi"],
      ["お金", "おかね", "money", "kun"],
      ["金持ち", "かねもち", "rich person", "kun"],
    ],
    sentences: [
      ["[今|いま]、お[金|かね]がありません。", "I don't have any money right now."],
      ["[金曜日|きんようび]の[夜|よる]、[映画|えいが]を[見|み]ます。", "I'll watch a movie on Friday night."],
    ],
  },
  {
    k: "土", meaning: "soil, earth", cat: "Days & Time",
    on: ["ド", "ト"], kun: ["つち"],
    tip: "<b>ド</b> in 土曜日 and most compounds. <b>ト</b> in a few words (土地). <b>つち</b> alone (\"soil\"). お土産 (おみやげ) is a special whole-word reading.",
    words: [
      ["土曜日", "どようび", "Saturday", "mixed"],
      ["土地", "とち", "land, plot", "on"],
      ["土", "つち", "soil, dirt", "kun"],
      ["お土産", "おみやげ", "souvenir", "special"],
    ],
    sentences: [
      ["[土曜日|どようび]に[買|か]い[物|もの]に[行|い]きます。", "I go shopping on Saturday."],
      ["[京都|きょうと]でお[土産|みやげ]を[買|か]いました。", "I bought souvenirs in Kyoto."],
    ],
  },
  {
    k: "年", meaning: "year", cat: "Days & Time",
    on: ["ネン"], kun: ["とし"],
    tip: "<b>ネン</b> with numbers and in compounds (来年, 二年生). <b>とし</b> alone for \"year\" or \"age\". 今年 (ことし) is special.",
    words: [
      ["来年", "らいねん", "next year", "on"],
      ["二年生", "にねんせい", "second-year student", "on"],
      ["年", "とし", "year; age", "kun"],
      ["今年", "ことし", "this year", "special"],
    ],
    sentences: [
      ["[来年|らいねん][日本|にほん]に[留学|りゅうがく]します。", "I'm going to study abroad in Japan next year."],
      ["[今年|ことし]の[夏|なつ]は[暑|あつ]いです。", "This summer is hot."],
    ],
  },
  {
    k: "時", meaning: "time, hour", cat: "Days & Time",
    on: ["ジ"], kun: ["とき"],
    tip: "<b>ジ</b> for clock time (三時) and compounds (時間). <b>とき</b> alone meaning \"when / at the time\". 時計 (とけい) is special.",
    words: [
      ["時間", "じかん", "time; hours", "on"],
      ["三時", "さんじ", "three o'clock", "on"],
      ["時", "とき", "time, when", "kun"],
      ["時計", "とけい", "clock, watch", "special"],
    ],
    sentences: [
      ["[今|いま][何時|なんじ]ですか。", "What time is it now?"],
      ["[子供|こども]の[時|とき]、[大阪|おおさか]に[住|す]んでいました。", "When I was a child, I lived in Osaka."],
    ],
  },

  // ───────────── People ─────────────
  {
    k: "人", meaning: "person", cat: "People",
    on: ["ジン", "ニン"], kun: ["ひと", "-り", "-と"],
    tip: "<b>ジン</b> for nationality or a type of person (日本人). <b>ニン</b> for counting people from three up (三人) and some compounds (人気). <b>ひと</b> alone. 一人 and 二人 are irregular.",
    words: [
      ["日本人", "にほんじん", "Japanese person", "on", "Nationality → ジン"],
      ["三人", "さんにん", "three people", "on", "Counting → ニン"],
      ["人", "ひと", "person", "kun"],
      ["一人", "ひとり", "one person", "special"],
      ["大人", "おとな", "adult", "special"],
    ],
    sentences: [
      ["[私|わたし]はアメリカ[人|じん]です。", "I am American."],
      ["[教室|きょうしつ]に[学生|がくせい]が[三人|さんにん]います。", "There are three students in the classroom."],
      ["あの[人|ひと]はだれですか。", "Who is that person?"],
    ],
  },
  {
    k: "子", meaning: "child", cat: "People",
    on: ["シ", "ス"], kun: ["こ"],
    tip: "<b>こ</b> is the most common: alone and in native words (子供, 女の子). <b>シ</b> in Chinese compounds (女子). <b>ス</b> in a few words where 子 is just a suffix (椅子, 様子).",
    words: [
      ["子供", "こども", "child", "kun"],
      ["女子", "じょし", "girl, woman (formal)", "on"],
      ["椅子", "いす", "chair", "on", "Rare on'yomi ス"],
      ["様子", "ようす", "appearance, state", "on"],
    ],
    sentences: [
      ["[子供|こども]たちが[公園|こうえん]で[遊|あそ]んでいます。", "The children are playing in the park."],
      ["[椅子|いす]に[座|すわ]ってください。", "Please sit on the chair."],
    ],
  },
  {
    k: "女", meaning: "woman", cat: "People",
    on: ["ジョ", "ニョ"], kun: ["おんな", "め"],
    tip: "<b>ジョ</b> in compounds (女性, 彼女). <b>おんな</b> alone and in native phrases (女の子). <b>め</b> survives in a few old words (女神).",
    words: [
      ["女性", "じょせい", "woman, female", "on"],
      ["彼女", "かのじょ", "she; girlfriend", "mixed", "彼 (kun) + 女 (on)"],
      ["女の子", "おんなのこ", "girl", "kun"],
      ["女神", "めがみ", "goddess", "kun"],
    ],
    sentences: [
      ["あの[女|おんな]の[子|こ]は[私|わたし]の[妹|いもうと]です。", "That girl is my younger sister."],
      ["[彼女|かのじょ]は[医者|いしゃ]です。", "She is a doctor."],
    ],
  },
  {
    k: "男", meaning: "man", cat: "People",
    on: ["ダン", "ナン"], kun: ["おとこ"],
    tip: "<b>ダン</b> in most compounds (男性). <b>ナン</b> in family-order words (長男 = eldest son). <b>おとこ</b> alone and in native phrases (男の人).",
    words: [
      ["男性", "だんせい", "man, male", "on"],
      ["長男", "ちょうなん", "eldest son", "on"],
      ["男", "おとこ", "man", "kun"],
      ["男の人", "おとこのひと", "man (polite)", "kun"],
    ],
    sentences: [
      ["[男|おとこ]の[人|ひと]がドアの[前|まえ]に[立|た]っています。", "A man is standing in front of the door."],
      ["[兄|あに]は[長男|ちょうなん]です。", "My older brother is the eldest son."],
    ],
  },
  {
    k: "先", meaning: "ahead, previous", cat: "People",
    on: ["セン"], kun: ["さき"],
    tip: "<b>セン</b> in compounds (先生, 先週). <b>さき</b> alone (\"ahead, tip, first\") as in お先に.",
    words: [
      ["先生", "せんせい", "teacher", "on"],
      ["先週", "せんしゅう", "last week", "on"],
      ["先", "さき", "ahead; tip; earlier", "kun"],
      ["お先に", "おさきに", "before you (polite)", "kun"],
    ],
    sentences: [
      ["[先週|せんしゅう][京都|きょうと]に[行|い]きました。", "I went to Kyoto last week."],
      ["お[先|さき]に[失礼|しつれい]します。", "Excuse me for leaving before you."],
    ],
  },
  {
    k: "生", meaning: "life, birth, raw", cat: "People",
    on: ["セイ", "ショウ"], kun: ["い-きる", "う-まれる", "なま"],
    tip: "One of the kanji with the MOST readings. <b>セイ</b> in most compounds (学生, 先生). <b>ショウ</b> in some (一生, 誕生日). With okurigana the hiragana tells you: 生<u>きる</u> = いきる, 生<u>まれる</u> = うまれる. Alone, <b>なま</b> = raw.",
    words: [
      ["学生", "がくせい", "student", "on"],
      ["一生", "いっしょう", "whole life", "on"],
      ["誕生日", "たんじょうび", "birthday", "mixed"],
      ["生まれる", "うまれる", "to be born", "kun", "Okurigana まれる → う"],
      ["生きる", "いきる", "to live", "kun", "Okurigana きる → い"],
      ["生", "なま", "raw; live", "kun"],
    ],
    sentences: [
      ["[私|わたし]は[東京|とうきょう]で[生|う]まれました。", "I was born in Tokyo."],
      ["[田中|たなか][先生|せんせい]は[優|やさ]しいです。", "Mr./Ms. Tanaka (teacher) is kind."],
      ["[誕生日|たんじょうび]おめでとう！", "Happy birthday!"],
    ],
  },
  {
    k: "名", meaning: "name, famous", cat: "People",
    on: ["メイ", "ミョウ"], kun: ["な"],
    tip: "<b>メイ</b> in most compounds (有名). <b>ミョウ</b> in a few (名字). <b>な</b> in native words like 名前.",
    words: [
      ["名前", "なまえ", "name", "kun"],
      ["有名", "ゆうめい", "famous", "on"],
      ["名字", "みょうじ", "family name", "on"],
    ],
    sentences: [
      ["お[名前|なまえ]は[何|なん]ですか。", "What is your name?"],
      ["この[店|みせ]はとても[有名|ゆうめい]です。", "This shop is very famous."],
    ],
  },

  // ───────────── Nature ─────────────
  {
    k: "山", meaning: "mountain", cat: "Nature",
    on: ["サン"], kun: ["やま"],
    tip: "<b>サン</b> after mountain names (富士山) and in compounds — it can become <b>ザン</b> (火山). <b>やま</b> alone and in native words.",
    words: [
      ["富士山", "ふじさん", "Mt. Fuji", "on"],
      ["火山", "かざん", "volcano", "on", "サン → ザン"],
      ["山", "やま", "mountain", "kun"],
      ["山道", "やまみち", "mountain path", "kun"],
    ],
    sentences: [
      ["[富士山|ふじさん]に[登|のぼ]りたいです。", "I want to climb Mt. Fuji."],
      ["[山|やま]の[上|うえ]は[寒|さむ]いです。", "It is cold at the top of the mountain."],
    ],
  },
  {
    k: "川", meaning: "river", cat: "Nature",
    on: ["セン"], kun: ["かわ", "-がわ"],
    tip: "Almost always <b>かわ</b>. After another word it often becomes <b>がわ</b> (小川, 品川). The on'yomi セン is rare for beginners.",
    words: [
      ["川", "かわ", "river", "kun"],
      ["小川", "おがわ", "stream, brook", "kun", "かわ → がわ (rendaku)"],
      ["品川", "しながわ", "Shinagawa (place)", "kun"],
    ],
    sentences: [
      ["[夏|なつ]に[川|かわ]で[泳|およ]ぎました。", "I swam in the river in summer."],
      ["[品川|しながわ][駅|えき]で[降|お]ります。", "I get off at Shinagawa Station."],
    ],
  },
  {
    k: "雨", meaning: "rain", cat: "Nature",
    on: ["ウ"], kun: ["あめ", "あま-"],
    tip: "Usually <b>あめ</b>. It turns into <b>あま</b> when another sound follows in a native compound (雨具). 梅雨 (つゆ, rainy season) is special.",
    words: [
      ["雨", "あめ", "rain", "kun"],
      ["大雨", "おおあめ", "heavy rain", "kun"],
      ["雨具", "あまぐ", "rain gear", "mixed", "あめ → あま before another word"],
      ["梅雨", "つゆ", "rainy season", "special"],
    ],
    sentences: [
      ["[明日|あした]は[雨|あめ]が[降|ふ]るでしょう。", "It will probably rain tomorrow."],
      ["[梅雨|つゆ]は[六月|ろくがつ]に[始|はじ]まります。", "The rainy season starts in June."],
    ],
  },
  {
    k: "気", meaning: "spirit, air, mood", cat: "Nature",
    on: ["キ", "ケ"], kun: [],
    tip: "No kun'yomi at all! <b>キ</b> in almost every word (天気, 元気, 気持ち). <b>ケ</b> in a few (湿気). 人気 is にんき (popularity).",
    words: [
      ["天気", "てんき", "weather", "on"],
      ["元気", "げんき", "healthy, energetic", "on"],
      ["人気", "にんき", "popularity", "on"],
      ["気持ち", "きもち", "feeling", "mixed", "気 (on) + 持ち (kun)"],
      ["湿気", "しっけ", "humidity", "on"],
    ],
    sentences: [
      ["[今日|きょう]はいい[天気|てんき]ですね。", "The weather is nice today, isn't it?"],
      ["お[元気|げんき]ですか。", "How are you?"],
    ],
  },

  // ───────────── Position & Size ─────────────
  {
    k: "大", meaning: "big", cat: "Position & Size",
    on: ["ダイ", "タイ"], kun: ["おお-きい", "おお-"],
    tip: "<b>ダイ</b> in most compounds (大学, 大好き). <b>タイ</b> in some (大切, 大変). With okurigana <u>きい</u> → <b>おおきい</b>. 大人 (おとな) is special.",
    words: [
      ["大学", "だいがく", "university", "on"],
      ["大切", "たいせつ", "important", "on"],
      ["大きい", "おおきい", "big", "kun"],
      ["大人", "おとな", "adult", "special"],
    ],
    sentences: [
      ["[兄|あに]は[大学|だいがく]の[学生|がくせい]です。", "My older brother is a university student."],
      ["この[犬|いぬ]は[大|おお]きいですね。", "This dog is big, isn't it?"],
    ],
  },
  {
    k: "小", meaning: "small", cat: "Position & Size",
    on: ["ショウ"], kun: ["ちい-さい", "こ-", "お-"],
    tip: "<b>ショウ</b> in compounds (小学校). <b>ちいさい</b> with okurigana. As a prefix in native words: <b>こ</b> (小鳥) or <b>お</b> (小川).",
    words: [
      ["小学校", "しょうがっこう", "elementary school", "on"],
      ["小さい", "ちいさい", "small", "kun"],
      ["小鳥", "ことり", "small bird", "kun"],
      ["小川", "おがわ", "stream", "kun"],
    ],
    sentences: [
      ["[小|ちい]さい[猫|ねこ]がいます。", "There is a small cat."],
      ["[妹|いもうと]は[小学生|しょうがくせい]です。", "My younger sister is an elementary school student."],
    ],
  },
  {
    k: "中", meaning: "middle, inside", cat: "Position & Size",
    on: ["チュウ", "ジュウ"], kun: ["なか"],
    tip: "<b>なか</b> alone (\"inside\"). <b>チュウ</b> in compounds (中国, 中学). As a suffix meaning \"throughout / all over\" it is <b>ジュウ</b> (一日中, 世界中).",
    words: [
      ["中", "なか", "inside, middle", "kun"],
      ["中国", "ちゅうごく", "China", "on"],
      ["一日中", "いちにちじゅう", "all day long", "on", "\"Throughout\" → ジュウ"],
      ["世界中", "せかいじゅう", "all over the world", "on"],
    ],
    sentences: [
      ["かばんの[中|なか]に[本|ほん]があります。", "There is a book in the bag."],
      ["[昨日|きのう]は[一日中|いちにちじゅう][雨|あめ]でした。", "It rained all day yesterday."],
    ],
  },
  {
    k: "上", meaning: "up, above", cat: "Position & Size",
    on: ["ジョウ"], kun: ["うえ", "あ-げる", "のぼ-る", "うわ-", "かみ"],
    tip: "<b>うえ</b> alone (\"above\"). The okurigana picks the verb: 上<u>げる</u> = あげる, 上<u>る</u> = のぼる. <b>ジョウ</b> in compounds (上手, 以上).",
    words: [
      ["上", "うえ", "above, on top", "kun"],
      ["上げる", "あげる", "to raise; to give", "kun"],
      ["上る", "のぼる", "to go up", "kun"],
      ["上手", "じょうず", "skilled", "special", "Irregular — ず is not a normal reading of 手"],
    ],
    sentences: [
      ["[机|つくえ]の[上|うえ]に[猫|ねこ]がいます。", "There is a cat on the desk."],
      ["[彼女|かのじょ]は[歌|うた]が[上手|じょうず]です。", "She is good at singing."],
    ],
  },
  {
    k: "下", meaning: "down, below", cat: "Position & Size",
    on: ["カ", "ゲ"], kun: ["した", "さ-げる", "くだ-さい", "お-りる"],
    tip: "<b>した</b> alone (\"below\"). Okurigana picks the verb: 下<u>げる</u> = さげる, 下<u>りる</u> = おりる, 下<u>さい</u> = ください. <b>カ</b> in compounds (地下鉄). 下手 (へた) is special.",
    words: [
      ["下", "した", "below, under", "kun"],
      ["地下鉄", "ちかてつ", "subway", "on"],
      ["下さい", "ください", "please (give me)", "kun"],
      ["下手", "へた", "unskilled", "special"],
    ],
    sentences: [
      ["[椅子|いす]の[下|した]に[犬|いぬ]がいます。", "There is a dog under the chair."],
      ["[地下鉄|ちかてつ]で[行|い]きます。", "I'll go by subway."],
    ],
  },

  // ───────────── Verbs ─────────────
  {
    k: "行", meaning: "go, conduct", cat: "Verbs",
    on: ["コウ", "ギョウ"], kun: ["い-く", "おこな-う"],
    tip: "With okurigana: 行<u>く</u> = <b>いく</b> (go), 行<u>う</u> = <b>おこなう</b> (carry out). <b>コウ</b> in most compounds (銀行, 旅行). <b>ギョウ</b> for a line of text (行) and events (行事).",
    words: [
      ["行く", "いく", "to go", "kun"],
      ["行う", "おこなう", "to carry out", "kun"],
      ["銀行", "ぎんこう", "bank", "on"],
      ["旅行", "りょこう", "travel, trip", "on"],
    ],
    sentences: [
      ["[銀行|ぎんこう]へ[行|い]きます。", "I'm going to the bank."],
      ["[会議|かいぎ]は[三時|さんじ]に[行|おこな]われます。", "The meeting will be held at three o'clock."],
    ],
  },
  {
    k: "来", meaning: "come", cat: "Verbs",
    on: ["ライ"], kun: ["く-る", "き-ます", "こ-ない"],
    tip: "The verb 来る is irregular, so the reading of 来 <b>changes with the conjugation</b>: くる, きます, こない. <b>ライ</b> in compounds (来週, 来年).",
    words: [
      ["来る", "くる", "to come", "kun"],
      ["来ます", "きます", "to come (polite)", "kun"],
      ["来ない", "こない", "not come", "kun"],
      ["来週", "らいしゅう", "next week", "on"],
    ],
    sentences: [
      ["[友達|ともだち]が[家|いえ]に[来|き]ました。", "A friend came to my house."],
      ["[来週|らいしゅう]テストがあります。", "There's a test next week."],
      ["[彼|かれ]はまだ[来|こ]ない。", "He still hasn't come."],
    ],
  },
  {
    k: "食", meaning: "eat, food", cat: "Verbs",
    on: ["ショク"], kun: ["た-べる", "く-う"],
    tip: "<b>たべる</b> with okurigana べる. <b>ショク</b> in compounds (食事, 食堂). くう is a rough/casual \"eat\".",
    words: [
      ["食べる", "たべる", "to eat", "kun"],
      ["食べ物", "たべもの", "food", "kun"],
      ["食事", "しょくじ", "meal", "on"],
      ["食堂", "しょくどう", "cafeteria", "on"],
    ],
    sentences: [
      ["[朝|あさ]ご[飯|はん]を[食|た]べましたか。", "Did you eat breakfast?"],
      ["[食堂|しょくどう]で[昼|ひる]ご[飯|はん]を[食|た]べます。", "I eat lunch in the cafeteria."],
    ],
  },
  {
    k: "見", meaning: "see, look", cat: "Verbs",
    on: ["ケン"], kun: ["み-る", "み-せる"],
    tip: "<b>み</b> with okurigana (見る, 見せる) and in native compounds (花見). <b>ケン</b> in Chinese compounds (見学, 意見).",
    words: [
      ["見る", "みる", "to see, watch", "kun"],
      ["見せる", "みせる", "to show", "kun"],
      ["花見", "はなみ", "cherry-blossom viewing", "kun"],
      ["意見", "いけん", "opinion", "on"],
    ],
    sentences: [
      ["[昨日|きのう][映画|えいが]を[見|み]ました。", "I watched a movie yesterday."],
      ["パスポートを[見|み]せてください。", "Please show me your passport."],
    ],
  },
  {
    k: "学", meaning: "study, learning", cat: "Verbs",
    on: ["ガク"], kun: ["まな-ぶ"],
    tip: "<b>ガク</b> in compounds — it often shrinks to <b>ガッ</b> before k sounds (学校 = がっこう). <b>まなぶ</b> with okurigana ぶ.",
    words: [
      ["学校", "がっこう", "school", "on", "がく + こう → がっこう"],
      ["大学", "だいがく", "university", "on"],
      ["学ぶ", "まなぶ", "to learn", "kun"],
    ],
    sentences: [
      ["[毎朝|まいあさ][歩|ある]いて[学校|がっこう]に[行|い]きます。", "I walk to school every morning."],
      ["[日本|にほん]の[文化|ぶんか]を[学|まな]びたいです。", "I want to learn about Japanese culture."],
    ],
  },

  // ───────────── Everyday ─────────────
  {
    k: "本", meaning: "book, origin, counter", cat: "Everyday",
    on: ["ホン"], kun: ["もと"],
    tip: "Almost always <b>ホン</b> — even alone (本 = book). As a counter for long objects it changes: いっ<b>ぽん</b>, に<b>ほん</b>, さん<b>ぼん</b>. <b>もと</b> mainly in names (山本).",
    words: [
      ["本", "ほん", "book", "on", "Single kanji but on'yomi"],
      ["日本", "にほん", "Japan", "on"],
      ["一本", "いっぽん", "one (long thing)", "on", "ほん → ぽん"],
      ["本屋", "ほんや", "bookstore", "mixed", "本 (on) + 屋 (kun)"],
      ["山本", "やまもと", "Yamamoto (surname)", "kun"],
    ],
    sentences: [
      ["[図書館|としょかん]で[本|ほん]を[借|か]りました。", "I borrowed a book at the library."],
      ["ペンを[一本|いっぽん]ください。", "One pen, please."],
    ],
  },
  {
    k: "電", meaning: "electricity", cat: "Everyday",
    on: ["デン"], kun: [],
    tip: "Only one reading to learn: <b>デン</b>. No kun'yomi.",
    words: [
      ["電車", "でんしゃ", "train", "on"],
      ["電話", "でんわ", "telephone", "on"],
      ["電気", "でんき", "electricity; light", "on"],
    ],
    sentences: [
      ["[電車|でんしゃ]で[会社|かいしゃ]に[行|い]きます。", "I go to work by train."],
      ["[後|あと]で[電話|でんわ]します。", "I'll call you later."],
    ],
  },
  {
    k: "車", meaning: "car, vehicle", cat: "Everyday",
    on: ["シャ"], kun: ["くるま"],
    tip: "<b>くるま</b> alone (\"car\"). <b>シャ</b> in compounds (電車, 自転車).",
    words: [
      ["車", "くるま", "car", "kun"],
      ["電車", "でんしゃ", "train", "on"],
      ["自転車", "じてんしゃ", "bicycle", "on"],
    ],
    sentences: [
      ["[父|ちち]の[車|くるま]は[白|しろ]いです。", "My father's car is white."],
      ["[自転車|じてんしゃ]で[学校|がっこう]に[行|い]きます。", "I go to school by bicycle."],
    ],
  },
  {
    k: "国", meaning: "country", cat: "Everyday",
    on: ["コク"], kun: ["くに"],
    tip: "<b>くに</b> alone. <b>コク</b> in compounds, which sometimes becomes <b>ゴク</b> (中国 = ちゅうごく) — but not always (外国 = がいこく).",
    words: [
      ["国", "くに", "country", "kun"],
      ["外国", "がいこく", "foreign country", "on"],
      ["中国", "ちゅうごく", "China", "on", "コク → ゴク"],
      ["国際", "こくさい", "international", "on"],
    ],
    sentences: [
      ["お[国|くに]はどちらですか。", "Which country are you from?"],
      ["[外国|がいこく]に[行|い]ったことがありますか。", "Have you ever been abroad?"],
    ],
  },
  {
    k: "語", meaning: "language, word", cat: "Everyday",
    on: ["ゴ"], kun: ["かた-る"],
    tip: "<b>ゴ</b> for languages (日本語, 英語) and compounds. <b>かたる</b> with okurigana. In native compounds it may become <b>がたり</b> (物語).",
    words: [
      ["日本語", "にほんご", "Japanese language", "on"],
      ["英語", "えいご", "English", "on"],
      ["語る", "かたる", "to tell, narrate", "kun"],
      ["物語", "ものがたり", "story, tale", "kun", "かたり → がたり"],
    ],
    sentences: [
      ["[英語|えいご]と[日本語|にほんご]を[話|はな]します。", "I speak English and Japanese."],
      ["これは[古|ふる]い[物語|ものがたり]です。", "This is an old story."],
    ],
  },
];

const TYPE_INFO = {
  on:      { label: "On'yomi",  jp: "音", desc: "Chinese-derived reading" },
  kun:     { label: "Kun'yomi", jp: "訓", desc: "Native Japanese reading" },
  mixed:   { label: "Mixed",    jp: "混", desc: "On + kun in one word (重箱 / 湯桶 reading)" },
  special: { label: "Special",  jp: "特", desc: "Irregular / whole-word reading (熟字訓)" },
};
