import React, { Component } from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400 } from 'material-ui/styles/colors';
import classes from './Tipsters.css';
import { Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const iconButtonElement = (
   <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
   >
      <MoreVertIcon color={grey400} />
   </IconButton>
);



class ListTipsters extends Component {

   constructor(props) {
      super(props);
      this.state = {
         viewTipster: false,
         editTipster: false
      };
   }

   ViewTipster = () => {
      this.setState({
         viewTipster: true
      })
   }

   EditTipster = () => {
      this.setState({
         editTipster: true
      })
   }

   render() {

      const rightIconMenu = (
         <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem onClick={this.ViewTipster} >View</MenuItem>
            <MenuItem onClick={this.EditTipster} >Edit</MenuItem>
         </IconMenu>
      );

      let redirectView = null;
      if (this.state.viewTipster) {
         redirectView = <Redirect to="/view_tipster" />;
      }

      let redirectEdit = null;
      if (this.state.editTipster) {
         redirectEdit = <Redirect to="/edit_tipster" />;
      }

      return (
         <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
               {redirectView}
               {redirectEdit}
               <Col xs="12" sm="6" md="4">
                  <div className={classes.MuiThemeProvider} >
                     <div className={classes.Tipsters_Status} >
                        <span className={classes.Lead} >Tipsters</span>
                        <span className={classes.Status} >Status</span>
                     </div>
                     <List>
                        <ListItem
                           // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                           rightIconButton={rightIconMenu}
                           // primaryText="Brendan Lim"
                           secondaryText={
                              <p className={classes.secondaryText} >
                                 <span>Dinh Van</span>
                                 <span className={classes.Point_Status} >Active</span> <br />
                                 <span>pdvan.it@gmail.com</span>
                                 <span className={classes.Point_Status} >Point: 3</span>
                              </p>
                           }
                           secondaryTextLines={2} />
                        <hr />

                        <ListItem
                           // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                           rightIconButton={rightIconMenu}
                           // primaryText="Brendan Lim"
                           secondaryText={
                              <p className={classes.secondaryText} >
                                 <span>Dinh Van</span>
                                 <span className={classes.Point_Status} >Active</span> <br />
                                 <span>pdvan.it@gmail.com</span>
                                 <span className={classes.Point_Status} >Point: 3</span>
                              </p>
                           }
                           secondaryTextLines={2} />
                        <hr />

                        <ListItem
                           // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                           rightIconButton={rightIconMenu}
                           // primaryText="Brendan Lim"
                           secondaryText={
                              <p className={classes.secondaryText} >
                                 <span>Dinh Van</span>
                                 <span className={classes.Point_Status} >Active</span> <br />
                                 <span>pdvan.it@gmail.com</span>
                                 <span className={classes.Point_Status} >Point: 3</span>
                              </p>
                           }
                           secondaryTextLines={2} />
                        <hr />

                        <ListItem
                           // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                           rightIconButton={rightIconMenu}
                           // primaryText="Brendan Lim"
                           secondaryText={
                              <p className={classes.secondaryText} >
                                 <span>Dinh Van</span>
                                 <span className={classes.Point_Status} >Active</span> <br />
                                 <span>pdvan.it@gmail.com</span>
                                 <span className={classes.Point_Status} >Point: 3</span>
                              </p>
                           }
                           secondaryTextLines={2} />
                        <hr />

                        <ListItem
                           // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                           rightIconButton={rightIconMenu}
                           // primaryText="Brendan Lim"
                           secondaryText={
                              <p className={classes.secondaryText} >
                                 <span>Dinh Van</span>
                                 <span className={classes.Point_Status} >Active</span> <br />
                                 <span>pdvan.it@gmail.com</span>
                                 <span className={classes.Point_Status} >Point: 3</span>
                              </p>
                           }
                           secondaryTextLines={2} />
                        <hr />

                        <ListItem
                           // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                           rightIconButton={rightIconMenu}
                           // primaryText="Brendan Lim"
                           secondaryText={
                              <p className={classes.secondaryText} >
                                 <span>Dinh Van</span>
                                 <span className={classes.Point_Status} >Active</span> <br />
                                 <span>pdvan.it@gmail.com</span>
                                 <span className={classes.Point_Status} >Point: 3</span>
                              </p>
                           }
                           secondaryTextLines={2} />
                        <hr />

                     </List>
                  </div>
               </Col>
            </div>
         </MuiThemeProvider>

      )
   }
}

export default ListTipsters;