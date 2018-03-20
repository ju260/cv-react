const React = require('react');

class Job extends React.Component{
	
	render(){
		return (
            <li>
        		<a href={this.props.jobLink} target="_blank" rel="noopener noreferrer">
                	<img src={this.props.jobImgSrc} alt="" className="jobs__img" />
	        		<div className="bloc2 bckBlack"><div className="verticlaAlign"><h3 className="title3">{this.props.jobTitle}</h3></div></div>
	        		<div className="bloc2"><div className="verticlaAlign"><p className="txt2">{this.props.jobDesc}</p></div></div>
	        	</a>
        	</li>
        );
	}
}

class Jobs extends React.Component{
    render() {
		this.Jobs = [
			{
				title:"Elietop",
				desc:"javascript OO, ES6, svg, canvas, animations,Responsive Mobile/Tablets",
				imgSrc:"img/elietop.png",
				link:"https://www.elietop.fr"
			},
			{
				title:"Altran",
				desc:"javascript OO, ES6, canvas, animations,Responsive Mobile/Tablets",
				imgSrc:"img/logo-altran.png",
				link:"https://www.altran.com/fr/fr/"
			},
			{
				title:"Paddington",
				desc:"javascript OO, ES6, canvas, animations,Responsive Mobile/Tablets",
				imgSrc:"img/logo-paddington.png",
				link:"https://paddington.com"
			},
			{
				title:"Marques Avenue",
				desc:"animations,Mobile/Tablets, html5 css3",
				imgSrc:"img/visu-ma.jpg",
				link:"http://www.marquesavenue.com/"
			},
			{
				title:"Bank centrale Européenne",
				desc:"Mobile/Tablets, html5 css3, site multilingues (21 langues)",
				imgSrc:"img/visu-bce.jpg",
				link:"http://www.nouveaux-billets-euro.eu/"
			}
		]
		const rows = [];
		this.Jobs.forEach((job) => {
			rows.push(
				<Job
				jobTitle={job.title}
				jobDesc={job.desc}
				jobImgSrc={job.imgSrc}
				jobLink={job.link}

				key={job.title}
				/>
			);
		});

        return (
           <section className="section clearfix" id="sect3">
        	 <div className="content">
        	  <div className="wrapper">
        		<h2><span className="visuallyhidden">WORK</span></h2>
        		<ul className="list1">
					{rows}
        		</ul>
        	  </div>
        	 </div>
        	</section>
        );
    }
};

module.exports = Jobs;


