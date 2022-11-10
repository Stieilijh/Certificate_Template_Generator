import { useState } from "react";

export default function Form({ giveFormDataToApp }) {
  const [logos, setLogos] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [signatures, setSignatures] = useState([]);
  const handleLogoInputChange = (e) => {
    if (e.target.files.length > 4) {
      alert("Please only upload upto a maximum of 4 logos");
      document.getElementById("logosInput").value = "";
      return;
    }
    for (let i of e.target.files) {
      if (
        !(
          i.type == "image/jpeg" ||
          i.type == "image/jpg" ||
          i.type == "image/png"
        )
      ) {
        alert(
          "Please add an image from the supported formats.\nSupported formats are jpg(or jpeg) and png."
        );
        document.getElementById("logosInput").value = "";
        return;
      }
    }
    setLogos(e.target.files);
  };
  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTextInputChange = (e) => {
    setText(e.target.value);
  };
  const handleSignaturesInputChange = (e) => {
    if (e.target.files.length > 3) {
      alert("Please only upload upto a maximum of 3 signatures");
      document.getElementById("signaturesInput").value = "";
      return;
    }
    for (let i of e.target.files) {
      if (
        !(
          i.type != "image/jpeg" ||
          i.type != "image/jpg" ||
          i.type != "image/png"
        )
      ) {
        alert(
          "Please add an image from the supported formats.\nSupported formats are jpg(or jpeg) and png."
        );
        document.getElementById("signaturesInput").value = "";
        return;
      }
    }
    setSignatures(e.target.files);
  };

  const handleSubmitForm = (e) => {
    if (logos.length == 0) {
      alert("Please add the logos.\nThey are required for any certificate.");
      return;
    }
    if (title == "") {
      alert("Please add a title.\nIt are required for any certificate.");
      return;
    }
    if (text == "") {
      alert("Please add the text.\nIt are required for any certificate.");
      return;
    }
    const formData = {
      logos: [...logos],
      title,
      text,
      signatures: [...signatures],
    };
    giveFormDataToApp(formData);
  };

  return (
    <div id="FormDiv">
      <h2>Fill the form!!</h2>
      <form id="FormObject">
        <p>
          Upload the logos that should be at the top of the certificate*(Maximum
          of four)
        </p>
        <input
          id="logosInput"
          type="file"
          multiple
          onChange={handleLogoInputChange}
          accept="image/*"
        />
        <p>Title for the certificate*</p>
        <input
          id="titleInput"
          type="text"
          autoComplete="off"
          placeholder="Title"
          onChange={handleTitleInputChange}
          maxLength="40"
        />
        <p>Enter the text to be written in the certificate*</p>
        <input
          id="textInput"
          type="text"
          autoComplete="off"
          placeholder=" Text"
          onChange={handleTextInputChange}
          maxLength="100"
        />
        <p>Signatures(Maximum of three)</p>
        <input
          id="signaturesInput"
          type="file"
          multiple
          onChange={handleSignaturesInputChange}
          accept="image/*"
        />
        <br />
        <br />
        <button type="button" onClick={handleSubmitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}
