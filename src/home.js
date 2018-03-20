import React from 'react';
import Sections from './sections/Sections';
import Navigation from './nav';

class SiteContainer extends React.Component{
   constructor(props) {
    super(props);
    this.state = {styleName: ''};

	  this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(styleName) {
    console.log(`handleNavClick ${styleName}`);
  
    this.setState({
      styleName: styleName
    })
  }

    render() {
        return (
          <div >
            <Navigation rel="noopener noreferrer" styleName={this.state.styleName} onNavClick={this.handleNavClick} />
            <Sections rel="noopener noreferrer" styleName={this.state.styleName} className={this.state.styleName}/>
          </div>
        );
    }
};

export default SiteContainer;