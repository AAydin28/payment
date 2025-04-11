import React, { useState } from "react";
// CSS dosyasını unutma
import "./App.css";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  //new 2
  const [cvv, setCvv] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      Kart Üzerindeki İsim: ${cardName}
      Kart Numarası: ${cardNumber}
      Son Kullanma: ${expiryMonth}/${expiryYear}
      Güvenlik Kodu: ${cvv}
    `);
    setCardName("");
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvv("");
  };

  return (
    <div className="form-container">
      <h2>Ödeme Bilgileri</h2>
      <p>Kredi kartı bilgilerinizi giriniz</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Kart Üzerindeki İsim</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Ahmet Yılmaz"
          />
        </div>
        <div className="form-group">
          <label>Kart Numarası</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => {
              let value = e.target.value;
              value = value.replace(/\D/g, "");
              value = value.substring(0, 16);
              const formatted = value.replace(/(.{4})/g, "$1 ").trim();
              setCardNumber(formatted);
            }}
            placeholder="0000 0000 0000 0000"
            maxLength={19}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Ay</label>
            <select
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            >
              <option value="">AA</option>
              {months.map((m) => (
                <option key={m} value={m.toString().padStart(2, "0")}>
                  {m.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Yıl</label>
            <select
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            >
              <option value="">YY</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Güvenlik Kodu</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength={4}
            />
          </div>
        </div>

        <button type="submit">Şimdi Öde</button>
      </form>
    </div>
  );
};

export default PaymentForm;
