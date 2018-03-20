import React, { Component } from 'react';
import { PropTypes } from 'react';
/*import SiteContainer from './sections/Sections';*/

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
        			<li><a id="menu2" href="javascript:void(0)" data-id="work" onClick={this.handleNavClick}>{this.texts.nav2}</a></li>
        			<li><a href="mailto:julienlcpro@gmail.com" target="_blank">{this.texts.nav2}</a></li>
                </ul>
            </nav>
        );
    }
};



class About extends React.Component{
   constructor(){
	   super();
		this.texts = {
			aboutName:"LE\n CORRE",
			aboutFirstName:"JULIEN",
			aboutTitle:"FRONT-END DEVELOPER",
			aboutDesc:"36 ans, je suis un developeur web passionné, specialisé dans l'intégration front end (html5/css3 et javascript), je respecte la norme W3C, avec un developement compatible avec tous navigateurs."
		}
		
   }
    render() {
        return (
			
           <section className="section clearfix" id="sect2" >
        	  <div className="content">
        		<div className="wrapper">
        			<div className="logoAbout"><span className="visuallyhidden">à propos</span></div>
        			<div className="line margL2">
	        			<div className="bloc1 size3of1">
	        				<div className="size1of1 floatL"><h2 className="title1 txtCenter">{this.texts.aboutFirstName}<br/>{this.texts.aboutName}</h2></div>
	        				<div className="">
	        					<p className="title2">{this.texts.aboutTitle}</p>
	        					<p className="txt1">{this.texts.aboutDesc}</p>
	        				</div>	
	        			</div>
        			</div>
        			<div className="line margL1 line2">
	        			<div className="bloc1"><div className="title1 txtCenter"><font className="lightFont ft4" >10</font><br/><font className="lightMed ft5" >YEARS</font><br/><font className="lightMed ft6" >EXPERIENCE</font></div>{/*<div className=" txtCenter"><font className="lightFont ft1" >36</font><br/><font className="lightMed ft2" >YEARS</font><br/><font className="lightMed ft3" >OLD</font></div>*/}</div>
	        			<div className="size1of1 floatL txtCenter bloc1"><img src="img/visu1.png" alt=""  className="" /><span className="visuallyhidden">french flair</span></div>
	        			{/*<div className="bloc1"><div className="title1 txtCenter"><font className="lightFont ft4" >10</font><br/><font className="lightMed ft5" >YEARS</font><br/><font className="lightMed ft6" >EXPERIENCE</font></div></div>*/}
        			</div>
        			<div className="line margL2 line3">
        				<div className="bloc1 borRightNone"><img className="res" src="img/logo-html5.png" alt="logo html5" /><span className="visuallyhidden">HTML5</span></div>
        				<div className="size1of1 floatL"><span className="visu1">&nbsp;</span></div>
        			</div>
        			<div className="line line4">
	        			{/*<div className="bloc1 size2of1">
	        				<p className="title2">HIGHT LEVELS OF KNOWLEDGE WITH</p>
	        				<p className="txt1">i'm a passionnate web developer specialized in front end development (xhtml/css and javascript), i respect semantics markups with W3C standarts, cross browsers developments and Unobtrusive Javascript.</p>
	        			</div>*/}
	        			<div className="size1of1 floatL borRightNone"></div>
	        			<div className="size1of1 floatL"><span className="visu2">&nbsp;</span></div>
	        		</div>	
	        		<div className="line line5">
	        			<div className="bloc1 size1of4">
	        				<h2>javascript</h2>
	        				<ul>
								<li>ES6</li>
								<li>JOO</li>
								<li>Gulp, Grunt, Webpack</li>
	        					<li>SVG</li>
	        					<li>CANVAS</li>
	        					<li>API google map</li>
	        					<li>Jquery</li>
	        				</ul>
	        			</div>
	        			<div className="size1of1 floatL txtCenter">
	        				<img src="img/Mobile-tablet.png" alt=""  className="res" />
	        			</div>
	        			<div className="bloc1 borRightNone">
							<p className="title2">SOFTWARE &amp; APPLICATIONS</p>
	        				<p className="txt1">Visual Studio, photoshop, illustrator...</p>
	        				{/*<ul>
	        					<li>CSS2/3</li>
	        					<li>W3C</li>
	        				</ul>*/}
	        			</div>
	        			<div className="bloc1 flex">
							<a href="#" className="word fCenter"><span className="ft7 txtCenter">DOWN<span className="ft8">LOAD</span></span></a>
	        				{/*<ul>
	        					<li>DOM</li>
	        					<li>XML</li>
	        					<li>AJAX</li>
	        				</ul>*/}
	        			</div>
        			</div>
        			<div className="line line6">
	        			{/*<div className="size1of1 floatL txtCenter bloc3">
	        				Emailing template
	        			</div>*/}
	        			{/*<div className="bloc1 borRightNone">
	        				<p className="title2">SOFTWARE &amp; APPLICATIONS</p>
	        				<p className="txt1">Visual Studio, photoshop, illustrator...</p>
	        			</div>*/}
	        			{/*<div className="bloc1">
	        				<a href="" className="word">télécharger mon cv au format word</a>
	        			</div>*/}
        			</div>
        		</div>
        	  </div>
        	</section>
        );
    }
}
;



class Intro extends React.Component{
   
