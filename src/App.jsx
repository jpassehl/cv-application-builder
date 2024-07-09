import "./App.css";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Education from "./components/Education/Education";
import Resume from "./components/Resume/Resume";
import { useState } from "react";

function App() {
  const [personalDetailsForm, setPersonalDetailsForm] = useState("");
  const [educationDetailsForm, setEducationDetailsForm] = useState("");

  console.log(Object.keys(personalDetailsForm).length !== 0);

  const handleSaveForm = (formMap) => {
    for (let key of formMap.keys()) {
      switch (key) {
        case "Personal Details":
          setPersonalDetailsForm(formMap.get(key));
        case "Education":
          setEducationDetailsForm(formMap.get(key));
        default:
          "";
      }
    }
  };

  return (
    <>
      <div className="app">
        <div className="form-section">
          <PersonalDetails handleSaveForm={handleSaveForm} />
          <Education handleSaveForm={handleSaveForm} />
        </div>
        <Resume
          personalDetails={personalDetailsForm}
          educationDetails={educationDetailsForm}
        />
      </div>
    </>
  );
}

export default App;
