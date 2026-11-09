
/* =========================================================
   AMMEEEE'S BIRTHDAY WEBSITE
   Complete interactive script
   ========================================================= */

const CONTENT = {
  assets: [
    "IMG-20250608-WA0060.jpg",
    "IMG-20250608-WA0061.jpg",
    "IMG-20250703-WA0051.jpg",
    "IMG-20251008-WA0154.jpg",
    "IMG-20251008-WA0159.jpg",
    "IMG-20260122-WA0068.jpg",
    "IMG-20260126-WA0067.jpg",
    "IMG-20260313-WA0068.jpg",
    "IMG-20260313-WA0069.jpg",
    "IMG-20260421-WA0010.jpg",
    "IMG-20260421-WA0014.jpg",
    "IMG-20260421-WA0072.jpg",
    "IMG-20260421-WA0073.jpg",
    "IMG-20260421-WA0074.jpg",
    "IMG-20260421-WA0077.jpg",
    "IMG-20260421-WA0079.jpg",
    "IMG-20260421-WA0081.jpg",
    "IMG-20260421-WA0089.jpg",
    "IMG-20260505-WA0027.jpg",
    "IMG-20260505-WA0039.jpg",
    "IMG-20261026-WA0073.jpg",
    "IMG-20261026-WA0084.jpg",
    "IMG-20261026-WA0085.jpg",
    "IMG-20261026-WA0088.jpg",
    "IMG-20261026-WA0089.jpg",

    ...[60,61,62,63,64,65,66,67,68,69,70,71,72,74,75,80,81,82,83,84,85,88,90,91,92,94,95,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116]
      .map(n => `IMG-20261107-WA${String(n).padStart(4,"0")}.jpg`),

    ...Array.from({length:66}, (_,i) =>
      `IMG-20261108-WA${String(i+34).padStart(4,"0")}.jpg`
    ),

    "IMG-20261108-WA0130.jpg",
    "IMG-20261108-WA0139.jpg",
    "IMG-20261108-WA0140.jpg",
    "IMG-20261109-WA0007.jpg",
    "IMG_20260122_224543.jpg",
    "IMG_20260123_214300.jpg",
    "IMG_20260124_143837.jpg",
    "IMG_20260124_222218.jpg",
    "IMG_20260124_222225.jpg",
    "IMG_20260124_222228.jpg",
    "IMG_20260412_103330.jpg",
    "IMG_20260430_120720.jpg",
    "IMG_20260501_150013.jpg",
    "IMG_20260502_213107.jpg",
    "IMG_20261017_073322.jpg",
    "IMG_20261017_073334.jpg",
    "IMG_20261017_073335.jpg",
    "IMG_20261025_114803.jpg",
    "IMG_20261107_220432_920.webp",
    "WA_1777631648264.jpeg"
  ],

  reflection: `Ammeee🥰 ... This is one of the first Vachanams😇 you taught me.... Innu ammakk vendi njn vachanam nookiyapo, othiri vachanams manasikoode kadann poyi🫠🫠... Bt enne strike cheythe itha... 🫣
Ennu vecha ammayude jeevithathil othiri prashnangalum😧 othiri prathisandhikalum🤧😭 ellam undayittundu. Pakshe anneram Eesho✨ ammayude koode undayirunn👼🏻👼🏻... Eesho✨ ammayude koode undayirunnu ennathilum upari amma orikkalum Eeshoyude kai vittittilla.🫴🏻🫳🏻 Like cheriya😕 prathisandhikal onnum alla, cheruppam thottu neritthe👧🏻. Valiya valiya😨🫨 prathisandhikalum prayaasangalum ellam amma nerittittum amma Eeshoyude✨ kai pidichittundayirunnu🫴🏻🫳🏻. Kaaranam ammaykku ariyamaayirunnu Eesho✨ ammaykku aavashyamullathu aavashya samayath tharumennu🕰️💸🥭❤️.
Ippo ammayude mol👧🏻 aaya enne, appane okke👨‍🍼, even ammayude youth makkale👧🏻👦🏻👩🏼‍🦰🧑🏻‍🦱👩🏻‍🦱 polum, ethrayum valiya prathisandhi aanenkilum amma parayunna oru kaaryamaanu, "Eesho koodeyille? Eesho shariyaakkikkolum"🫶🏻🫶🏻🫶🏻 ennu.

I mean, ammaykku aa oru bodhyam😌 undu.
Ennu vechaal, ippo ee oru vachanam Philippians 4:19, "Ente Daivam thante mahathwathinte sampannathayil ninnu Yeshu Kristhuviloode enikku aavashyamullathellaam tharum."👼🏻

Ee oru vachanam oraalude jeevithavumaayi bandhippichu parayuvaanenkil, njan ammayude🤩🤩🤩 life-ne aanu parayathullu.❤️

Because, you know, my amma🥰 knows that ammaykku vendathellaam Eesho tharumennu🔥❤️‍🔥. And because of that, she is never anxious about her life.❤️‍🔥

Annu aa medi city🏥 vecha doctor🧑‍⚕️ 🥼 🩺 paranju, "Tension aayirikkum chechikku.😷 Kontha okke pidichitondalo tension aayirikkumennu" 🤣 🤣🤣

Anneram manassil vanna kaaryam, kontha ullathukondaanu amma tension illaand jeevikkunnathu ennanu.😉😉
Aa oru vachanathinte base-il amma ee tension illaand dhairyamaayittu nilkkunnathu.😀😀😀

So, at the end of the day, ee vachanam realistic aayittu oraalude life-il kaanichu tharunnath aarennu chodichaal, njan ammayude life-ne aanu parayullu.❤️

Because amma ee vachanathil athrayum adiyurachu vishwasikkunna oraalanu.🫶🏻❤️

So, ee vachanam njan ammaykkaayittu dedicate cheyyunnu.
Ummaaa😘😘`,

  diaLetter: `Ammeee... Happiest birthday ammeee😭😭❤️❤️ipo enna prynm enn polum i dont knoww🫣bt enik ammene othiri ishtavaa😘...
Ende lyfil kittiya ettavum valya blessing aanu ende ammaa🫶🏻... Ithrem understanding and caring aaya orale njn jeevithathil kandit illa ammee... Forever njn eesokk nanni prym... Ammene enik thannathil😭😭❤️
Ammeee... Pandokke njn orkkuvayirunn ammene pole aakaruth enn...vere onnm kondalla ammee bt amma othiri nalle aa😭😭and ammede ee nanma ellarum use cheyune njn kaanunee aann... Krym kaanan vendi ammede aduth nikkunnavarum ammede caring okke muthaledukkunnavarum last oru ithum illand ororutharum ammene hurt cheyth ittitt pokune njn kaanune aa ammee... So njn pand orkkuvayirun ammenepole aakall enn... But vann vann... Ammede same aayi😂😂😂amma engane aano, athpole thanne aayi njanum.... Bt im happyy... Ammeee... Amma sherikkum oru sambhavam aattoo😌
Amma oru killadi thanne😂🔥amma bhayankara variety aan... I don't know enna prynm enn bt...
Othiri nanni ond ammee... For everything... Ellm pryn thodngiyal ammakk ariyalo theerulla😂athpoleya enik ammaa... Enne ithrem snehikunneyum care cheyunnayum vere aarelum ondoo ammee🙂enne maathram alla...mothathil enthore kryngla amma cheyune... Adhoc...6 groups... Athinde idakk veetil kryngl.... Kuttamma... Kozhamachy.... Service team.... Sushrushakal... Everything... Again... Amma oru sambhavam attooo... Ithellam pottee.... You raised a daughter ammeee.... Ivide vannitt oro pillerdem life kaanumbo njn orkum annu amma enne proper aayi valarthiyekond aanalo njn ithrem miduki aayit jeevikune ennn.... Nannii ond ammeee.... Ellathinum😭😭othiri nanni eeshoye... Enik ammene thannathil😭😭❤️`,

  // Annlitta's letter is intentionally shown under Gamu.
  Ann: `എന്റെ chechii..🫂

പറയാൻ തുടങ്ങിയാൽ ഒരുപാടു ഉണ്ട്..🫣അതുകൊണ്ട് short ആക്കി പറയാം..😉 ഈശോയോട് ഞാൻ എന്നും നന്ദി പറയാറുണ്ട്🥹 എനിക്ക് ഇങ്ങനെ ഒരു ചേച്ചിയെ തന്നതിന്...😍 ഞാൻ എങ്ങനെയാ ഇത്രയും ചേച്ചിയോട് അടുത്തതെന്ന്🥰എനിക്ക് ഇപ്പോഴും പറയാൻ അറിയില്ല...😁 ചേച്ചിക്ക് അറിയാലോ ആരേലും ഇല്ലാതെ തന്നെ അവിടെ വന്നു ഞാൻ ഇരിക്കാറില്ലാരുന്നല്ലോ..🥱 എനിക്ക് ഇഷ്ടവും അല്ലാരുന്നു...😬ഒട്ടും താല്പര്യം ഇല്ലാതെയാണ് ആ വീട്ടിലോട്ട് ഞാൻ കേറി വന്നത്...🫡പക്ഷേ.. ഇപ്പോൾ അവിടുന്നു എറങ്ങാൻ പോലും പറ്റാത്ത അവസ്ഥയിൽ ഞാൻ എത്തിയെങ്കിൽ....😍അന്ന് ജാൻവി എന്നോട് പറഞ്ഞ ഒരു കാര്യം...❤️ഇനി നീ മാറും എന്ന്..☺️അത് അന്ന് ഞാൻ കാര്യമായിട്ട് എടുത്തില്ല..🙂ഇന്ന് ഞാൻ എടക്ക് ഓർക്കും..😇ഒട്ടും പ്രതിഷിക്കാതെ എനിക്ക് കിട്ടിയ ഒരു ഗിഫ്റ്റ് ആണ് ചേച്ചി..😘ശ്രദ്ധിച്ചിട്ടില്ലേ..🤭 എന്നെങ്കിലും ഞാൻ തന്നെ പോകുവാണെന്നു പറഞ്ഞു ഇറങ്ങിയിട്ടുണ്ടോ..😂ഓടിച്ചു വിടണം...🤣ഞാൻ ഓരോ കാര്യങ്ങൾ പഠിച്ചത് ചേച്ചിയിലൂടെയാണ്..❤️‍🔥 അറിയാലോ..എങ്ങനെ ആയിരുന്നു എന്ന്..😁 ഇപ്പോഴും എങ്ങനെ ആണെന്ന്...😁ഇതൊക്കെ അറിഞ്ഞിട്ടും ഇങ്ങനെ ചേർത്ത് പിടിക്കുന്നില്ലേ..😍ഈശോയുടെ സ്നേഹം നിറഞ്ഞിരിക്കുന്നത് കൊണ്ടല്ലേ...🔥ചേച്ചിടെ കാര്യം പറഞ്ഞ് ഞാൻ ഈശോയുടെ അടുത്ത് പോയി ഇരുന്നാൽ കരഞ്ഞുപോകും..🥺ഓഡിയോ ഇടുമ്പോൾ കേൾക്കുന്നതല്ലേ..🫣 ഇതിപ്പോ ടൈപ്പ് ചെയ്തു തരുന്നത് കൊണ്ട് അത് അറിയത്തില്ലലോ..😋😉ഇതൊന്നും അല്ല... പറയാൻ ഇനിയും ഉണ്ട്...💃🏻💃🏻 പക്ഷേ എല്ലാം കൂടെ ഇരുന്നു ചേച്ചി വായിക്കണ്ടേ...🙃 അതുകൊണ്ട് നിർത്തുവാ...😌പിന്നെ ഞാൻ ഇന്നലെ ബിനോജ് അച്ചന്റെ വീഡിയോ കണ്ടപ്പോൾ ചേച്ചിയോട് ഒരുപാടു കാര്യങ്ങൾ പറയാൻ ഉണ്ടന്ന് പറഞ്ഞില്ലേ..😊ഇപ്പോൾ ഒരു കാര്യം പറയാം...🤩ഇന്നലെ അച്ചൻ പറഞ്ഞപോലെ ദിയമോൾ അവളുടെ അമ്മയെ പങ്കുവെച്ചു കൊടുത്തിട്ടുണ്ട്...🥳ഒരുപാടു പേർക്ക്..🥹എനിക്ക് വീട്ടിൽ നിന്ന് കിട്ടാത്തത് പലതും ചേച്ചിലൂടെ കിട്ടിയിട്ടുണ്ട്..🤗പിന്നെ കുട്ടമ്മ..😘ഇതൊക്കെ detail ആയിട്ട് പറയണമെന്നുണ്ട്..☺️ബാക്കി പിന്നെ പറയാം..🫶എല്ലാം അവിടുന്നു എവിടുന്ന് ഒക്കെ എന്തൊക്കയോ പറഞ്ഞ് വെച്ചിട്ടുണ്ട്...😇അപ്പൊ ഒന്നുടെ പറയാ....😃

Happy Birthday Chechii......🥳

ചേച്ചിയെ പോലെ വേറെ ഒരാളെ ഞാൻ കണ്ടിട്ടില്ല.. നല്ലയൊരു മകളാണ് കുട്ടമ്മക്ക്..❤️ നല്ലയൊരു ഭാര്യ ആണ് സജി ചേട്ടന്...❤️നല്ലയൊരു അമ്മയാണ് ദിയമോൾക്കു...👼🏻എല്ലാർക്കും..

കുറെ നേരവായി നിർത്താം എന്ന് പറഞ്ഞിട്ട്...😬 ഓക്കേ...👍ചേച്ചി ഓർക്കുവാരിക്കും..😆 ഇവൾ എന്തൊക്കയാ ഈ പറഞ്ഞേക്കുന്നത് എന്ന്..😶‍🌫️അറിയാലോ ചേച്ചിക്കു എന്നെ...💃🏻`,

  // Gamu's letter is intentionally shown under Annlitta.
  Gamu: `ചേച്ചിയെ... ഹാപ്പി birthday 🎉... കർത്താവ് ജീവിതത്തിൽ തന്ന അനുഗ്രഹങ്ങളിൽ ഒന്നാണ് ചേച്ചി☺️... തകർന്ന് വീഴാമായിരുന്ന പല അവസരങ്ങളിലും ചേർത്ത് പിടിച്ചു എല്ലാറ്റിലും ഉപരിയായി ഈശോയുടെ സ്നേഹം അനുഭവിപ്പിക്കാൻ ഒക്കെ  എടുത്ത ത്യാഗത്തിന് ഒരുപാട് നന്ദി...

ഫോർമൽ ആയി പോകരുതെന്ന് ഒക്കെ ഓർത്തെങ്കിലും എഴുതി വന്നപ്പോ അങ്ങനെ ആയോ എന്നൊരു സംശയം 😅ചേച്ചിയോട് ഇതിനു മുന്നേ ഞാൻ പറഞ്ഞിട്ടുണ്ടോ എന്ന് എനിക്ക് അറിയില്ല... ബട്ട്‌ you are my elder sister👭... ശകാരിക്കാനും തിരുത്താനും എല്ലാറ്റിലും ഉപരി എല്ലാം പങ്ക് വെക്കാനുമായിട്ട് ഈശോ തന്ന സമ്മാനം🤩ഒത്തിരി വേദനിപ്പിച്ചിട്ടുണ്ടെന്ന് അറിയാം... സോറി🫣and thankyou for loving me always😍

B'day wishes from ur gamu, taru and ur kunjaava🥰🥰🥰God blesss youuuu... Ummaaa😘😘😘😘I think u will be the first one who wrote ummaa to me😅`
};

