import {  createContext, useEffect, useState } from "react"


export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
   
    const [dark,setDark] = useState(false);
useEffect(() => {
   document.body.style.backgroundColor = dark ? "#1c1919ff" : "#ffffff";
   document.body.style.color = dark ? "#f1efefff" : "#121212";
   document.body.style.transition = "all 0.4s ease";
},[dark])

    return (
        <ThemeContext.Provider value={{dark, toggle:() => setDark(!dark)}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider;