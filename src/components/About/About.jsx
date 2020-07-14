import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h4" color="textPrimary">
                About Shoe Store
            </Typography>
            <Typography variant="subtitle1">
                This project was bootstrapped with {""}
                <a 
                    href="https://github.com/facebook/create-react-app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Create React App
                </a>. 
                It was created for submission as the third project in Pana Cloud Bootcamp 2020. 
                The web app has been deployed to Surge, and can be accessed {""}
                <a 
                    href="http://shoe-store-sharjeel.surge.sh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    here
                </a>. 
            </Typography>
            <Typography variant="h5" style={{paddingTop: "1em"}}>Features</Typography>
            <Typography variant="subtitle1">
                    <li>Displays some of the products on the home page in a randomized manner</li>
                    <li>Displays shoes in three categories: men, women and kids</li>
                    <li>Dynamically creates pages for men, women and kids categories</li>
                    <li>Dynamically creates page for displaying details of a single product</li>
                    <li>Renders PageNotFound component if the URL or product is not found.</li>
            </Typography>

            <Typography variant="h5" style={{paddingTop: "1em"}}>Learning Outcomes</Typography>
            <Typography variant="subtitle1">
                <li>
                    Using {""}
                    <a 
                        href="https://reactrouter.com/web/guides/quick-start" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        react-router-dom
                    </a>
                    {""} library to create pages with well defined URLs in React App
                </li>
                <li>
                    Using the {""}
                    <a 
                        href="https://github.com/ReactTraining/react-router/releases" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        latest beta version
                    </a>
                    {""} of react-router-dom
                </li>
                <li>
                    Also used {""}
                    <a 
                        href="https://material-ui.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        @materail-ui/core
                    </a>
                    {""} and {""}
                    <a 
                        href="https://material-ui.com/components/material-icons/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        @material-ui/icons
                    </a>
                    {""} libraries
                </li>
            </Typography>
        </div>
    )
}

export default About;