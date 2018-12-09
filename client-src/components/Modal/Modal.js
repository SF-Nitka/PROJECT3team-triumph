import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { CardMedia } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  media: {
    objectfit: 'cover',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    const { classes } = this.props;
    const { animal } = this.props;

const gorillaCam = [
        {
          alt:'gorilla cam',
          src: "https://www.youtube.com/embed/pHtOPHLhQME",
          title: 'Gorilla Cam',
          width: '33%',
        },
      ];

    return (

      <div>
             <Button onClick={this.handleOpen}>
              {/* <ButtonBases /> */}
             </Button>
  
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
                <CardMedia
                     component="iframe"
                     alt={gorillaCam.alt}
                     className={classes.media}
                     height="315"
                     width="560"
                     src= "https://www.youtube.com/embed/pHtOPHLhQME"
                     title={gorillaCam.title}>
                </CardMedia>
            <SimpleModalWrapped />
          </div>
        </Modal>
        
      </div>
    );
  }
}
           
SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;


