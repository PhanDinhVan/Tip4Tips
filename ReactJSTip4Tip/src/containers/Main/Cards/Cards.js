import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import classes from './Cards.css';

class Cards extends Component {
    render() {
        return (
            <div className="animated fadeIn">

                <Row className={classes.Row} >
                    <Col xs="12" sm="6" md="4">
                        <Card className={classes.Card} >
                            <CardHeader className={classes.CardHeader} >
                                <h3>Recent Leads(5 Leads)</h3>
                            </CardHeader>
                            <CardBody className="card-body" >
                                <blockquote className={classes.blockquote} >
                                    <h4>
                                        <span className={classes.Date} >2018-05-18</span>
                                        <span className={classes.Product} ><a href="" >Jack Ma</a></span>
                                        <span className={classes.Status} ><a href="" >New</a></span>
                                    </h4>
                                    <h4>
                                        <span className={classes.Date} >2018-05-18</span>
                                        <span className={classes.Product} ><a href="" >Lampard</a></span>
                                        <span className={classes.Status} ><a href="" >Win</a></span>
                                    </h4>
                                    <h4>
                                        <span className={classes.Date} >2018-05-18</span>
                                        <span className={classes.Product} ><a href="" >Drogba</a></span>
                                        <span className={classes.Status} ><a href="" >Quocte</a></span>
                                    </h4>
                                    <h4>
                                        <span className={classes.Date} >2018-05-18</span>
                                        <span className={classes.Product} ><a href="" >Putin</a></span>
                                        <span className={classes.Status} ><a href="" >Win</a></span>
                                    </h4>
                                    <h4>
                                        <span className={classes.Date} >2018-05-18</span>
                                        <span className={classes.Product} ><a href="" >Trum</a></span>
                                        <span className={classes.Status} ><a href="" >Call</a></span>
                                    </h4>
                                </blockquote>
                            </CardBody>
                            <CardFooter className={classes.CardFooter} >
                                <a href="/leads" >View more leads</a>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Card className={classes.Card} >
                            <CardHeader className={classes.CardHeader} >
                                <h3>Latest status (5 last Leads)</h3>
                            </CardHeader>
                            <CardBody className="card-body">
                                <blockquote className={classes.blockquote} >
                                    <h4>Latest status (5 last Leads)</h4>
                                </blockquote>
                            </CardBody>
                            <CardFooter className={classes.CardFooter} >
                                <a>View more leads</a>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Card className={classes.Card} >
                            <CardHeader className={classes.CardHeader} >
                                <h3>Most active Tipsters( 5 Tipsters)</h3>
                            </CardHeader>
                            <CardBody className="card-body">
                                <blockquote className={classes.blockquote} >
                                    <h4>Most active Tipsters( 5 Tipsters)</h4>
                                </blockquote>
                            </CardBody>
                            <CardFooter className={classes.CardFooter} >
                                <a>View more tipsters</a>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Card className={classes.Card} >
                            <CardHeader className={classes.CardHeader} >
                                <h3>Most active Tipsters( 5 Tipsters)</h3>
                            </CardHeader>
                            <CardBody className="card-body">
                                <blockquote className={classes.blockquote} >
                                    <h4>Latest Activities (5 Activities)</h4>
                                </blockquote>
                            </CardBody>
                            <CardFooter className={classes.CardFooter} >
                                <a>View more Activities</a>
                            </CardFooter>
                        </Card>
                    </Col>

                </Row>

            </div>

        )
    }
}

export default Cards;
