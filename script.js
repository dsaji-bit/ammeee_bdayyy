
const CONTENT = {"assets": ["IMG-20250608-WA0060.jpg", "IMG-20250608-WA0061.jpg", "IMG-20250703-WA0051.jpg", "IMG-20251008-WA0154.jpg", "IMG-20251008-WA0159.jpg", "IMG-20260122-WA0068.jpg", "IMG-20260126-WA0067.jpg", "IMG-20260313-WA0068.jpg", "IMG-20260313-WA0069.jpg", "IMG-20260421-WA0010.jpg", "IMG-20260421-WA0014.jpg", "IMG-20260421-WA0072.jpg", "IMG-20260421-WA0073.jpg", "IMG-20260421-WA0074.jpg", "IMG-20260421-WA0077.jpg", "IMG-20260421-WA0079.jpg", "IMG-20260421-WA0081.jpg", "IMG-20260421-WA0089.jpg", "IMG-20260505-WA0027.jpg", "IMG-20260505-WA0039.jpg", "IMG-20261026-WA0073.jpg", "IMG-20261026-WA0084.jpg", "IMG-20261026-WA0085.jpg", "IMG-20261026-WA0088.jpg", "IMG-20261026-WA0089.jpg", "IMG-20261107-WA0060.jpg", "IMG-20261107-WA0061.jpg", "IMG-20261107-WA0062.jpg", "IMG-20261107-WA0063.jpg", "IMG-20261107-WA0064.jpg", "IMG-20261107-WA0065.jpg", "IMG-20261107-WA0066.jpg", "IMG-20261107-WA0067.jpg", "IMG-20261107-WA0068.jpg", "IMG-20261107-WA0069.jpg", "IMG-20261107-WA0070.jpg", "IMG-20261107-WA0071.jpg", "IMG-20261107-WA0072.jpg", "IMG-20261107-WA0074.jpg", "IMG-20261107-WA0075.jpg", "IMG-20261107-WA0080.jpg", "IMG-20261107-WA0081.jpg", "IMG-20261107-WA0082.jpg", "IMG-20261107-WA0083.jpg", "IMG-20261107-WA0084.jpg", "IMG-20261107-WA0085.jpg", "IMG-20261107-WA0088.jpg", "IMG-20261107-WA0090.jpg", "IMG-20261107-WA0091.jpg", "IMG-20261107-WA0092.jpg", "IMG-20261107-WA0094.jpg", "IMG-20261107-WA0095.jpg", "IMG-20261107-WA0097.jpg", "IMG-20261107-WA0098.jpg", "IMG-20261107-WA0099.jpg", "IMG-20261107-WA0100.jpg", "IMG-20261107-WA0101.jpg", "IMG-20261107-WA0102.jpg", "IMG-20261107-WA0103.jpg", "IMG-20261107-WA0104.jpg", "IMG-20261107-WA0105.jpg", "IMG-20261107-WA0106.jpg", "IMG-20261107-WA0107.jpg", "IMG-20261107-WA0108.jpg", "IMG-20261107-WA0109.jpg", "IMG-20261107-WA0110.jpg", "IMG-20261107-WA0111.jpg", "IMG-20261107-WA0112.jpg", "IMG-20261107-WA0113.jpg", "IMG-20261107-WA0114.jpg", "IMG-20261107-WA0115.jpg", "IMG-20261107-WA0116.jpg", "IMG-20261108-WA0034.jpg", "IMG-20261108-WA0035.jpg", "IMG-20261108-WA0036.jpg", "IMG-20261108-WA0037.jpg", "IMG-20261108-WA0038.jpg", "IMG-20261108-WA0039.jpg", "IMG-20261108-WA0040.jpg", "IMG-20261108-WA0041.jpg", "IMG-20261108-WA0042.jpg", "IMG-20261108-WA0043.jpg", "IMG-20261108-WA0044.jpg", "IMG-20261108-WA0045.jpg", "IMG-20261108-WA0046.jpg", "IMG-20261108-WA0047.jpg", "IMG-20261108-WA0048.jpg", "IMG-20261108-WA0049.jpg", "IMG-20261108-WA0050.jpg", "IMG-20261108-WA0051.jpg", "IMG-20261108-WA0052.jpg", "IMG-20261108-WA0053.jpg", "IMG-20261108-WA0054.jpg", "IMG-20261108-WA0055.jpg", "IMG-20261108-WA0056.jpg", "IMG-20261108-WA0057.jpg", "IMG-20261108-WA0058.jpg", "IMG-20261108-WA0059.jpg", "IMG-20261108-WA0060.jpg", "IMG-20261108-WA0061.jpg", "IMG-20261108-WA0062.jpg", "IMG-20261108-WA0063.jpg", "IMG-20261108-WA0064.jpg", "IMG-20261108-WA0065.jpg", "IMG-20261108-WA0066.jpg", "IMG-20261108-WA0067.jpg", "IMG-20261108-WA0068.jpg", "IMG-20261108-WA0069.jpg", "IMG-20261108-WA0070.jpg", "IMG-20261108-WA0071.jpg", "IMG-20261108-WA0072.jpg", "IMG-20261108-WA0073.jpg", "IMG-20261108-WA0074.jpg", "IMG-20261108-WA0075.jpg", "IMG-20261108-WA0076.jpg", "IMG-20261108-WA0077.jpg", "IMG-20261108-WA0078.jpg", "IMG-20261108-WA0079.jpg", "IMG-20261108-WA0080.jpg", "IMG-20261108-WA0081.jpg", "IMG-20261108-WA0082.jpg", "IMG-20261108-WA0083.jpg", "IMG-20261108-WA0084.jpg", "IMG-20261108-WA0085.jpg", "IMG-20261108-WA0086.jpg", "IMG-20261108-WA0087.jpg", "IMG-20261108-WA0088.jpg", "IMG-20261108-WA0089.jpg", "IMG-20261108-WA0090.jpg", "IMG-20261108-WA0091.jpg", "IMG-20261108-WA0092.jpg", "IMG-20261108-WA0093.jpg", "IMG-20261108-WA0094.jpg", "IMG-20261108-WA0095.jpg", "IMG-20261108-WA0096.jpg", "IMG-20261108-WA0097.jpg", "IMG-20261108-WA0098.jpg", "IMG-20261108-WA0099.jpg", "IMG-20261108-WA0130.jpg", "IMG-20261108-WA0139.jpg", "IMG-20261108-WA0140.jpg", "IMG-20261109-WA0007.jpg", "IMG_20260122_224543.jpg", "IMG_20260123_214300.jpg", "IMG_20260124_143837.jpg", "IMG_20260124_222218.jpg", "IMG_20260124_222225.jpg", "IMG_20260124_222228.jpg", "IMG_20260412_103330.jpg", "IMG_20260430_120720.jpg", "IMG_20260501_150013.jpg", "IMG_20260502_213107.jpg", "IMG_20261017_073322.jpg", "IMG_20261017_073334.jpg", "IMG_20261017_073335.jpg", "IMG_20261025_114803.jpg", "IMG_20261107_220432_920.webp", "WA_1777631648264.jpeg"], "reflection": "Ammeee🥰 ... This is one of the first Vachanams😇 you taught me.... Innu ammakk vendi njn vachanam nookiyapo, othiri vachanams manasikoode kadann poyi🫠🫠... Bt enne strike cheythe itha... 🫣\nEnnu vecha ammayude jeevithathil othiri prashnangalum😧 othiri prathisandhikalum🤧😭 ellam undayittundu. Pakshe anneram Eesho✨ ammayude koode undayirunn👼🏻👼🏻... Eesho✨ ammayude koode undayirunnu ennathilum upari amma orikkalum Eeshoyude kai vittittilla.🫴🏻🫳🏻 Like cheriya😕 prathisandhikal onnum alla, cheruppam thottu neritthe👧🏻. Valiya valiya😨🫨 prathisandhikalum prayaasangalum ellam amma nerittittum amma Eeshoyude✨ kai pidichittundayirunnu🫴🏻🫳🏻. Kaaranam ammaykku ariyamaayirunnu Eesho✨ ammaykku aavashyamullathu aavashya samayath tharumennu🕰️💸🥭❤️.\nIppo ammayude mol👧🏻 aaya enne, appane okke👨‍🍼, even ammayude youth makkale👧🏻👦🏻👩🏼‍🦰🧑🏻‍🦱👩🏻‍🦱 polum, ethrayum valiya prathisandhi aanenkilum amma parayunna oru kaaryamaanu, \"Eesho koodeyille? Eesho shariyaakkikkolum\"🫶🏻🫶🏻🫶🏻 ennu.\n\nI mean, ammaykku aa oru bodhyam😌 undu.\nEnnu vechaal, ippo ee oru vachanam Philippians 4:19, \"Ente Daivam thante mahathwathinte sampannathayil ninnu Yeshu Kristhuviloode enikku aavashyamullathellaam tharum.\"👼🏻\n\nEe oru vachanam oraalude jeevithavumaayi bandhippichu parayuvaanenkil, njan ammayude🤩🤩🤩 life-ne aanu parayathullu.❤️\n\nBecause, you know, my amma🥰 knows that ammaykku vendathellaam Eesho tharumennu🔥❤️‍🔥. And because of that, she is never anxious about her life.❤️‍🔥\n\nAnnu aa medi city🏥 vecha doctor🧑‍⚕️ 🥼 🩺 paranju, \"Tension aayirikkum chechikku.😷 Kontha okke pidichitondalo tension aayirikkumennu\" 🤣 🤣🤣\n\nAnneram manassil vanna kaaryam, kontha ullathukondaanu amma tension illaand jeevikkunnathu ennanu.😉😉\nAa oru vachanathinte base-il amma ee tension illaand dhairyamaayittu nilkkunnathu.😀😀😀\n\nSo, at the end of the day, ee vachanam realistic aayittu oraalude life-il kaanichu tharunnath aarennu chodichaal, njan ammayude life-ne aanu parayullu.❤️\n\nBecause amma ee vachanathil athrayum adiyurachu vishwasikkunna oraalanu.🫶🏻❤️\n\nSo, ee vachanam njan ammaykkaayittu dedicate cheyyunnu.\nUmmaaa😘😘", "diaLetter": "Ammeee... Happiest birthday ammeee😭😭❤️❤️ipo enna prynm enn polum i dont knoww🫣bt enik ammene othiri ishtavaa😘...\nEnde lyfil kittiya ettavum valya blessing aanu ende ammaa🫶🏻... Ithrem understanding and caring aaya orale njn jeevithathil kandit illa ammee... Forever njn eesokk nanni prym... Ammene enik thannathil😭😭❤️\nAmmeee... Pandokke njn orkkuvayirunn ammene pole aakaruth enn...vere onnm kondalla ammee bt amma othiri nalle aa😭😭and ammede ee nanma ellarum use cheyune njn kaanunee aann... Krym kaanan vendi ammede aduth nikkunnavarum ammede caring okke muthaledukkunnavarum last oru ithum illand ororutharum ammene hurt cheyth ittitt pokune njn kaanune aa ammee... So njn pand orkkuvayirun ammenepole aakall enn... But vann vann... Ammede same aayi😂😂😂amma engane aano, athpole thanne aayi njanum.... Bt im happyy... Ammeee... Amma sherikkum oru sambhavam aattoo😌\nAmma oru killadi thanne😂🔥amma bhayankara variety aan... I don't know enna prynm enn bt...\nOthiri nanni ond ammee... For everything... Ellm pryn thodngiyal ammakk ariyalo theerulla😂athpoleya enik ammaa... Enne ithrem snehikunneyum care cheyunnayum vere aarelum ondoo ammee🙂enne maathram alla...mothathil enthore kryngla amma cheyune... Adhoc...6 groups... Athinde idakk veetil kryngl.... Kuttamma... Kozhamachy.... Service team.... Sushrushakal... Everything... Again... Amma oru sambhavam attooo... Ithellam pottee.... You raised a daughter ammeee.... Ivide vannitt oro pillerdem life kaanumbo njn orkum annu amma enne proper aayi valarthiyekond aanalo njn ithrem miduki aayit jeevikune ennn.... Nannii ond ammeee.... Ellathinum😭😭othiri nanni eeshoye... Enik ammene thannathil😭😭❤️", "gamu": "ചേച്ചിയെ... ഹാപ്പി birthday 🎉... കർത്താവ് ജീവിതത്തിൽ തന്ന അനുഗ്രഹങ്ങളിൽ ഒന്നാണ് ചേച്ചി☺️... തകർന്ന് വീഴാമായിരുന്ന പല അവസരങ്ങളിലും ചേർത്ത് പിടിച്ചു എല്ലാറ്റിലും ഉപരിയായി ഈശോയുടെ സ്നേഹം അനുഭവിപ്പിക്കാൻ ഒക്കെ  എടുത്ത ത്യാഗത്തിന് ഒരുപാട് നന്ദി...\n\nഫോർമൽ ആയി പോകരുതെന്ന് ഒക്കെ ഓർത്തെങ്കിലും എഴുതി വന്നപ്പോ അങ്ങനെ ആയോ എന്നൊരു സംശയം 😅ചേച്ചിയോട് ഇതിനു മുന്നേ ഞാൻ പറഞ്ഞിട്ടുണ്ടോ എന്ന് എനിക്ക് അറിയില്ല... ബട്ട്‌ you are my elder sister👭... ശകാരിക്കാനും തിരുത്താനും എല്ലാറ്റിലും ഉപരി എല്ലാം പങ്ക് വെക്കാനുമായിട്ട് ഈശോ തന്ന സമ്മാനം🤩ഒത്തിരി വേദനിപ്പിച്ചിട്ടുണ്ടെന്ന് അറിയാം... സോറി🫣and thankyou for loving me always😍\n\nB'day wishes from ur gamu, taru and ur kunjaava🥰🥰🥰God blesss youuuu... Ummaaa😘😘😘😘I think u will be the first one who wrote ummaa to me😅", "ann": "എന്റെ chechii..🫂\n\nപറയാൻ തുടങ്ങിയാൽ ഒരുപാടു ഉണ്ട്..🫣അതുകൊണ്ട് short ആക്കി പറയാം..😉 ഈശോയോട് ഞാൻ എന്നും നന്ദി പറയാറുണ്ട്🥹 എനിക്ക് ഇങ്ങനെ ഒരു ചേച്ചിയെ തന്നതിന്...😍 ഞാൻ എങ്ങനെയാ ഇത്രയും ചേച്ചിയോട് അടുത്തതെന്ന്🥰എനിക്ക് ഇപ്പോഴും പറയാൻ അറിയില്ല...😁 ചേച്ചിക്ക് അറിയാലോ ആരേലും ഇല്ലാതെ തന്നെ അവിടെ വന്നു ഞാൻ ഇരിക്കാറില്ലാരുന്നല്ലോ..🥱 എനിക്ക് ഇഷ്ടവും അല്ലാരുന്നു...😬ഒട്ടും താല്പര്യം ഇല്ലാതെയാണ് ആ വീട്ടിലോട്ട് ഞാൻ കേറി വന്നത്...🫡പക്ഷേ.. ഇപ്പോൾ അവിടുന്നു എറങ്ങാൻ പോലും പറ്റാത്ത അവസ്ഥയിൽ ഞാൻ എത്തിയെങ്കിൽ....😍അന്ന് ജാൻവി എന്നോട് പറഞ്ഞ ഒരു കാര്യം...❤️ഇനി നീ മാറും എന്ന്..☺️അത് അന്ന് ഞാൻ കാര്യമായിട്ട് എടുത്തില്ല..🙂ഇന്ന് ഞാൻ എടക്ക് ഓർക്കും..😇ഒട്ടും പ്രതിഷിക്കാതെ എനിക്ക് കിട്ടിയ ഒരു ഗിഫ്റ്റ് ആണ് ചേച്ചി..😘ശ്രദ്ധിച്ചിട്ടില്ലേ..🤭 എന്നെങ്കിലും ഞാൻ തന്നെ പോകുവാണെന്നു പറഞ്ഞു ഇറങ്ങിയിട്ടുണ്ടോ..😂ഓടിച്ചു വിടണം...🤣ഞാൻ ഓരോ കാര്യങ്ങൾ പഠിച്ചത് ചേച്ചിയിലൂടെയാണ്..❤️‍🔥 അറിയാലോ..എങ്ങനെ ആയിരുന്നു എന്ന്..😁 ഇപ്പോഴും എങ്ങനെ ആണെന്ന്...😁ഇതൊക്കെ അറിഞ്ഞിട്ടും ഇങ്ങനെ ചേർത്ത് പിടിക്കുന്നില്ലേ..😍ഈശോയുടെ സ്നേഹം നിറഞ്ഞിരിക്കുന്നത് കൊണ്ടല്ലേ...🔥ചേച്ചിടെ കാര്യം പറഞ്ഞ് ഞാൻ ഈശോയുടെ അടുത്ത് പോയി ഇരുന്നാൽ കരഞ്ഞുപോകും..🥺ഓഡിയോ ഇടുമ്പോൾ കേൾക്കുന്നതല്ലേ..🫣 ഇതിപ്പോ ടൈപ്പ് ചെയ്തു തരുന്നത് കൊണ്ട് അത് അറിയത്തില്ലലോ..😋😉ഇതൊന്നും അല്ല... പറയാൻ ഇനിയും ഉണ്ട്...💃🏻💃🏻 പക്ഷേ എല്ലാം കൂടെ ഇരുന്നു ചേച്ചി വായിക്കണ്ടേ...🙃 അതുകൊണ്ട് നിർത്തുവാ...😌പിന്നെ ഞാൻ ഇന്നലെ ബിനോജ് അച്ചന്റെ വീഡിയോ കണ്ടപ്പോൾ ചേച്ചിയോട് ഒരുപാടു കാര്യങ്ങൾ പറയാൻ ഉണ്ടന്ന് പറഞ്ഞില്ലേ..😊ഇപ്പോൾ ഒരു കാര്യം പറയാം...🤩ഇന്നലെ അച്ചൻ പറഞ്ഞപോലെ ദിയമോൾ അവളുടെ അമ്മയെ പങ്കുവെച്ചു കൊടുത്തിട്ടുണ്ട്...🥳ഒരുപാടു പേർക്ക്..🥹എനിക്ക് വീട്ടിൽ നിന്ന് കിട്ടാത്തത് പലതും ചേച്ചിലൂടെ കിട്ടിയിട്ടുണ്ട്..🤗പിന്നെ കുട്ടമ്മ..😘ഇതൊക്കെ detail ആയിട്ട് പറയണമെന്നുണ്ട്..☺️ബാക്കി പിന്നെ പറയാം..🫶എല്ലാം അവിടുന്നു എവിടുന്ന് ഒക്കെ എന്തൊക്കയോ പറഞ്ഞ് വെച്ചിട്ടുണ്ട്...😇അപ്പൊ ഒന്നുടെ പറയാ....😃\n\nHappy Birthday Chechii......🥳\n\nചേച്ചിയെ പോലെ വേറെ ഒരാളെ ഞാൻ കണ്ടിട്ടില്ല.. നല്ലയൊരു മകളാണ് കുട്ടമ്മക്ക്..❤️ നല്ലയൊരു ഭാര്യ ആണ് സജി ചേട്ടന്...❤️നല്ലയൊരു അമ്മയാണ് ദിയമോൾക്കു...👼🏻എല്ലാർക്കും..\n\nകുറെ നേരവായി നിർത്താം എന്ന് പറഞ്ഞിട്ട്...😬 ഓക്കേ...👍ചേച്ചി ഓർക്കുവാരിക്കും..😆 ഇവൾ എന്തൊക്കയാ ഈ പറഞ്ഞേക്കുന്നത് എന്ന്..😶‍🌫️അറിയാലോ ചേച്ചിക്കു എന്നെ...💃🏻"};
const $ = (id) => document.getElementById(id);
$("reflection").textContent = CONTENT.reflection;
$("diaLetter").textContent = CONTENT.diaLetter;
$("gamuLetter").textContent = CONTENT.gamu;
$("annLetter").textContent = CONTENT.ann;

