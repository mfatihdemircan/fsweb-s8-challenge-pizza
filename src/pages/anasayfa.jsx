import React from "react";
import { useHistory } from "react-router-dom";
import "../style.css";

function Anasayfa() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/siparis");
  };

  return (
    <header className="header-giris">
      <img className="logo" src="public/assets/iteration-1/logo.svg" alt="logo" />
      <h2>fırsatı kaçırma</h2>
      <h1>Kod Acıktırır<br />Pizza, Doyurur</h1>
      <button className="btn-ilk" onClick={handleClick}>
        Acıktım
      </button>
    </header>
  );
}

export default Anasayfa;