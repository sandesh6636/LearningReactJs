import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>HEHEEEE</h1>
    </div>
  );
}

// This wont work cuz we have made a cutom render for this , and we are usign .render() of react so react epxect somehting else
const customElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  content: "Click me to visit google",
};

//Another element
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visite google
  </a>
);

//We can make new elemet but how parameter are needed to pass are predefined so
const username = "Sandesh";
const newElement = React.createElement(
  "a", //tag
  { href: "https://www.google.com", target: "_blank" }, //object
  "Click me to visit google",
  username
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* <MyApp /> */
  /* MyApp() this is function which react wiill compile like we make in custom react */
  // anotherElement
  newElement
);
