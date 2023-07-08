'use client';
import { useState } from "react";
import ThemeContext from "./ThemeContext";



function ThemeProviderContext ({ children }) {
  const [themeColor, setThemeColor] = useState("dark");
  function toogleTheme() {
    setThemeColor(themeColor === "dark" ? "light" : "dark");
  };


 return(

  <ThemeContext.Provider value={{ color: themeColor, toogleTheme }}>
      {children}
   </ThemeContext.Provider>
 );
}

export default ThemeProviderContext;