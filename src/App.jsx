import React from "react";
import * as ReactDOM from 'react-dom/client';
import StyledSearchBar from "./components/StyledSearchBar";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: common</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <StyledSearchBar />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
