import React,{useState}from 'react'
import "./About.css"
import { Nav } from "../../components/Nav/Nav";
const About = () => {
  const [toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <>
         <Nav category="customer" />
         <br/>
         <div>  
         <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div className={toggleTab === 1 ?"single-tab active-tab":"single-tab "} 
              onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>
              <div className={toggleTab === 2 ?"single-tab active-tab":"single-tab "}
              onClick={() => toggleState(2)}
              >
                <h2>Skills</h2>
              </div>
              <div className={toggleTab === 3 ?"single-tab active-tab":"single-tab "}
              onClick={() => toggleState(3)}
              >
                <h2>Experience</h2>
              </div>
            </div>
            <div className="tab-content">
              {/*About Content*/}
              <div className={toggleTab === 1?"content active-content":"content"}>
                <h2 className='aboutH2Heading'>My Story</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3 className='aboutH2Heading'>
                  I am a Web designer and developer having 10 year of experience
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam vitae justo sit amet ex ultricies iaculis in nec
                  ligula. Aenean blandit fermentum sodales. Donec mollis
                  porttitor neque, a sollicitudin erat vehicula at. Cras
                  tristique ex sed semper fermentum. Fusce interdum accumsan
                  risus, a sodales mauris sollicitudin dapibus
                </p>
              </div>

              {/*Skills Content*/}
              <div className={toggleTab === 2?"content active-content":"content"}>
                <h2 className='aboutH2Heading'>Skills</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="proggress-wrap">
                      <h3 className='aboutH2Heading'>Developer</h3>

                      <div className="proggress">
                        <div className="proggress-bar">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="proggress-wrap">
                      <h3 className='aboutH2Heading'>Designer</h3>

                      <div className="proggress">
                        <div className="proggress-bar Designer">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="proggress-wrap">
                      <h3 className='aboutH2Heading'>Javascript</h3>

                      <div className="proggress">
                        <div className="proggress-bar Javascript">
                          <span>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="proggress-wrap">
                      <h3 className='aboutH2Heading'>PhotoShop</h3>

                      <div className="proggress">
                        <div className="proggress-bar photoShop">
                          <span>88%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Experience Content*/}
            <div className={toggleTab === 3?"content active-content":"content"}>
                <div className="exp-column">
                    <h3 className='aboutH2Heading'>Web Developer</h3>
                    <span>2014-2022</span>
                    <p> Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. </p>
                </div>

                <div className="exp-column">
                    <h3 className='aboutH2Heading'>Graphic Designer</h3>
                    <span>2015-2022</span>
                    <p> Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. </p>
                </div>


               <div className="exp-column">
                    <h3 className='aboutH2Heading'>Project Manager</h3>
                    <span>2017-2022</span>
                    <p> Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
          
          
          
          
          
          
          
          </div>
    </>
  )
}

export default About