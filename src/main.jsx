import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*

Design:

Data structure:
- Use an object to store all the CV details
- (Start with populated data for testing at least)

Level 1 - Application(none)
  - State - [cvDetails,setCvDetails] - all the CV
  - cbfn_updateSection

Level 2 - CVDisplay(cvDetails)
  - State - none

Level 2 - SectionInput(initialSectionDetails = cvDetails.personal)
  - State - [sectionDetails,setSectionDetails] = initialSectionDetails
  - cbfn_updateDetail("name") - update sectionDetails.name
  - Function - Edit - put section details in inputs
  - Function - Submit - cbfn_updateSection - update section in level 1

Level 3 - DetailInput(cvDetails.personal.name)
  <label>name
  <input>cbfn_updateDetail - cbfn - update state in level 2








*/
