import React from "react"
import '../Styling/Main.css';
import CardComponent from "../Components/Card"
import { Row, Col } from 'reactstrap';
import GrahamPic from "../Images/GrahamWood.jpg"
import AndrewPic from "../Images/Andrew.jpg"


class About extends React.Component {


    Graham() {
        return (
            <div>
                <p>
                    MIS and Computer Science<br />
                Most Recent Internship: <a href="https://www.wearespreetail.com/">Spreetail</a>
                </p>
            </div>
        )
    }

    Andrew() {
        return (
            <div>
                <p>
                    Computer Science<br />
                    Post Grad: <a href="www.Microsoft.com"> Microsoft</a>
                </p>
            </div>
        )
    }


    render() {
        return (
            <main>
                <div className="container">
                    <article>
                        <div className="content-item">
                            <div className="text">
                                <br />
                                <h1 id="title">What to Expect</h1>
                                <div className="underline"></div>
                                <br />
                                <ul className="list">
                                    <li>Please arrive at 9:45am to get checked in and seated.</li>
                                    <li>Computers will be provided, but you are welcome to bring your own laptop.</li>
                                    <li>All ages will need a parent or guardian to sign a waiver. Children aged 13 and under require a parent or guardian to be present during the session.</li>
                                    <li>Parking: Parking is available on the south side of the College of Business Administration building.</li>
                                    <li>All skillsets are welcome! Those with advanced knowledge will be assisted in creating more advanced projects.</li>
                                    <li>Please be respectful to the leaders, mentors, and volunteers. They donate their time and energy to make this program possible.</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="content-item">
                            <div className="text">
                                <h1 id="title">Organizers</h1>
                                <div className="underline"></div>
                                <br />
                                <Row>
                                    <Col sm="6">
                                        <CardComponent
                                            imgURL={GrahamPic}
                                            title="Graham Wood"
                                            subTitle="Senior at Kansas State University"
                                            text={this.Graham()}
                                        />

                                    </Col>
                                    <Col sm="6">
                                        <CardComponent
                                            imgURL={AndrewPic}
                                            title="Andrew Loenen"
                                            subTitle="Senior at Kansas State University"
                                            text={this.Andrew()}
                                        />
                                    </Col>
                                </Row>


                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="content-item">
                            <div className="text">
                                <h1 id="title">Our History</h1>
                                <div className="underline"></div>
                                <br />
                                <p>CoderDojo MHK was originally founded by Reagan Wood, Graham Wood, and Geordy Williams. They first learned about CoderDojo in Kansas City where they volunteered at a dojo run by Jennifer Wadella. Inspired by the positive impact CoderDojo was having on the community, they met with Jennifer to learn about starting their own dojo in Manhattan. Their goal was to provide a space where young people could freely explore their interests in the field of computer science at their own speed. CoderDojo MHK’s first session was held in November 2016 and thanks to a supportive community of parents and student volunteers the dojo has grown considerably since then.</p>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="content-item">
                            <div className="text">
                                <h1 id="title">CoderDojo Global History</h1>
                                <div className="underline"></div>
                                <br />
                                <p>CoderDojo is a not-for-profit organization <a href="http://coderdojo.com/about-us/key-people/">founded by James Whelton and Bill Liao</a>. It was first started in James Whelton’s school in early 2011 when James received some publicity after hacking the iPod Nano and some younger students expressed an interest in learning how to code. He setup a computer club in his school (PBC Cork) where he started teaching basic HTML and CSS. Later that year he met Bill Liao, a entrepreneur and philanthropist, who was interested in growing the project into something bigger than just an after-school computer club. In June 2011 the first CoderDojo was launched in the National Software Centre in Cork where CoderDojo saw extreme success. The Cork Dojo saw people traveling from Dublin frequently to attend sessions. Owing to this popularity a Dublin Dojo was launched soon after in Google’s Montevetro building. The increasing success leading to setting up more Dojos around Ireland and subsequently around the world.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        )
    }

}

export default About

