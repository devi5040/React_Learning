import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContextProvider";

export default function Header() {
  const { handleBtnClick } = useContext(ThemeContext);
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={handleBtnClick}>Toggle Theme</button>
    </header>
  );
}
