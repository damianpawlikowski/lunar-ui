import { createI18n } from "vue-i18n";

// TODO: Export translations to external JSON files
// This looks promising: https://github.com/intlify/vue-i18n-loader

const messages = {
  en: {
    news: "News",
    highscores: "Highscores",
    login: "Log in",
    createAccount: "Create account",
    account: "Account",
    logout: "Log out",
    footer: {
      copyright: "All rights reserved",
    },
    level: "Level",
    magic: "Magic",
    fist: "Fist fighting",
    club: "Club fighting",
    sword: "Sword fighting",
    axe: "Axe fighting",
    dist: "Dist fighting",
    shielding: "Shielding",
    fishing: "Fishing",
    all: "All",
    sorcerer: "Sorcerer",
    druid: "Druid",
    paladin: "Paladin",
    knight: "Knight",
    name: "Name",
    vocation: "Vocation",
    accountInformation: "Account information",
    premiumCoins: "Premium Coins",
    free: "Free",
    premium: "Premium",
    changePassword: "Change password",
    tickets: "Tickets",
    characters: "Characters",
    createCharacter: "Create character",
    title: "Title",
    type: "Type",
    date: "Date",
    status: "Status",
    createTicket: "Create ticket",
    top5Players: "Top 5 players",
    accountLogin: "Account Log in",
    password: "Password",
    signUp: "Sign up",
    body: "Body",
    undefined: "", // Ugly hack.
  },
  pl: {
    news: "Aktualności",
    highscores: "Ranking",
    login: "Zaloguj się",
    createAccount: "Utwórz konto",
    account: "Konto",
    logout: "Wyloguj się",
    footer: {
      copyright: "Wszelkie prawa zastrzeżone",
    },
    level: "Poziom",
    magic: "Magia",
    fist: "Walka pięścią",
    club: "Walka maczugą",
    sword: "Walka mieczem",
    axe: "Walka toporem",
    dist: "Walka wręcz",
    shielding: "Obrona tarczą",
    fishing: "Wędkarstwo",
    all: "Wszystkie",
    sorcerer: "Mag",
    druid: "Druid",
    paladin: "Paladyn",
    knight: "Rycerz",
    name: "Imię",
    vocation: "Powołanie",
    accountInformation: "Informacje o koncie",
    premiumCoins: "Monety Premium",
    free: "Darmowe",
    premium: "Premium",
    changePassword: "Zmień hasło",
    tickets: "Bilety",
    characters: "Postacie",
    createCharacter: "Utwórz postać",
    title: "Tytuł",
    type: "Rodzaj",
    date: "Data",
    status: "Status",
    createTicket: "Utwórz bilet",
    top5Players: "5 najlepszych graczy",
    accountLogin: "Logowanie do konta",
    password: "Hasło",
    signUp: "Zarejstruj się",
    body: "Treść",
    undefined: "",
  },
};

const i18n = createI18n({
  locale: "pl",
  fallbackLocale: "en",
  messages,
});

export default i18n;
