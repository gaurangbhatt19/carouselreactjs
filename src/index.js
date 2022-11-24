import React from "react";
import { render } from "react-dom";
import Carouseldisplay from "./Carouseldisplay";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div>
    <Carouseldisplay />
  </div>
);

render(<App />, document.getElementById("root"));