const music = $("bgMusic");
let musicStarted = false;
async function startMusic() {
  try { music.currentTime = 0; await music.play(); musicStarted = true; $("musicToggle").classList.add("playing"); }
  catch (e) { $("musicToggle").title = "Tap to start music"; }
}
$("enterBtn").addEventListener("click", async () => {
  await startMusic();
  $("birthday").classList.remove("hidden");
  $("myLetter").classList.remove("hidden");
  $("familyVideo").classList.remove("hidden");
  $("otherLetters").classList.remove("hidden");
  $("closing").classList.remove("hidden");
  $("yehazel").classList.remove("hidden");
  $("enterBtn").textContent = "Your surprise is open ♡";
  $("enterBtn").disabled = true;
  setTimeout(() => $("birthday").scrollIntoView({behavior:"smooth",block:"start"}), 120);
  buildPolaroids();
});
$("musicToggle").addEventListener("click", async () => {
  if (music.paused) { if (!musicStarted) await startMusic(); else await music.play(); }
  else music.pause();
  $("musicToggle").classList.toggle("playing", !music.paused);
});
$("unrollBtn").addEventListener("click", () => {
  $("myParchment").classList.add("open");
  $("unrollBtn").textContent = "Your letter is open ♡";
  $("myParchment").scrollIntoView({behavior:"smooth",block:"center"});
});

