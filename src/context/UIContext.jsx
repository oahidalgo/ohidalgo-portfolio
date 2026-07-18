import { createContext, useEffect, useState } from 'react';
import content from '../data/content';

export const UIContext = createContext();

function getInitial(key, fallback, allowed) {
  const stored = localStorage.getItem(key);
  return stored && allowed.includes(stored) ? stored : fallback;
}

function UIProvider({ children }) {
  const [lang, setLangState] = useState(() =>
    getInitial('lang', 'es', ['es', 'en'])
  );
  const [theme, setTheme] = useState(() =>
    getInitial('theme', 'light', ['light', 'dark'])
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => setLangState(next);
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const value = {
    lang,
    setLang,
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    t: content[lang],
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export { UIProvider };
