import TemeButton from "./TemeButton";
import ThemeProvider from "./ThemeProvider";

const UseContextHook = () => {
  return(
    <ThemeProvider>
        <TemeButton />
    </ThemeProvider>
  )
}
export default UseContextHook;