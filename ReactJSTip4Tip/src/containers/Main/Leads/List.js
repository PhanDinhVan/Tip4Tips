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
import classes from './Leads.css';
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

class ListLeads extends Component {

   constructor(props) {
      super(props);
      this.state = {
         viewLead: false,
         editLead: false
      };
   }

   ViewLead = () => {
      this.setState({
         viewLead: true
      })
   }

   EditLead = () => {
      this.setState({
         editLead: true
      })
   }

   render() {
      const rightIconMenu = (
         <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem onClick={this.ViewLead} >View</MenuItem>
            <MenuItem onClick={this.EditLead} >Edit</MenuItem>
         </IconMenu>
      );

      let redirectView = null;
      if (this.state.viewLead) {
         redirectView = <Redirect to="/view_lead" />;
      }

      let redirectEdit = null;
      if (this.state.editLead) {
         redirectEdit = <Redirect to="/edit_lead" />;
      }

      return (
         <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
               {redirectView}
               {redirectEdit}
               <Col xs="12" sm="6" md="4">
                  <div className={classes.MuiThemeProvider} >
                     <div className={classes.Leads_Status} >
                        <span className={classes.Lead} >Leads</span>
                        <span className={classes.Status} >Status</span>
                     </div>
                     <List>
                        <ListItem
                           // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                           rightIconButton={rightIconMenu}
                           secondaryText={
                              <p className={classes.secondaryText} >
                                 <span>Philippe Nguyen</span>
                                 <span className={classes.Date_Status} >2018-05-19</span> <br />
                                 <span>Medical</span>
                                 <span className={classes.Date_Status} >Win</span>
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
                                 <span>Philippe Nguyen</span>
                                 <span className={classes.Date_Status} >2018-05-19</span> <br />
                                 <span>Factory</span>
                                 <span className={classes.Date_Status} >Win</span>
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
                                 <span>Philippe Nguyen</span>
                                 <span className={classes.Date_Status} >2018-05-19</span> <br />
                                 <span>Office</span>
                                 <span className={classes.Date_Status} >Win</span>
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
                                 <span>Philippe Nguyen</span>
                                 <span className={classes.Date_Status} >2018-05-19</span> <br />
                                 <span>Other</span>
                                 <span className={classes.Date_Status} >Win</span>
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
                                 <span>Philippe Nguyen</span>
                                 <span className={classes.Date_Status} >2018-05-19</span> <br />
                                 <span>Shops</span>
                                 <span className={classes.Date_Status} >Win</span>
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
                                 <span>Philippe Nguyen</span>
                                 <span className={classes.Date_Status} >2018-05-19</span> <br />
                                 <span>Auto/Moto</span>
                                 <span className={classes.Date_Status} >Win</span>
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

export default ListLeads;