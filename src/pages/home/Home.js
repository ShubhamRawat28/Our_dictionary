import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Footer from "../../components/footer/Footer";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Footer/>
    </div>
  );
};

export default Home;