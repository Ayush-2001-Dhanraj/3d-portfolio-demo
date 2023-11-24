import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import React from "react";

interface InfoBoxInterface {
  text: string;
  link: string;
  btntxt: string;
}

const InfoBox = ({ text, link, btntxt }: InfoBoxInterface) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btntxt} <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="
            sm:text-x1 sm:leading-snug text-center
            neo-brutalism-blue py-4 px-8 text-white mx-5  
      "
    >
      Hi, I am <span className="font-semibold">Ayush Dhanraj</span> 👋
      <br />A Software Engineer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btntxt="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btntxt="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btntxt="Let's talk"
    />
  ),
};

interface HomeContentInterface {
  currentStage: null | number;
}

const HomeContent = ({ currentStage }: HomeContentInterface) => {
  return (
    <div>{(currentStage !== null && renderContent[currentStage]) || null}</div>
  );
};

export default HomeContent;
