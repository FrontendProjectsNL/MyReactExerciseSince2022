// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      helloMessage: "Hello all, welcome to my website",
      articles: "Articles",
      login: "Log in",
      username: "Username",
      password: "Password",
      loginButton: "Login",
      aboutMessage: "Hello, this is my about page",
    },
  },
  nl: {
    translation: {
      helloMessage: "Hallo allemaal, welkom op mijn website",
      articles: "Artikelen",
      login: "Inloggen",
      username: "Gebruikersnaam",
      password: "Wachtwoord",
      loginButton: "Inloggen",
      aboutMessage: "Hallo, dit is mijn over-pagina",
    },
  },
  de: {
    translation: {
      helloMessage: "Hallo alle, willkommen auf meiner Website",
      articles: "Artikel",
      login: "Anmelden",
      username: "Benutzername",
      password: "Passwort",
      loginButton: "Anmelden",
      aboutMessage: "Hallo, das ist meine Über-Seite",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
