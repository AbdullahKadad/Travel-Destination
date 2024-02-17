import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import './Home.css';
import '../header/Header.css';
import '../tours/Tours.css';
import '../footer/Footer.css';

const data = require("../../data/db.json");
function Home() {
  return (
    <>
      <Header />
      <main>
        <h3 className="h3">Most visited cities around the world:</h3>
        <div className="main">
        {data.map((e) => {
          return <Tours name={e.name} image={e.image}/>;
        })}
        </div>
        
      </main>

      <Footer />
    </>
  );
}

export default Home;
