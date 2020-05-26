import React from "react"
import { Row, Col } from 'reactstrap';
import Card from "../Components/Card"


function Files(props) {
    console.log(props)
    return (
        <div>
            <main>
                <div className="container">
                    <br />
                    <article>
                        <div className="content-item">
                            <div className="text">
                                <h1 id="title">Files</h1>
                                <div className="underline"></div>
                                <br />

                                <Row>
                                    <iframe src="https://drive.google.com/embeddedfolderview?id=119bFEqs877_72fW_yFOgBZjZfk52i4Ln#grid" width="100%" height="500" frameborder="0"></iframe>
                                </Row>

                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default Files