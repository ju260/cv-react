

import React from 'react';

class Navigation extends React.Component{
   constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);

	this.texts = {
		nav1:"ABOUT",
		nav2:"WORK",
		nav3:"CONTACT"
	}
  }

handleNavClick(e) {
   this.props.onNavClick(e.target.dataset.id);
  }
  
render() {
        return (
            <nav id='nav-wrap' className=' opaque'>
                <ul id='nav' className='menu'>
					<li><a id="menu1" data-id="about" onClick={this.handleNavClick} href="javascript:void(0)">{this.texts.nav1}</a></li>
        			<li><a id="menu2" data-id="work" onClick={this.handleNavClick} href="javascript:void(0)">{this.texts.nav2}</a></li>
        			<li><a href="mailto:julienlcpro@gmail.com" target="_blank">{this.texts.nav2}</a></li>
                </ul>
            </nav>
        );
    }
};


export default Navigation;
//module.exports = Navigation;