/* =========================================================
   HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

function setText(id, value) {
  const element = $(id);
  if (element) element.textContent = value;
}

function showElement(element) {
  if (!element) return;
  element.hidden = false;
  element.classList.remove("hidden");
  element.classList.add("open");
  element.setAttribute("aria-hidden", "false");
}

function hideElement(element) {
  if (!element) return;
  element.classList.remove("open");
  element.classList.add("hidden");
  element.hidden = true;
  element.setAttribute("aria-hidden", "true");
}

/* =========================================================
   INSERT THE LETTER CONTENT
   ========================================================= */

setText("reflection", CONTENT.reflection);
setText("diaLetter", CONTENT.diaLetter);
setText("gamuLetter", CONTENT.Ann);
setText("annLetter", CONTENT.Gamu);

/* =========================================================
   MUSIC
   ========================================================= */

const music = $("bgMusic");
let musicStarted = false;

async function startMusic() {
  if (!music) return;

  try {
    music.currentTime = 0;
    await music.play();
    musicStarted = true;
    $("musicToggle")?.classList.add("playing");
  } catch (error) {
    console.warn("Music needs a user interaction:", error);
  }
}

$("musicToggle")?.addEventListener("click", async () => {
  if (!music) return;

  if (music.paused) {
    try {
      await music.play();
      musicStarted = true;
    } catch (error) {
      console.warn(error);
    }
  } else {
    music.pause();
  }

  $("musicToggle")?.classList.toggle("playing", !music.paused);
});

