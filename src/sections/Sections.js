/*import React, { Component } from 'react';*/
import Intro from './Intro';
import About from './About';
import Jobs from './Jobs';


const React = require('react');

class Sections extends React.Component{
      render() {
        return (
            <div id="sections" className={this.props.styleName}>
              <Intro />
                <About />
                <Jobs />
            </div>
        );
    }
};

export default Sections;
