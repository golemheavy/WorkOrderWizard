import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './CallToAction.css'
import '../../LandingPage/LandingPage.css';

var CallToAction = () => {
    return (
        <div id="calltoAction">
            <hr />
            <Row>
                {/* lg={{ span: 4, offset: 2 }} */}
                <Col className="Action">
                    <h2>
                        <em className="div-title">Get Work Order Wizard Today</em>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col />
            </Row>
            <Row>
                {/* lg={{ span: 5, offset: 2 }} */}
                <Col className="ctaText">
                    Now that You have seen the awesome power that Work Order
                    Wizard has, do you dare sign a contract? It will be written
                    in Blood.
                    <br />
                </Col>
            </Row>
            <Row>
                <Col />
            </Row>
            <Row>
                {/* lg={{ span: 3, offset: 2 }} */}
                <Col>
                    <Button variant="success">Sign Up Now</Button>
                </Col>
            </Row>
        </div>
    )
}

export default CallToAction
