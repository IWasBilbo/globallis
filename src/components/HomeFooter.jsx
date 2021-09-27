import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const HomeFooter = () => {
  return (
    <footer className="bg-white py-10">
      <div className="mt-10">
        <img src={logo} alt="logo" className="object-fill mx-auto lg:ml-20" />
      </div>
      <div className="lg:ml-60 mt-16 text-center lg:text-left">
        <div className="grid grid-cols-none lg:grid-cols-3 gap-5">
          <div>
            <Link to="/articles">
              <h1 className="text-globallisBlue text-[42.44px] leading-[84.87px]">
                Articles
              </h1>
            </Link>
            <Link to="/">
              <p className="text-globallisBlue text-2xl leading-[46.3px]">
                Article #3
              </p>
            </Link>
            <Link to="/">
              <p className="text-globallisBlue text-2xl leading-[46.3px]">
                Article #2
              </p>
            </Link>
            <Link to="/">
              <p className="text-globallisBlue text-2xl leading-[46.3px]">
                Article #1
              </p>
            </Link>
          </div>
          <div>
            <Link to="/gallery">
              <h1 className="text-globallisBlue text-[42.44px] leading-[84.87px]">
                Gallery
              </h1>
            </Link>
            <Link to="/">
              <p className="text-globallisBlue text-2xl leading-[46.3px]">
                Event #3
              </p>
            </Link>
            <Link to="/">
              <p className="text-globallisBlue text-2xl leading-[46.3px]">
                Event #2
              </p>
            </Link>
            <Link to="/">
              <p className="text-globallisBlue text-2xl leading-[46.3px]">
                Event #1
              </p>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <h1 className="text-globallisBlue text-[42.44px] leading-[84.87px]">
                About
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex lg:ml-20 mt-20 lg:mt-36 justify-center lg:justify-start">
        <a href="https://www.facebook.com/" target="_blank">
          <p className="text-globallisBlue text-2xl font-bold mr-10">Fb</p>
        </a>
        <a href="http://www.instagram.com" target="_blank">
          <p className="text-globallisBlue text-2xl font-bold mr-10">lg</p>
        </a>
        <a href="http://www.youtube.com" target="_blank">
          <p className="text-globallisBlue text-2xl font-bold lg:mr-5">Yt</p>
        </a>
      </div>
    </footer>
  );
};

export default HomeFooter;
