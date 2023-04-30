import Alert from "./Comp/Alert";
import Button from "./Comp/Button";
import ListGroup from "./Comp/ListGroup";
import React, { useState } from "react";
const educations = [
  "2021 - present : Ph.D. Mechanical Engineering (Dynamic and Control) at University of Tehran, Iran (Grade Point Average: 19.97/20)",
  "2018 - 2021 : M.Sc. Mechanical Engineering (Solid Mechanics) at University of Tehran, Iran (Grade Point Average: 18.79/20)",
  "2014 - 2018 : B.Sc. Mechanical Engineering at University of Tehran, Iran (Grade Point Average: 18.11/20)",
  "2010 - 2014 : Diploma in Mathematics and Physics (Grade Point Average: 19.96/20)",
];
const we = [
  "Fall 2022 : Teaching Assistant for the Artificial Intelligence Course at Mechanical Engineering Department, University of Tehran",
  "January 2022 – Present : Research Assistant at AI (Artificial Intelligence) Laboratory at Mechanical Engineering Department, University of Tehran",
  "October 2021 - present : Project Research Assistant at the Crouse Company Project Design, Manufacture Modeling and Control of a Permanent Magnet Linear Motor for Testing Vehicle Airbag Control Unit for this Company",
  "October 2021 - present : Teaching Assistant for the Automatic Control Course at Mechanical Engineering Department, University of Tehran",
  "2020 - 2021 : Project Research Assistant at the Crouse Company Project, Design and Implementation of Closed-loop Control System for Testing Vehicle Airbag Control Unit for this Company",
  "2020 - 2021 : Teaching Assistant for the Digital Control Course at Mechanical Engineering Department, University of Tehran",
  "2019 - 2020 : Teaching Assistant at Dynamics and Vibration Laboratory at Mechanical Engineering Department, University of Tehran",
  "Fall 2019 : Teaching Assistant for the Pattern Recognition Course at Electrical Engineering Department, University of Tehran",
  "January 2018 – Present : Research Assistant at SEECS (Smart Electromechanical Energy Conversion Systems) Laboratory at Mechanical Engineering Department, University of Tehran",
  "Summer 2018 : Working on Engine Technology of Electric Motorcycles that are Available in the Iranian Market and the World and Developing this Technology for Design of First Electric Motorcycle of this Iranian Electronic Industry Company.",
  "Summer 2017 : Design and Modeling of Tilting Pad Journal Bearings (TPJB) for Different Generators of MAPNA Generator and Wind Turbine Engineering and Manufacturing Co. (PARS)",
  "May 2017- January 2018 : Analyzing of Iran Electrical Industry Supply Chain, Finding its Problems and Trying to Fix these Problems By Modeling Successful Countries Around the World for Iran Electrical Industry Syndicate (IEIS)",
];
const handelSeleceted = (item: string) => {
  console.log(item);
};
function App() {
  const [Visible_e, setVisiblity_e] = useState(false);
  const [Visible_we, setVisiblity_we] = useState(false);
  return (
    <div className="d-grid gap-2">
      <h1>A Brief CV of Suorena Saeedi</h1>
      <Button
        color="primary"
        button_text={"EDUCATION"}
        onClock_but1={() => {
          Visible_e === false ? setVisiblity_e(true) : setVisiblity_e(false);
        }}
      />
      {Visible_e && (
        <ListGroup
          items={educations}
          heading="EDUCATION"
          onSelectItem={handelSeleceted}
        />
      )}
      <Button
        color="primary"
        button_text={"WORK EXPERIENCE"}
        onClock_but1={() => {
          Visible_we === false ? setVisiblity_we(true) : setVisiblity_we(false);
        }}
      />
      {Visible_we && (
        <ListGroup
          items={we}
          heading="WORK EXPERIENCE"
          onSelectItem={handelSeleceted}
        />
      )}
    </div>
  );
}

export default App;
