/* i18n.js — every visible string of the home page, per language.
   The page language comes from the URL path: /en/… → en, /ja/… → ja, anything else → he.
   Each page pairs its language with one companion language, as the Hebrew original pairs
   Hebrew with English: he + en, en + he (the Hebrew original), ja + en.
   `sec` is that companion. Keep the three objects' keys identical.
   Hebrew letters, names and words that are the object of study (י-ה-ו-ה, אלהים, ו …) stay
   Hebrew in every language. Japanese strings are DRAFTS awaiting native review. */
(function () {
  'use strict';
  var m = /^\/(en|ja)(\/|$)/.exec(location.pathname);
  var LANG = m ? m[1] : 'he';

  var I18N = {
    he: {
      sec: 'en',
      home: '/', privacy: '/privacy/',
      langLabel: 'שפה',
      nav: [
        { id: 'findings', a: 'הממצאים', b: 'Findings', active: true },
        { id: 'explore',  a: 'חקור',    b: 'Explore' },
        { id: 'about',    a: 'אודות',   b: 'About' },
      ],
      hero: { sub: 'Revealing the mathematical structures hidden in the Masoretic text', subLang: 'en',
              ctaA: 'התחל לחקור', ctaB: 'Begin exploring' },
      mission: { eyebrow: 'הצהרת המחקר', latin: 'RESEARCH STATEMENT',
        a: 'האותיות העבריות גונזות את הסוד להבנת היקום, דרכן נוצרת המציאות, ואת המתמטיקה מאחורי האותיות אנחנו מחפשים — במחקר ראשון מסוגו בעולם.',
        b: 'The Hebrew letters hold the cipher to understanding the universe — through them reality is formed. The mathematics behind the letters is what this research, the first of its kind in the world, sets out to find.' },
      findings: {
        eyebrow: 'ממצאים', latin: 'FINDINGS',
        title: 'שלושה ממצאים. בלתי תלויים. נמצאו בטקסט המסורתי.',
        sub: 'Three findings. Independently discovered. Embedded in the Masoretic text.',
        cta: 'ראה את הממצא ←',
        allA: 'צפה בכל הממצאים', allB: 'View all findings',
        cards: [
          { eyebrow: 'ממצא ראשון', latin: 'FINDING ONE', a: "שם ה' בשלושה צבעים", b: 'YHVH appears spontaneously in three colors',
            body: "כאשר אותיות הטקסט מסומנות לפי הערך הגימטרי שלהן בשלושה צבעים — 5, 6, ו-10 — אותיות שם ה' (י-ה-ו-ה) צצות לאורך הטקסט באופן ספונטני, ללא כל התערבות." },
          { eyebrow: 'ממצא שני', latin: 'FINDING TWO', a: 'קונסטלציית הוא"ו', b: 'The Vav constellation in Genesis 1',
            body: 'האות ו מופיעה 177 פעמים בבראשית פרק א, מהווה את עמוד השדרה המבני של סיפור הבריאה. דפוס המופעים שלה יוצר תבנית גיאומטרית הניתנת למיפוי.',
            caption: '177 vavs · Genesis 1' },
          { eyebrow: 'ממצא שלישי', latin: 'FINDING THREE', a: 'אלהים מכיל יהלום', b: 'Elohim contains Yahalom (diamond)',
            body: "האותיות א-ל-ה-י-ם מכילות בתוכן את האותיות י-ה-ל-ם, המרכיבות את המילה 'יהלום'. הקשר אינו דקדוקי אלא מבני — הוא טמון בתוך השם עצמו.",
            caption: 'the word lives inside the name' },
        ],
      },
      vision: {
        a: { eyebrow: 'חזון · VISION', title: 'TsofenOr איננה תיאוריה. היא תשתית.', paras: [
          'הממצאים האלו אינם המסע — הם נקודת ההתחלה. TsofenOr בונה את הכלים שבאמצעותם חוקרים, מקובלים ומתמטיקאים יכולים לחקור את הטקסט המסורתי לעומק חסר תקדים.',
          'כל ממצא ניתן לאימות. כל מתודולוגיה גלויה. כל קוד פתוח. התשתית בנויה כך שכל אדם — דתי, חילוני, חוקר או סקרן — יוכל להגיע למסקנות משלו.',
          'אנו לא מבקשים שתאמין. אנו מציעים שתבדוק.'] },
        b: { eyebrow: 'VISION · חזון', title: 'TsofenOr is not a theory. It is infrastructure.', paras: [
          'These findings are not the journey — they are the starting point. TsofenOr builds the tools through which researchers, kabbalists, and mathematicians can investigate the Masoretic text at a depth previously unreachable.',
          'Every finding is verifiable. Every methodology is visible. Every line of code is open. The infrastructure is built so that any person — religious, secular, researcher, or curious — can reach their own conclusions.',
          'We do not ask you to believe. We invite you to check.'] },
        arch: [['צוות מחקר', 'Research Team'], ['מקובלים וחוקרים', 'Kabbalists & Scholars'], ['מתמטיקאים', 'Mathematicians'], ['ציבור', 'Public']],
        creditA: 'שלושת הממצאים הראשונים נחקרו בשיתוף הרב דניאל פוא.',
        creditB: 'The first three findings were researched in partnership with Rabbi Daniel Pua.',
      },
      involved: {
        eyebrow: 'השתתפות', latin: 'GET INVOLVED',
        title: 'אם הממצאים מסקרנים אותך, יש דרכים להעמיק.',
        sub: 'If the findings move you, there are ways to go deeper.',
        items: [
          { num: '01 / READ', a: 'קרא את המתודולוגיה המלאה', b: 'Read the full methodology', btnA: 'פתח את התיעוד', btnB: 'Open documentation' },
          { num: '02 / EXPLORE', a: 'חקור את הטקסט בעצמך עם הכלים שלנו', b: 'Explore the text yourself with our tools', btnA: 'פתח את הנגן', btnB: 'Open the player' },
          { num: '03 / CONTRIBUTE', a: 'אם אתה חוקר, מקובל או מתמטיקאי — צור קשר', b: "If you're a researcher, kabbalist, or mathematician — get in touch", btnA: 'צור קשר', btnB: 'Contact', href: '#follow' },
        ],
      },
      follow: {
        eyebrow: 'עדכונים', latin: 'FOLLOW THE RESEARCH',
        title: 'עקבו אחרי המחקר',
        a: 'השאירו אימייל ונעדכן אתכם בכל פעם שממצא חדש מתפרסם. חוקרים, מקובלים ומתמטיקאים מוזמנים לכתוב לנו גם הודעה.',
        b: 'Leave your email and we will write when a new finding is published.',
        email: 'אימייל', emailB: 'Email',
        name: 'שם', message: 'הודעה לחוקרים', optional: '(לא חובה)',
        consent: ['קראתי ואני מסכים/ה ל', 'מדיניות הפרטיות', ''],
        submit: 'הרשמה לעדכונים',
        doneA: 'תודה! נעדכן אתכם כשממצא חדש יתפרסם.', doneB: 'Thank you, we will be in touch.',
        error: 'השליחה לא הצליחה. נסו שוב בעוד רגע, או כתבו אל', errorEnd: '.',
      },
      footer: {
        cols: [['מפת אתר', 'Site Map'], ['הפרויקט', 'Project'], ['קוד פתוח', 'Open Source']],
        links: ['הממצאים · Findings', 'חקור · Explore', 'אודות · About'],
        project: [
          { lang: 'en', t: 'TsofenOr is an open Torah research platform investigating mathematical structures in the Masoretic text.' },
          { lang: 'he', t: 'TsofenOr הוא פלטפורמת מחקר תורנית פתוחה החוקרת מבנים מתמטיים בטקסט המסורתי.' },
        ],
        open: [{ lang: 'en', t: 'All findings, methodology, and source code are openly available for verification, replication, and extension.' }],
        repo: 'GitHub Repository →', docs: 'Methodology Documentation →',
        privacy: 'מדיניות פרטיות',
        initiative: "Part of the Brain of Eliyahu research initiative · חלק מיוזמת המחקר 'מוח אליהו'",
      },
    },

    en: {
      sec: 'he',
      home: '/en/', privacy: '/en/privacy/',
      langLabel: 'Language',
      nav: [
        { id: 'findings', a: 'Findings', b: 'הממצאים', active: true },
        { id: 'explore',  a: 'Explore',  b: 'חקור' },
        { id: 'about',    a: 'About',    b: 'אודות' },
      ],
      hero: { sub: 'Revealing the mathematical structures hidden in the Masoretic text', subLang: 'en',
              ctaA: 'Begin exploring', ctaB: 'התחל לחקור' },
      mission: { eyebrow: 'הצהרת המחקר', latin: 'RESEARCH STATEMENT',
        a: 'The Hebrew letters hold the cipher to understanding the universe — through them reality is formed. The mathematics behind the letters is what this research, the first of its kind in the world, sets out to find.',
        b: 'האותיות העבריות גונזות את הסוד להבנת היקום, דרכן נוצרת המציאות, ואת המתמטיקה מאחורי האותיות אנחנו מחפשים — במחקר ראשון מסוגו בעולם.' },
      findings: {
        eyebrow: 'ממצאים', latin: 'FINDINGS',
        title: 'Three findings. Independently discovered. Embedded in the Masoretic text.',
        sub: 'שלושה ממצאים. בלתי תלויים. נמצאו בטקסט המסורתי.',
        cta: 'See the finding →',
        allA: 'View all findings', allB: 'צפה בכל הממצאים',
        cards: [
          { eyebrow: 'ממצא ראשון', latin: 'FINDING ONE', a: 'YHVH appears spontaneously in three colors', b: "שם ה' בשלושה צבעים",
            body: 'When the letters of the text are marked by their gematria value in three colors — 5, 6 and 10 — the letters of the Divine Name (י-ה-ו-ה) surface spontaneously throughout the text, without any intervention.' },
          { eyebrow: 'ממצא שני', latin: 'FINDING TWO', a: 'The Vav constellation in Genesis 1', b: 'קונסטלציית הוא"ו',
            body: 'The letter ו appears 177 times in Genesis chapter 1 and forms the structural backbone of the creation story. The pattern of its occurrences makes a geometric figure that can be mapped.',
            caption: '177 vavs · Genesis 1' },
          { eyebrow: 'ממצא שלישי', latin: 'FINDING THREE', a: 'Elohim contains Yahalom (diamond)', b: 'אלהים מכיל יהלום',
            body: "The letters א-ל-ה-י-ם hold within them the letters י-ה-ל-ם, which spell the word 'יהלום' (yahalom, diamond). The link is not grammatical but structural — it lies within the Name itself.",
            caption: 'the word lives inside the name' },
        ],
      },
      vision: {
        a: { eyebrow: 'VISION · חזון', title: 'TsofenOr is not a theory. It is infrastructure.', paras: [
          'These findings are not the journey — they are the starting point. TsofenOr builds the tools through which researchers, kabbalists, and mathematicians can investigate the Masoretic text at a depth previously unreachable.',
          'Every finding is verifiable. Every methodology is visible. Every line of code is open. The infrastructure is built so that any person — religious, secular, researcher, or curious — can reach their own conclusions.',
          'We do not ask you to believe. We invite you to check.'] },
        b: { eyebrow: 'חזון · VISION', title: 'TsofenOr איננה תיאוריה. היא תשתית.', paras: [
          'הממצאים האלו אינם המסע — הם נקודת ההתחלה. TsofenOr בונה את הכלים שבאמצעותם חוקרים, מקובלים ומתמטיקאים יכולים לחקור את הטקסט המסורתי לעומק חסר תקדים.',
          'כל ממצא ניתן לאימות. כל מתודולוגיה גלויה. כל קוד פתוח. התשתית בנויה כך שכל אדם — דתי, חילוני, חוקר או סקרן — יוכל להגיע למסקנות משלו.',
          'אנו לא מבקשים שתאמין. אנו מציעים שתבדוק.'] },
        arch: [['Research Team', 'צוות מחקר'], ['Kabbalists & Scholars', 'מקובלים וחוקרים'], ['Mathematicians', 'מתמטיקאים'], ['Public', 'ציבור']],
        creditA: 'The first three findings were researched in partnership with Rabbi Daniel Pua.',
        creditB: 'שלושת הממצאים הראשונים נחקרו בשיתוף הרב דניאל פוא.',
      },
      involved: {
        eyebrow: 'השתתפות', latin: 'GET INVOLVED',
        title: 'If the findings move you, there are ways to go deeper.',
        sub: 'אם הממצאים מסקרנים אותך, יש דרכים להעמיק.',
        items: [
          { num: '01 / READ', a: 'Read the full methodology', b: 'קרא את המתודולוגיה המלאה', btnA: 'Open documentation', btnB: 'פתח את התיעוד' },
          { num: '02 / EXPLORE', a: 'Explore the text yourself with our tools', b: 'חקור את הטקסט בעצמך עם הכלים שלנו', btnA: 'Open the player', btnB: 'פתח את הנגן' },
          { num: '03 / CONTRIBUTE', a: "If you're a researcher, kabbalist, or mathematician — get in touch", b: 'אם אתה חוקר, מקובל או מתמטיקאי — צור קשר', btnA: 'Contact', btnB: 'צור קשר', href: '#follow' },
        ],
      },
      follow: {
        eyebrow: 'עדכונים', latin: 'FOLLOW THE RESEARCH',
        title: 'Follow the research',
        a: 'Leave your email and we will let you know each time a new finding is published. Researchers, kabbalists and mathematicians are welcome to write us a message too.',
        b: 'השאירו אימייל ונעדכן אתכם בכל פעם שממצא חדש מתפרסם.',
        email: 'Email', emailB: 'אימייל',
        name: 'Name', message: 'Message to the researchers', optional: '(optional)',
        consent: ['I have read and agree to the ', 'privacy policy', ''],
        submit: 'Sign up for updates',
        doneA: 'Thank you! We will let you know when a new finding is published.', doneB: 'תודה! נעדכן אתכם.',
        error: 'Sending failed. Please try again in a moment, or write to', errorEnd: '.',
      },
      footer: {
        cols: [['Site Map', 'מפת אתר'], ['Project', 'הפרויקט'], ['Open Source', 'קוד פתוח']],
        links: ['Findings · הממצאים', 'Explore · חקור', 'About · אודות'],
        project: [
          { lang: 'en', t: 'TsofenOr is an open Torah research platform investigating mathematical structures in the Masoretic text.' },
          { lang: 'he', t: 'TsofenOr הוא פלטפורמת מחקר תורנית פתוחה החוקרת מבנים מתמטיים בטקסט המסורתי.' },
        ],
        open: [{ lang: 'en', t: 'All findings, methodology, and source code are openly available for verification, replication, and extension.' }],
        repo: 'GitHub Repository →', docs: 'Methodology Documentation →',
        privacy: 'Privacy policy',
        initiative: "Part of the Brain of Eliyahu research initiative · חלק מיוזמת המחקר 'מוח אליהו'",
      },
    },

    ja: {
      sec: 'en',
      home: '/ja/', privacy: '/ja/privacy/',
      langLabel: '言語',
      nav: [
        { id: 'findings', a: '発見', b: 'Findings', active: true },
        { id: 'explore',  a: '探究', b: 'Explore' },
        { id: 'about',    a: '概要', b: 'About' },
      ],
      hero: { sub: 'マソラ本文に秘められた数学的構造を明らかにする', subLang: 'ja',
              ctaA: '探究を始める', ctaB: 'Begin exploring' },
      mission: { eyebrow: '研究声明', latin: 'RESEARCH STATEMENT',
        a: 'ヘブライ文字は、宇宙を理解するための暗号を秘めている。現実はその文字を通して形づくられる。文字の背後にある数学を探し出すこと——それが、世界で初めての試みとなるこの研究の目的である。',
        b: 'The Hebrew letters hold the cipher to understanding the universe — through them reality is formed. The mathematics behind the letters is what this research, the first of its kind in the world, sets out to find.' },
      findings: {
        eyebrow: '発見', latin: 'FINDINGS',
        title: '三つの発見。それぞれ独立して。マソラ本文の中から。',
        sub: 'Three findings. Independently discovered. Embedded in the Masoretic text.',
        cta: '発見を見る →',
        allA: 'すべての発見を見る', allB: 'View all findings',
        cards: [
          { eyebrow: '第一の発見', latin: 'FINDING ONE', a: '三色で現れる神名', b: 'YHVH appears spontaneously in three colors',
            body: '本文の文字をゲマトリア値に従って三色——5、6、10——で塗り分けると、神名の文字（י-ה-ו-ה）が、いかなる操作も加えることなく、本文のいたるところに自然と浮かび上がる。' },
          { eyebrow: '第二の発見', latin: 'FINDING TWO', a: '創世記1章のヴァヴの星座', b: 'The Vav constellation in Genesis 1',
            body: '文字 ו は創世記1章に177回現れ、天地創造の物語の構造上の背骨をなしている。その出現のパターンは、図として写し取ることのできる幾何学的な形を描く。',
            caption: 'ヴァヴ177個 · 創世記1章' },
          { eyebrow: '第三の発見', latin: 'FINDING THREE', a: 'エロヒムはヤハロム（ダイヤモンド）を含む', b: 'Elohim contains Yahalom (diamond)',
            body: 'א-ל-ה-י-ם の文字は、その内に י-ה-ל-ם の文字を含んでいる。これは「יהלום」（ヤハロム＝ダイヤモンド）という語を綴る文字である。この結びつきは文法上のものではなく構造上のもので、御名そのものの内に潜んでいる。',
            caption: 'その語は御名の内に宿る' },
        ],
      },
      vision: {
        a: { eyebrow: 'ビジョン · VISION', title: 'TsofenOrは理論ではない。基盤である。', paras: [
          'これらの発見は旅そのものではなく、その出発点である。TsofenOrは、研究者、カバリスト、数学者が、これまで届かなかった深さでマソラ本文を探究するための道具をつくっている。',
          'すべての発見は検証できる。すべての方法論は公開されている。すべてのコードはオープンである。この基盤は、信仰を持つ人も持たない人も、研究者も好奇心を抱く人も、誰もが自分自身の結論にたどり着けるようにつくられている。',
          '信じることは求めない。確かめることを勧める。'] },
        b: { eyebrow: 'VISION', title: 'TsofenOr is not a theory. It is infrastructure.', paras: [
          'These findings are not the journey — they are the starting point. TsofenOr builds the tools through which researchers, kabbalists, and mathematicians can investigate the Masoretic text at a depth previously unreachable.',
          'Every finding is verifiable. Every methodology is visible. Every line of code is open. The infrastructure is built so that any person — religious, secular, researcher, or curious — can reach their own conclusions.',
          'We do not ask you to believe. We invite you to check.'] },
        arch: [['研究チーム', 'Research Team'], ['カバリストと研究者', 'Kabbalists & Scholars'], ['数学者', 'Mathematicians'], ['一般の人々', 'Public']],
        creditA: '最初の三つの発見は、ラビ・ダニエル・プアとの共同研究によるものである。',
        creditB: 'The first three findings were researched in partnership with Rabbi Daniel Pua.',
      },
      involved: {
        eyebrow: '参加', latin: 'GET INVOLVED',
        title: '発見に心を動かされたなら、さらに深める道がある。',
        sub: 'If the findings move you, there are ways to go deeper.',
        items: [
          { num: '01 / READ', a: '方法論の全文を読む', b: 'Read the full methodology', btnA: 'ドキュメントを開く', btnB: 'Open documentation' },
          { num: '02 / EXPLORE', a: '私たちのツールで、本文を自ら探究する', b: 'Explore the text yourself with our tools', btnA: 'プレーヤーを開く', btnB: 'Open the player' },
          { num: '03 / CONTRIBUTE', a: '研究者、カバリスト、数学者の方は、ご連絡ください', b: "If you're a researcher, kabbalist, or mathematician — get in touch", btnA: 'お問い合わせ', btnB: 'Contact', href: '#follow' },
        ],
      },
      follow: {
        eyebrow: '最新情報', latin: 'FOLLOW THE RESEARCH',
        title: '研究をフォローする',
        a: 'メールアドレスを残していただければ、新しい発見が公開されるたびにお知らせします。研究者、カバリスト、数学者の方は、メッセージもお寄せください。',
        b: 'Leave your email and we will write when a new finding is published.',
        email: 'メールアドレス', emailB: 'Email',
        name: 'お名前', message: '研究者へのメッセージ', optional: '（任意）',
        consent: ['', 'プライバシーポリシー', 'を読み、同意します'],
        submit: '最新情報を受け取る',
        doneA: 'ありがとうございます。新しい発見が公開されたらお知らせします。', doneB: 'Thank you, we will be in touch.',
        error: '送信できませんでした。少し時間をおいて再度お試しいただくか、次のアドレスまでご連絡ください：', errorEnd: '',
      },
      footer: {
        cols: [['サイトマップ', 'Site Map'], ['プロジェクト', 'Project'], ['オープンソース', 'Open Source']],
        links: ['発見 · Findings', '探究 · Explore', '概要 · About'],
        project: [
          { lang: 'ja', t: 'TsofenOrは、マソラ本文に潜む数学的構造を探究する、オープンなトーラー研究プラットフォームです。' },
          { lang: 'en', t: 'TsofenOr is an open Torah research platform investigating mathematical structures in the Masoretic text.' },
        ],
        open: [{ lang: 'ja', t: 'すべての発見、方法論、ソースコードは公開されており、誰でも検証・再現・発展させることができます。' }],
        repo: 'GitHub リポジトリ →', docs: '方法論ドキュメント →',
        privacy: 'プライバシーポリシー',
        initiative: '研究イニシアティブ「Brain of Eliyahu」の一部 · Part of the Brain of Eliyahu research initiative',
      },
    },
  };

  window.TS_LANG = LANG;
  window.TS_LANGS = [
    { code: 'he', label: 'עב', name: 'עברית', path: '/' },
    { code: 'en', label: 'EN', name: 'English', path: '/en/' },
    { code: 'ja', label: '日本語', name: '日本語', path: '/ja/' },
  ];
  window.T = I18N[LANG];
  window.tsDir = function (l) { return l === 'he' ? 'rtl' : 'ltr'; };
})();
