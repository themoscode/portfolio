import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myPic from '../assets/img/me.png';

class Landing extends Component {
  render() {
    return(
      <div className="landing-page">
        <Grid >
          <Cell col={12}>
            <img
              src={myPic}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
                <h1>Frontend Developer</h1>

                <hr/>

                <p>HTML5/CSS3 | Bootstrap | JavaScript | React | Angular | NodeJS </p>

                <div className="social-links">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/efthymios-kostakopoulos-09358350/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="https://github.com/themoscode" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                  
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
