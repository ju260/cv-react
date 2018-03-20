const React = require('react');


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

module.exports = Intro;


