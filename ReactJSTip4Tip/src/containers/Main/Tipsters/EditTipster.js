import React, { Component } from 'react';

import classes from './Tipsters.css';
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
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class EditTipster extends Component {

   state = { selectedFile: null }

   fileChangedHandler = (event) => {
      this.setState({ selectedFile: event.target.files[0] })
   }

   uploadHandler = () => {
      console.log(this.state.selectedFile.name)
   }

   render() {
      return (
         <MuiThemeProvider>
            <div className={classes.Tipsters} >
               <h1>
                  <a href="#">
                     <span className="glyphicon glyphicon-eye-open"> Tipsters </span>
                  </a>
               </h1>
               <Col xs="12" sm="6" md="4" style={{ marginTop: '20px' }}>
                  <div className={classes.FormEditTipster} >
                     <Card className={classes.Card} >
                        <CardHeader className={classes.CardHeader} >
                           <strong>Action</strong>
                        </CardHeader>
                        <hr />
                        <CardBody className="card-body">
                           <input type="file" onChange={this.fileChangedHandler} />
                           <img src={this.state.selectedFile} alt="Smiley face" height="42" width="42" />
                           <button onClick={this.uploadHandler}>Upload!</button>
                        </CardBody>

                     </Card>
                  </div>
               </Col>

               <Col xs="12" sm="6" md="4" style={{ marginTop: '20px', paddingBottom: '20px' }}>
                  <div className={classes.FormEditTipster} >
                     <Card className={classes.Card} >
                        <CardHeader className={classes.CardHeader} >
                           <strong>Edit Tipster</strong>
                           <a href="/tipsters" >
                              <Button size="sm" className={classes.btnBack}>
                                 <span>Back to list</span>
                              </Button>
                           </a>
                        </CardHeader>
                        <hr />
                        <CardBody className="card-body">
                           <Row>
                              <Col md="3" >
                                 <FormGroup row>
                                    <Col md="3"><Label>Preferred language</Label></Col>
                                    <Col md="3">
                                       <FormGroup check className="form-check-inline">
                                          <Label htmlFor="inline-radio1" className={classes.label_left}>
                                             <Input defaultChecked type="radio" id="inline-radio1" name="inline-radios" value="option1" className={classes.Radio} /> Vietname
                                       </Label>
                                          <Label check htmlFor="inline-radio2" className={classes.label_right}>
                                             <Input type="radio" id="inline-radio2" name="inline-radios" value="option2" className={classes.Radio} /> English
                                       </Label>
                                       </FormGroup>
                                    </Col>
                                 </FormGroup>
                              </Col>
                           </Row>
                           <Row>
                              <Col md="3" >
                                 <FormGroup row>
                                    <Col md="3"><Label>Status</Label></Col>
                                    <Col md="3">
                                       <FormGroup check className="form-check-inline">
                                          <Label htmlFor="radio1" className={classes.label_left}>
                                             <Input defaultChecked type="radio" id="radio1" name="radios_status" value="option11" className={classes.Radio} /> Active
                                       </Label>
                                          <Label check htmlFor="radio2" className={classes.label_right}>
                                             <Input type="radio" id="radio2" name="radios_status" value="option12" className={classes.Radio} /> Non Active
                                       </Label>
                                       </FormGroup>
                                    </Col>
                                 </FormGroup>
                              </Col>
                           </Row>
                           <Row>
                              <Col md="3">
                                 <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" defaultValue="Anh Phan" />
                                 </FormGroup>
                              </Col>
                           </Row>
                           <Row>
                              <Col md="3">
                                 <FormGroup>
                                    <Label htmlFor="fullname">Fullname</Label>
                                    <Input type="text" id="fullname" defaultValue="Phan Dinh Van" />
                                 </FormGroup>
                              </Col>
                           </Row>
                           <Row>
                              <Col md="3">
                                 <FormGroup>
                                    <Label htmlFor="birthday">Birthday</Label>
                                    <Input type="text" id="birthday" defaultValue="2018-05-25" />
                                 </FormGroup>
                              </Col>
                           </Row>
                           <Row>
                              <Col md="3" >
                                 <FormGroup row>
                                    <Col md="3"><Label>Gender</Label></Col>
                                    <Col md="3">
                                       <FormGroup check className="form-check-inline">
                                          <Label htmlFor="radio3" className={classes.label_left}>
                                             <Input defaultChecked type="radio" id="radio3" name="radios" value="option3" className={classes.Radio} /> Male
                                       </Label>
                                          <Label check htmlFor="radio4" className={classes.label_right}>
                                             <Input type="radio" id="radio4" name="radios" value="option4" className={classes.Radio} /> Female
                                       </Label>
                                       </FormGroup>
                                    </Col>
                                 </FormGroup>
                              </Col>
                           </Row>
                           <Row>
                              <Col md="3">
                                 <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="text" id="email" defaultValue="pdvan.it@gmail.com" />
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
                                 <FormGroup row>
                                    <Col md="3">
                                       <Label htmlFor="address">Address</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                       <Input type="textarea" name="notes" id="address" rows="5"
                                          placeholder="Address..." />
                                    </Col>
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
                           </Row>
                           <Row>
                              <Col md="3">
                                 <FormGroup>
                                    <Label htmlFor="region">Level</Label>
                                    <Input type="select" name="level" id="level" defaultValue="audi" >
                                       <option label="Please pick a level" disabled >
                                       </option>
                                       <optgroup label="Tipster">
                                          <option value="ambassador">Ambassador</option>
                                          <option value="tipster">Tipster</option>
                                       </optgroup>
                                    </Input>
                                 </FormGroup>
                              </Col>
                           </Row>
                        </CardBody>
                        <CardFooter className={classes.CardFooter} >
                           <a href="/tipsters" >
                              <Button color="secondary" className={classes.btnCancel} >Cancel</Button>
                           </a>
                           <Button type="submit" color="primary" className={classes.btnUpdate} >Update</Button>
                        </CardFooter>
                     </Card>
                  </div>
               </Col>
            </div>
         </MuiThemeProvider>
      )
   }
}

export default EditTipster;