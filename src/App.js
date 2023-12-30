import { useState, createContext } from "react";
import "./index.css";
import Head from "./Components/Head";
import Hero from "./Components/Hero";
import Forjson from "./Components/Forjson";
import Submit from "./Components/Submit";
import Response from "./Components/Response";
import Footer from "./Components/Footer";

export const AppContext = createContext();

function App() {
  const [url, setUrl] = useState("");
  const [requestValue, setRequestValue] = useState("get");
  const [jsonObj, setJsonObj] = useState("Json");
  const [response, setResponse] = useState("Your Response will be shown here!");

  return (
    <>
      <AppContext.Provider
        value={{
          url,
          setUrl,
          requestValue,
          setRequestValue,
          jsonObj,
          setJsonObj,
          response,
          setResponse,
        }}
      >
        <Head />
        <Hero />
        <Forjson />
        <Submit />
        <Response />
      </AppContext.Provider>
      <Footer />
    </>
  );
}

export default App;
