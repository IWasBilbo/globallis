import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router";
import './styles/output.css'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HomeFooter from "./components/HomeFooter";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/Footer";
import ArticlesPage from "./pages/ArticlesPage";
import About from "./pages/AboutPage";
import Mailing from "./pages/MailingPage";
import Error from "./pages/ErrorPage";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/gallery" exact component={GalleryPage} />
        <Route path="/articles" exact component={ArticlesPage} />
        <Route path="/about" exact component={About} />
        <Route path="/mailing" exact component={Mailing} />
        <Route path="/mailing" exact component={Mailing} />
        <Route path="*" component={Error} />
      </Switch>
      {location.pathname === '/' ? (
        <HomeFooter />
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
