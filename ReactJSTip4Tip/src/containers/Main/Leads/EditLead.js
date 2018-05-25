import React, { Component } from 'react';

import Auxs from '../../../hoc/Auxs';
import classes from './Leads.css';
import {
   Row,
   Col,
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   FormGroup,
   Label,
   Input,
   Button,
   Link
} from 'reactstrap';


class EditLead extends Component {
   render() {
      return (

         <div className={classes.Leads} >
            <h1>
               <a href="#">
                  <span className="glyphicon glyphicon-pawn"> Leads </span>
               </a>
            </h1>

            <Col xs="12" sm="6" md="4">
               <div className={classes.FormEditLead} >
                  <Card className={classes.Card} >
                     <CardHeader className={classes.CardHeader} >
                        <strong>Edit Lead</strong>
                        <a href="/leads" >
                           <Button size="sm" className={classes.btnBack}>
                              <span>Back to list</span>
                           </Button>
                        </a>
                     </CardHeader>
                     <hr />
                     <CardBody className="card-body">
                        <Row>
                           <Col md="3">
                              <FormGroup>
                                 <Label htmlFor="fullname">Fullname</Label>
                                 <Input type="text" id="fullname" defaultValue="Phan Dinh Van" />
                              </FormGroup>
                           </Col>
                        </Row>

                        <Row>
                           <Col md="3" >
                              <FormGroup row>
                                 <Col md="3"><Label>Gender</Label></Col>
                                 <Col md="3">
                                    <FormGroup check className="form-check-inline">
                                       <Label htmlFor="inline-radio1" className={classes.label_left}>
                                          <Input defaultChecked type="radio" id="inline-radio1" name="inline-radios" value="option1" className={classes.Radio} /> Male
                                       </Label>
                                       <Label check htmlFor="inline-radio2" className={classes.label_right}>
                                          <Input type="radio" id="inline-radio2" name="inline-radios" value="option2" className={classes.Radio} /> Female
                                       </Label>
                                    </FormGroup>
                                 </Col>
                              </FormGroup>
                           </Col>
                        </Row>

                        <Row>
                           <Col md="3">
                              <FormGroup>
                                 <Label htmlFor="phone">Phone</Label>
                                 <Input type="text" id="phone" defaultValue="0971545342" />
                              </FormGroup>
                           </Col>
                        </Row>

                        <Row>
                           <Col md="3">
                              <FormGroup>
                                 <Label htmlFor="email">E-Mail</Label>
                                 <Input type="text" id="email" defaultValue="pdvan.it@gmail.com" />
                              </FormGroup>
                           </Col>
                        </Row>

                        <Row>
                           <Col md="3">
                              <FormGroup>
                                 <Label htmlFor="region">Region</Label>
                                 <Input type="select" name="region" id="region" defaultValue="HCM" >
                                    <option value="check">Please pick a region</option>
                                    <option value="HN">Ha Noi</option>
                                    <option value="HCM">Ho Chi Minh</option>
                                    <option value="DN">Da Nang</option>
                                    <option value="NT">Nha Trang</option>
                                 </Input>
                              </FormGroup>
                           </Col>
                           <Col md="3">
                              <FormGroup>
                                 <Label htmlFor="product">Product</Label>
                                 <Input type="select" name="product" id="product">
                                    <option>Auto/Moto</option>
                                    <option>Medical</option>
                                    <option>Shops</option>
                                    <option>Factory</option>
                                    <option>Office</option>
                                    <option>Home</option>
                                    <option>Travel</option>
                                    <option>Student</option>
                                    <option>Other</option>
                                 </Input>
                              </FormGroup>
                           </Col>
                           <Col md="3">
                              <FormGroup row>
                                 <Col md="3">
                                    <Label htmlFor="notes">Notes</Label>
                                 </Col>
                                 <Col xs="12" md="9">
                                    <Input type="textarea" name="notes" id="notes" rows="5"
                                       placeholder="Content..." />
                                 </Col>
                              </FormGroup>
                           </Col>
                        </Row>
                     </CardBody>
                     <CardFooter className={classes.CardFooter} >
                        <a href="/leads" >
                           <Button color="secondary" className={classes.btnCancel} >Cancel</Button>
                        </a>
                        <Button type="submit" color="primary" className={classes.btnUpdate} >Update</Button>
                     </CardFooter>
                  </Card>
               </div>
            </Col>

            <Col xs="12" sm="6" md="4" style={{ marginTop: '20px', paddingBottom: '20px' }}>
               <div className={classes.FormEditLead} >
                  <Card className={classes.Card} >
                     <CardHeader className={classes.CardHeader} >
                        <strong>Action</strong>
                     </CardHeader>
                     <hr />
                     <CardBody className="card-body">
                        <Row>
                           <Col md="3">
                              <FormGroup className={classes.ContentAction} >
                                 <Label htmlFor="region">Tipster reference</Label>
                                 <Input type="select" name="region" id="region">
                                    <option value="t1">Tipster 1</option>
                                    <option value="t2">Tipster 2</option>
                                    <option value="t3">Tipster 3</option>
                                    <option value="t4">Tipster 4</option>
                                    <option value="t5">Tipster 5</option>
                                 </Input>
                                 <Button color="primary" className={classes.BtnUpdate} >Update</Button>
                              </FormGroup>
                           </Col>
                           <Col md="3">
                              <FormGroup className={classes.ContentAction} >
                                 <Label htmlFor="region">Assign to Consultant</Label>
                                 <Input type="select" name="region" id="region">
                                    <option value="t1">Assign 1</option>
                                    <option value="t2">Assign 2</option>
                                    <option value="t3">Assign 3</option>
                                    <option value="t4">Assign 4</option>
                                    <option value="t5">Assign 5</option>
                                 </Input>
                                 <Button color="primary" className={classes.BtnUpdate} >Assign</Button>
                              </FormGroup>
                           </Col>
                           <Col md="3">
                              <FormGroup className={classes.ContentAction} >
                                 <Label htmlFor="region">Lead status</Label>
                                 <Input type="select" name="region" id="region" defaultValue="t5" >
                                    <option value="t1">Please pick a status</option>
                                    <option value="t2">New</option>
                                    <option value="t3">Call</option>
                                    <option value="t4">Quocte</option>
                                    <option value="t5">Win</option>
                                    <option value="t5">Lost</option>
                                 </Input>
                                 <Button color="primary" className={classes.BtnUpdate} >Update</Button>
                              </FormGroup>
                           </Col>
                           <Col md="3">
                              <FormGroup className={classes.ContentAction} >
                                 <Label htmlFor="region">Point for tipster</Label>
                                 <Input type="text" defaultValue="0" />
                                 <Button color="primary" className={classes.BtnUpdate} >Plus</Button>
                              </FormGroup>
                           </Col>
                           <Col md="3">
                              <FormGroup className={classes.ContentAction} >
                                 <Label htmlFor="region">Status history</Label>
                                 <blockquote className={classes.blockquote} >
                                    <h4>
                                       <span className={classes.Date} >2018-05-18</span>
                                       <span className={classes.Status} ><a href="" >New</a></span>
                                    </h4>
                                 </blockquote>
                              </FormGroup>
                           </Col>
                        </Row>
                     </CardBody>

                  </Card>
               </div>
            </Col>
         </div>

      )
   }
}

export default EditLead;

