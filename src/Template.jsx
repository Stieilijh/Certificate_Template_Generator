import "./css/Template.css";
export default function Template({ title, logos, text, signatures }) {
  return (
    <div id="certificate">
      <Logos logos={logos} />
      <div id="titleDiv">{title}</div>
    </div>
  );
}

function Logos({ logos }) {
  if (logos.length == 0) {
    console.error("logo length 0");
    return <p>There's Some error with the logos</p>;
  }
  const imageUrl = URL.createObjectURL(logos[0]);
  return (
    <div id="logosDiv">
      <img src={imageUrl} className="logoImgs" />
    </div>
  );
}
