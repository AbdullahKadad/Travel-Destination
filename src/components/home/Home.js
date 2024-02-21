import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import "./Home.css"
import "../header/Header.css"
import "../Navbar/Navbar.css"
import "../tours/Tours.css"
import "../tours/tour/Tour.css"
import "../footer/Footer.css"

function Home() {
  return (
    <>
      <Header />
      <main className="main">
      <Tours />
      </main>
      <Footer />
    </>
  );
}

export default Home;
