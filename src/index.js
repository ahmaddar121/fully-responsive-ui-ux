// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));



// New Method
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./index.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