/* =========================================================
   OPEN THE BIRTHDAY SURPRISE
   ========================================================= */

$("enterBtn")?.addEventListener("click", async () => {
  await startMusic();

  [
    "birthday",
    "myLetter",
    "familyVideo",
    "otherLetters",
    "closing",
    "yehazel"
  ].forEach(id => {
    const section = $(id);
    if (section) {
      section.classList.remove("hidden");
      section.hidden = false;
    }
  });

  const button = $("enterBtn");
  if (button) {
    button.textContent = "Your surprise is open ♡";
    button.disabled = true;
  }

  buildScrapbook();
  buildDoodles();

  setTimeout(() => {
    $("birthday")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 250);
});

/* =========================================================
   DIYAMOL'S LETTER
   ========================================================= */

$("unrollBtn")?.addEventListener("click", () => {
  $("myParchment")?.classList.add("open");

  const button = $("unrollBtn");
  if (button) button.textContent = "Your letter is open ♡";

  $("myParchment")?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

/* =========================================================
   GAMU AND ANNLITTA LETTER OPENING
   ========================================================= */

function openLetter(letterId, cardId) {
  const letter = $(letterId);
  const card = $(cardId);

  if (!letter) {
    console.error("Letter element not found:", letterId);
    return;
  }

  const isOpen = letter.classList.contains("letter-visible") ||
                 letter.classList.contains("open");

  if (isOpen) {
    letter.classList.remove("letter-visible", "open");
    letter.hidden = true;
    letter.setAttribute("aria-hidden", "true");
    card?.setAttribute("aria-expanded", "false");
  } else {
    // Close the other letter before opening this one.
    ["gamuLetter", "annLetter"].forEach(id => {
      if (id !== letterId) {
        const other = $(id);
        if (other) {
          other.classList.remove("letter-visible", "open");
          other.hidden = true;
          other.setAttribute("aria-hidden", "true");
        }
      }
    });

    letter.hidden = false;
    letter.classList.remove("hidden");
    letter.classList.add("letter-visible", "open");
    letter.setAttribute("aria-hidden", "false");
    card?.setAttribute("aria-expanded", "true");

    setTimeout(() => {
      letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }
}

// Cards and optional dedicated buttons.
$("gamuCard")?.addEventListener("click", () => {
  openLetter("gamuLetter", "gamuCard");
});

$("annCard")?.addEventListener("click", () => {
  openLetter("annLetter", "annCard");
});

$("openGamuLetter")?.addEventListener("click", () => {
  openLetter("gamuLetter", "gamuCard");
});

$("openAnnLetter")?.addEventListener("click", () => {
  openLetter("annLetter", "annCard");
});

// Make cards keyboard accessible.
["gamuCard", "annCard"].forEach(id => {
  const card = $(id);
  if (!card) return;

  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-expanded", "false");

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});

// Initially hide the letters until their cards are selected.
["gamuLetter", "annLetter"].forEach(id => {
  const letter = $(id);
  if (letter) {
    letter.hidden = true;
    letter.setAttribute("aria-hidden", "true");
  }
});

/* =========================================================
   SCRAPBOOK POLAROIDS
   New flowing layout: photos sit inside the page sections
   rather than floating over the entire page.
   ========================================================= */

let scrapbookBuilt = false;

const scrapbookSections = [
  "opening",
  "birthday",
  "myLetter",
  "familyVideo",
  "otherLetters",
  "closing",
  "yehazel"
];

const photoCaptions = [
  "A little piece of forever ♡",
  "Our favourite memories",
  "The heart of our family",
  "Moments worth keeping",
  "Forever my favourite person",
  "Love lives here",
  "The happiest memories",
  "A lifetime of love",
  "Our beautiful little world",
  "Always together ♡"
];

function buildScrapbook() {
  if (scrapbookBuilt) return;
  scrapbookBuilt = true;

  const sections = scrapbookSections
    .map(id => $(id))
    .filter(Boolean);

  if (!sections.length) return;

  // Make a flowing photo collection inside each section.
  CONTENT.assets.forEach((file, index) => {
    const section = sections[index % sections.length];

    let shelf = section.querySelector(".memory-shelf");

    if (!shelf) {
      shelf = document.createElement("div");
      shelf.className = "memory-shelf";
      shelf.setAttribute("aria-label", "Family photo memories");

      // Inline styles ensure a usable layout even before CSS changes.
      shelf.style.display = "flex";
      shelf.style.flexWrap = "wrap";
      shelf.style.alignItems = "center";
      shelf.style.justifyContent = "space-around";
      shelf.style.gap = "24px";
      shelf.style.width = "100%";
      shelf.style.margin = "35px auto";
      shelf.style.padding = "15px 8px";
      shelf.style.position = "relative";

      section.appendChild(shelf);
    }

    const card = document.createElement("button");
    card.className = "polaroid scrapbook-photo";
    card.type = "button";
    card.setAttribute("aria-label", "View family photograph");

    const image = document.createElement("img");
    image.src = file;
    image.alt = "A beautiful family memory";
    image.loading = "lazy";

    image.onerror = () => card.remove();

    const caption = document.createElement("span");
    caption.className = "polaroid-caption";
    caption.textContent = photoCaptions[index % photoCaptions.length];

    card.appendChild(image);
    card.appendChild(caption);

    // Alternate photo sizes and rotations.
    const width = [125, 145, 165, 135, 155][index % 5];

    card.style.width = width + "px";
    card.style.minWidth = width + "px";
    card.style.padding = "9px 9px 28px";
    card.style.background = "#fffdf8";
    card.style.border = "1px solid #eee4d2";
    card.style.borderRadius = "3px";
    card.style.boxShadow = "0 7px 20px rgba(80,55,35,.16)";
    card.style.transform = `rotate(${[-5, 3, -2, 5, -3, 2][index % 6]}deg)`;
    card.style.cursor = "pointer";
    card.style.position = "relative";
    card.style.transition = "transform .3s ease, box-shadow .3s ease";
    card.style.animation = "fadeInPhoto .8s ease both";
    card.style.animationDelay = `${(index % 10) * 60}ms`;

    image.style.width = "100%";
    image.style.height = "145px";
    image.style.objectFit = "cover";
    image.style.display = "block";

    caption.style.display = "block";
    caption.style.fontFamily = "cursive";
    caption.style.fontSize = "11px";
    caption.style.color = "#78634d";
    caption.style.textAlign = "center";
    caption.style.paddingTop = "10px";

    card.addEventListener("mouseenter", () => {
      card.style.transform = "rotate(0deg) scale(1.05)";
      card.style.boxShadow = "0 12px 28px rgba(80,55,35,.24)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        `rotate(${[-5, 3, -2, 5, -3, 2][index % 6]}deg)`;
      card.style.boxShadow = "0 7px 20px rgba(80,55,35,.16)";
    });

    card.addEventListener("click", () => {
      openLightbox(image.src);
    });

    shelf.appendChild(card);
  });
}

/* =========================================================
   LOTS OF DOODLES
   ========================================================= */

function buildDoodles() {
  const layer = $("doodleTrail");
  if (!layer || layer.dataset.built === "true") return;

  layer.dataset.built = "true";

  const doodles = [
    "♡", "✧", "❀", "୨୧", "✿", "🦋",
    "✦", "♡", "🌷", "❁", "⋆", "🕊️",
    "✧", "❀", "♡", "🦋", "✿", "☾",
    "✦", "🌼", "♡", "❁", "୨୧", "✧",
    "🌸", "💗", "✩", "🦋", "❀", "♡",
    "🌷", "✿", "✨", "୨୧", "🌼", "🕊️",
    "♡", "✧", "❁", "🦋", "✦", "🌸",
    "⋆", "💐", "♡", "✿", "🌷", "✧",
    "🦋", "❀", "♡", "✩", "🌼", "୨୧",
    "✦", "🌸", "🕊️", "♡", "✧", "🌷"
  ];

  const sections = scrapbookSections
    .map(id => $(id))
    .filter(Boolean);

  if (!sections.length) return;

  doodles.forEach((symbol, index) => {
    const section = sections[index % sections.length];

    const doodle = document.createElement("span");
    doodle.className = "floating-doodle";
    doodle.textContent = symbol;

    doodle.style.position = "absolute";
    doodle.style.pointerEvents = "none";
    doodle.style.zIndex = "3";
    doodle.style.left = (3 + ((index * 17) % 90)) + "%";
    doodle.style.top = (35 + Math.floor(index / sections.length) * 75) + "px";
    doodle.style.fontSize = (18 + (index % 5) * 6) + "px";
    doodle.style.opacity = String(0.55 + (index % 4) * 0.1);
    doodle.style.animation = "floatDoodle 5s ease-in-out infinite";
    doodle.style.animationDelay = `${index * -0.4}s`;

    section.appendChild(doodle);
  });
}

/* =========================================================
   LIGHTBOX
   ========================================================= */

function openLightbox(src) {
  const lightbox = $("lightbox");
  const image = $("lightboxImage");

  if (!lightbox || !image) return;

  image.src = src;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lightbox = $("lightbox");
  if (!lightbox) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

$("closeLightbox")?.addEventListener("click", closeLightbox);

$("lightbox")?.addEventListener("click", event => {
  if (event.target === $("lightbox")) {
    closeLightbox();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

/* =========================================================
   SMALL ANIMATION STYLES
   ========================================================= */

if (!document.getElementById("birthdayScriptAnimations")) {
  const style = document.createElement("style");
  style.id = "birthdayScriptAnimations";

  style.textContent = `
    @keyframes fadeInPhoto {
      from {
        opacity: 0;
        transform: translateY(25px) rotate(-4deg);
      }
      to {
        opacity: 1;
      }
    }

    @keyframes floatDoodle {
      0%, 100% {
        translate: 0 0;
        rotate: -5deg;
      }
      50% {
        translate: 0 -12px;
        rotate: 7deg;
      }
    }

    .polaroid-caption {
      line-height: 1.3;
    }

    .letter-visible {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      height: auto !important;
      max-height: none !important;
      overflow: visible !important;
    }

    .memory-shelf {
      isolation: isolate;
    }
  `;

  document.head.appendChild(style);
}

/* =========================================================
   END
   ========================================================= */
