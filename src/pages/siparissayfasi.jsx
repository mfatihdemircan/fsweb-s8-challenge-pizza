import React, { useState } from "react";
import "../style.css";

const malzemelerListesi = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
  "Domates", "Misir", "Sucuk", "Jalepeno", "Sarimsak",
  "Biber", "Ananas", "Kabak"
];

function SiparisSayfasi() {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  const [not, setNot] = useState("");
  const [adet, setAdet] = useState(1);

  const malzemeFiyat = 5;
  const baseFiyat = 85.5;

  const handleMalzemeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      if (ekMalzemeler.length < 10) {
        setEkMalzemeler([...ekMalzemeler, value]);
      }
    } else {
      setEkMalzemeler(ekMalzemeler.filter(item => item !== value));
    }
  };

  const toplamTutar = (baseFiyat + ekMalzemeler.length * malzemeFiyat) * adet;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sipariş verildi!");
    
  };

  return (
    <div className="siparis-container">
      <h1>Teknolojik Yemekler</h1>
      <p>Anasayfa &gt; <b>Sipariş Oluştur</b></p>
      <h2>Position Absolute Acı Pizza</h2>
      <p><b>85.50₺</b> | 4.9 (200)</p>
      <p>
        Frontend Dev olarak hala position-absolute kullanıyorsan bu çok acı pizza tam sana göre...
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Boyut Seç *</label>
          <div>
            {["Küçük", "Orta", "Büyük"].map(opt => (
              <label key={opt}>
                <input
                  type="radio"
                  name="boyut"
                  value={opt}
                  checked={boyut === opt}
                  onChange={(e) => setBoyut(e.target.value)}
                  required
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Hamur Seç *</label>
          <select value={hamur} onChange={(e) => setHamur(e.target.value)} required>
            <option value="">Hamur Kalınlığı</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>

        <div>
          <label>Ek Malzemeler (5₺) <small>En fazla 10 adet</small></label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {malzemelerListesi.map((malzeme) => (
              <label key={malzeme}>
                <input
                  type="checkbox"
                  value={malzeme}
                  checked={ekMalzemeler.includes(malzeme)}
                  onChange={handleMalzemeChange}
                />
                {malzeme}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Sipariş Notu</label>
          <input
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={not}
            onChange={(e) => setNot(e.target.value)}
          />
        </div>

        <div style={{ margin: "20px 0" }}>
          <button type="button" onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</button>
          <span style={{ margin: "0 15px" }}>{adet}</span>
          <button type="button" onClick={() => setAdet(adet + 1)}>+</button>
        </div>

        <div>
          <h3>Sipariş Toplamı</h3>
          <p>Seçimler: {ekMalzemeler.length * malzemeFiyat}₺</p>
          <p><b>Toplam: {toplamTutar.toFixed(2)}₺</b></p>
        </div>

        <button type="submit" style={{ backgroundColor: "#FDC913", padding: "10px 30px" }}>
          SİPARİŞ VER
        </button>
      </form>
    </div>
  );
}

export default SiparisPage;
