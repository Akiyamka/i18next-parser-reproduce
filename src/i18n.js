import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

const translationBackendOptions = {
  loadPath: '/public/locales/{{lng}}.json',
  addPath: '/missing-translation',
  allowMultiLoading: true,
  crossDomain: false,
  withCredentials: false,
}

const detectorOptions = {
    order: ['querystring', 'cookie', 'localStorage', 'navigator'],
    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18nextLng',
    lookupLocalStorage: 'i18nextLng',

    // cache user language on
    caches: ['localStorage', 'cookie'],
}

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    saveMissing: false,
    // missingKeyHandler: missingKeyHandler,
    backend: translationBackendOptions,
    detector: detectorOptions,
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // ??
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;