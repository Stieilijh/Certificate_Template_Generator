import Template from "./Template";

export default function Templatemaker({ formData }) {
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
    certificate.style.backgroundImage =
      "url(src/assets/templates/certificate4.jpeg)";
    certificate.style.backgroundSize = "100%";
  };

  const handleTextColourChange = () => {
    const certificate = document.getElementById("certificate");
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    certificate.style.color = "#" + randomColor;
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
      <button onClick={handleTextColourChange}>Change Text Colour </button>
    </div>
  );
}