let photosBuilt = false;
function buildPolaroids() {
  if (photosBuilt) return; photosBuilt = true;
  const cloud = $("photoCloud");
  const total = CONTENT.assets.length;
  const width = Math.min(cloud.clientWidth || 700, 760);
  const height = 620;
  CONTENT.assets.forEach((file, i) => {
    const card = document.createElement("button");
    card.className = "polaroid";
    card.type = "button";
    const col = i % 4, row = Math.floor(i / 4);
    const x = 3 + ((i * 37 + col * 13) % 78);
    const y = 3 + ((i * 53 + row * 29) % 88);
    card.style.left = `calc(${x}% - 42px)`;
    card.style.top = `${y * 5.0}px`;
    card.style.transform = `rotate(${((i*17)%17)-8}deg)`;
    card.style.zIndex = String(1 + (i % 6));
    card.style.animationDelay = `${(i%12)*70}ms`;
    card.setAttribute("aria-label", "Open family photo");
    const img = document.createElement("img");
    img.src = file.split("/").map(encodeURIComponent).join("/");
    img.alt = "A family memory";
    img.loading = "lazy";
    img.onerror = () => card.remove();
    card.appendChild(img);
    card.addEventListener("click", () => {
      $("lightboxImage").src = img.src;
      $("lightbox").classList.add("open");
    });
    cloud.appendChild(card);
  });
}
$("closeLightbox").addEventListener("click", () => $("lightbox").classList.remove("open"));
$("lightbox").addEventListener("click", e => { if (e.target === $("lightbox")) $("lightbox").classList.remove("open"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") $("lightbox").classList.remove("open"); });
