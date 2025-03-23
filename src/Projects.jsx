import { useState } from "react";

export function Projects ({}) {
    return (
      <>
        <div className = "page">
            <div className = "wrapper">
                <div className = "left">
                    <div className = "link-wrapper">
                        <a href="home">HOME</a>
                    </div>

                    <div className = "link-wrapper">
                        <a href="contact">CONTACT</a>
                    </div>
                </div>
                <div className = "my-name">
                    Dylan Peppard
                </div>
            </div>

            <div className = "projects">
                <div className = "project">
                    <img src="src/public/nasa.png" alt="NASA VR Project"/>
                </div>
                <div className = "project">
                    <img src="src/public/search_engine.png" alt="Search Engine graphical user interface"/>
                </div>
                <div className = "project" id="a3">
                    <img src="src/public/event_app.png" alt="Event Management Web App"/>
                </div>
                <div className = "caption"> 
                    <div>As a part of my <a href="https://psyche.asu.edu/get-involved/capstone-projects/capstone-projects-iridium-className/nasa-surface-data-vr-uci-d/">
                        senior capstone</a> project, I've been working with a team of UCI students to develop a VR 
                        simulation of NASA Psyche - a metal-rich asteroid - through sponsors at Arizona State University. 
                        I implemented user interfaces and game logic (e.g., main menu, in-game menu, scene transitioning and 
                        timing, progress tracking, controls) while leading scrums, gathering requirements, and designing UMLs.</div>
                </div>
                <div className = "caption"> 
                    <div> A UCI-specific search engine with an interface, coded from scratch. It indexes pages that it visits and can look up 
                        "AND"-type queries in about 100ms.
                        Developed software to merge the TF-IDF that was distributed across
                        multiple files to accommodate the memory constraints incurred by
                        crawling thousands of sites.
                        Implemented autocorrect so that users could quickly fix a query if
                        they made a typo. </div>
                </div>
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

                
                <div className = "project">
                    <img src="src/public/a4.png" alt="3-dimensional model of a movie set"/>
                </div>
                <div className = "project" id="a3">
                    <img src="src/public/a3.png" alt="spotify browser web app"/>
                </div>
                <div className = "project">
                    <img src="src/public/a5.png" alt="Man holding hand to generate random animal"/>
                </div>
                <div className = "caption"> 
                    <div>A simple sleep-tracking app using Angular and Ionic.
                    Users log when they went to sleep and when they woke up. They can also log their sleepiness throughout
                    the day according to the Stanford sleepiness scale.
                    </div>
                </div>
                <div className = "caption"> 
                    <div>My first Angular project and my introduction to TypeScript - a Spotify browser.
                    Users can search up tracks, artists, albums, and track features upon logging in via OAuth.
                    Implements Bootstrap features and the Spotify API.
                    </div>
                </div>
                <div className = "caption"> 
                    <div>A small Angular project in accessibility modalities that utilizes hand gestures to generate
                    random animal images from various APIs. Images/headers are stored in stacks to
                    enable the user to return to previous images. The progress bar indicates
                    loading to 3.5 seconds.</div>
                </div>
            </div>

        </div>
      </>
    )
};

export default Projects;