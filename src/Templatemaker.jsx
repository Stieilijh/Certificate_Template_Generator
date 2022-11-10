import Template from "./Template";

export default function Templatemaker({ formData }) {
  const title = formData.title;
  const text = formData.text;
  const logos = formData.logos;
  const signatures = formData.signatures;

  const handleColourChange = () => {
    let certificate = document.getElementById("certificate");
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    certificate.style.backgroundColor = "#" + randomColor;
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
      <button onClick={handleColourChange}> Change Colour </button>
    </div>
  );
}
