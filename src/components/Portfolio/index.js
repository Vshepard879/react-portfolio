import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Rabbit Hole',
			description:
			'This is a tech blog app that I built using handlebars express and Node.js. It is an app that allows users to create, edit, and delete posts. It also allows users to comment on posts.',
			image: 'living-real-image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku & AWS S3',
				'React.js',
				'MERN Stack',
			],
			github: 'https://github.com/beimy/tech-blog',
			deployed: 'https://therabbithole-blog.herokuapp.com',
		},
		{
			name: 'Team Profile Generator',
			description:
				'A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
			image: 'auto-tracker-image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Jest',
				'Inquirer',
			],
			github: 'https://github.com/Vshepard879/Team-Profile-Generator',
			deployed: 'https://drive.google.com/file/d/1u_6PwkWjxamjAWVQgFP6IgjlMsvTtrjG/view',
		},
		{
			name: 'E-Commerce Backend',
			description:
				'A backend development application that creates a database for an e-commerce site that will utilize Object-Relational Mapping to interact with the database.',
			image: 'flash-beats-image.PNG',
			technologies: ['JavaScript',
			'Node.js',
			'MYSQL2',
			'Express & Sequelize',
			'Nodemon',
			],
			github: 'https://github.com/Vshepard879/E-commerce-Back-End',
			deployed: 'https://drive.google.com/file/d/1ABEIGiS7iAkXb27a6-LBm71TUlLLP_af/view',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/Vshepard879/PWA-Budget-Tracker',
			deployed: 'https://pwa-budget-tracker-vshepard879.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Vshepard879/Weather-Dashboard',
			deployed: 'https://vshepard879.github.io/Weather-Dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Vshepard879/Challenge-3-Password-Generator',
			deployed: 'hhttps://vshepard879.github.io/Challenge-3-Password-Generator/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/Vshepard879/Note-Taker',
			deployed: 'https://note-taker-vshepard879.herokuapp.com/notes',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;