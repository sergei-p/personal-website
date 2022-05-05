import React from 'react';

function Projects() {
  return(
    <section id="projects">
      <div className="projectsTitle">
        <h2>Projects</h2>
          <hr/>
      </div>
      <div className="projectItems">
        <dl>
          <dt className="itemB">
              <div className="projectItem">
                <h3>Mobile App for Forest Ecology Research</h3>
                <h4>Description</h4> 
                  <p>
                    Data collection app for the <a href="http://pnwpsp.forestry.oregonstate.edu/" target="_blank" rel="noreferrer">
                    Pacific Northwest Permanent Sample Plot Program</a>. This app is currently
                    being used for collecting tree data from over 150 forest plots across Oregon and Washington. 
                  </p>
                <h4>Technologies</h4> 
                  <p>
                    ODK-X, JavaScript, HTML, CSS, SQLite3
                  </p>
                <h4>GitHub Link</h4>
                  <p>
                    <a href="https://github.com/sergei-p/OSU_Capstone_MAFE" target="_blank" rel="noreferrer">https://github.com/sergei-p/OSU_Capstone_MAFE</a>
                  </p>
              </div>
            </dt> 
          <dt className="itemA">
              <div className="projectItem">
                <h3>Cloud Based In Browser Music Player</h3>
                <h4>Description</h4> 
                  <p>
                    In Browser Music Player, which plays songs stored in AWS services.  The Music Player is hosted on Google Firebase’s hosting service.
                  </p>
                  <p>
                    The song info, is stored in DynamoDB. The Song files are stored in an S3 bucket.  In order to upload songs andtheir info to S3 and 
                    DynamoDB, respectively, I developed a Node.js upload tool using the S3 and DynamoDB SDKs.
                  </p>
                  <p>
                    The API, for retrieving song info, is built with Node.js and is hosted on AWS lambda.
                  </p>
                <h4>Technologies</h4> 
                  <p>
                    Node.js, React.js, AWS S3, AWS DynamoDB, AWS Lambda, AWS API Gateway, AWS SQS, AWSCloudFormation, Google Firebase Hosting
                  </p>
                <h4>GitHub Link</h4>
                  <p>
                    <a href="https://github.com/sergei-p/Cloud-Based-Music-Player" target="_blank" rel="noreferrer">https://github.com/sergei-p/Cloud-Based-Music-Player</a>
                  </p>
              </div>
          </dt>
          <dt className="itemB">
            <div className="projectItem">
              <h3>Social Media Feed</h3>
              <h4>Description</h4> 
                <p>
                Developed a web-based Social Media Feed. The Feed allows a user to view and submit new posts. The posts are stored in a database and the Feed interacts with the posts via an API.
                </p>
              <h4>Technologies</h4> 
                <p>
                JavaScript, HTML, CSS, React.js, Cloudflare Workers, Cloudflare Pages, Cloudflare  KV Storage
                </p>
              <h4>GitHub Link</h4>
                <p>
                  <a href="https://github.com/sergei-p/social-media-feed-project" target="_blank" rel="noreferrer">https://github.com/sergei-p/social-media-feed-project</a>
                </p>
            </div>
          </dt>
          <dt className="itemA">
            <div className="projectItem">
              <h3>Web Based File Converter</h3>
              <h4>Description</h4> 
                <p>
                  A web-based image file converter that converts the following formats: JPEG to PDF, PNG to PDF, JPEG to PNG, PNG to JPEG.
                </p>
              <h4>Technologies</h4> 
                <p>
                  Django Framework, Python, HTML, CSS, Bootstrap4, SQLite3
                </p>
              <h4>GitHub Link</h4>
                <p>
                  <a href="https://github.com/sergei-p/Multi-Format-File-Converter" target="_blank" rel="noreferrer">https://github.com/sergei-p/Multi-Format-File-Converter</a>
                </p>
            </div>
          </dt>
          <dt className="itemB">
            <div className="projectItem">
              <h3>Desktop Messaging App</h3>
              <h4>Description</h4> 
                <p>
                  Desktop messaging app that allows text messages to be sent across multiple clients. The app provides support for
                  one-to-one communication between two clients, as well as group chat with multiple clients. Communication
                  between different clients is accomplished by using a server that relays the messages via websockets.
                </p>
              <h4>Technologies</h4> 
                <p>
                  Qt Framework, QML, Node.js, Node Websockets
                </p>
              <h4>GitHub Link</h4>
                <p>
                  <a href="https://github.com/sergei-p/Desktop-Messaging-App" target="_blank" rel="noreferrer">https://github.com/sergei-p/Desktop-Messaging-App</a>
                </p>
            </div>
          </dt>
          <dt className="itemA">
            <div className="projectItem">
              <h3>Mobile Weather App</h3>
              <h4>Description</h4> 
                <p>
                  Mobile Android weather app that shows a 6 day weather forecast in 4 hour increments per day. The app makes
                  use of the <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer"> OpenWeather API</a>. The app provides 
                  the user with the capability to change the location and the displayed units of the temperatures. The app also
                  keeps a history of all the locations which have been accessed, the user can view these locations.      
                </p>
              <h4>Technologies</h4> 
                <p>
                  Native Android Development, Java, XML, Retrofit, Room, Sqlite3
                </p>
              <h4>GitHub Link</h4>
                <p>
                  <a href="https://github.com/sergei-p/Mobile-Weather-App" target="_blank" rel="noreferrer">https://github.com/sergei-p/Mobile-Weather-App</a>
                </p>
            </div>
          </dt>
          <dt className="itemB">
            <div className="projectItem">
              <h3>League of Legends Mobile App</h3>
              <h4>Description</h4> 
                <p>
                  Mobile Android app that displays information about a summoner such as summoner level, match history, general game info, champion info, etc.
                </p>
              <h4>Technologies</h4> 
                <p>
                  Native Android Development, Java, XML, Retrofit
                </p>
              <h4>GitHub Link</h4>
                <p>
                <a href="https://github.com/sergei-p/League-Of-Legends-Mobile-App" target="_blank" rel="noreferrer">https://github.com/sergei-p/League-Of-Legends-Mobile-App</a>
                </p>
            </div>
          </dt>
          <dt className="itemA">
            <div className='projectItem'>
              <h3>STAR-CCM+ Simulation Data Handler</h3> 
              <h4>Description</h4>
                <p>
                  Developed a Python application that manages simulation data produced by STAR-CCM+. The simulation results are in CSV format. The Python application 
                  collects data from the CSV files, performs any calculations that are necessary, on a case by case basis, and appends the properly formatted data to 
                  an excel file. 
                </p>
              <h4>Technologies</h4>
                Python, Pandas, OpenPyXL, Electron.js
           </div>
          </dt>



        </dl>
      </div>
    </section>
  )
}

export default Projects;