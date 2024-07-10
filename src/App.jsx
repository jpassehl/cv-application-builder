import "./App.css";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Education from "./components/Education/Education";
import Resume from "./components/Resume/Resume";
import { useState } from "react";

function App() {
  const [formMap, setFormMap] = useState(new Map());

  const handleSaveForm = (str, obj) => {
    setFormMap((map) => new Map(map.set(str, obj)));
  };

  return (
    <>
      <div className="app">
        <div className="form-section">
          <PersonalDetails handleSaveForm={handleSaveForm} formMap={formMap} />
          <Education handleSaveForm={handleSaveForm} formMap={formMap} />
        </div>
        <Resume formMap={formMap} />
      </div>
    </>
  );
}

export default App;
