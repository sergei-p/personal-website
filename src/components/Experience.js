import React from 'react';

function Experience() {
  return(
    <section id="experience">
      <div className="experienceTitle">
        <h2>Experience</h2>
          <hr/>
      </div>
      <div className="universityExperience">
        <h3>Project for Forest Ecology Reasearch</h3>
        <p>
          &emsp; While completing my undergraduate degree I worked, with a team of students, on a project for the <a href="http://pnwpsp.forestry.oregonstate.edu/" target="_blank" rel="noreferrer">
          Pacific Northwest Permanent Sample Plot Program(PNW-PSP)</a>. The PNW-PSP is a Program
          based out of Oregon State University's College of Forestry that works in partnership
          with a number of different Universities and agencies from the Pacific Northwest. The 
          purpose of the PNW-PSP is to study and quantify the long-term dynamics of forest vegetation.
          The program monitors over 150 forest plots in Oregon and Washington. The purpose of our
          project was to create a new data collection mobile app for the program. The app was
          built to run on ruggedized Samsung Galaxy Tablets(Active Series). Our tech stack consited of <a href="https://docs.odk-x.org/" target="_blank" rel="noreferrer">
          ODK-X</a>, JavaScript, jQuery, HTML, CSS, and SQLite. Throughout the duration of the project
          our team worked closely with a professor from the College of Forestry, who was responsible 
          for overseeing the project.  
        </p>
        <p>
          &emsp; I served as the team lead for this project. I was responsible for scheduling meetings 
          with our client, consultants, and team. I was also responsible for task delegation
          and feature/design approval. My technical responsiblities consited of designing the  
          entire UI, designing parts of the database, and data validation. Data validation was
          a very big portion of this project. Many trees in the forest plots have over a hundred
          years of recorded data. Our data validation system had to perform many complicated checks
          any time a new data point was recorded in order to maintain the integrity of the
          data which was being collected, and reduce the probability of human error. Many data points,
          which were being collected often times had to be compared to previous years' data in order
          to ensure their validity. 
          {/* This process, at times, required some fairly complex database lookups.  */}
        </p>
      </div>
      <div className="internshipExperience">
        <h3>Internship at ON Semiconductor</h3>
        <p>
          &emsp; In the summer of 2020 I interned at ON Semiconductor. I worked on the <a href="https://www.onsemi.com/design/tools-software/strata-developer-studio" target="_blank" rel="noreferrer">
          Strata</a> team at the Beaverton, OR office. At the beginning of my internship, I worked on
          a web application, which is responsible for managing Strata accounts and performing data analytics
          on Strata usage. I worked on creating complex web pages and was responsible for facilitating their
          interaction with the database. This included desiging and implementing new schemas to the database, as
          well as making new additions to the API. I worked with React.js, Node.js, Mocha.js, Chai.js, Redux, and MongoDB. 
        </p>
        
        <p>
          &emsp; During my internship I was also tasked with building APIs that manged commands, which Strata uses
          for interacting with Single-board microcontrollers. Prior to the APIs, which I built, engineers stored 
          all of the board commands in a <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noreferrer">
          Confluence</a> page. My APIs provided the team with a lot more versatility in regards to how they manage, 
          interact, and use the commands. The technologies which I used included: Node.js, Mocha.js, Chai.js, Express.js, and Coucbase Database. 
        </p>
      </div>
    </section>
  ) 
}

export default Experience;