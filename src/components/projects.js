import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import phpJsImg from '../assets/img/php-js.png';
import angularjsImg from '../assets/img/angularjs.png';
import angularImg from '../assets/img/angular.png';
import reactImg from '../assets/img/react.png';
import titaniumImg from '../assets/img/titanium.png';
import jsImg from '../assets/img/js.png';
import nodejsImg from '../assets/img/nodejs.png';
import phaserImg from '../assets/img/phaser.png';

class Projects extends Component {
  
  render() {
    return(
      <div style={{maxWidth:'100%',margin:'auto'}}>
         <Grid>
            <Cell col={12}>
              <h3>Projekte</h3>
              <hr></hr>
            </Cell>
          </Grid>  
          <Grid>
            <Cell col={4}>
             
              {/* Project 1 */}

              <Card shadow={5} >
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${reactImg}) center / cover`}} >Webseite</CardTitle>
                <CardText>
                a Youtube Clone App mit React.js              
                </CardText>
                <CardActions border>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/youtube_clone" target="_blank">GitHub</a></Button>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://themoscode.github.io/youtube_clone" target="_blank">Demo</a></Button>
                </CardActions>
              </Card>

            </Cell>
            
            <Cell col={4}>
             
              {/* Project 1 */}

              <Card shadow={5} >
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${reactImg}) center / cover`}} >Webseite</CardTitle>
                <CardText>
                a COVID-19 Tracker/Stats Application mit React.js              
                </CardText>
                <CardActions border>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/corona_app" target="_blank">GitHub</a></Button>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://themoscode.github.io/corona_app" target="_blank">Demo</a></Button>
                </CardActions>
              </Card>

            </Cell>
            <Cell col={4}>
               
                {/* Project 1 */}

                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${angularjsImg}) center / cover`}} >Webseite</CardTitle>
                  <CardText>
                     Web Site der Firma Epi Development mit den Technologien PHP, mySQL CSS, Bootstrap, AngularJS              
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/epirent_angularjs" target="_blank">GitHub</a></Button>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://epi.rent/" target="_blank">Demo</a></Button>
                   
                  </CardActions>
                  
                </Card>

              </Cell>
          </Grid>
          <Grid>
            
            <Cell col={4}>
               
                {/* Project 1 */}

                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${angularjsImg}) center / cover`}} >Web App</CardTitle>
                  <CardText>
                    Web App 'epiMobile' für die Firma Epi Development mit den Technologien Bootstrap, AngularJS             
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/epimobile_angularjs" target="_blank">GitHub</a></Button>
                    
                  </CardActions>
                  
                </Card>

              </Cell>
              <Cell col={4}>
                {/* Project 3 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${angularImg}) center / cover`}} >Web App</CardTitle>
                  <CardText>
                     Web App 'epiMobile' für die Firma Epi Development mit den Technologien Bootstrap, Angular             
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/epimobile_angular" target="_blank">GitHub</a></Button>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://themoscode.github.io/" target="_blank">DEMO</a></Button>
                  
                  </CardActions>
                 
                </Card>
            </Cell>
            <Cell col={4}>
               
                {/* Project 1 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${reactImg}) center / cover`}} >Webseite</CardTitle>
                  <CardText>
                    mein Portfolio Webseite mit React.js
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/portfolio" target="_blank">GitHub</a></Button>
                  </CardActions>
                  
                </Card>
              </Cell>
          </Grid>
        <Grid>
            
              <Cell col={4}>
                {/* Project 2 */}
                <Card shadow={5} >
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${titaniumImg}) center / cover`}} >iOS App</CardTitle>
                  <CardText>
                    iOS App 'Hilo' WhatsUp clone mit Titanium Appcelerator Framework  
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/Hilo_titaniumjs" target="_blank">GitHub</a></Button>
                  </CardActions>
                  
                </Card>
              </Cell>

              <Cell col={4}>
                {/* Project 3 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${phpJsImg}) center / cover`}} >BuchungSystem</CardTitle>
                  <CardText>Buchungssystem (public site / Admin site) mit den Technologien PHP ,mySQL,JQuery,Ajax</CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/bookingSystem" target="_blank">GitHub</a></Button>
                  </CardActions>
                  
                </Card>
            </Cell>
          
            <Cell col={4}>
               
                {/* Project 1 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${jsImg}) center / cover`}} >Animation</CardTitle>
                  <CardText>
                    Canvas Animation mit Javascript - Canvas
                  </CardText>
                  <CardActions border>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/canvas_animation" target="_blank">GitHub</a></Button>
                  
                  </CardActions>
                  
                </Card>
              </Cell>
          </Grid>
          <Grid>
              
              <Cell col={4}>
                {/* Project 2 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${jsImg}) center / cover`}} >Web Game</CardTitle>
                  <CardText>
                    Memory Game mit Javascript
                  </CardText>
                  <CardActions border>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/memory_game" target="_blank">GitHub</a></Button>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://themoscode.github.io/memory_game/" target="_blank">Demo</a></Button>
                   
                  </CardActions>
                  
                </Card>
              </Cell>
              <Cell col={4}>
                {/* Project 3 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${nodejsImg}) center / cover`}} >Web Game</CardTitle>
                  <CardText>
                    Multiplayer Hangman Game mit JS - NodeJS
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/hangman_game" target="_blank">GitHub</a></Button>
                  </CardActions>
                  
                </Card>
            </Cell>
          
            <Cell col={4}>
               
                {/* Project 1 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${nodejsImg}) center / cover`}} >Web Game</CardTitle>
                  <CardText>
                    2 spieler S.O.S Game mit Javascript - NodeJS
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/sos_game" target="_blank">GitHub</a></Button>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://sos-english.herokuapp.com/" target="_blank">Demo</a></Button>
                  </CardActions>
                  
                </Card>
              </Cell>

          </Grid>
          <Grid>
              
              <Cell col={4}>
                {/* Project 2 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${nodejsImg}) center / cover`}} >Web Game</CardTitle>
                  <CardText>
                  2 Spieler Squares Game mit Javascript - NodeJS
                  </CardText>
                  <CardActions border>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/squares_game" target="_blank">GitHub</a></Button>
                  <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="http://squares-english.herokuapp.com/" target="_blank">Demo</a></Button>
                   
                  </CardActions>
                  
                </Card>
              </Cell>
              <Cell col={4}>
                {/* Project 3 */}
                <Card shadow={5} >
                  <CardTitle style={{color: '#fff', height: '176px', background: `url(${phaserImg}) center / cover`}} >Web Game</CardTitle>
                  <CardText>
                    Breakout Clone mit PhaserJS
                  </CardText>
                  <CardActions border>
                    <Button colored> <a style={{color:'#3F6ECF', textDecoration:'none'}} href="https://github.com/themoscode/breakout_game" target="_blank">GitHub</a></Button>
                  </CardActions>
                  
                </Card>
            </Cell>
            
              
          </Grid>
      </div>
    )
  }
}

export default Projects;
