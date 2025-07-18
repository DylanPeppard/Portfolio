import { useState } from "react";
import { Link } from 'react-router-dom'

export function Projects ({}) {
    return (
      <>
        <div className = "page">
            <div className = "wrapper">
                <div className = "left">
                    <div className = "link-wrapper">
                        <Link to="/">HOME</Link>
                    </div>

                    <div className = "link-wrapper">
                        <Link to='/contact'>CONTACT</Link>
                    </div>
                </div>
                <div className = "my-name">
                    Dylan Peppard
                </div>
            </div>

            <div className = "projects">
                <div className = "project">
                    <img src="nasa.png" alt="NASA VR Project"/>
                    <div className = "caption"> 
                        <div>Award-winning <a target="_blank" href="https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-iridium-class/nasa-surface-data-vr-uci-d/">
                            senior capstone</a> project competing against 25 other UCI teams. I worked with a team of five other skilled 
                            UCI students to develop a VR simulation of NASA Psyche - a metal-rich asteroid - through sponsors at Arizona 
                            State University. I implemented user interfaces and game logic (e.g., main menu, in-game menu, scene transiti
                            oning and timing, progress tracking, controls) while leading scrums, gathering requirements, and designing UMLs.</div>
                    </div>
                </div>
                <div className = "project">
                    <img src="search_engine.png" alt="Search Engine graphical user interface"/>
                    <div className = "caption"> 
                        <div> A UCI-specific search engine with an interface, coded from scratch. It indexes pages that it visits and can look up 
                            "AND"-type queries in about 100ms.
                            Developed software to merge the TF-IDF that was distributed across
                            multiple files to accommodate the memory constraints incurred by
                            crawling thousands of sites.
                            Implemented autocorrect so that users could quickly fix a query if
                            they made a typo. </div>
                    </div>
                </div>
                <div className = "project" id="a3">
                    <img src="event_app.png" alt="Event Management Web App"/>
                    <div className = "caption"> 
                        <div>A full-stack React web application that allows users to create
                            accounts and create, search for, sign up for, and delete events.
                            Implements Google Maps API to allow users to filter for nearby
                            gatherings. Developed the front-end in JS, CSS, and HTML using React.
                            Implemented the back-end functionality so that user information could be
                            stored and retrieved and users would automatically receive emails
                            confirming their event registration with details.
                        </div>
                    </div>
                </div>

                
                <div className = "project">
                    <img src="a4.png" alt="sleep tracking app"/>
                    <div className = "caption"> 
                        <div>A simple sleep-tracking app using Angular and Ionic.
                        Users log when they went to sleep and when they woke up. They can also log their sleepiness throughout
                        the day according to the Stanford sleepiness scale.
                        </div>
                    </div>
                </div>
                <div className = "project" id="a3">
                    <img src="a3.png" alt="spotify browser web app"/>
                    <div className = "caption"> 
                        <div>My first Angular project and my introduction to TypeScript - a Spotify browser.
                        Users can search up tracks, artists, albums, and track features upon logging in via OAuth.
                        Implements Bootstrap features and the Spotify API.
                        </div>
                    </div>
                </div>
                <div className = "project">
                    <img src="a5.png" alt="Man holding hand to generate random animal"/>
                    <div className = "caption"> 
                        <div>A small Angular project in accessibility modalities that utilizes hand gestures to generate
                        random animal images from various APIs. Images/headers are stored in stacks to
                        enable the user to return to previous images. The progress bar indicates
                        loading to 3.5 seconds.</div>
                    </div>
                </div>
            </div>

        </div>
      </>
    )
};

export default Projects;