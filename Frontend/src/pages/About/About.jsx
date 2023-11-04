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
                <h2>Our Story</h2>
              </div>
              <div className={toggleTab === 2 ?"single-tab active-tab":"single-tab "}
              onClick={() => toggleState(2)}
              >
                <h2>Our Team</h2>
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
                <h2 className='aboutH2Heading'>Our Story</h2>
                <p>
                At Shop Fusion, our story is one of vision, innovation, and a deep love for shopping. Our journey started as a dream to revolutionize online retail, creating a space where customers could find everything they desire. We have always been dedicated to providing you with an extraordinary e-commerce experience. Our mission began with a simple idea - to blend convenience, quality, and affordability into one seamless shopping experience.
                </p>

                <p>
                Over the years, we've put our hearts and souls into building an extensive collection of products that cater to every facet of your life. We believe in making your shopping journey effortless and enjoyable, backed by top-notch customer service. Our commitment to excellence and a passion for shopping brought us to where we are today. Join us in our quest to shop smarter and experience the fusion of quality and convenience - shop Fusion.
                </p>


                
              </div>

              {/*Skills Content*/}
              <div className={toggleTab === 2?"content active-content":"content"}>
                <h2 className='aboutH2Heading'>Our Team</h2>
                <p>
                At Shop Fusion, our success story is deeply intertwined with the dedication and passion of our incredible team. We are more than just a company; we are a family of enthusiastic individuals united by a shared vision. Our diverse team brings together a wealth of experience, creativity, and expertise. From our skilled developers and designers to our customer support heroes, every member plays a crucial role in delivering excellence to our customers. Together, we work tirelessly to ensure that your shopping experience is second to none. Meet the people behind Shop Fusion, a team committed to making your shopping dreams a reality.
                </p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="proggress-wrap">
                      <h3 className='aboutH2Heading'>Customers</h3>

                      <div className="proggress">
                        <div className="proggress-bar">
                          <span>4800+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="proggress-wrap">
                      <h3 className='aboutH2Heading'>Daily Orders</h3>

                      <div className="proggress">
                        <div className="proggress-bar Designer">
                          <span>2000+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                  
                </div>
              </div>
              {/*Experience Content*/}
            <div className={toggleTab === 3?"content active-content":"content"}>
                <div className="exp-column">
                    <h3 className='aboutH2Heading'>Customer Satisfaction</h3>
                  
                    <p> Our proudest achievement is the trust and satisfaction of our customers. With a customer satisfaction rate of 98%, we've consistently delivered on our promise to provide exceptional products and service. Your positive feedback motivates us to strive for excellence every day. </p>
                </div>

                <div className="exp-column">
                    <h3 className='aboutH2Heading'>Innovation and Technology</h3>
                    
                    <p> Innovation is at the core of our achievements. We've pioneered cutting-edge technologies to enhance your shopping experience. Our AI-powered product recommendations have increased sales by 25%, and our mobile app, featuring augmented reality shopping, has revolutionized the way you interact with our products. </p>
                </div>


               <div className="exp-column">
                    <h3 className='aboutH2Heading'>Social Responsibility</h3>
                    
                    <p>We take our social responsibility seriously. Our achievement in this regard includes donating 10% of our profits to charitable causes, providing clean drinking water to 10,000 people in underserved communities, and ensuring that all our products are ethically sourced and sustainably produced. </p>
                </div>

                <div className="exp-column">
                    <h3 className='aboutH2Heading'>Global Expansion</h3>
                    
                    <p>Expanding globally is a testament to our ambition. We've successfully launched in five new countries, establishing our presence on a global scale. Our achievement lies in reaching customers worldwide, offering them access to our curated collection of products and services. </p>
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