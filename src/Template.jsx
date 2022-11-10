import "./css/Template.css";
export default function Template({ title, logos, text, signatures }) {
  return (
    <div id="certificate">
      <Logos logos={logos} />
      <div id="titleDiv">{title}</div>
      <div id="certifyText">This is to certify that</div>
      <br />
      <div i="text">{text}</div>
    </div>
  );
}

function Logos({ logos }) {
  if (logos.length == 0) {
    console.error("logo length 0");
    return <p>There's Some error with the logos</p>;
  }
  return (
    <div id="logosDiv">
      {logos.map((element, index) => {
        const imageUrl = URL.createObjectURL(element);
        return (
          <img
            src={imageUrl}
            key={"logo" + (index + 1)}
            id={"logo" + (index + 1)}
            className="logoImgs"
          />
        );
      })}
    </div>
  );
}
