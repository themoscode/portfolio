import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import myPic from '../assets/img/me.png';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={3}>
            <div style={{textAlign: 'left'}}>
              <img
                src={myPic}
                alt="avatar"
                style={{borderRadius:'5px'}}
                 />
            </div>

            <h4 >Kostakopoulos Efthymios</h4>
            <h4 style={{color: 'grey'}}>Frontend Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Anschrift</h5>
            <p>Achtermann straße 7a 13187</p>
            <h5>Phone</h5>
            <p>017656763396</p>
            <h5>Email</h5>
            <p>themos.kost@yahoo.gr</p>
            <h5>GitHub</h5>
            <p>https://github.com/themoscode</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
           
            
          </Cell>
          <Cell className="resume-right-col" col={9}>
            <h2>Bildung</h2>


            <Education
              startTime='10.02.2020'
              endTime='Heute'
              schoolName="Alphatraining"
              schoolDescription=
              {[
                "Weiterbildung! : Javascript  / Moderne Javascript Frameworks (Angular,React) / Python. ", 
                <ul>
                  <li><b>Projekte:</b></li>
                  <li style={{listStyleType:'none'}}>
                      <ul>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/project_chat_application" target="_blank">Chat-React-Node-Socket.io</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/portfolio" target="_blank">Portfolio-React</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/youtube_clone" target="_blank">Youtube-clone-React</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/corona_app" target="_blank">CoronaApp-React</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/memory_game" target="_blank">MemoryGame-jQuery</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/hangman_game" target="_blank">HangmanGame-Node-Socket.io</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/squares_game" target="_blank">SquaresGame-Node-Socket.io</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/sos_game" target="_blank">SosGame-Node-Socket.io</a></li>
                        
                      </ul>
                    </li>
                  
                </ul>,
              ]}
              />

            <Education
              startTime='24.2.2014'
              endTime='6.6.2014'
              schoolName="F.I.G.D (Fachinstitut für Informatik und Grafikdesign)"
              schoolDescription="Javascript/HTML5/CSS3/Mobile Apps"
              />

            <Education
              startTime='1992'
              endTime='2000'
              schoolName="Fachhochschule Piräus"
              schoolDescription="Diplom-Ingenieur für Automatisierungstechnik – Automatisierungsabteilung"
              /> 
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Erfahrung</h2>

              <Experience
                startTime='12.10.2015'
                endTime='28.06.2019'
                jobName="Webentwickler"
                jobDescription=
                {[
                  "Webentwickler  bei der Firma Epi Development für die Entwicklung von:", 
                  <ul>
                    <li><b>Epi Development Web Site:</b></li>
                    <li style={{listStyleType:'none'}}>
                        <ul>
                          <li><a rel="noopener noreferrer" href="https://epi.rent" target="_blank">https://epi.rent</a></li>
                          <li><a rel="noopener noreferrer" href="https://github.com/themoscode/epirent_angularjs" target="_blank">GitHub</a></li>
                          <li>Technologien: PHP, mySQL CSS, Bootstrap, Angular.js </li>
                        </ul>

                    </li>
                    
                    <div style={{height:'10px'}}></div>
                    <li><b>Epirent-Mobile(2 Versionen):</b> </li>
                    <li style={{listStyleType:'none'}}>
                      <ul>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/epimobile_angular" target="_blank">GitHub</a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/themoscode/epimobile_angularjs" target="_blank">GitHub</a></li>
                        <li>Warenwirtschafts-Software für Vermietung und  Verkauf </li>
                        <li>Technologien: Bootstrap, Angular-AngularJS</li>
                      </ul>
                    </li>
                  </ul>,
                ]}
                />
                <Experience
                startTime='15.3.2015'
                endTime='15.06.2015'
                jobName="Mobile App Entwickler"
                jobDescription=
                {[
                  "Praktikum bei der Firma Skyvention GmbH für die Entwicklung von iOS und Android App mit Appcelerator Titanium Framework:", 
                  <ul>
                    <li><b>Hilo chat app:</b> </li>
                    <li style={{listStyleType:'none'}}>
                        <ul>
                          <li><a rel="noopener noreferrer" href="https://github.com/themoscode/Hilo_titaniumjs" target="_blank">GitHub</a></li>
                        </ul>
                    </li>
                   
                  </ul>,
                ]}
                />
                <Experience
                startTime='15.1.2014'
                endTime='20.5.2014'
                jobName="Webentwickler"
                jobDescription=
                {[
                  "Selbständig bei der Firma Flowerpower-ibus", 
                  <ul>
                    <li><b>Buchungssystem : </b></li>
                    <li style={{listStyleType:'none'}}>
                        <ul>
                          <li><a rel="noopener noreferrer" href="https://github.com/themoscode/bookingSystem" target="_blank">GitHub</a></li>
                          <li>Public site / Admin site)</li>
                          <li>Technologien : PHP ,mySQL,JQuery,Ajax</li>
                          <li>Kundenbetreuung und Ausbildung</li>
                        </ul>
                    </li>
                  </ul>,
                ]}
                />
                
                <Experience
                startTime='20.2.2012'
                endTime='15.4.2012'
                jobName="Webentwickler"
                jobDescription=
                {[
                  "Selbständig für die Entwicklung von:", 
                  <ul>
                    <li><b>Architektur Bentenidi Webseite (offline): </b></li>
                    <li style={{listStyleType:'none'}}>
                        <ul>
                          <li><a rel="noopener noreferrer" href="http://www.bentenidi.de" target="_blank">http://www.bentenidi.de</a></li>
                          <li>Technologien : PHP ,mySQL,JQuery,Ajax</li>
                          <li>Kundenbetreuung und Ausbildung</li>
                        </ul>
                    </li>
                  </ul>,
                ]}
                />

                <Experience
                startTime='2009'
                endTime='2010'
                jobName="Webentwickler"
                jobDescription=
                {[
                  "Webentwickler bei der Firma Webman.gr", 
                  <ul>
                    <li><b>Teil des Programmiererteams für die Entwicklung von:</b> </li>
                    <li style={{listStyleType:'none'}}>
                        <ul>
                          <li><a rel="noopener noreferrer" href="http://www.radiomires.gr" target="_blank">http://www.radiomires.gr</a></li>
                          <li><a rel="noopener noreferrer" href="http://www.toolspro.gr" target="_blank">http://www.toolspro.gr</a></li>
                          <li><a rel="noopener noreferrer" href="http://www.giatrakis.gr" target="_blank">http://www.giatrakis.gr</a></li>
                          <li><a rel="noopener noreferrer" href="http://www.winsat.gr" target="_blank">http://www.winsat.gr</a></li>
                        </ul>
                    </li>
                  </ul>,
                ]}
                />

              <Experience
                startTime='2006'
                endTime='2009'
                jobName="Content Manager"
                jobDescription=
                {[
                  "Content management beim Radiosender Radio Moires (http://www.radiomires.gr), Tontechnik, zuständig für das Musikprogramm und den Programmablauf", 
                  <ul>
                     <li>Content-Management der Website des Radiosenders</li>
                     <li>Tontechnik</li>
                     <li>Programmablauf</li>
                     <li>Werbespots</li>
                     <li>Telemarketing, Kundenbetreung</li>
                  </ul>,
                ]}
                />
                <Experience
                startTime='2004'
                endTime='2006'
                jobName="Content Manager"
                jobDescription=
                {[
                  "Content management (banners, stamps, web content) beim Webportal www.pathfinder.gr", 
                  <ul>
                     <li>Content-Management vom Webportal</li>
                     <li>Telemarketing</li>
                     <li>Werbeverkauf von  banners, und stamps in den Seiten von Pathfinder.gr</li>
                     <li>Kundenbetreuung</li>
                     
                  </ul>,
                ]}
                />
                <Experience
                startTime='2003'
                endTime='2004'
                jobName="Content Manager"
                jobDescription=
                {[
                  "Content management beim Webportal www.unitedonline.eu", 
                  <ul>
                     <li>Content-Management </li>
                     <li>Telemarketing</li>
                     <li>Termine und Kundenbetreuung</li>
                  </ul>,
                ]}
                />
                 <Experience
                startTime='2001'
                endTime='2003'
                jobName="Webentwickler"
                jobDescription=
                {[
                  "Webentwickler bei der Firma atcom.gr", 
                  <ul>
                     <li><a rel="noopener noreferrer" href="http://www.netvolution.net/" target="_blank">http://www.netvolution.net/</a> (C.M.S Anwendung)</li>
                     <li><a rel="noopener noreferrer" href="http://www.nomotelia.gr/" target="_blank">http://www.nomotelia.gr/</a> (Datenbank mit rechtlichem Inhalt)</li>
                     
                  </ul>,
                ]}
                />

              <Experience
                startTime='2000'
                endTime='2001'
                jobName="Praktikum"
                jobDescription="Programmierung – Installation von Robotersystemen bei der Firma Motoman"
                />
              

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                  skill="HTML/CSS3"
                  progress={100}
                  />
              <Skills
                  skill="PHP"
                  progress={70}
                  />
              
              <Skills
                  skill="Bootstrap"
                  progress={90}
                  />   

              <Skills
                skill="javascript"
                progress={100}
                />

              <Skills
                skill="jQuery"
                progress={100}
                />  
              
              <Skills
                skill="typecript"
                progress={50}
                />
              
              <Skills
                skill="AngularJS"
                progress={80}
                />

              <Skills
              skill="Angular"
              progress={70}
              /> 

            <Skills
              skill="React"
              progress={80}
              />  
                
            <Skills
              skill="NodeJS"
              progress={70}
              />

             <Skills
              skill="Titanium.js"
              progress={80}
              /> 

              <Skills
              skill="Phaser.js"
              progress={70}
              />  


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
