import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, serUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const generateQRCode = () => {
    QRCode.toDataURL(url,{
      width:800,
      margin:2,
      color:{
        dark: '#305080ff',
      }
    },(err, url) => {
      if (err) return console.log(err);

      setQrcode(url);
    });
  };
  return (
    <div className="App">
      <h1> QR Code Generator </h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt) => serUrl(evt.target.value)}
      />
      <button onClick={generateQRCode}> Generate </button>
      {qrcode && (
        <>
          <img src={qrcode} alt="" />
          <a href={qrcode} downloade="qrcode.png">
            {" "}
            Download{" "}
          </a>
        </>
      )}
    </div>
  );
}

export default App;
