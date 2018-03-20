

const React = require('react');

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

module.exports = About;