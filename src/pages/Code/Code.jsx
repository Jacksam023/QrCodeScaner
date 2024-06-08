import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import "./style.css";
import close from "../../images/close.svg";
import { Link, useNavigate } from "react-router-dom";

export const Code = () => {
  const navigate = useNavigate();

  const [isEnabled, setEnabled] = useState(false)
  const [qrMessage, ssetQrMessage] = useState("")
  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 200, height: 200 } };
    const html5QrCode = new Html5Qrcode("qrCodeContainer");

    const qrScanerStop = () => {
      if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode.stop()
          .then(() => console.log("Scaner stop"))
          .catch(() => console.log("Scaner error"))
      }
    }
    const qrCodeSuccess = (decodedText) => {
      ssetQrMessage(decodedText);
      setEnabled(false)
    }
    if (isEnabled) {
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccess);
      ssetQrMessage('')
    } else {
      qrScanerStop()
    }

    return (() => {
      qrScanerStop()
    })
  }, [isEnabled])
  return (
    <div className="scaner">
      <button className="close__button" onClick={() => navigate("/")}>
        <img src={close} alt="" />
      </button>
      <h3>Поместите QR-код в рамку</h3>
      <div id="qrCodeContainer"></div>
      {qrMessage && <div className="qr_message"><Link to={qrMessage}>{qrMessage}</Link></div>}
      <button className="start_button" onClick={() => setEnabled(!isEnabled)}>
        {isEnabled ? "on" : "off"}
      </button>
    </div>


  );
};