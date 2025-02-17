import React from "react";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section">
          <div className="containerSkills">
            <h1 className="skillsHeader">Skills</h1>
          </div>

          <div className="skillsFrameworks">
            <div className="skillsLogo">
              <i className="devicon-c-plain colored" style={{ fontSize: "100px" }}></i>
              <p className="skillsText">C</p>
            </div>

            <div className="skillsLogo">
              <i className="devicon-css3-plain colored" style ={{fontSize:"100px"}}></i>
              <p className="skillsText">CSS</p>
            </div>

            <div className="skillsLogo">
              <i className="devicon-html5-plain colored" style ={{fontSize:"100px"}}></i>
              <p className="skillsText">HTML</p>
            </div>

            <div className="skillsLogo">
              <i className="devicon-java-plain colored" style ={{fontSize:"100px"}}></i>
              <p className="skillsText">Java</p>
            </div>

            <div className="skillsLogo">
              <img className="devicon-linux-plain " style ={{height:"100px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
              <p className="skillsText">Linux</p>
            </div>

            <div className="skillsLogo">
              <i className="devicon-nextjs-plain" style ={{fontSize:"100px"}}></i>
              <p className="skillsText">Next.js</p>
            </div>

            <div className="skillsLogo">
              <img className="devicon-linux-plain " style ={{height:"100px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <p className="skillsText">Python</p>
            </div>

            <div className="skillsLogo">
              <img className="devicon-linux-plain " style ={{height:"100px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" />
              <p className="skillsText">RPI</p>
            </div>

            <div className="skillsLogo">
              <i className="devicon-react-original colored" style ={{fontSize:"100px"}}></i>
              <p className="skillsText">React</p>
            </div>

            <div className="skillsLogo">
              <i className="devicon-typescript-plain colored" style ={{fontSize:"100px"}}></i>
              <p className="skillsText">TypeScript</p>
            </div>
            
          

          </div>

        </section>
        
    );
  };
  
  export default Skills;
  