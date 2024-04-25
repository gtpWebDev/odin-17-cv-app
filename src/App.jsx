import { useState } from "react";
import "./App.css";

const initialCVDetails = {
  personal: {
    name: "Glen Pearson",
    email: "glen@WebGLProgram",
    phone: "010292901",
  },
  // education: {
  //   name: "Glen Pearson2",
  //   email: "glen@WebGLProgram 2",
  //   phone: "010292901 2",
  // },
};

function App() {
  const [cvContent, setCvContent] = useState(initialCVDetails);

  return (
    <>
      <header>CV Application</header>
      <InputArea cvContent={cvContent} />
      <DisplayArea cvContent={cvContent} />
    </>
  );
}

const InputArea = ({ cvContent }) => {
  return (
    <aside>
      <h1>Overall Input Area</h1>
      <InputSection
        name="personal"
        initialSectionContent={cvContent.personal}
      />
      {/* <InputSection
        name="education"
        initialSectionContent={cvContent.education}
      /> */}
    </aside>
  );
};

const InputSection = ({ name, initialSectionContent }) => {
  const [sectionContent, setSectionContent] = useState(initialSectionContent);

  // add function to update a section detail
  // add an edit button
  // add a submit button

  return (
    <aside>
      <h1>Input Section</h1>
      <p>Section name: {name}</p>
      {/* <p>Part of data: {sectionContent.name}</p> */}
      <InputDetail name="name" data={sectionContent.name} />
      <InputDetail name="phone" data={sectionContent.phone} />
    </aside>
  );
};

const InputDetail = ({ name, data }) => {
  // should be label and input filed with onchange a cbfn in InputSection

  return (
    <p>
      {name}:{data}
    </p>
  );
};

const DisplayArea = ({ cvContent }) => {
  return (
    <main>
      <h2>CV Display</h2>
      <DisplaySection sectionData={cvContent.personal} />
      <DisplaySection sectionData={cvContent.personal} />
      <DisplaySection sectionData={cvContent.personal} />
    </main>
  );
};

const DisplaySection = ({ sectionData }) => {
  return (
    <>
      <h3>Display Section Header</h3>
      <p>{sectionData.name}</p>
      <p>{sectionData.phone}</p>
    </>
  );
};

export default App;
