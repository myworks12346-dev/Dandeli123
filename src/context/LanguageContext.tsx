import React, { createContext, useContext, useState } from 'react';

export type LanguageCode =
  | 'en'
  | 'hi'
  | 'mr'
  | 'kn'
  | 'te'
  | 'ml'
  | 'ta'
  | 'bn'
  | 'gu'
  | 'pa'
  | 'as'
  | 'or'
  | 'fr'
  | 'de'
  | 'es'
  | 'ar';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
  section?: 'primary' | 'secondary' | 'international';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  // 1-7: Priority Indian Languages (English + Top 6)
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧', section: 'primary' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳', section: 'primary' },
  { code: 'mr', label: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', section: 'primary' },
  { code: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', section: 'primary' },
  { code: 'te', label: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', section: 'primary' },
  { code: 'ml', label: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', section: 'primary' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', section: 'primary' },

  // 8-12: Additional Indian Languages
  { code: 'bn', label: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', section: 'secondary' },
  { code: 'gu', label: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', section: 'secondary' },
  { code: 'pa', label: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', section: 'secondary' },
  { code: 'as', label: 'Assamese', nativeName: 'অসমীয়া', flag: '🇮🇳', section: 'secondary' },
  { code: 'or', label: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳', section: 'secondary' },

  // 13-16: International Languages
  { code: 'fr', label: 'French', nativeName: 'Français', flag: '🇫🇷', section: 'international' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪', section: 'international' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸', section: 'international' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', section: 'international' },
];

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    callToBook: 'Call to Book',
    partnerWithUs: 'Partner with Us',
    customerSupport: 'Customer support',
    visitPackages: 'Visit Packages',
    logInSignUp: 'Log In / Sign Up',
    escapeIntoWild: 'Escape into the wild.',
    heroSubtitle: 'Adventure, rivers, wildlife and unforgettable moments in the heart of Dandeli.',
    explorePackages: 'Explore Packages',
    whereGoing: 'Where are you going?',
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    guests: 'Guests',
    searchResorts: 'Search Resorts',
    language: 'Language',
    selectLanguage: 'Select Language',
    indianLanguages: 'Indian Languages',
    otherLanguages: 'More Languages',
    internationalLanguages: 'International Languages'
  },
  hi: {
    callToBook: 'बुकिंग हेतु कॉल करें',
    partnerWithUs: 'पार्टनर बनें',
    customerSupport: 'ग्राहक सहायता',
    visitPackages: 'पैकेज देखें',
    logInSignUp: 'लॉग इन / साइन अप',
    escapeIntoWild: 'प्रकृति की गोद में चलें।',
    heroSubtitle: 'दांदेली के दिल में रोमांच, नदियां, वन्यजीव और अविस्मरणीय पल।',
    explorePackages: 'पैकेज खोजें',
    whereGoing: 'आप कहाँ जा रहे हैं?',
    checkIn: 'चेक-इन',
    checkOut: 'चेक-आउट',
    guests: 'अतिथि',
    searchResorts: 'रिसॉर्ट खोजें',
    language: 'भाषा',
    selectLanguage: 'भाषा चुनें',
    indianLanguages: 'भारतीय भाषाएं',
    otherLanguages: 'अन्य भाषाएं',
    internationalLanguages: 'अंतर्राष्ट्रीय भाषाएं'
  },
  mr: {
    callToBook: 'बुकिंगसाठी कॉल करा',
    partnerWithUs: 'आमच्यासोबत जोडा',
    customerSupport: 'ग्राहक सेवा',
    visitPackages: 'पॅकेजेस पहा',
    logInSignUp: 'लॉग इन / साइन अप',
    escapeIntoWild: 'निसर्गाच्या सान्निध्यात चला.',
    heroSubtitle: 'दांडेलीच्या हृदयात थरार, नद्या, वन्यजीव आणि अविस्मरणीय क्षण.',
    explorePackages: 'पॅकेजेस एक्सप्लोर करा',
    whereGoing: 'तुम्ही कुठे जात आहात?',
    checkIn: 'चेक-इन',
    checkOut: 'चेक-आउट',
    guests: 'पाहुणे',
    searchResorts: 'रिसॉर्ट्स शोधा',
    language: 'भाषा',
    selectLanguage: 'भाषा निवडा',
    indianLanguages: 'भारतीय भाषा',
    otherLanguages: 'इतर भाषा',
    internationalLanguages: 'आंतरराष्ट्रीय भाषा'
  },
  kn: {
    callToBook: 'ಬುಕಿಂಗ್ ಕರೆ ಮಾಡಿ',
    partnerWithUs: 'ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ',
    customerSupport: 'ಗ್ರಾಹಕ ಸೇವೆ',
    visitPackages: 'ಪ್ಯಾಕೇಜ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    logInSignUp: 'ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್',
    escapeIntoWild: 'ಕಾಡಿನ ಕಡೆಗೆ ಪಯಣ.',
    heroSubtitle: 'ದಾಂಡೇಲಿಯ ಹೃದಯಭಾಗದಲ್ಲಿ ನದಿ ಸಾಹಸ, ವನ್ಯಜೀವಿಗಳು ಮತ್ತು ಸ್ಮರಣೀಯ ಕ್ಷಣಗಳು.',
    explorePackages: 'ಪ್ಯಾಕೇಜುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    whereGoing: 'ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?',
    checkIn: 'ಆಗಮನ',
    checkOut: 'ನಿರ್ಗಮನ',
    guests: 'ಅತಿಥಿಗಳು',
    searchResorts: 'ರೆಸಾರ್ಟ್ ಹುಡುಕಿ',
    language: 'ಭಾಷೆ',
    selectLanguage: 'ಭಾಷೆಯನ್ನು ಆರಿಸಿ',
    indianLanguages: 'ಭಾರತೀಯ ಭಾಷೆಗಳು',
    otherLanguages: 'ಇತರ ಭಾಷೆಗಳು',
    internationalLanguages: 'ಅಂತಾರಾಷ್ಟ್ರೀಯ ಭಾಷೆಗಳು'
  },
  te: {
    callToBook: 'బుకింగ్ కోసం కాల్ చేయండి',
    partnerWithUs: 'మాతో భాగస్వామ్యం అవ్వండి',
    customerSupport: 'కస్టమర్ సపోర్ట్',
    visitPackages: 'ప్యాకేజీలను చూడండి',
    logInSignUp: 'లాగిన్ / సైన్ అప్',
    escapeIntoWild: 'ప్రకృతి ఒడిలోకి పయనించండి.',
    heroSubtitle: 'దాండేలి నడిబొడ్డున సాహసాలు, నదులు, వన్యప్రాణులు మరియు మరపురాని క్షణాలు.',
    explorePackages: 'ప్యాకేజీలను అన్వేషించండి',
    whereGoing: 'మీరు ఎక్కడికి వెళ్తున్నారు?',
    checkIn: 'చెక్-ఇన్',
    checkOut: 'చెక్-అవుట్',
    guests: 'అతిథులు',
    searchResorts: 'రిసార్ట్స్ వెతకండి',
    language: 'భాష',
    selectLanguage: 'భాషను ఎంచుకోండి',
    indianLanguages: 'భారతీయ భాషలు',
    otherLanguages: 'ఇతర భాషలు',
    internationalLanguages: 'అంతర్జాతీయ భాషలు'
  },
  ml: {
    callToBook: 'ബുക്കിംഗിനായി വിളിക്കൂ',
    partnerWithUs: 'ഞങ്ങളോടൊപ്പം ചേരൂ',
    customerSupport: 'കസ്റ്റമർ സപ്പോർട്ട്',
    visitPackages: 'പാക്കേജുകൾ കാണുക',
    logInSignUp: 'ലോഗിൻ / സൈൻ അപ്പ്',
    escapeIntoWild: 'പ്രകൃതിയുടെ മടിത്തട്ടിലേക്ക്.',
    heroSubtitle: 'ദാണ്ഡേലിയുടെ ഹൃദയത്തിൽ സാഹസികതയും നദികളും വന്യജീവികളും അവിസ്മരണീയ നിമിഷങ്ങളും.',
    explorePackages: 'പാക്കേജുകൾ കണ്ടെത്തുക',
    whereGoing: 'നിങ്ങൾ എവിടേക്കാണ് പോകുന്നത്?',
    checkIn: 'ചെക്ക്-ഇൻ',
    checkOut: 'ചെക്ക്-ഔട്ട്',
    guests: 'അതിഥികൾ',
    searchResorts: 'റിസോർട്ടുകൾ തിരയുക',
    language: 'ഭാഷ',
    selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
    indianLanguages: 'ഇന്ത്യൻ ഭാഷകൾ',
    otherLanguages: 'മറ്റ് ഭാഷകൾ',
    internationalLanguages: 'അന്താരാഷ്ട്ര ഭാഷകൾ'
  },
  ta: {
    callToBook: 'முன்பதிவு செய்ய அழைக்கவும்',
    partnerWithUs: 'எங்களுடன் இணையுங்கள்',
    customerSupport: 'வாடிக்கையாளர் சேவை',
    visitPackages: 'பேக்கேஜ்களைப் பார்க்கவும்',
    logInSignUp: 'உள்நுழை / பதிவு செய்',
    escapeIntoWild: 'இயற்கையின் மடியில் இணையுங்கள்.',
    heroSubtitle: 'தாண்டேலியின் மையப்பகுதியில் சாகசம், நதிகள், வனவிலங்குகள் மற்றும் மறக்க முடியாத தருணங்கள்.',
    explorePackages: 'பேக்கேஜ்களை ஆராயுங்கள்',
    whereGoing: 'நீங்கள் எங்கு செல்கிறீர்கள்?',
    checkIn: 'செக்-இன்',
    checkOut: 'செக்-அவுட்',
    guests: 'விருந்தினர்கள்',
    searchResorts: 'ரிசார்ட்டுகளைத் தேடுங்கள்',
    language: 'மொழி',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    indianLanguages: 'இந்திய மொழிகள்',
    otherLanguages: 'பிற மொழிகள்',
    internationalLanguages: 'சர்வதேச மொழிகள்'
  },
  bn: {
    callToBook: 'বুকিংয়ের জন্য কল করুন',
    partnerWithUs: 'আমাদের সাথে যোগ দিন',
    customerSupport: 'গ্রাহক সহায়তা',
    visitPackages: 'প্যাকেজ দেখুন',
    logInSignUp: 'লগ ইন / সাইন আপ',
    escapeIntoWild: 'প্রকৃতির কোলে ছুটি কাটান।',
    heroSubtitle: 'দাঁদেলির বুকে রোমাঞ্চ, নদী, বন্যপ্রাণী এবং অবিস্মরণীয় মুহূর্ত।',
    explorePackages: 'প্যাকেজ খুঁজুন',
    whereGoing: 'কোথায় যেতে চান?',
    checkIn: 'চেক-ইন',
    checkOut: 'চেক-আউট',
    guests: 'অতিথি',
    searchResorts: 'রিসর্ট খুঁজুন',
    language: 'ভাষা',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    indianLanguages: 'ভারতীয় ভাষা',
    otherLanguages: 'অন্যান্য ভাষা',
    internationalLanguages: 'আন্তর্জাতিক ভাষা'
  },
  gu: {
    callToBook: 'બુકિંગ માટે કોલ કરો',
    partnerWithUs: 'અમારી સાથે જોડાઓ',
    customerSupport: 'ગ્રાહક સેવા',
    visitPackages: 'પેકેજ જુઓ',
    logInSignUp: 'લૉગ ઇન / સાઇન અપ',
    escapeIntoWild: 'કુદરતના ખોળે જાઓ.',
    heroSubtitle: 'દાંડેલીના હૃદયમાં સાહસ, નદીઓ, વન્યજીવન અને અવિસ્મરણીય ક્ષણો.',
    explorePackages: 'પેકેજ શોધો',
    whereGoing: 'તમે ક્યાં જઈ રહ્યા છો?',
    checkIn: 'ચેક-ઇન',
    checkOut: 'ચેક-આઉટ',
    guests: 'મહેમાનો',
    searchResorts: 'રિસોર્ટ શોધો',
    language: 'ભાષા',
    selectLanguage: 'ભાષા પસંદ કરો',
    indianLanguages: 'ભારતીય ભાષાઓ',
    otherLanguages: 'અન્ય ભાષાઓ',
    internationalLanguages: 'આંતરરાષ્ટ્રીય ભાષાઓ'
  },
  pa: {
    callToBook: 'ਬੁਕਿੰਗ ਲਈ ਕਾਲ ਕਰੋ',
    partnerWithUs: 'ਸਾਡੇ ਨਾਲ ਜੁੜੋ',
    customerSupport: 'ਗਾਹਕ ਸਹਾਇਤਾ',
    visitPackages: 'ਪੈਕੇਜ ਵੇਖੋ',
    logInSignUp: 'ਲਾਗ ਇਨ / ਸਾਈਨ ਅੱਪ',
    escapeIntoWild: 'ਕੁਦਰਤ ਦੀ ਗੋਦ ਵਿੱਚ ਆਓ।',
    heroSubtitle: 'ਦਾਂਦੇਲੀ ਵਿੱਚ ਰੋਮਾਂਚ, ਨਦੀਆਂ, ਜੰਗਲੀ ਜੀਵ ਅਤੇ ਯਾਦਗਾਰੀ ਪਲ।',
    explorePackages: 'ਪੈਕੇਜ ਦੇਖੋ' ,
    whereGoing: 'ਤੁਸੀਂ ਕਿੱਥੇ ਜਾ ਰਹੇ ਹੋ?',
    checkIn: 'ਚੈੱਕ-ਇਨ',
    checkOut: 'ਚੈੱਕ-ਆਊਟ',
    guests: 'ਮਹਿਮਾਨ',
    searchResorts: 'ਰਿਜ਼ੋਰਟ ਖੋਜੋ',
    language: 'ਭਾਸ਼ਾ',
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    indianLanguages: 'ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ',
    otherLanguages: 'ਹੋਰ ਭਾਸ਼ਾਵਾਂ',
    internationalLanguages: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਭਾਸ਼ਾਵਾਂ'
  },
  as: {
    callToBook: 'বুকিংৰ বাবে কল কৰক',
    partnerWithUs: 'আমাৰ সৈতে অংশীদাৰ হওক',
    customerSupport: 'গ্ৰাহક সেৱা',
    visitPackages: 'পেকেজ চাওক',
    logInSignUp: 'লগ ইন / ছাইন আপ',
    escapeIntoWild: 'প্ৰকৃতিৰ কোলাত বিচৰণ কৰক।',
    heroSubtitle: 'দাণ্ডেলীৰ বুকুত দুঃসাহসিক অভিযান, নদী, বন্যপ্ৰাণী আৰু অবিস্মৰণীয় মুহূৰ্ত।',
    explorePackages: 'পেকেজ অন্বেষণ কৰক',
    whereGoing: 'আপুনি ক’লৈ যাব বিচাৰে?',
    checkIn: 'চেক-ইন',
    checkOut: 'চেক-আউট',
    guests: 'অতিথি',
    searchResorts: 'ৰিছৰ্ট সন্ধান কৰক',
    language: 'ভাষা',
    selectLanguage: 'ভাষা বাছনি কৰক',
    indianLanguages: 'ভাৰতীয় ভাষাসমূহ',
    otherLanguages: 'অন্যান্য ভাষাসমূহ',
    internationalLanguages: 'আন্তঃৰাষ্ট্ৰীয় ভাষাসমূহ'
  },
  or: {
    callToBook: 'ବୁକିଂ ପାଇଁ କଲ୍ କରନ୍ତୁ',
    partnerWithUs: 'ଆମ ସହିତ ଯୋଡ଼ି ହୁଅନ୍ତୁ',
    customerSupport: 'ଗ୍ରାହକ ସେବା',
    visitPackages: 'ପ୍ୟାକେଜ୍ ଦେଖନ୍ତୁ',
    logInSignUp: 'ଲଗ୍ ଇନ୍ / ସାଇନ୍ ଅପ୍',
    escapeIntoWild: 'ପ୍ରକୃତିର କୋଳକୁ ଯାତ୍ରା କରନ୍ତୁ।',
    heroSubtitle: 'ଦାଣ୍ଡେଲିରେ ରୋମାଞ୍ଚ, ନଦୀ, ବନ୍ୟପ୍ରାଣୀ ଏବଂ ଅବିସ୍ମରଣୀୟ ମୁହୂର୍ତ୍ତ।',
    explorePackages: 'ପ୍ୟାକେଜ୍ ଖୋଜନ୍ତୁ',
    whereGoing: 'ଆପଣ କେଉଁଠାକୁ ଯାଉଛନ୍ତି?',
    checkIn: 'ଚେକ୍-ଇନ୍',
    checkOut: 'ଚେକ୍-ଆଉଟ୍',
    guests: 'ଅତିଥି',
    searchResorts: 'ରିସର୍ଟ ଖୋଜନ୍ତୁ',
    language: 'ଭାଷା',
    selectLanguage: 'ଭାଷା ଚୟନ କରନ୍ତୁ',
    indianLanguages: 'ଭାରତୀୟ ଭାଷା',
    otherLanguages: 'ଅନ୍ୟାନ୍ୟ ଭାଷା',
    internationalLanguages: 'ଆନ୍ତର୍ଜାତୀୟ ଭାଷା'
  },
  fr: {
    callToBook: 'Appelez pour réserver',
    partnerWithUs: 'Devenir Partenaire',
    customerSupport: 'Service Client',
    visitPackages: 'Voir les Séjours',
    logInSignUp: 'Connexion / Inscription',
    escapeIntoWild: 'Évadez-vous dans la nature.',
    heroSubtitle: 'Aventure, rivières, faune et moments inoubliables au cœur de Dandeli.',
    explorePackages: 'Explorer les Forfaits',
    whereGoing: 'Où souhaitez-vous aller ?',
    checkIn: 'Arrivée',
    checkOut: 'Départ',
    guests: 'Voyageurs',
    searchResorts: 'Rechercher des Resorts',
    language: 'Langue',
    selectLanguage: 'Choisir la langue',
    indianLanguages: 'Langues Indiennes',
    otherLanguages: 'Autres Langues',
    internationalLanguages: 'Langues Internationales'
  },
  de: {
    callToBook: 'Buchen per Telefon',
    partnerWithUs: 'Partner werden',
    customerSupport: 'Kundenservice',
    visitPackages: 'Angebote ansehen',
    logInSignUp: 'Anmelden / Registrieren',
    escapeIntoWild: 'Flucht in die Wildnis.',
    heroSubtitle: 'Abenteuer, Flüsse, Tierwelt und unvergessliche Momente im Herzen von Dandeli.',
    explorePackages: 'Pakete Entdecken',
    whereGoing: 'Wohin möchten Sie reisen?',
    checkIn: 'Anreise',
    checkOut: 'Abreise',
    guests: 'Gäste',
    searchResorts: 'Resorts Suchen',
    language: 'Sprache',
    selectLanguage: 'Sprache wählen',
    indianLanguages: 'Indische Sprachen',
    otherLanguages: 'Weitere Sprachen',
    internationalLanguages: 'Internationale Sprachen'
  },
  es: {
    callToBook: 'Llamar para reservar',
    partnerWithUs: 'Asóciese con nosotros',
    customerSupport: 'Atención al cliente',
    visitPackages: 'Ver Paquetes',
    logInSignUp: 'Iniciar sesión / Registro',
    escapeIntoWild: 'Escápate a la naturaleza.',
    heroSubtitle: 'Aventura, ríos, fauna y momentos inolvidables en el corazón de Dandeli.',
    explorePackages: 'Explorar Paquetes',
    whereGoing: '¿A dónde viajas?',
    checkIn: 'Entrada',
    checkOut: 'Salida',
    guests: 'Huéspedes',
    searchResorts: 'Buscar Resorts',
    language: 'Idioma',
    selectLanguage: 'Seleccionar idioma',
    indianLanguages: 'Idiomas Indios',
    otherLanguages: 'Más Idiomas',
    internationalLanguages: 'Idiomas Internacionales'
  },
  ar: {
    callToBook: 'اتصل للحجز',
    partnerWithUs: 'شارك معنا',
    customerSupport: 'خدمة العملاء',
    visitPackages: 'استعراض الباقات',
    logInSignUp: 'تسجيل الدخول / إنشاء حساب',
    escapeIntoWild: 'الهروب إلى الطبيعة البرية.',
    heroSubtitle: 'مغامرات، أنهار، حياة برية ولحظات لا تُنسى في قلب دانديلي.',
    explorePackages: 'استكشف الباقات',
    whereGoing: 'إلى أين وجهتك؟',
    checkIn: 'تسجيل الوصول',
    checkOut: 'تسجيل المغادرة',
    guests: 'الضيوف',
    searchResorts: 'ابحث عن المنتجعات',
    language: 'اللغة',
    selectLanguage: 'اختر اللغة',
    indianLanguages: 'اللغات الهندية',
    otherLanguages: 'لغات أخرى',
    internationalLanguages: 'اللغات الدولية'
  }
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  currentLanguageOption: LanguageOption;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('dandeli_language') as LanguageCode;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('dandeli_language', lang);
    } catch {
      // Ignored
    }
  };

  const currentLanguageOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const t = (key: string): string => {
    const langDict = TRANSLATIONS[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    return TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentLanguageOption,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
