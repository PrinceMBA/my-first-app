import React from "react";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Pizzatype from "./component/Pizzatype";
import Aboutpizza from "./component/Aboutpizza";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Aboutpizza />
        <Pizzatype />
        <Footer />
      </div>
    );
  }
}

export default App;
