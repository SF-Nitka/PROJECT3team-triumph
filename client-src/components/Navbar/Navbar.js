import React, { Component } from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
 state = {
   anchorEl: null
 };

 handleClick = (event) => {
   this.setState({ anchorEl: event.currentTarget });
 };

 handleClose = () => {
   this.setState({ anchorEl: null });
 };

 render() {
   const { anchorEl } = this.state;
   return (
     <div>
       <AppBar position="static">
         <Toolbar>
           <IconButton color="inherit" aria-label="Menu">
             <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}
             >
               <MenuItem onClick={this.handleClose}>
                 <Link to={'/'}>Home</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose}>
                 <Link to={'/animals'}>Animal Facts</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose}>
                  <Link to={'/habitats'}>Live Cams</Link>
                </MenuItem>

               <MenuItem onClick={this.handleClose}>
                <Link to={'/Games'}>Memory Game</Link>
                </MenuItem>
            </Menu>
            
           </IconButton>


           <Typography variant="h6" color="inherit">
             World of Animals
           </Typography>

           <Button
             aria-owns={anchorEl ? 'simple-menu' : undefined}
             aria-haspopup="true"
             onClick={this.handleClick}
           >
             Open Menu
           </Button>
         </Toolbar>
       </AppBar>
     </div>
   );
 }
}