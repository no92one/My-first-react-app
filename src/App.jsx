import Router from "./components/Router.jsx";
import { GlobalProvider } from "./GlobalContext.jsx";

export default function App() {
  return <>
    <GlobalProvider>
      <Router />
    </GlobalProvider>
    </>
}
