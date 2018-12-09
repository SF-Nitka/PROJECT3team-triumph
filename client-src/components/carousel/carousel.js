import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Welcome',
    imgPath: 'static/media/carouselslides/welcome.png'
  },
 
  {
    label: 'Dragonfly',
    imgPath: 'static/media/carouselslides/dragonfly.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'static/media/carouselslides/welcome.png'
  },
 
  {
    label: 'Frog',
    imgPath: 'static/media/carouselslides/frog.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'static/media/carouselslides/welcome.png'
  },
 
  {
    label: 'Meerkat',
    imgPath: 'static/media/carouselslides/meerkat.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'static/media/carouselslides/welcome.png'
  },
 
  {
    label: 'Snow Leopard',
    imgPath: 'static/media/carouselslides/snowleopard.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'static/media/carouselslides/welcome.png'
  },
 
  {
    label: 'Vulture',
    imgPath: 'static/media/carouselslides/vulture.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'static/media/carouselslides/welcome.png'
  }
 ];
 
 const styles = theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },

  img: {
    height: 600,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
});

class Carousel extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}> 
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Carousel);