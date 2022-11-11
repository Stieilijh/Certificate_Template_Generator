import Template from "./Template";
import domtoimage from "dom-to-image";
import { useState } from "react";

export default function Templatemaker({ formData }) {
  const [imageNo, setImageNo] = useState(1);
  const title = formData.title;
  const text = formData.text;
  const logos = formData.logos;
  const signatures = formData.signatures;

  const handleColourChange = () => {
    const certificate = document.getElementById("certificate");
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    certificate.style.backgroundImage = "";
    certificate.style.backgroundColor = "#" + randomColor;
  };
  const handleBackgroundImageChange = () => {
    const certificate = document.getElementById("certificate");
    if (imageNo == 1) {
      setImageNo(2);
    } else {
      setImageNo(1);
    }
    certificate.style.backgroundImage =
      "url(./templates/certificate" + imageNo + ".jpg)";
    certificate.style.backgroundSize = "100%";
  };

  const handleTextColourChange = () => {
    const certificate = document.getElementById("certificate");
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    certificate.style.color = "#" + randomColor;
  };

  const handleDownloadImage = () => {
    const certificate = document.getElementById("certificate");
    domtoimage.toJpeg(certificate, { quality: 1.0 }).then(function (dataUrl) {
      var link = document.createElement("a");
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
      <button onClick={handleColourChange}> Change Background Colour </button>
      <button onClick={handleBackgroundImageChange}>
        Change Background Image
      </button>
      <button onClick={handleTextColourChange}> Change Text Colour </button>
      <button onClick={handleDownloadImage}> Download Image </button>
    </div>
  );
}
