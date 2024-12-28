import CloverImage from "../../assets/four-leaf-clover transparent.png";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>
            Hi <br />
            I'm <span className="highlight">Arjun</span>,
          </h1>
          <h2>Computer Science major @ UIUC</h2>
        </div>
        <div className="home-image">
          <img
            src={CloverImage}
            alt="Four Leaf Clover"
            className="clover-image"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
