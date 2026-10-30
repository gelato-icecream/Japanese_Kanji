/*
 * Extra kanji + extra sentences
 * -----------------------------
 * Loaded after data.js. Same format as the entries in data.js:
 *   words     – [word, reading, meaning, type, note?]
 *   sentences – [japanese, english]   (furigana markup: [漢字|かんじ])
 * Every sentence must contain the entry's kanji inside a [..|..] segment
 * (the sentence quiz picks one of those segments).
 */
KANJI.push(
  // ───────────── Numbers ─────────────
  {
    k: "四", meaning: "four", cat: "Numbers",
    on: ["シ"], kun: ["よ", "よっ-つ", "よん"],
    tip: "<b>よん</b> / <b>よ</b> are used far more than シ, because シ sounds like 死 (death). Only a few words keep <b>シ</b> — most importantly 四月 (しがつ). 四時 is <b>よじ</b>, 四人 is <b>よにん</b>.",
    words: [
      ["四月", "しがつ", "April", "on", "One of the few words that keeps シ"],
      ["四つ", "よっつ", "four (things)", "kun"],
      ["四人", "よにん", "four people", "mixed", "Not しにん — シ sounds like 死 (death)"],
      ["四時", "よじ", "four o'clock", "mixed", "Not よんじ or しじ"],
    ],
    sentences: [
      ["[四月|しがつ]に[学校|がっこう]が[始|はじ]まります。", "School starts in April."],
      ["[四時|よじ]に[会|あ]いましょう。", "Let's meet at four o'clock."],
      ["[家族|かぞく]は[四人|よにん]です。", "There are four people in my family."],
    ],
  },
  {
    k: "五", meaning: "five", cat: "Numbers",
    on: ["ゴ"], kun: ["いつ-つ", "いつ"],
    tip: "<b>ゴ</b> for the number and with counters (五月, 五分). <b>いつ</b> for native counting (五つ) and the 5th day of the month (五日 = いつか).",
    words: [
      ["五月", "ごがつ", "May", "on"],
      ["五分", "ごふん", "five minutes", "on"],
      ["五つ", "いつつ", "five (things)", "kun"],
      ["五日", "いつか", "5th of the month; five days", "kun", "Days 2–10 of the month use native numbers + か"],
    ],
    sentences: [
      ["[五月|ごがつ]は[暖|あたた]かいです。", "May is warm."],
      ["[駅|えき]まで[五分|ごふん]です。", "It's five minutes to the station."],
      ["[五日|いつか]に[会|あ]いましょう。", "Let's meet on the 5th."],
    ],
  },
  {
    k: "六", meaning: "six", cat: "Numbers",
    on: ["ロク"], kun: ["む", "む-っつ", "むい"],
    tip: "<b>ロク</b> for the number and counters — it shrinks to <b>ロッ</b> before p/k sounds (六百 = ろっぴゃく). <b>む</b> for native counting (六つ = むっつ) and 六日 (むいか).",
    words: [
      ["六月", "ろくがつ", "June", "on"],
      ["六百", "ろっぴゃく", "six hundred", "on", "ろく → ろっ, ひゃく → ぴゃく"],
      ["六つ", "むっつ", "six (things)", "kun"],
      ["六日", "むいか", "6th of the month; six days", "kun"],
    ],
    sentences: [
      ["[六時|ろくじ]に[起|お]きます。", "I get up at six o'clock."],
      ["[卵|たまご]を[六|むっ]つ[買|か]いました。", "I bought six eggs."],
      ["[六月|ろくがつ]は[雨|あめ]が[多|おお]いです。", "There's a lot of rain in June."],
    ],
  },
  {
    k: "七", meaning: "seven", cat: "Numbers",
    on: ["シチ"], kun: ["なな", "なな-つ", "なの"],
    tip: "<b>シチ</b> in fixed words (七月, 七時). <b>なな</b> is often used instead, because シチ is easy to mix up with イチ (一). <b>なの</b> only in 七日 (なのか).",
    words: [
      ["七月", "しちがつ", "July", "on"],
      ["七時", "しちじ", "seven o'clock", "on"],
      ["七つ", "ななつ", "seven (things)", "kun"],
      ["七日", "なのか", "7th of the month; seven days", "kun"],
    ],
    sentences: [
      ["[七月|しちがつ]から[夏休|なつやす]みです。", "Summer vacation starts in July."],
      ["[七時|しちじ]に[晩|ばん]ご[飯|はん]を[食|た]べます。", "I eat dinner at seven o'clock."],
      ["[七日|なのか]は[私|わたし]の[誕生日|たんじょうび]です。", "The 7th is my birthday."],
    ],
  },
  {
    k: "八", meaning: "eight", cat: "Numbers",
    on: ["ハチ"], kun: ["や", "や-っつ", "よう"],
    tip: "<b>ハチ</b> for the number — it shrinks to <b>ハッ</b> before p/s sounds (八百 = はっぴゃく). <b>や</b> in native counting (八つ). 八日 is <b>ようか</b>, and 八百屋 (greengrocer) is the special <b>やおや</b>.",
    words: [
      ["八月", "はちがつ", "August", "on"],
      ["八百", "はっぴゃく", "eight hundred", "on", "はち → はっ, ひゃく → ぴゃく"],
      ["八つ", "やっつ", "eight (things)", "kun"],
      ["八日", "ようか", "8th of the month; eight days", "kun"],
      ["八百屋", "やおや", "greengrocer", "special"],
    ],
    sentences: [
      ["[八月|はちがつ]はとても[暑|あつ]いです。", "August is very hot."],
      ["[八百屋|やおや]で[野菜|やさい]を[買|か]います。", "I buy vegetables at the greengrocer."],
      ["[八時|はちじ]に[家|いえ]を[出|で]ます。", "I leave home at eight o'clock."],
    ],
  },
  {
    k: "九", meaning: "nine", cat: "Numbers",
    on: ["キュウ", "ク"], kun: ["ここの-つ", "ここの"],
    tip: "<b>キュウ</b> for the number in general (九十, 九人). <b>ク</b> in 九月 and 九時. <b>ここの</b> for native counting (九つ) and 九日 (ここのか).",
    words: [
      ["九十", "きゅうじゅう", "ninety", "on"],
      ["九月", "くがつ", "September", "on", "Month and o'clock use ク"],
      ["九時", "くじ", "nine o'clock", "on"],
      ["九つ", "ここのつ", "nine (things)", "kun"],
    ],
    sentences: [
      ["[九月|くがつ]に[日本|にほん]へ[行|い]きます。", "I'm going to Japan in September."],
      ["[毎晩|まいばん][九時|くじ]に[寝|ね]ます。", "I go to bed at nine every night."],
      ["クラスに[学生|がくせい]が[九人|きゅうにん]います。", "There are nine students in the class."],
    ],
  },
  {
    k: "十", meaning: "ten", cat: "Numbers",
    on: ["ジュウ", "ジッ"], kun: ["とお", "と"],
    tip: "<b>ジュウ</b> for the number. Before p/k/s/t sounds it becomes <b>ジュッ</b> or <b>ジッ</b> (十分 = じゅっぷん, 10 minutes). <b>とお</b> in native counting (十, 十日). 二十歳 (はたち) is special. Careful: 十分 can also be じゅうぶん = enough!",
    words: [
      ["十月", "じゅうがつ", "October", "on"],
      ["十分", "じゅうぶん", "enough", "on", "Same kanji as じゅっぷん (ten minutes) — context decides"],
      ["十日", "とおか", "10th of the month; ten days", "kun"],
      ["二十歳", "はたち", "20 years old", "special"],
    ],
    sentences: [
      ["[十月|じゅうがつ]に[引|ひ]っ[越|こ]しました。", "I moved in October."],
      ["それで[十分|じゅうぶん]です。", "That's enough."],
      ["[十日|とおか]に[国|くに]へ[帰|かえ]ります。", "I'm going back to my country on the 10th."],
    ],
  },
  {
    k: "百", meaning: "hundred", cat: "Numbers",
    on: ["ヒャク"], kun: [],
    tip: "Only <b>ヒャク</b>. Learn the sound changes: 三百 = さん<b>びゃく</b>, 六百 = ろっ<b>ぴゃく</b>, 八百 = はっ<b>ぴゃく</b>, 何百 = なん<b>びゃく</b>.",
    words: [
      ["百", "ひゃく", "hundred", "on"],
      ["三百", "さんびゃく", "three hundred", "on", "ひゃく → びゃく after ん"],
      ["六百", "ろっぴゃく", "six hundred", "on"],
      ["百円", "ひゃくえん", "100 yen", "on"],
    ],
    sentences: [
      ["このペンは[百円|ひゃくえん]です。", "This pen is 100 yen."],
      ["[会場|かいじょう]に[三百人|さんびゃくにん]が[来|き]ました。", "Three hundred people came to the venue."],
    ],
  },
  {
    k: "千", meaning: "thousand", cat: "Numbers",
    on: ["セン"], kun: ["ち"],
    tip: "<b>セン</b> for numbers — 三千 becomes さん<b>ぜん</b>, 八千 becomes はっ<b>せん</b>. The kun'yomi <b>ち</b> appears in names like 千葉 (ちば).",
    words: [
      ["千", "せん", "thousand", "on"],
      ["三千", "さんぜん", "three thousand", "on", "せん → ぜん after ん"],
      ["千円", "せんえん", "1,000 yen", "on"],
      ["千葉", "ちば", "Chiba (place)", "kun"],
    ],
    sentences: [
      ["[千円|せんえん]で[買|か]えます。", "You can buy it for 1,000 yen."],
      ["チケットは[三千円|さんぜんえん]です。", "The ticket is 3,000 yen."],
    ],
  },
  {
    k: "万", meaning: "ten thousand", cat: "Numbers",
    on: ["マン", "バン"], kun: [],
    tip: "<b>マン</b> for numbers (一万 = 10,000 — always say いち before it!). <b>バン</b> in a few words meaning \"all / everything\" (万歳, 万全).",
    words: [
      ["一万", "いちまん", "ten thousand", "on", "Must say いち — not just まん"],
      ["万年筆", "まんねんひつ", "fountain pen", "on"],
      ["万歳", "ばんざい", "hurray!", "on"],
    ],
    sentences: [
      ["[一万円|いちまんえん]しかありません。", "I only have 10,000 yen."],
      ["[万年筆|まんねんひつ]で[手紙|てがみ]を[書|か]きました。", "I wrote a letter with a fountain pen."],
    ],
  },
  {
    k: "円", meaning: "yen, circle", cat: "Numbers",
    on: ["エン"], kun: ["まる-い"],
    tip: "Almost always <b>エン</b> — the currency (百円) and circles (円). <b>まるい</b> (round) exists but is usually written 丸い.",
    words: [
      ["円", "えん", "yen; circle", "on"],
      ["百円", "ひゃくえん", "100 yen", "on"],
      ["円高", "えんだか", "strong yen", "mixed", "円 (on) + 高 (kun, たか → だか)"],
      ["円い", "まるい", "round", "kun", "More often written 丸い"],
    ],
    sentences: [
      ["このりんごは[一つ|ひとつ][百円|ひゃくえん]です。", "These apples are 100 yen each."],
      ["[円|まる]いテーブルを[買|か]いました。", "I bought a round table."],
    ],
  },

  // ───────────── Days & Time ─────────────
  {
    k: "今", meaning: "now", cat: "Days & Time",
    on: ["コン", "キン"], kun: ["いま"],
    tip: "<b>いま</b> alone (\"now\"). <b>コン</b> in compounds (今週, 今晩). Several very common time words are special: 今日 (きょう), 今朝 (けさ), 今年 (ことし).",
    words: [
      ["今", "いま", "now", "kun"],
      ["今週", "こんしゅう", "this week", "on"],
      ["今晩", "こんばん", "this evening", "on"],
      ["今朝", "けさ", "this morning", "special"],
      ["今年", "ことし", "this year", "special"],
    ],
    sentences: [
      ["[今|いま]、[忙|いそが]しいですか。", "Are you busy now?"],
      ["[今週|こんしゅう]は[仕事|しごと]が[多|おお]いです。", "I have a lot of work this week."],
      ["[今朝|けさ]は[寒|さむ]かったです。", "It was cold this morning."],
    ],
  },
  {
    k: "午", meaning: "noon", cat: "Days & Time",
    on: ["ゴ"], kun: [],
    tip: "Only <b>ゴ</b>. You'll meet it almost exclusively in 午前 (a.m.), 午後 (p.m.) and 正午 (noon).",
    words: [
      ["午前", "ごぜん", "a.m., morning", "on"],
      ["午後", "ごご", "p.m., afternoon", "on"],
      ["正午", "しょうご", "noon", "on"],
    ],
    sentences: [
      ["[授業|じゅぎょう]は[午前|ごぜん][九時|くじ]に[始|はじ]まります。", "Class starts at 9 a.m."],
      ["[午後|ごご]は[雨|あめ]でしょう。", "It will probably rain in the afternoon."],
    ],
  },
  {
    k: "前", meaning: "before, front", cat: "Days & Time",
    on: ["ゼン"], kun: ["まえ"],
    tip: "<b>まえ</b> alone (\"in front / before\") and in native words (名前, 駅前). <b>ゼン</b> in Chinese-style compounds (午前, 前日).",
    words: [
      ["前", "まえ", "front; before", "kun"],
      ["名前", "なまえ", "name", "kun"],
      ["午前", "ごぜん", "a.m.", "on"],
      ["前日", "ぜんじつ", "the day before", "on"],
    ],
    sentences: [
      ["[駅|えき]の[前|まえ]で[待|ま]っています。", "I'm waiting in front of the station."],
      ["[食事|しょくじ]の[前|まえ]に[手|て]を[洗|あら]います。", "I wash my hands before meals."],
      ["[試験|しけん]の[前日|ぜんじつ]は[早|はや]く[寝|ね]ます。", "I go to bed early the day before an exam."],
    ],
  },
  {
    k: "後", meaning: "after, behind", cat: "Days & Time",
    on: ["ゴ", "コウ"], kun: ["うし-ろ", "あと", "のち"],
    tip: "Okurigana tells you: 後<u>ろ</u> = <b>うしろ</b> (behind). Alone, <b>あと</b> = later/after (後で). <b>ゴ</b> in compounds (午後, 最後). <b>コウ</b> in a few (後半).",
    words: [
      ["後ろ", "うしろ", "behind, back", "kun"],
      ["後で", "あとで", "later", "kun"],
      ["午後", "ごご", "p.m., afternoon", "on"],
      ["最後", "さいご", "last, the end", "on"],
      ["後半", "こうはん", "second half", "on"],
    ],
    sentences: [
      ["[後|うし]ろを[見|み]てください。", "Please look behind you."],
      ["[宿題|しゅくだい]は[後|あと]でします。", "I'll do my homework later."],
      ["[最後|さいご]まで[頑張|がんば]ります。", "I'll do my best until the end."],
    ],
  },
  {
    k: "半", meaning: "half", cat: "Days & Time",
    on: ["ハン"], kun: ["なか-ば"],
    tip: "Almost always <b>ハン</b> — half past the hour (三時半), 半分 (half). <b>なかば</b> (middle) with okurigana ば.",
    words: [
      ["半分", "はんぶん", "half", "on"],
      ["三時半", "さんじはん", "half past three", "on"],
      ["半年", "はんとし", "half a year", "mixed", "半 (on) + 年 (kun)"],
      ["半ば", "なかば", "middle, halfway", "kun"],
    ],
    sentences: [
      ["ケーキを[半分|はんぶん]ください。", "Half the cake, please."],
      ["[毎朝|まいあさ][六時半|ろくじはん]に[起|お]きます。", "I get up at 6:30 every morning."],
    ],
  },
  {
    k: "週", meaning: "week", cat: "Days & Time",
    on: ["シュウ"], kun: [],
    tip: "Only <b>シュウ</b>. Pair it with 先 (last), 今 (this), 来 (next) and 毎 (every): 先週, 今週, 来週, 毎週.",
    words: [
      ["週末", "しゅうまつ", "weekend", "on"],
      ["先週", "せんしゅう", "last week", "on"],
      ["来週", "らいしゅう", "next week", "on"],
      ["毎週", "まいしゅう", "every week", "on"],
    ],
    sentences: [
      ["[週末|しゅうまつ]に[映画|えいが]を[見|み]ます。", "I'll watch a movie on the weekend."],
      ["[先週|せんしゅう]は[忙|いそが]しかったです。", "Last week was busy."],
    ],
  },
  {
    k: "分", meaning: "minute, part, understand", cat: "Days & Time",
    on: ["ブン", "フン", "ブ"], kun: ["わ-かる", "わ-ける"],
    tip: "With okurigana: 分<u>かる</u> = <b>わかる</b> (understand), 分<u>ける</u> = <b>わける</b> (divide). Minutes use <b>フン</b>, which becomes <b>プン</b> after 1, 3, 4, 6, 8, 10 (いっぷん, さんぷん). <b>ブン</b> for \"part\" (半分, 自分).",
    words: [
      ["分かる", "わかる", "to understand", "kun"],
      ["五分", "ごふん", "five minutes", "on"],
      ["三分", "さんぷん", "three minutes", "on", "ふん → ぷん"],
      ["自分", "じぶん", "oneself", "on"],
    ],
    sentences: [
      ["[日本語|にほんご]が[少|すこ]し[分|わ]かります。", "I understand a little Japanese."],
      ["[駅|えき]まで[歩|ある]いて[三分|さんぷん]です。", "It's a three-minute walk to the station."],
      ["ピザを[分|わ]けましょう。", "Let's share the pizza."],
    ],
  },
  {
    k: "毎", meaning: "every", cat: "Days & Time",
    on: ["マイ"], kun: [],
    tip: "Only <b>マイ</b>. The second kanji can be on or kun: 毎日 (まい<b>にち</b>, on) but 毎朝 (まい<b>あさ</b>, kun).",
    words: [
      ["毎日", "まいにち", "every day", "on"],
      ["毎週", "まいしゅう", "every week", "on"],
      ["毎朝", "まいあさ", "every morning", "mixed", "毎 (on) + 朝 (kun)"],
      ["毎晩", "まいばん", "every night", "on"],
    ],
    sentences: [
      ["[毎朝|まいあさ]コーヒーを[飲|の]みます。", "I drink coffee every morning."],
      ["[毎週|まいしゅう][日曜日|にちようび]に[公園|こうえん]へ[行|い]きます。", "I go to the park every Sunday."],
    ],
  },

  // ───────────── People ─────────────
  {
    k: "父", meaning: "father", cat: "People",
    on: ["フ"], kun: ["ちち"],
    tip: "<b>ちち</b> for your own father. Someone else's father is お父さん (おとうさん) — a special reading. <b>フ</b> in compounds (祖父, 父母).",
    words: [
      ["父", "ちち", "(my) father", "kun"],
      ["お父さん", "おとうさん", "father (polite)", "special"],
      ["祖父", "そふ", "grandfather", "on"],
      ["父母", "ふぼ", "father and mother", "on"],
    ],
    sentences: [
      ["[父|ちち]は[医者|いしゃ]です。", "My father is a doctor."],
      ["お[父|とう]さんはお[元気|げんき]ですか。", "Is your father well?"],
      ["[祖父|そふ]は[九十歳|きゅうじゅっさい]です。", "My grandfather is ninety."],
    ],
  },
  {
    k: "母", meaning: "mother", cat: "People",
    on: ["ボ"], kun: ["はは"],
    tip: "<b>はは</b> for your own mother. Someone else's mother is お母さん (おかあさん) — special. <b>ボ</b> in compounds (祖母, 母国).",
    words: [
      ["母", "はは", "(my) mother", "kun"],
      ["お母さん", "おかあさん", "mother (polite)", "special"],
      ["祖母", "そぼ", "grandmother", "on"],
      ["母国", "ぼこく", "home country", "on"],
    ],
    sentences: [
      ["[母|はは]は[料理|りょうり]が[上手|じょうず]です。", "My mother is good at cooking."],
      ["お[母|かあ]さんによろしく。", "Say hello to your mother."],
    ],
  },
  {
    k: "友", meaning: "friend", cat: "People",
    on: ["ユウ"], kun: ["とも"],
    tip: "<b>とも</b> in the everyday word 友達 (ともだち). <b>ユウ</b> in more formal compounds (友人, 親友).",
    words: [
      ["友達", "ともだち", "friend", "kun"],
      ["友人", "ゆうじん", "friend (formal)", "on"],
      ["親友", "しんゆう", "best friend", "on"],
    ],
    sentences: [
      ["[友達|ともだち]と[公園|こうえん]で[遊|あそ]びました。", "I played in the park with friends."],
      ["[彼|かれ]は[私|わたし]の[親友|しんゆう]です。", "He is my best friend."],
    ],
  },

  // ───────────── Body ─────────────
  {
    k: "口", meaning: "mouth, opening", cat: "Body",
    on: ["コウ", "ク"], kun: ["くち", "-ぐち"],
    tip: "<b>くち</b> alone. After another word it often becomes <b>ぐち</b> (出口, 入口). <b>コウ</b> in Chinese compounds (人口).",
    words: [
      ["口", "くち", "mouth", "kun"],
      ["出口", "でぐち", "exit", "kun", "くち → ぐち (rendaku)"],
      ["入口", "いりぐち", "entrance", "kun"],
      ["人口", "じんこう", "population", "on"],
    ],
    sentences: [
      ["[口|くち]を[大|おお]きく[開|あ]けてください。", "Please open your mouth wide."],
      ["[出口|でぐち]はどこですか。", "Where is the exit?"],
      ["[東京|とうきょう]は[人口|じんこう]が[多|おお]いです。", "Tokyo has a large population."],
    ],
  },
  {
    k: "目", meaning: "eye", cat: "Body",
    on: ["モク"], kun: ["め"],
    tip: "<b>め</b> alone (\"eye\") and as the ordinal suffix -目 (二番目, 一つ目). <b>モク</b> in Chinese compounds (目的, 科目).",
    words: [
      ["目", "め", "eye", "kun"],
      ["二番目", "にばんめ", "second (in order)", "mixed", "二番 (on) + 目 (kun)"],
      ["目的", "もくてき", "purpose", "on"],
      ["科目", "かもく", "school subject", "on"],
    ],
    sentences: [
      ["[目|め]が[痛|いた]いです。", "My eyes hurt."],
      ["[旅行|りょこう]の[目的|もくてき]は[何|なん]ですか。", "What is the purpose of your trip?"],
    ],
  },
  {
    k: "耳", meaning: "ear", cat: "Body",
    on: ["ジ"], kun: ["みみ"],
    tip: "Almost always <b>みみ</b>. The on'yomi <b>ジ</b> appears in medical words (耳鼻科).",
    words: [
      ["耳", "みみ", "ear", "kun"],
      ["耳鼻科", "じびか", "ear, nose & throat clinic", "on"],
    ],
    sentences: [
      ["うさぎは[耳|みみ]が[長|なが]いです。", "Rabbits have long ears."],
      ["[耳鼻科|じびか]に[行|い]きました。", "I went to the ENT clinic."],
    ],
  },
  {
    k: "手", meaning: "hand", cat: "Body",
    on: ["シュ"], kun: ["て", "た"],
    tip: "<b>て</b> alone and in native words (手紙, 右手). <b>シュ</b> for people with a skill (歌手, 選手). 上手 (じょうず) and 下手 (へた) are special.",
    words: [
      ["手", "て", "hand", "kun"],
      ["手紙", "てがみ", "letter", "kun", "かみ → がみ (rendaku)"],
      ["歌手", "かしゅ", "singer", "on"],
      ["上手", "じょうず", "skilled", "special"],
    ],
    sentences: [
      ["[手|て]を[洗|あら]ってください。", "Please wash your hands."],
      ["[母|はは]に[手紙|てがみ]を[書|か]きました。", "I wrote a letter to my mother."],
      ["[彼女|かのじょ]は[有名|ゆうめい]な[歌手|かしゅ]です。", "She is a famous singer."],
    ],
  },
  {
    k: "足", meaning: "foot, leg, enough", cat: "Body",
    on: ["ソク"], kun: ["あし", "た-りる", "た-す"],
    tip: "<b>あし</b> alone (foot/leg). With okurigana: 足<u>りる</u> = <b>たりる</b> (be enough), 足<u>す</u> = <b>たす</b> (add). <b>ソク</b> in compounds (遠足) and as the counter for pairs of shoes (一足 = いっそく).",
    words: [
      ["足", "あし", "foot, leg", "kun"],
      ["足りる", "たりる", "to be enough", "kun"],
      ["遠足", "えんそく", "school trip, excursion", "on"],
      ["一足", "いっそく", "one pair (of shoes)", "on"],
    ],
    sentences: [
      ["たくさん[歩|ある]いて[足|あし]が[疲|つか]れました。", "I walked a lot and my legs are tired."],
      ["お[金|かね]が[足|た]りません。", "I don't have enough money."],
    ],
  },

  // ───────────── Nature ─────────────
  {
    k: "天", meaning: "heaven, sky", cat: "Nature",
    on: ["テン"], kun: ["あま", "あめ"],
    tip: "Nearly always <b>テン</b> (天気, 天国). The kun'yomi <b>あま</b> survives in a few poetic words like 天の川 (the Milky Way).",
    words: [
      ["天気", "てんき", "weather", "on"],
      ["天国", "てんごく", "heaven", "on"],
      ["天の川", "あまのがわ", "the Milky Way", "kun"],
    ],
    sentences: [
      ["[天気予報|てんきよほう]によると、[明日|あした]は[晴|は]れです。", "According to the forecast, it will be sunny tomorrow."],
      ["[夏|なつ]の[夜|よる]は[天|あま]の[川|がわ]が[見|み]えます。", "On summer nights you can see the Milky Way."],
    ],
  },
  {
    k: "空", meaning: "sky, empty", cat: "Nature",
    on: ["クウ"], kun: ["そら", "あ-く", "から"],
    tip: "<b>そら</b> alone (\"sky\"). 空<u>く</u> = <b>あく</b> (become empty/free). <b>から</b> = empty (空手 = \"empty hand\"). <b>クウ</b> in compounds (空港).",
    words: [
      ["空", "そら", "sky", "kun"],
      ["空港", "くうこう", "airport", "on"],
      ["空く", "あく", "to become empty, free", "kun"],
      ["空手", "からて", "karate", "kun"],
    ],
    sentences: [
      ["[今日|きょう]は[空|そら]がとても[青|あお]いです。", "The sky is very blue today."],
      ["[空港|くうこう]で[友達|ともだち]を[待|ま]ちます。", "I'll wait for my friend at the airport."],
      ["この[席|せき]は[空|あ]いていますか。", "Is this seat free?"],
    ],
  },
  {
    k: "花", meaning: "flower", cat: "Nature",
    on: ["カ"], kun: ["はな"],
    tip: "<b>はな</b> alone and in native words (花火, 花見). <b>カ</b> in Chinese-style compounds (花瓶).",
    words: [
      ["花", "はな", "flower", "kun"],
      ["花見", "はなみ", "cherry-blossom viewing", "kun"],
      ["花火", "はなび", "fireworks", "kun"],
      ["花瓶", "かびん", "vase", "on"],
    ],
    sentences: [
      ["[母|はは]の[日|ひ]に[花|はな]をあげました。", "I gave flowers on Mother's Day."],
      ["[花瓶|かびん]に[水|みず]を[入|い]れてください。", "Please put water in the vase."],
    ],
  },

  // ───────────── Position & Size ─────────────
  {
    k: "右", meaning: "right", cat: "Position & Size",
    on: ["ウ", "ユウ"], kun: ["みぎ"],
    tip: "<b>みぎ</b> alone and in native words (右手). <b>ウ</b> in compounds like 左右 (さゆう, left and right).",
    words: [
      ["右", "みぎ", "right", "kun"],
      ["右手", "みぎて", "right hand", "kun"],
      ["左右", "さゆう", "left and right", "on"],
    ],
    sentences: [
      ["[次|つぎ]の[角|かど]を[右|みぎ]に[曲|ま]がってください。", "Please turn right at the next corner."],
      ["[右手|みぎて]で[字|じ]を[書|か]きます。", "I write with my right hand."],
    ],
  },
  {
    k: "左", meaning: "left", cat: "Position & Size",
    on: ["サ"], kun: ["ひだり"],
    tip: "<b>ひだり</b> alone and in native words (左手). <b>サ</b> in compounds (左右).",
    words: [
      ["左", "ひだり", "left", "kun"],
      ["左手", "ひだりて", "left hand", "kun"],
      ["左右", "さゆう", "left and right", "on"],
    ],
    sentences: [
      ["[銀行|ぎんこう]は[左|ひだり]にあります。", "The bank is on the left."],
      ["[道|みち]を[渡|わた]る[前|まえ]に[左右|さゆう]を[見|み]ます。", "I look left and right before crossing the road."],
    ],
  },
  {
    k: "外", meaning: "outside", cat: "Position & Size",
    on: ["ガイ", "ゲ"], kun: ["そと", "ほか"],
    tip: "<b>そと</b> alone (\"outside\"). <b>ガイ</b> in compounds (外国, 海外). <b>ゲ</b> only in a few words (外科 = surgery).",
    words: [
      ["外", "そと", "outside", "kun"],
      ["外国", "がいこく", "foreign country", "on"],
      ["外国人", "がいこくじん", "foreigner", "on"],
      ["外科", "げか", "surgery (dept.)", "on"],
    ],
    sentences: [
      ["[外|そと]で[遊|あそ]びましょう。", "Let's play outside."],
      ["[外国人|がいこくじん]の[友達|ともだち]がいます。", "I have foreign friends."],
    ],
  },
  {
    k: "東", meaning: "east", cat: "Position & Size",
    on: ["トウ"], kun: ["ひがし"],
    tip: "<b>ひがし</b> alone and in native words (東口). <b>トウ</b> in compounds (東京, 東北).",
    words: [
      ["東", "ひがし", "east", "kun"],
      ["東京", "とうきょう", "Tokyo", "on"],
      ["東口", "ひがしぐち", "east exit", "kun"],
      ["東北", "とうほく", "Tōhoku region", "on"],
    ],
    sentences: [
      ["[東京|とうきょう]に[住|す]んでいます。", "I live in Tokyo."],
      ["[駅|えき]の[東口|ひがしぐち]で[会|あ]いましょう。", "Let's meet at the station's east exit."],
    ],
  },
  {
    k: "西", meaning: "west", cat: "Position & Size",
    on: ["セイ", "サイ"], kun: ["にし"],
    tip: "<b>にし</b> alone (\"west\"). <b>セイ</b> in most compounds (西洋), <b>サイ</b> in some (関西).",
    words: [
      ["西", "にし", "west", "kun"],
      ["西口", "にしぐち", "west exit", "kun"],
      ["関西", "かんさい", "Kansai region", "on"],
      ["西洋", "せいよう", "the West, Western", "on"],
    ],
    sentences: [
      ["[太陽|たいよう]は[西|にし]に[沈|しず]みます。", "The sun sets in the west."],
      ["[関西|かんさい]の[言葉|ことば]は[面白|おもしろ]いです。", "The Kansai dialect is interesting."],
    ],
  },
  {
    k: "南", meaning: "south", cat: "Position & Size",
    on: ["ナン"], kun: ["みなみ"],
    tip: "<b>みなみ</b> alone (\"south\"). <b>ナン</b> in compounds (南米, 南極).",
    words: [
      ["南", "みなみ", "south", "kun"],
      ["南口", "みなみぐち", "south exit", "kun"],
      ["南米", "なんべい", "South America", "on"],
    ],
    sentences: [
      ["[沖縄|おきなわ]は[日本|にほん]の[南|みなみ]にあります。", "Okinawa is in the south of Japan."],
      ["[去年|きょねん][南米|なんべい]を[旅行|りょこう]しました。", "I travelled around South America last year."],
    ],
  },
  {
    k: "北", meaning: "north", cat: "Position & Size",
    on: ["ホク"], kun: ["きた"],
    tip: "<b>きた</b> alone (\"north\"). <b>ホク</b> in compounds — and it shrinks to <b>ホッ</b> in 北海道 (ほっかいどう).",
    words: [
      ["北", "きた", "north", "kun"],
      ["北口", "きたぐち", "north exit", "kun"],
      ["北海道", "ほっかいどう", "Hokkaidō", "on", "ほく → ほっ"],
      ["東北", "とうほく", "Tōhoku region", "on"],
    ],
    sentences: [
      ["[北海道|ほっかいどう]は[冬|ふゆ]がとても[寒|さむ]いです。", "Winter in Hokkaido is very cold."],
      ["[北口|きたぐち]から[出|で]てください。", "Please go out through the north exit."],
    ],
  },

  // ───────────── Adjectives ─────────────
  {
    k: "長", meaning: "long, leader", cat: "Adjectives",
    on: ["チョウ"], kun: ["なが-い"],
    tip: "With okurigana い → <b>ながい</b> (long). <b>チョウ</b> in compounds, especially job titles meaning \"head of\" (社長, 部長, 校長).",
    words: [
      ["長い", "ながい", "long", "kun"],
      ["長さ", "ながさ", "length", "kun"],
      ["社長", "しゃちょう", "company president", "on"],
      ["部長", "ぶちょう", "department head", "on"],
    ],
    sentences: [
      ["[彼女|かのじょ]は[髪|かみ]が[長|なが]いです。", "She has long hair."],
      ["[社長|しゃちょう]は[今|いま][会議|かいぎ][中|ちゅう]です。", "The president is in a meeting now."],
    ],
  },
  {
    k: "高", meaning: "tall, expensive", cat: "Adjectives",
    on: ["コウ"], kun: ["たか-い"],
    tip: "With okurigana い → <b>たかい</b> (tall / expensive). <b>コウ</b> in compounds (高校, 最高).",
    words: [
      ["高い", "たかい", "tall; expensive", "kun"],
      ["高校", "こうこう", "high school", "on"],
      ["高校生", "こうこうせい", "high-school student", "on"],
      ["最高", "さいこう", "the best", "on"],
    ],
    sentences: [
      ["この[時計|とけい]はとても[高|たか]いです。", "This watch is very expensive."],
      ["[弟|おとうと]は[高校生|こうこうせい]です。", "My younger brother is a high-school student."],
      ["[今日|きょう]は[最高|さいこう]の[日|ひ]でした。", "Today was the best day."],
    ],
  },
  {
    k: "安", meaning: "cheap, peaceful", cat: "Adjectives",
    on: ["アン"], kun: ["やす-い"],
    tip: "With okurigana い → <b>やすい</b> (cheap). <b>アン</b> in compounds about peace and safety (安心, 安全, 不安).",
    words: [
      ["安い", "やすい", "cheap", "kun"],
      ["安心", "あんしん", "relief, peace of mind", "on"],
      ["安全", "あんぜん", "safety", "on"],
      ["不安", "ふあん", "anxiety", "on"],
    ],
    sentences: [
      ["この[店|みせ]の[野菜|やさい]は[安|やす]いです。", "The vegetables in this shop are cheap."],
      ["それを[聞|き]いて[安心|あんしん]しました。", "I was relieved to hear that."],
    ],
  },
  {
    k: "新", meaning: "new", cat: "Adjectives",
    on: ["シン"], kun: ["あたら-しい"],
    tip: "With okurigana しい → <b>あたらしい</b>. <b>シン</b> in compounds (新聞, 新幹線, 新年).",
    words: [
      ["新しい", "あたらしい", "new", "kun"],
      ["新聞", "しんぶん", "newspaper", "on"],
      ["新幹線", "しんかんせん", "bullet train", "on"],
      ["新年", "しんねん", "New Year", "on"],
    ],
    sentences: [
      ["[新|あたら]しい[靴|くつ]を[買|か]いました。", "I bought new shoes."],
      ["[新幹線|しんかんせん]で[大阪|おおさか]へ[行|い]きます。", "I'll go to Osaka by bullet train."],
    ],
  },
  {
    k: "古", meaning: "old", cat: "Adjectives",
    on: ["コ"], kun: ["ふる-い"],
    tip: "With okurigana い → <b>ふるい</b> (old — for things, not people!). <b>コ</b> in compounds (中古, 古代).",
    words: [
      ["古い", "ふるい", "old (things)", "kun"],
      ["中古", "ちゅうこ", "second-hand", "on"],
      ["古本", "ふるほん", "second-hand book", "mixed", "古 (kun) + 本 (on)"],
    ],
    sentences: [
      ["この[建物|たてもの]はとても[古|ふる]いです。", "This building is very old."],
      ["[中古|ちゅうこ]の[車|くるま]を[買|か]いました。", "I bought a second-hand car."],
    ],
  },
  {
    k: "白", meaning: "white", cat: "Adjectives",
    on: ["ハク", "ビャク"], kun: ["しろ", "しろ-い"],
    tip: "<b>しろ</b> alone (the colour white) and <b>しろい</b> with okurigana. <b>ハク</b> in compounds (白紙). 面白い (おもしろい = interesting) uses the kun'yomi.",
    words: [
      ["白い", "しろい", "white", "kun"],
      ["白", "しろ", "white (colour)", "kun"],
      ["面白い", "おもしろい", "interesting, funny", "kun"],
      ["白紙", "はくし", "blank paper", "on"],
    ],
    sentences: [
      ["[白|しろ]いシャツを[着|き]ています。", "I'm wearing a white shirt."],
      ["この[映画|えいが]は[面白|おもしろ]いです。", "This movie is interesting."],
    ],
  },

  // ───────────── Verbs ─────────────
  {
    k: "出", meaning: "exit, go out", cat: "Verbs",
    on: ["シュツ", "スイ"], kun: ["で-る", "だ-す"],
    tip: "Okurigana decides: 出<u>る</u> = <b>でる</b> (go out), 出<u>す</u> = <b>だす</b> (take out / send). <b>シュツ</b> in compounds — often <b>シュッ</b> (出発 = しゅっぱつ).",
    words: [
      ["出る", "でる", "to go out, leave", "kun"],
      ["出す", "だす", "to take out; to send", "kun"],
      ["出口", "でぐち", "exit", "kun"],
      ["出発", "しゅっぱつ", "departure", "on", "しゅつ → しゅっ"],
    ],
    sentences: [
      ["[七時|しちじ]に[家|いえ]を[出|で]ます。", "I leave home at seven."],
      ["[郵便局|ゆうびんきょく]で[手紙|てがみ]を[出|だ]しました。", "I sent a letter at the post office."],
      ["バスは[十時|じゅうじ]に[出発|しゅっぱつ]します。", "The bus departs at ten."],
    ],
  },
  {
    k: "入", meaning: "enter, put in", cat: "Verbs",
    on: ["ニュウ"], kun: ["はい-る", "い-れる", "い-る"],
    tip: "Okurigana decides: 入<u>る</u> = <b>はいる</b> (enter), 入<u>れる</u> = <b>いれる</b> (put in). In 入口 it's <b>いり</b>. <b>ニュウ</b> in compounds (入学).",
    words: [
      ["入る", "はいる", "to enter", "kun"],
      ["入れる", "いれる", "to put in", "kun"],
      ["入口", "いりぐち", "entrance", "kun"],
      ["入学", "にゅうがく", "school admission", "on"],
    ],
    sentences: [
      ["どうぞ、[部屋|へや]に[入|はい]ってください。", "Please come into the room."],
      ["コーヒーに[砂糖|さとう]を[入|い]れます。", "I put sugar in my coffee."],
      ["[四月|しがつ]に[大学|だいがく]に[入学|にゅうがく]しました。", "I entered university in April."],
    ],
  },
  {
    k: "読", meaning: "read", cat: "Verbs",
    on: ["ドク", "トク"], kun: ["よ-む"],
    tip: "<b>よむ</b> with okurigana, and <b>よみ</b> in native nouns (読み方). <b>ドク</b> in compounds (読書).",
    words: [
      ["読む", "よむ", "to read", "kun"],
      ["読み方", "よみかた", "way of reading", "kun"],
      ["読書", "どくしょ", "reading (books)", "on"],
    ],
    sentences: [
      ["[毎晩|まいばん][本|ほん]を[読|よ]みます。", "I read a book every night."],
      ["[趣味|しゅみ]は[読書|どくしょ]です。", "My hobby is reading."],
      ["この[漢字|かんじ]の[読|よ]み[方|かた]を[教|おし]えてください。", "Please tell me how to read this kanji."],
    ],
  },
  {
    k: "書", meaning: "write", cat: "Verbs",
    on: ["ショ"], kun: ["か-く"],
    tip: "<b>かく</b> with okurigana. <b>ショ</b> in compounds — very often things to do with books (辞書, 図書館, 教科書).",
    words: [
      ["書く", "かく", "to write", "kun"],
      ["辞書", "じしょ", "dictionary", "on"],
      ["図書館", "としょかん", "library", "on"],
      ["教科書", "きょうかしょ", "textbook", "on"],
    ],
    sentences: [
      ["ここに[名前|なまえ]を[書|か]いてください。", "Please write your name here."],
      ["[図書館|としょかん]で[勉強|べんきょう]します。", "I study at the library."],
      ["[辞書|じしょ]で[言葉|ことば]を[調|しら]べました。", "I looked the word up in a dictionary."],
    ],
  },
  {
    k: "話", meaning: "talk, story", cat: "Verbs",
    on: ["ワ"], kun: ["はな-す", "はなし"],
    tip: "<b>はなす</b> with okurigana す (to speak). Alone, <b>はなし</b> = a talk / story. <b>ワ</b> in compounds (電話, 会話).",
    words: [
      ["話す", "はなす", "to speak", "kun"],
      ["話", "はなし", "talk, story", "kun"],
      ["電話", "でんわ", "telephone", "on"],
      ["会話", "かいわ", "conversation", "on"],
    ],
    sentences: [
      ["[先生|せんせい]と[話|はな]しました。", "I talked with the teacher."],
      ["[面白|おもしろ]い[話|はなし]を[聞|き]きました。", "I heard an interesting story."],
      ["[毎日|まいにち][会話|かいわ]の[練習|れんしゅう]をします。", "I practise conversation every day."],
    ],
  },
  {
    k: "聞", meaning: "hear, ask", cat: "Verbs",
    on: ["ブン", "モン"], kun: ["き-く", "き-こえる"],
    tip: "Okurigana decides: 聞<u>く</u> = <b>きく</b> (listen / ask), 聞<u>こえる</u> = <b>きこえる</b> (be audible). <b>ブン</b> in 新聞 (newspaper).",
    words: [
      ["聞く", "きく", "to listen; to ask", "kun"],
      ["聞こえる", "きこえる", "to be heard", "kun"],
      ["新聞", "しんぶん", "newspaper", "on"],
    ],
    sentences: [
      ["[音楽|おんがく]を[聞|き]くのが[好|す]きです。", "I like listening to music."],
      ["[鳥|とり]の[声|こえ]が[聞|き]こえます。", "I can hear birds singing."],
      ["[父|ちち]は[毎朝|まいあさ][新聞|しんぶん]を[読|よ]みます。", "My father reads the newspaper every morning."],
    ],
  },
  {
    k: "言", meaning: "say, word", cat: "Verbs",
    on: ["ゲン", "ゴン"], kun: ["い-う", "こと"],
    tip: "<b>いう</b> with okurigana う. <b>こと</b> in 言葉 (word). <b>ゲン</b> in compounds (方言), <b>ゴン</b> in a few (伝言).",
    words: [
      ["言う", "いう", "to say", "kun"],
      ["言葉", "ことば", "word, language", "kun"],
      ["方言", "ほうげん", "dialect", "on"],
      ["伝言", "でんごん", "message", "on"],
    ],
    sentences: [
      ["もう[一度|いちど][言|い]ってください。", "Please say it once more."],
      ["この[言葉|ことば]の[意味|いみ]は[何|なん]ですか。", "What does this word mean?"],
    ],
  },
  {
    k: "買", meaning: "buy", cat: "Verbs",
    on: ["バイ"], kun: ["か-う"],
    tip: "<b>かう</b> with okurigana (買う, 買い物). <b>バイ</b> only in compounds like 売買 (buying and selling).",
    words: [
      ["買う", "かう", "to buy", "kun"],
      ["買い物", "かいもの", "shopping", "kun"],
      ["売買", "ばいばい", "buying and selling", "on"],
    ],
    sentences: [
      ["[新|あたら]しい[服|ふく]を[買|か]いたいです。", "I want to buy new clothes."],
      ["[母|はは]と[買|か]い[物|もの]に[行|い]きました。", "I went shopping with my mother."],
    ],
  },
  {
    k: "休", meaning: "rest", cat: "Verbs",
    on: ["キュウ"], kun: ["やす-む"],
    tip: "<b>やすむ</b> with okurigana, and <b>やすみ</b> in native nouns (休み, 夏休み). <b>キュウ</b> in compounds (休日, 休憩).",
    words: [
      ["休む", "やすむ", "to rest; take a day off", "kun"],
      ["休み", "やすみ", "holiday, break", "kun"],
      ["夏休み", "なつやすみ", "summer vacation", "kun"],
      ["休日", "きゅうじつ", "day off", "on"],
    ],
    sentences: [
      ["[疲|つか]れたから[少|すこ]し[休|やす]みます。", "I'm tired, so I'll rest a little."],
      ["[夏休|なつやす]みに[海|うみ]へ[行|い]きました。", "I went to the beach during summer vacation."],
    ],
  },
  {
    k: "立", meaning: "stand", cat: "Verbs",
    on: ["リツ", "リュウ"], kun: ["た-つ", "た-てる"],
    tip: "Okurigana decides: 立<u>つ</u> = <b>たつ</b> (stand), 立<u>てる</u> = <b>たてる</b> (set up). <b>リツ</b> in compounds (国立, 私立).",
    words: [
      ["立つ", "たつ", "to stand", "kun"],
      ["立てる", "たてる", "to stand up, set up", "kun"],
      ["役に立つ", "やくにたつ", "to be useful", "kun"],
      ["国立", "こくりつ", "national (institution)", "on"],
    ],
    sentences: [
      ["[皆|みな]さん、[立|た]ってください。", "Everyone, please stand up."],
      ["この[辞書|じしょ]はとても[役|やく]に[立|た]ちます。", "This dictionary is very useful."],
      ["[国立|こくりつ][大学|だいがく]に[通|かよ]っています。", "I go to a national university."],
    ],
  },
  {
    k: "会", meaning: "meet, society", cat: "Verbs",
    on: ["カイ", "エ"], kun: ["あ-う"],
    tip: "<b>あう</b> with okurigana (to meet). <b>カイ</b> in most compounds (会社, 会議, 会話). <b>エ</b> in rare words (会釈).",
    words: [
      ["会う", "あう", "to meet", "kun"],
      ["会社", "かいしゃ", "company", "on"],
      ["会議", "かいぎ", "meeting", "on"],
      ["会釈", "えしゃく", "a slight bow", "on"],
    ],
    sentences: [
      ["[駅|えき]で[友達|ともだち]に[会|あ]いました。", "I met a friend at the station."],
      ["[父|ちち]は[会社|かいしゃ]で[働|はたら]いています。", "My father works at a company."],
    ],
  },

  // ───────────── Places ─────────────
  {
    k: "校", meaning: "school", cat: "Places",
    on: ["コウ"], kun: [],
    tip: "Only <b>コウ</b>. Watch the sound change in 学校 (がく + こう → がっこう).",
    words: [
      ["学校", "がっこう", "school", "on"],
      ["高校", "こうこう", "high school", "on"],
      ["校長", "こうちょう", "principal", "on"],
    ],
    sentences: [
      ["[学校|がっこう]は[八時半|はちじはん]に[始|はじ]まります。", "School starts at 8:30."],
      ["[校長|こうちょう][先生|せんせい]が[話|はな]しました。", "The principal gave a talk."],
    ],
  },
  {
    k: "店", meaning: "shop", cat: "Places",
    on: ["テン"], kun: ["みせ"],
    tip: "<b>みせ</b> alone (\"shop\"). <b>テン</b> in compounds (店員, 喫茶店, 書店).",
    words: [
      ["店", "みせ", "shop", "kun"],
      ["店員", "てんいん", "shop clerk", "on"],
      ["喫茶店", "きっさてん", "café", "on"],
      ["書店", "しょてん", "bookshop", "on"],
    ],
    sentences: [
      ["あの[店|みせ]のラーメンはおいしいです。", "The ramen at that shop is delicious."],
      ["[店員|てんいん]さんに[聞|き]いてみます。", "I'll ask the shop clerk."],
      ["[喫茶店|きっさてん]でコーヒーを[飲|の]みました。", "I had coffee at a café."],
    ],
  },
  {
    k: "駅", meaning: "station", cat: "Places",
    on: ["エキ"], kun: [],
    tip: "Only <b>エキ</b> — even alone (駅 = station), so it's another single kanji that uses on'yomi.",
    words: [
      ["駅", "えき", "station", "on", "Single kanji but on'yomi"],
      ["駅員", "えきいん", "station staff", "on"],
      ["駅前", "えきまえ", "in front of the station", "mixed", "駅 (on) + 前 (kun)"],
    ],
    sentences: [
      ["すみません、[駅|えき]はどこですか。", "Excuse me, where is the station?"],
      ["[駅前|えきまえ]に[大|おお]きい[本屋|ほんや]があります。", "There's a big bookstore in front of the station."],
    ],
  },
  {
    k: "道", meaning: "road, way", cat: "Places",
    on: ["ドウ", "トウ"], kun: ["みち"],
    tip: "<b>みち</b> alone (\"road\"). <b>ドウ</b> in compounds — including the \"ways\" of martial arts and crafts (柔道, 茶道) and 北海道.",
    words: [
      ["道", "みち", "road, way", "kun"],
      ["水道", "すいどう", "water supply", "on"],
      ["柔道", "じゅうどう", "judo", "on"],
      ["北海道", "ほっかいどう", "Hokkaidō", "on"],
    ],
    sentences: [
      ["この[道|みち]をまっすぐ[行|い]ってください。", "Please go straight along this road."],
      ["[弟|おとうと]は[柔道|じゅうどう]を[習|なら]っています。", "My younger brother is learning judo."],
    ],
  },
  {
    k: "社", meaning: "company, shrine", cat: "Places",
    on: ["シャ"], kun: ["やしろ"],
    tip: "<b>シャ</b> in compounds (会社, 社長). It becomes <b>ジャ</b> in 神社 (じんじゃ, shrine). The kun'yomi やしろ is rare.",
    words: [
      ["会社", "かいしゃ", "company", "on"],
      ["社長", "しゃちょう", "company president", "on"],
      ["神社", "じんじゃ", "Shinto shrine", "on", "しゃ → じゃ"],
    ],
    sentences: [
      ["[会社|かいしゃ]は[九時|くじ]からです。", "Work starts at nine."],
      ["お[正月|しょうがつ]に[神社|じんじゃ]へ[行|い]きます。", "I go to a shrine at New Year."],
    ],
  },

  // ───────────── Everyday ─────────────
  {
    k: "何", meaning: "what", cat: "Everyday",
    on: ["カ"], kun: ["なに", "なん"],
    tip: "<b>なに</b> by default (何を, 何か). It becomes <b>なん</b> before t/d/n sounds, before です, and with counters (何時, 何人, 何ですか).",
    words: [
      ["何", "なに", "what", "kun"],
      ["何か", "なにか", "something", "kun"],
      ["何時", "なんじ", "what time", "mixed", "何 (kun) + 時 (on)"],
      ["何人", "なんにん", "how many people", "mixed"],
    ],
    sentences: [
      ["これは[何|なん]ですか。", "What is this?"],
      ["[何|なに]を[食|た]べたいですか。", "What do you want to eat?"],
      ["[何人|なんにん]で[来|き]ましたか。", "How many of you came?"],
    ],
  },
);

