import type { Service, TrustItem, WhyUsItem, PriceCategory, Review, ContactInfo, NavLink, GalleryItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#preco', label: 'Prečo my' },
  { href: '#cennik', label: 'Cenník' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const TRUST_ITEMS: TrustItem[] = [
  { icon: 'check', number: '500+', label: 'Opravených zariadení' },
  { icon: 'star', number: '4.9', label: 'Google hodnotenie' },
  { icon: 'shield', number: '6 mes.', label: 'Záruka na opravu' },
  { icon: 'money', number: '0 €', label: 'Diagnostika zadarmo' },
];

export const SERVICES: Service[] = [
  { icon: 'phone', title: 'Mobilné telefóny', description: 'Výmena displeja, batérie, konektorov. Softvérové opravy a obnova dát.', priceFrom: 'od 15 €' },
  { icon: 'laptop', title: 'Notebooky', description: 'Čistenie, výmena termopasty, oprava napájania, klávesnice, systému.', priceFrom: 'od 20 €' },
  { icon: 'tablet', title: 'Tablety', description: 'Diagnostika, softvérové aj hardvérové opravy. iPad, Samsung, Lenovo.', priceFrom: 'od 20 €' },
  { icon: 'headphones', title: 'Bluetooth zariadenia', description: 'Slúchadlá, reproduktory, hands-free. Oprava nabíjania a párovania.', priceFrom: 'od 10 €' },
  { icon: 'robot', title: 'Robotické vysávače', description: 'Oprava senzorov, batérií, pohonov. Xiaomi, Roborock, iRobot.', priceFrom: 'od 25 €' },
  { icon: 'gear', title: 'Ďalšia elektronika', description: 'Malé spotrebiče, príslušenstvo, moderné smart zariadenia a viac.', priceFrom: 'podľa dohody' },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  { num: '01', title: 'Diagnostika zadarmo', description: 'Zaplatíte až vtedy, keď sa rozhodnete pre opravu.' },
  { num: '02', title: 'Pracujeme na výsledok', description: 'Cieľom je vždy plne funkčné zariadenie.' },
  { num: '03', title: 'Aj zložité opravy', description: 'Venujeme sa aj náročným opravám vrátane mikrolétkovania.' },
  { num: '04', title: 'Rýchlo a spoľahlivo', description: 'Väčšinu zariadení vybavíme v čo najkratšom čase.' },
  { num: '05', title: 'Férové ceny', description: 'Cenovo dostupný servis bez skrytých poplatkov.' },
  { num: '06', title: '6 mesiacov záruka', description: 'Na každú opravu poskytujeme plnú záruku.' },
];

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    icon: 'phone',
    category: 'Mobilné telefóny',
    items: [
      { service: 'Výmena displeja', cost: 'od 35 €' },
      { service: 'Výmena batérie', cost: 'od 15 €' },
      { service: 'Výmena konektora', cost: 'od 20 €' },
      { service: 'Softvérová oprava', cost: 'od 15 €' },
    ],
    note: '* Ceny vrátane práce, bez náhradných dielov',
  },
  {
    icon: 'laptop',
    category: 'Notebooky',
    items: [
      { service: 'Čistenie + termopasta', cost: 'od 25 €' },
      { service: 'Oprava napájania', cost: 'od 30 €' },
      { service: 'Výmena klávesnice', cost: 'od 35 €' },
      { service: 'Inštalácia OS', cost: 'od 20 €' },
    ],
    note: '* Ceny vrátane práce, bez náhradných dielov',
  },
  {
    icon: 'gear',
    category: 'Ostatné zariadenia',
    items: [
      { service: 'Tablety', cost: 'od 20 €' },
      { service: 'Bluetooth zariadenia', cost: 'od 10 €' },
      { service: 'Robotické vysávače', cost: 'od 25 €' },
      { service: 'Smart zariadenia', cost: 'podľa dohody' },
    ],
    note: '* Konečnú cenu určíme po diagnostike',
  },
];

export const REVIEWS: Review[] = [
  { stars: 5, text: 'Rýchla oprava telefónu, výmena displeja do 2 hodín. Výborná komunikácia a férová cena. Odporúčam!', initials: 'MK', name: 'Marek K.', device: 'iPhone 13 — výmena displeja' },
  { stars: 5, text: 'Notebook bol pomalý a hučal. Po čistení a výmene termopasty je ako nový. Ďakujem!', initials: 'PH', name: 'Peter H.', device: 'ASUS ROG — čistenie' },
  { stars: 5, text: 'Opravili mi robotický vysávač, ktorý inde odmietli. Diagnostika zadarmo a cena veľmi príjemná.', initials: 'JN', name: 'Jana N.', device: 'Xiaomi Roborock — senzor' },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: 'location', label: 'Adresa', value: 'Trenčín, Slovensko' },
  { icon: 'phone', label: 'Telefón', value: '+421 900 000 000' },
  { icon: 'clock', label: 'Otváracie hodiny', value: 'Pon–Pia: 9:00–18:00 | Sob: 9:00–13:00' },
  { icon: 'email', label: 'E-mail', value: 'info@ljservis.sk' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { label: 'Oprava displeja iPhone', large: true },
  { label: 'Výmena batérie' },
  { label: 'Čistenie notebooku' },
  { label: 'Oprava konektora', large: true },
  { label: 'Mikrolétkovanie' },
];

export const WHATSAPP_NUMBER = '421900000000';
export const SITE_NAME = 'LJ Servis';
export const SITE_TAGLINE = 'Servis a oprava elektroniky — rýchlo a spoľahlivo';
export const PHONE_NUMBER = '+421 900 000 000';
