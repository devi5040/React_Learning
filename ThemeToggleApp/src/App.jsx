import Page from "./components/Page";
import ThemeContextProvider from "./store/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <Page />{" "}
    </ThemeContextProvider>
  );
}

export default App;
