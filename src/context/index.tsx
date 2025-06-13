"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeName, ThemeContextType } from '@/types';
import { themes } from "@/Styles/theme"

const defaultValues = {
  //sections: ['ajuda', 'sobre', 'livros', 'galeria', 'contato'],
  //titles: ['Ajuda', 'Sobre', 'Livros', 'Galeria', 'Contato'],
  //sections: ['ajuda', 'canal'],
  //titles: ['Ajuda', 'Canal'],
  sections: ['ajuda'],
  titles: ['Ajuda'],
  defaultTitle: "Canal do Pirulla",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const Context = createContext(defaultValues);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  useEffect(() => {
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeName | null;
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
  }, []);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
    localStorage.setItem("theme", name);
  };

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      <Context.Provider value={defaultValues}>
        {children}
      </Context.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export const useSections = () => useContext(Context);