    render() {
        return (
           <section className="section clearfix" id="sect1" >
        	 <div className="content">
        	  <div className="wrapper wrapper--fullH" >
        	  	<div className="blocIntro">
	        		<div className="intro">
	        			<header><h1 className="visuallyhidden">julien le corre</h1></header>
	        		</div>
	        		<canvas id="viewport" width="500" height="500"></canvas>
	        	</div>
        		</div>
        	  </div>
        	</section>
        );
    }
};



class Jobs extends React.Component{
   
    render() {
        return (
           <section className="section clearfix" id="sect3">
        	 <div className="content">
        	  <div className="wrapper">
        		<h2><span className="visuallyhidden">WORK</span></h2>
        		<ul className="list1">
              <li>
        				<a href="https://www.elietop.fr" target="_blank" rel="noopener noreferrer">
                            <img src="img/elietop.png" alt="" className="jobs__img" />
	        				<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">Elietop</h3></div></div>
	        				<div className="bloc2"><div className="verticlaAlign"><p className="txt2">javascript OO, ES6, svg, canvas, animations,Responsive Mobile/Tablets </p></div></div>
	        			</a>
        			</li>
        			<li>
        				<a href="https://www.altran.com/fr/fr/" target="_blank">
                            <img src="img/logo-altran.png" alt="" className="jobs__img" />
	        				<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">Altran</h3></div></div>
	        				<div className="bloc2"><div className="verticlaAlign"><p className="txt2">javascript OO, ES6, canvas, animations,Responsive Mobile/Tablets </p></div></div>
	        			</a>
        			</li>
                    <li>
        				<a href="https://paddington.com" target="_blank">
        					<img src="img/logo-paddington.png" alt="" className="jobs__img" />
        					<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">Paddington</h3></div></div>
        					<div className="bloc2"><div className="verticlaAlign"><p className="txt2">javascript OO, ES6, canvas, animations,Responsive Mobile/Tablets</p></div></div>
        				</a>
        			</li>
              
                    <li>
        				<a href="http://www.marquesavenue.com/" target="_blank">
        					<img src="img/visu-ma.jpg" alt="" className="jobs__img"/>
	        				<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">Marques Avenue</h3></div></div>
	        				<div className="bloc2"><div className="verticlaAlign"><p className="txt2">animations,Mobile/Tablets, html5 css3</p></div></div>
	        			</a>
        			</li>
        			<li>
        				<a href="http://www.nouveaux-billets-euro.eu/" target="_blank">
        					<img src="img/visu-bce.jpg" alt="" className="jobs__img"/>
	        				<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">Bank centrale Européenne</h3></div></div>
	        				<div className="bloc2"><div className="verticlaAlign"><p className="txt2">Mobile/Tablets, html5 css3, site multilingues (21 langues)</p></div></div>
	        			</a>
        			</li>
        			<li>
        				<a href="http://www.havasworldwideparis.com/" target="_blank">
        					<img src="img/visu-hwp.jpg" alt="" className="jobs__img"/>
	        				<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">HAVAS WORLDWIDE</h3></div></div>
	        				<div className="bloc2"><div className="verticlaAlign"><p className="txt2">html5 css3, CSS3 TRANSFORM, parallax</p></div></div>
	        			</a>
        			</li>
        			
        			<li>
        				<a href=" http://www.edfenr.com" target="_blank">
        					<img src="img/visu-edfenr.jpg" alt="" className="jobs__img"/>
        					<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">EDF ENR</h3></div></div>
        					<div className="bloc2"><div className="verticlaAlign"><p className="txt2">html5 css3, jquery, Hightcharts.js</p></div></div>
        				</a>
        			</li>
        			<li>
        				<a href=" http://www.grtgaz.com" target="_blank">
        					<img src="img/visu-grt.jpg" alt="" className="jobs__img"/>
        					<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">GRTGAZ</h3></div></div>
        					<div className="bloc2"><div className="verticlaAlign"><p className="txt2">Mobile/Tablets, html5 css3, jquery</p></div></div>
        				</a>
        			</li>
        			<li>
        				<a href=" http://www.nsquare.net" target="_blank">
        					<img src="img/visu-df.jpg" alt="" className="jobs__img"/>
        					<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">N-SQUARE</h3></div></div>
        					<div className="bloc2"><div className="verticlaAlign"><p className="txt2">Mobile/Tablets, html5 css3, jquery</p></div></div>
        				</a>
        			</li>
        		</ul>
        	  </div>
        	 </div>
        	</section>
        );
    }
};


class Sections extends React.Component{
   constructor(props) {
    super(props);
    
  }
    render() {
        return (
            <div className={this.props.styleName}>
              <Intro />
                <About />
                <Jobs />
            </div>
        );
    }
};


class SiteContainer extends React.Component{
   constructor(props) {
    super(props);
    this.state = {styleName: ''};

	this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(styleName) {
    console.log(`handleNavClick ${styleName}`);
  //  this.props.onInStockChange(styleName);
  this.setState({
    styleName: styleName
  })
  }

    render() {
        return (
			 <div >
				<Navigation  styleName={this.state.styleName} onNavClick={this.handleNavClick} />
				<Sections styleName={this.state.styleName} className={this.state.styleName}/>
			</div>
        );
    }
};


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SiteContainer  />
      </div>
    );
  }
}

export default App;
