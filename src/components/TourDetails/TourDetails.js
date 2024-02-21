import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./TourDetails.css"
import "../header/Header.css";
import "../Navbar/Navbar.css";
import "../footer/Footer.css";
const data = require("../../data/db.json");

function TourDetails() {
  const { id } = useParams();
  const filteredTour = data.filter((tour) => tour.id === id);
  const [fullDescription, setFullDescription] = useState(false);
  const toggleDes = () => {
    setFullDescription(!fullDescription);
  };
  return (
    <>
      <Header />
      <main className="tour-main">
        {/* {} */}
        <div className="head">
          <h2>Tour Destination</h2>
          <div className="details">
            <p>ID : {filteredTour[0].id}</p>
            <p>Name : {filteredTour[0].name}</p>
            <p>Price : {filteredTour[0].price}</p>
          </div>
        </div>
        {/* {} */}
        <div className="info">
          <p>
            {fullDescription
              ? filteredTour[0].info
              : filteredTour[0].info.slice(0, 300)}
            {!fullDescription && "..."}
          </p>
          <button onClick={toggleDes}>
            {fullDescription ? "See less" : "See more"}
          </button>
        </div>
        {/* {} */}
        <div className="img">
          <img src={filteredTour[0].image} alt={filteredTour[0].name} />
        </div>
      </main>
      <Footer />
    </>
  );
}
export default TourDetails;
