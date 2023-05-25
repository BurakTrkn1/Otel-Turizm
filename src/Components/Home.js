import React from "react";
import Slider from "react-slick";
import "../../src/App.css";
function Home() {
  return (
    <div className="home">
      <div className="containers">
        <br />
        <h2 className="titledbg centertx centerbg fixhei">Otellerimiz</h2>
        <p className="lowdesc">
          Her otelimizde , geniş ekran LED TV, uydu kanalları, çalışma masası ve
          minibar standart olarak sunulur.
          <br />
          Tertemiz, aydınlık ve şık banyolarda saç kurutma makinası ve 24 saat
          sıcak su bulunmakta.
        </p>
        <br />

        <div className="hotelContainer">
          <div
            className="col-md-12"
            // style="padding-left: 0px; padding-right:0px; text-align:center;"
            style={{
              color: "red",
              fontSize: "16px",
              paddingleft: "0px",
              paddingright: "0px",
              textalign: "center",
            }}
          >
            <div id="galcont">
              <div className="thumb">
                <a
                  className="thumbimg"
                  href="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d4/ea/1b/two-bedroom-water-pool.jpg?w=700&h=-1&s=1"
                >
                  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d4/ea/1b/two-bedroom-water-pool.jpg?w=700&h=-1&s=1" />
                </a>
              </div>
              <div className="thumb">
                <a
                  className="thumbimg"
                  href="https://images.destination2.co.uk/Hotels/giata/16556/water%20villla.jpg"
                >
                  <img src="https://images.destination2.co.uk/Hotels/giata/16556/water%20villla.jpg" />
                </a>
              </div>
              <div className="thumb">
                <a
                  className="thumbimg"
                  href="https://www.safestay.com/wp-content/uploads/2019/10/6-1.png"
                >
                  <img src="https://www.safestay.com/wp-content/uploads/2019/10/6-1.png" />
                </a>
              </div>
              <div className="thumb">
                <a
                  className="thumbimg"
                  href="https://a.loveholidays.com/images/holidays/ba3b4022456ba89da80cc72357f1f41029e9ad38/holidays/crete/malia/stelios-gardens-malia-0.jpg"
                >
                  <img src="https://a.loveholidays.com/images/holidays/ba3b4022456ba89da80cc72357f1f41029e9ad38/holidays/crete/malia/stelios-gardens-malia-0.jpg" />
                </a>
              </div>
              <div className="thumb">
                <a
                  className="thumbimg"
                  href="https://assets.sunwingtravelgroup.com/image/upload/f_auto,q_auto/sunwing-prod/HotelImages/NAS6DR/16x9/001.jpg"
                >
                  <img src="https://assets.sunwingtravelgroup.com/image/upload/f_auto,q_auto/sunwing-prod/HotelImages/NAS6DR/16x9/001.jpg" />
                </a>
              </div>
              <div className="thumb">
                <a
                  className="thumbimg"
                  href="https://frenchleaveresort.com/wp-content/uploads/2016/09/139A0722-1.jpg"
                >
                  <img src="https://frenchleaveresort.com/wp-content/uploads/2016/09/139A0722-1.jpg" />
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
