import profilePic from "../assets/profilePic.jpg";

const About: React.FC = () => {
    return (
      <section id="about" className="section">
        
        
        <div className="selfIntro">  
          
          <img className= "profilePic" src={profilePic} alt="Profile Pic" />
          
          <div className="aboutHeader">
            <strong className="aboutStrong">Hi I am <span className="bold">Alan!</span> </strong>
            <p className="aboutIntro">Year 3 NTU student</p>
            <ul>
              <li>Passionate about Artificial Intelligence</li>
              <li>Passionate about Software Development</li>
              <li>Self-Driven and Hard-Working</li>
              <li>Goal-Orientated and Eager to Learn</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  