import React from "react"
import '../Styling/Main.css';
import banner from "../Images/CoderDojomhk_banner (1).jpg"
import CardComponent from "../Components/Card"
import { Row, Col } from 'reactstrap';
// import Ninja from "../Images/Ninjas.png"
// import Robot from "../Images/Robot.png"
import TestimonialBanner from "../Images/TestimonialBannar.png"


function Home() {
    return (
        <div className="space">


            <div className="HomeContent">
                <img src={banner}
                    alt="Banner"
                    className="banner"
                />
                <main>
                    <div className="container">

                        <article>
                            <div className="content-item">
                                <div className="text">
                                    <h1 id="title">What is CoderDojo?</h1>
                                    <div className="underline"></div>
                                    <p><a href="https://coderdojo.com/">CoderDojo</a> is a global non-profit created to help youth learn to code. Kansas State University graciously allows CoderDojoMHK to use their space to host our sessions. All programming skillsets are welcome, from beginner to expert!</p>
                                    <p>Join us on <a href="https://www.facebook.com/coderdojomhk/">Facebook</a>!</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <h3>Dojos are fun and relaxed programming clubs!</h3>
                            <br />
                            <Row>
                                <img src={TestimonialBanner}
                                    alt="TestimonialBanner"
                                    className="TestimonialBanner"
                                />
                                <Col sm="6">
                                    <CardComponent
                                        text={"`This is the best opportunity we have come across in the Manhattan community for improving our child's skill set. I can't say enough good things about this Coderdojo club.`"} />
                                </Col>
                                <Col sm="6">
                                    <CardComponent text="`This is a great opportunity to introduce and encourage kids about computer science and coding. Very grateful for this unique experience.`                       " />
                                </Col>
                            </Row>
                        </article>

                        <br />
                        <br />

                        {/* <br />
                    <br />
                    <article>
                        <div className="content-item">
                            <div className="text">
                                <h1 id="title">Upcoming Session</h1>
                                <div className="underline"></div>
                                <div style={{ textAlign: 'center' }}>

                                    <p>October 12th @ 10:00 AM</p>
                                    <p>College Of Business</p>
                                    <p>Room 3121</p>

                                    <p>1301 Lovers Lane</p>

                                    <p>Manhattan, KS 66502</p>
                                    <p><a href="https://www.eventbrite.com/">Register Now</a></p>

                                    <h3>Future Sessions</h3>
                                    <p style={{ position: 'relative', top: -15 }}>
                                        November, 9th 2019<br />
                                    December, 14th 2019<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article> */}
                    </div>
                </main >
            </div>
        </div>
    )

}

export default Home