import React from "react";

function Search() {
  return (
    <div>
      {" "}
      <div className="searchItem">
        <img
          src="https://www.bodrumholidayresort.com/content-image/galleries/auto-auto/113.jpg"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Bodrum</h1>
          <span className="siDistance">merkezden 500m ileride </span>
          <span className="siSubtitle">Stüdyo Daire - Klimalı</span>
          <span className="siFeatures">2 yetişkin + 1 çocuk 45 m²</span>
          <span className="siCancelOp">Ücretsiz iptal </span>
          <span className="siCancelOpSubtitle">
            Daha sonra iptal edebilirsiniz, bu yüzden bugün bu harika fiyatı
            yakalayın!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Harika</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$112</span>
            <span className="siTaxOp">Vergiler ve ücretler dahildir</span>
            <button className="siCheckButton">Rezervasyon</button>
            <a href="https://www.bodrumholidayresort.com/landing/?utm_source=adwords&utm_medium=search&utm_campaign=lokal-bodrum-tatil-duyarli&gclid=Cj0KCQjww4-hBhCtARIsAC9gR3aMk81PeIQzUZR6DfoxWZtIupmAMJ7TpFXqXHWFJ5rzLJy24RuPPb4aAqoyEALw_wcB">
              buradan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
