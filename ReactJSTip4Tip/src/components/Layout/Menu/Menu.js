import React, {Component} from 'react';

import classes from './Menu.css';
// import navigationLogo from '../../../assets/images/amagumo-logo-small-black.png';
import SideBar from '../SideBar/SideBar';


class Menu extends Component {

    state = {
        showSideBar: false
    }

    sideBarCloseHandler = () =>  {
        this.setState({showSideBar: false})
    }

    sideBarOpenHandler = () =>  {
        this.setState({showSideBar: true})
    }

    render () {
        return (
            <header className={classes.Menu} >
                <SideBar open={this.state.showSideBar} closed={this.sideBarCloseHandler} />
                <span onClick={this.sideBarOpenHandler}
                    className="glyphicon glyphicon-menu-hamburger" 
                    style={{fontSize: '30px', color: 'white'}}
                        ></span>
                
                <div className={classes.Logo} >
                    {/* <img src={navigationLogo} alt="Navigation" /> */}
                    <h1>Tip4Tips</h1>
                </div>
            </header>
        )
    }
}

export default Menu;