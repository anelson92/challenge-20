import React from 'react';
import Project from '../../components/Project';


const project1 = {
    title: "Chuck Norris v Your Dad",
    description: "Chuck Norris Versus is a selector/storage of jokes, with the help of event listeners and the addition of the APIs provided content, this project is able to entertain users by providing two jokes simultaneously which the user can choose from. The chosen joke will then be stored and displayed in a separate column.",
    url: "https://maxholzmann.github.io/chuck-norris-versus/",
    img: "../../../public/p1.png"
}

function Portfolio() {
    return (
      <>
     <Project project={project1}></Project>
     </>
    );
  }
  
  export default Portfolio;
