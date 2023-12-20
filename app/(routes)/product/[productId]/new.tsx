import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for the context
type LangContextType = {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context with an initial empty object
const LangContext = createContext<LangContextType | undefined>(undefined);

// Helper function to use the context
const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

const ComponentA = () => {
  const { lang } = useLang();
  return <div>This is Component A. Current language: {lang}</div>;
};

const ComponentB = () => {
  const { lang } = useLang();
  return <div>This is Component B. Current language: {lang}</div>;
};

const App = () => {
  // State to store the "lang" value
  const [lang, setLang] = useState("");

  useEffect(() => {
    // Retrieve the "lang" value from local storage on component mount
    const storedLang = localStorage.getItem("lang");
    setLang(storedLang || "default");
  }, []);

  // Function to handle language switch
  const handleLangSwitch = (newLang: string) => {
    setLang(newLang);
    // Store the new "lang" value in local storage
    localStorage.setItem("lang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div>
        {/* Render the chosen component */}
        <ComponentA />
        <ComponentB />

        {/* Button to switch language */}
        <button onClick={() => handleLangSwitch("en")}>
          Switch to English
        </button>
        <button onClick={() => handleLangSwitch("es")}>
          Switch to Spanish
        </button>
      </div>
    </LangContext.Provider>
  );
};

export default App;
