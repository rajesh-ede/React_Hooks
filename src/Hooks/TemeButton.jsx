import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider";

const TemeButton = ()=> {
    const {dark,toggle} = useContext(ThemeContext);

    return (
        <button onClick={toggle}  style={{
        backgroundColor: dark ? "#333" : "#ddd",
        color: dark ? "#fff" : "#000",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}>{dark ? " 🌙 drak Mode" : "☀️ Light Mood"}</button>
    )
}
export default TemeButton;