import React, { Component } from 'react';
import './memory.css';
import Navbar from '../../components/Navbar'
import { withStyles } from '@material-ui/core/styles';
import Button from '../../components/button/button.js'



export default class Memory extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="memory-card" data-framework="camel">
          <img className="front-face" src={"src/client/assets/images/memory/IMG_camel.jpg"} alt="camel" />
          <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley" />

          <div className="memory-card" data-framework="camel">
            <img className="front-face" src={"src/client/assets/images/memory/IMG_camel.jpg"} alt="camel" />
            <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley" />

            {/* ********* */}

            <div className="memory-card" data-framework="deer">
              <img className="front-face" src={"src/client/assets/images/memory/IMG_deer.jpg"} alt="deer" />
              <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley" />

              
              <div className="memory-card" data-framework="deer">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_deer.jpg"} alt="deer" />
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley" />
            {/* ************* */}
                  
              <div className="memory-card" data-framework="horse">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_horse.jpg"} alt="horse"/>
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley"/>

                  <div className="memory-card" data-framework="horse">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_horse.jpg"} alt="horse"/>
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley"/>

                {/* ************** */}

                  <div className="memory-card" data-framework="squirel">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_squirel.jpg"} alt="squirel"/>
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley"/>

                 <div className="memory-card" data-framework="squirel">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_squirel.jpg"} alt="squirel"/>
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley"/>

                {/* *************** */}

                 <div className="memory-card" data-framework="wolf">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_wolf.jpg"} alt="wolf"/>
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley"/>

                 <div className="memory-card" data-framework="wolf">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_wolf.jpg"} alt="wolf"/>
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley"/>

              {/* ****************** */}

               <div className="memory-card" data-framework="frog">
                <img className="front-face" src={"src/client/assets/images/memory/IMG_frog.jpg"} alt="frog"/>
                <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley"/>


              </div>
              <Button variant="contained" >
                Play Again!
      </Button>
            </div>

            );
          }
}