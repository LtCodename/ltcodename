import React from 'react';
import './PortfolioPage.css';
import { ArrowIcon } from './../../icons';
import { NavLink } from 'react-router-dom';
import { GithubIcon, LinkIcon, TrelloIcon, ToolsIcon } from './../../icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function PortfolioPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  };

  const content = (
    <div className="content-wrapper flex-one column column-v column-h">
      <div className="row row-between row-h contacts-wrapper">
        <div className="column column-v">
          <NavLink to="/" className="arrow-icon-wrapper">{ArrowIcon}</NavLink>
        </div>
        <div className="column intro-wrapper column-h">
          <span className="intro-text">Things I know.</span>
          <div className="row skills-row row-h">
            <div className="skills-section column">
              <span className="skills-header">Languages</span>
              <span className="skill">JavaScript</span>
              <span className="skill">HTML 5</span>
              <span className="skill">CSS 3</span>
              <span className="skill">TypeScript</span>
              <span className="skill">Sass</span>
              <span className="skill">Node.js</span>
            </div>
            <div className="skills-section column">
              <span className="skills-header">Technologies</span>
              <span className="skill">React</span>
              <span className="skill">Redux</span>
              <span className="skill">Angular 9</span>
              <span className="skill">Angular Material</span>
              <span className="skill">Bootstrap</span>
              <span className="skill">styled-components</span>
              <span className="skill">REST API</span>
            </div>
            <div className="skills-section column">
              <span className="skills-header">Dev Tools</span>
              <span className="skill">Visual Studio Code</span>
              <span className="skill">WebStorm</span>
              <span className="skill">Atom</span>
              <span className="skill">GitHub</span>
              <span className="skill">GitLab</span>
              <span className="skill">Bitbucket</span>
              <span className="skill">Terminal</span>
              <span className="skill">Firebase</span>
              <span className="skill">Webpack</span>
            </div>
            <div className="skills-section column">
              <span className="skills-header">Design Tools</span>
              <span className="skill">Figma</span>
              <span className="skill">Adobe Photoshop</span>
              <span className="skill">Zeplin</span>
            </div>
          </div>
          <span className="intro-text">Stuff I did.</span>
          {/* Project 1 */}
          <div className="column projects-column">
            <div className="project column">
              <span className="project-name">Game Keeper</span>
              <div className="row row-h">
                <span className="projects-icon-wrapper">
                  <a href="https://github.com/LtCodename/Game-Keeper" target="blank">{GithubIcon}</a>
                </span>
                <span className="projects-icon-wrapper">
                  <a href="https://gamekeeper.ltcodename.com" target="blank">{LinkIcon}</a>
                </span>
                <span className="projects-icon-wrapper">
                  <a href="https://trello.com/b/GT6AY0oi/game-keeper-roadmap" target="blank">{TrelloIcon}</a>
                </span>
              </div>
              <div className="row text-and-pics row-h">
                <div className="column">
                  <span className="portfolio-text">I am a gamer and I needed a way to track what games I've completed, what I wish to play later, what is an absolute garbage and what I want to try out with friends. Also I am a data freak so I needed to see my gaming history for previous years. There are some platforms for this purpose out there but I needed this system to be fully customizable and flex. So I've made one myself.</span>
                  <span className="portfolio-text">It's stable and usable but super raw design-wise and still lacking some features I've planned initially. It's in alpha state and in active development though and I'd appreciate all feedback I can get. Wanna help, propose features or just chat about what you are playing right now? Contact me!</span>
                  <div className="row row-v">
                    <span>{ToolsIcon}</span>
                    <span>React, Redux, Firebase, RAWG API.</span>
                  </div>
                </div>
                <div className="column column-v slider-wrapper">
                  <div className="project-pictures">
                      <Slider {...settings}>
                        <img src={process.env.PUBLIC_URL + 'projects/gk-1.png'} alt="alt"/>
                        <img src={process.env.PUBLIC_URL + 'projects/gk-2.png'} alt="alt"/>
                        <img src={process.env.PUBLIC_URL + 'projects/gk-3.png'} alt="alt"/>
                      </Slider>
                    </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project column">
              <span className="project-name">GRID</span>
              <div className="row row-h">
                <span className="projects-icon-wrapper">
                  <a href="https://github.com/LtCodename/grid-angular" target="blank">{GithubIcon}</a>
                </span>
                <span className="projects-icon-wrapper">
                  <a href="https://grid.ltcodename.com/" target="blank">{LinkIcon}</a>
                </span>
              </div>
              <div className="row text-and-pics row-h">
                <div className="column">
                  <span className="portfolio-text">Formula 1 dedicated web site. Basically it holds season statistics and information about teams, drivers and season events. A lot of features are still to be implenented. I'm planning to grow something big and special from this seed.</span>
                  <div className="row row-v">
                    <span>{ToolsIcon}</span>
                    <span>Angular 9, Firebase.</span>
                  </div>
                </div>
                <div className="column column-v">
                  <div className="project-pictures slider-wrapper">
                      <Slider {...settings}>
                        <img src={process.env.PUBLIC_URL + 'projects/gr-1.png'} alt="alt"/>
                        <img src={process.env.PUBLIC_URL + 'projects/gr-2.png'} alt="alt"/>
                        <img src={process.env.PUBLIC_URL + 'projects/gr-3.png'} alt="alt"/>
                      </Slider>
                    </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            {/* <div className="project column">
              <span className="project-name">Game Keeper</span>
              <div className="row row-h">
                <span className="projects-icon-wrapper">
                  <a href="https://github.com/LtCodename/Game-Keeper" target="blank">{GithubIcon}</a>
                </span>
                <span className="projects-icon-wrapper">
                  <a href="https://gamekeeper.ltcodename.com" target="blank">{LinkIcon}</a>
                </span>
                <span className="projects-icon-wrapper">
                  <a href="https://trello.com/b/GT6AY0oi/game-keeper-roadmap" target="blank">{TrelloIcon}</a>
                </span>
              </div>
              <div className="row text-and-pics">
                <div className="column">
                  <span className="portfolio-text">I am a gamer and I needed a way to track what games I've completed, what I wish to play later, what is an absolute garbage and what I want to try out with friends. Also I am a data freak so I needed to see my gaming history for previous years. There are some platforms for this purpose out there but I needed this system to be fully customizable and flex. So I've made one myself.</span>
                  <span className="portfolio-text">It's stable and usable but super raw design-wise and still lacking some features I've planned initially. It's in alpha state and in active development though and I'd appreciate all feedback I can get. Wanna help, propose features or just chat about what you are playing right now? Contact me!</span>
                  <div className="row row-v">
                    <span>{ToolsIcon}</span>
                    <span>React, Redux, Firebase, RAWG API.</span>
                  </div>
                </div>
                <div className="column column-v">
                  <div className="project-pictures">
                      <Slider {...settings}>
                        <img src={process.env.PUBLIC_URL + 'projects/gk-1.png'} alt="alt"/>
                        <img src={process.env.PUBLIC_URL + 'projects/gk-1.png'} alt="alt"/>
                        <img src={process.env.PUBLIC_URL + 'projects/gk-1.png'} alt="alt"/>
                      </Slider>
                    </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="void"></div>
      </div>
    </div>
  );

  return (
    <div className="column outer-wrapper flex-one">
      {content}
    </div>
  );
}

export default PortfolioPage;
