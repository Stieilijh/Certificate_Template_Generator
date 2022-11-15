import "./css/Template.css";

export default function Template({ title, logos, text, signatures }) {
  return (
    <div id="certificate">
      <Logos logos={logos} />
      <div id="titleDiv">{title}</div>
      <div id="certifyText">This is to certify that</div>
      <br />
      <div id="textDiv">{text}</div>
      <Signatures signatures={signatures} />
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
function Signatures({ signatures }) {
  if (signatures.length == 0) {
    return <></>;
  }
  return (
    <div id="SignaturesDiv">
      {signatures.map((element, index) => {
        const imageUrl = URL.createObjectURL(element);
        return (
          <img
            src={imageUrl}
            key={"signature" + (index + 1)}
            id={"signature" + (index + 1)}
            className="signaturesImgs"
          />
        );
      })}
    </div>
  );
}