/* ───── Extra example sentences for the original kanji ───── */
const EXTRA_SENTENCES = {
  "一": [["[一月|いちがつ]は[一年|いちねん]で[一番|いちばん][寒|さむ]いです。", "January is the coldest month of the year."]],
  "二": [["[二月|にがつ][二日|ふつか]は[私|わたし]の[誕生日|たんじょうび]です。", "February 2nd is my birthday."]],
  "三": [["[三人|さんにん]で[昼|ひる]ご[飯|はん]を[食|た]べました。", "The three of us ate lunch."]],
  "日": [["[日|ひ]が[暮|く]れるのが[早|はや]くなりました。", "The sun has started setting earlier."]],
  "月": [["[毎月|まいつき][一回|いっかい][映画|えいが]を[見|み]に[行|い]きます。", "I go to see a movie once a month."]],
  "火": [["[火|ひ]に[気|き]をつけてください。", "Please be careful with fire."]],
  "水": [["[水道|すいどう]の[水|みず]は[飲|の]めますか。", "Can you drink the tap water?"]],
  "木": [["[秋|あき]になって[木|こ]の[葉|は]が[赤|あか]くなりました。", "Autumn has come and the leaves have turned red."]],
  "金": [["[姉|あね]に[金|きん]のネックレスをもらいました。", "I got a gold necklace from my older sister."]],
  "土": [["[庭|にわ]の[土|つち]に[花|はな]を[植|う]えました。", "I planted flowers in the garden soil."]],
  "年": [["[年|とし]を[取|と]ると[朝|あさ][早|はや]く[起|お]きるようになります。", "As you get older, you start waking up early."]],
  "時": [["[時間|じかん]がありません。[急|いそ]いでください。", "There's no time. Please hurry."]],
  "人": [["この[店|みせ]はとても[人気|にんき]があります。", "This shop is very popular."]],
  "子": [["[女子|じょし]トイレはあちらです。", "The women's restroom is over there."]],
  "女": [["[女性|じょせい]の[先生|せんせい]が[来|き]ました。", "A female teacher came."]],
  "男": [["[会議|かいぎ]には[男性|だんせい]が[三人|さんにん]いました。", "There were three men at the meeting."]],
  "先": [["どうぞ、[先|さき]に[行|い]ってください。", "Please go ahead."]],
  "生": [["[生|なま]の[魚|さかな]は[好|す]きですか。", "Do you like raw fish?"]],
  "名": [["ここに[名字|みょうじ]を[書|か]いてください。", "Please write your family name here."]],
  "山": [["[山道|やまみち]を[二時間|にじかん][歩|ある]きました。", "I walked along a mountain path for two hours."]],
  "川": [["[小川|おがわ]で[魚|さかな]を[釣|つ]りました。", "I caught fish in a stream."]],
  "雨": [["[大雨|おおあめ]で[電車|でんしゃ]が[止|と]まりました。", "The trains stopped because of the heavy rain."]],
  "気": [["[彼|かれ]は[人気|にんき]がある[歌手|かしゅ]です。", "He is a popular singer."]],
  "大": [["[家族|かぞく]はとても[大切|たいせつ]です。", "Family is very important."]],
  "小": [["[朝|あさ]、[小鳥|ことり]が[鳴|な]いています。", "Little birds are singing in the morning."]],
  "中": [["この[歌|うた]は[世界中|せかいじゅう]で[有名|ゆうめい]です。", "This song is famous all over the world."]],
  "上": [["[階段|かいだん]を[上|のぼ]ってください。", "Please go up the stairs."]],
  "下": [["[歌|うた]は[下手|へた]ですが、[好|す]きです。", "I'm bad at singing, but I like it."]],
  "行": [["[京都|きょうと]への[旅行|りょこう]は[楽|たの]しかったです。", "The trip to Kyoto was fun."]],
  "来": [["[来年|らいねん]また[来|き]てください。", "Please come again next year."]],
  "食": [["[日本|にほん]の[食|た]べ[物|もの]が[大好|だいす]きです。", "I love Japanese food."]],
  "見": [["[春|はる]になったら[花見|はなみ]をしましょう。", "Let's go cherry-blossom viewing when spring comes."]],
  "学": [["[姉|あね]は[大学|だいがく]で[経済|けいざい]を[勉強|べんきょう]しています。", "My older sister studies economics at university."]],
  "本": [["[山本|やまもと]さんは[本屋|ほんや]で[働|はたら]いています。", "Mr. Yamamoto works at a bookstore."]],
  "電": [["[寝|ね]る[前|まえ]に[電気|でんき]を[消|け]してください。", "Please turn off the light before going to bed."]],
  "車": [["[車|くるま]で[空港|くうこう]まで[送|おく]ります。", "I'll drive you to the airport."]],
  "国": [["[中国|ちゅうごく]は[大|おお]きい[国|くに]です。", "China is a big country."]],
  "語": [["[日本語|にほんご]の[勉強|べんきょう]は[楽|たの]しいです。", "Studying Japanese is fun."]],
};
KANJI.forEach((k) => { if (EXTRA_SENTENCES[k.k]) k.sentences.push(...EXTRA_SENTENCES[k.k]); });

/* ───── Keep kanji grouped by category (stable sort) ───── */
(() => {
  const ORDER = ["Numbers", "Days & Time", "People", "Body", "Nature", "Position & Size", "Adjectives", "Verbs", "Places", "Everyday"];
  const rank = (c) => (ORDER.includes(c) ? ORDER.indexOf(c) : ORDER.length);
  const sorted = KANJI.map((k, i) => [k, i]).sort((a, b) => rank(a[0].cat) - rank(b[0].cat) || a[1] - b[1]).map((x) => x[0]);
  KANJI.splice(0, KANJI.length, ...sorted);
})();
