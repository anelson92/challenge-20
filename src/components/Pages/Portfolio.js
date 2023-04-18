import React from 'react';
import Project from '../../components/Project';


const project1 = {
    title: "Chuck Norris v Your Dad",
    description: "Chuck Norris Versus is a selector/storage of jokes, with the help of event listeners and the addition of the APIs provided content, this project is able to entertain users by providing two jokes simultaneously which the user can choose from. The chosen joke will then be stored and displayed in a separate column.",
    url: "https://maxholzmann.github.io/chuck-norris-versus/",
    img: "/p1.png"
}

const project2 = {
  title: "SweatSmart",
  description:"Our fitness app is a MERN stack single-page application that helps users achieve their fitness goals by providing personalized workouts, nutrition plans, and progress tracking. The app uses GraphQL with a Node.js and Express.js server and MongoDB with the Mongoose ODM for the database. Users can easily retrieve, add, update, and delete data, including their workout history, meals, and progress measurements. The app features a polished UI that is both responsive and interactive, providing a seamless user experience. Authentication is implemented using JWT, ensuring that only authorized users can access their data. Our fitness app is designed to help users achieve their fitness goals and maintain a healthy lifestyle, making it a valuable addition to any fitness enthusiast's toolkit.",
  url: "https://github.com/anelson92/workout-tracker",
  img: "/sweat.png"
}

const project3 = {
  title: "Invite On!",
  description:"The real-world full-stack application displays Node.js & Express.js creating restful APIs, Handlebars working as the engine, MySQL & Sequelize ORM running the database, and GET/POST routes retrieving data. New unique packages, libraries, technologies, and high quality identifiable file structures are also being put to use.",
  url: "https://github.com/anelson92/Project-2",
  img: "/rsvpsite.png"
}

function Portfolio() {
    return (
      <>
     <Project project={project1}></Project>
     <Project project={project2}></Project>
     <Project project={project3}></Project>
     </>
    );
  }
  
  export default Portfolio;
