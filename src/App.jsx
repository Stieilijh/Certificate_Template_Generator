import { useState } from "react";
import Form from "./Form";
import Templatemaker from "./Templatemaker";
import "./css/App.css";
export default function App() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const giveFormDataToApp = (e) => {
    setFormData(e);
    setSubmitted(true);
  };
  return (
    <div id="App">
      <h1>Certificate Template Generator</h1>
      {!submitted ? (
        <Form giveFormDataToApp={giveFormDataToApp} />
      ) : (
        <Templatemaker formData={formData} />
      )}
    </div>
  );
}
