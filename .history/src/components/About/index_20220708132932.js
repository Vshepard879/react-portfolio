import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer looking to further hone my skills and credentials, while providing a service to the community and users on the web. 
                    I am close to having earned a certificate in full stack development from the
					University of Central Florida Full Stack web developer boot camp. Possessing newly developed
					skills in JavaScript, CSS, React.js on the front end. As well as receiving instruction in node.js, Mysql, Sequelize, and MongoDB for back end development. 
                    I thoroughly enjoy the critical thinking and problem side of being a web developer, and with each project completed,
					my aim is to further sharpen these acquired skills and provide an asset to the work force and continue to learn and grow as a developer.
				</p>
				<p>
					I applied aspects of both front and back end development via mysql and express, using agile development in a
					recent project. I worked on a team of four to{' '}
					<a
						href="https://github.com/beimy/tech-blog"
						target="_blank"
					>
						develop
					</a>{' '}
					a{' '}
					<a
						href="https://therabbithole-blog.herokuapp.com/"
						target="_blank"
					>
						a full stack tech blog app in it's alpha phase
					</a>{' '}
					that allows users to register and log into an account, create and edit posts and comments, as well as having search and filtering capabilities. 
                    I am excited to leverage my skills as part
					of a fast-paced, quality-driven team to build better
					experiences on the web.
				</p>
			</div>
		</section>
	);
}

export default About;