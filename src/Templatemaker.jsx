import Template from "./Template";
import "./css/Templatemaker.css";
import domtoimage from "dom-to-image";
import { useState } from "react";

const TOTAL_NUMBER_OF_TEMPLATES = 2;

export default function Templatemaker({ formData }) {
  const [imageNo, setImageNo] = useState(1);
  const title = formData.title;
  const text = formData.text;
  const logos = formData.logos;
  const signatures = formData.signatures;

  //handle buttons
  const handleBackgroundImageNext = () => {
    if (imageNo == TOTAL_NUMBER_OF_TEMPLATES) return;
    setImageNo(imageNo + 1);
    setBackgroundImage();
  };
  const handleBackgroundImagePrevious = () => {
    if (imageNo == 1) return;
    setImageNo(imageNo - 1);
    setBackgroundImage();
  };
  const setBackgroundImage = () => {
    const certificate = document.getElementById("certificate");
    certificate.style.backgroundImage =
      "url(./templates/certificate" + imageNo + ".jpg)";
    certificate.style.backgroundSize = "100%";
  };
  const handleTextColourChange = (e) => {
    const certificate = document.getElementById("certificate");
    certificate.style.color = e.target.value;
  };

  const handleDownloadImage = () => {
    const certificate = document.getElementById("certificate");
    s;
    domtoimage.toJpeg(certificate, { quality: 1.0 }).then(function (dataUrl) {
      let link = document.createElement("a");
      link.download = title + "Certificate.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <div id="templateMaker">
      <h2>Select a template which looks good to you</h2>
      <Template
        title={title}
        text={text}
        logos={logos}
        signatures={signatures}
      />
      <div id="templateAndButtonsDiv">
        <button onClick={handleBackgroundImagePrevious}>&lt;</button>
        <button onClick={handleBackgroundImageNext}>&gt;</button>
      </div>
      <input type="color" onChange={handleTextColourChange} />
      <button onClick={handleDownloadImage}> Download Image </button>
      <div className="dropdown">
        <button className="dropbtn">Font</button>
        <div className="dropdown-content">
          <button
            onClick={() =>
              (document.getElementById("certificate").style.fontFamily =
                "Times new Roman")
            }
          >
            Times new Roman
          </button>
          <button
            onClick={() =>
              (document.getElementById("certificate").style.fontFamily =
                "Calibri")
            }
          >
            Calibri
          </button>
          <button
            onClick={() =>
              (document.getElementById("certificate").style.fontFamily = "Sans")
            }
          >
            sans
          </button>
        </div>
      </div>
    </div>
  );
}
