import { useFonts } from "expo-font";
import { createContext, useContext, useEffect } from "react";


export const FontContext = createContext();

const FontProvider = ({children}) => {
  
  /**
   * Create personnalised fonts to use with texts and importants infos : 
   * "Unna Regular",
   * "Unna Bold",
   * "Unna Bold Italic",
   * "Unna Italic"
   * 
   * For titles fontFamily, keep the font :
   * fontFamily: system-ui,
   * 
   * Exemple of use in stylesheet :
   * fontFamily:"Unna Regular",
   * 
   * "Unna Regular" is personnalised font. Roboto was the default Android Font and San Francisco was the default IOS Font.
   */
  const [loadedFonts, errorFonts] = useFonts({
    "Unna Regular": require("@/assets/fonts/Unna-Regular.ttf"),
    "Unna Italic": require("@/assets/fonts/Unna-Italic.ttf"),
    "Unna Bold Italic": require("@/assets/fonts/Unna-BoldItalic.ttf"),
    "Unna Bold": require("@/assets/fonts/Unna-Bold.ttf"),
  });

  useEffect(() => {
  }, [loadedFonts, errorFonts]);

  if (!loadedFonts) return null

  return(
    <FontContext.Provider value={{
      loadedFonts, 
      errorFonts
    }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFontContext = () => useContext(FontContext);

export default FontProvider;