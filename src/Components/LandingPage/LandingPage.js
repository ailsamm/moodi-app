import React, { Component } from 'react';
import { Link } from "react-scroll";
import Bounce from 'react-reveal';
import './LandingPage.css';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="landingPage background">
                <section className="landingPage__intro centered">
                    <p className="landingPage__meet">welcome to</p>
                    <Bounce top>
                        <h1 className="landingPage__title">moodi</h1>
                    </Bounce>
                    <p className="landingPage__description">your best friend in mood tracking</p>
                    <Link 
                        to="about" 
                        smooth={true}
                        className="button landingPage__learnMorebutton"> 
                            learn more
                    </Link>
                </section>

                <section>
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
                
                <section className="landingPage__about" id="about">
                    <section>
                        <h2>What is Moodi?</h2>
                        <p>Moodi is a versatile app that takes the effort out of keeping a mood journal all while allowing you to track your mood and the different factors that lead to your ups and downs.</p>
                    </section>
                    <section>
                        <h2>How can Moodi help me?</h2>
                        <ul>
                            <li>&nbsp;<span className="bold">Quickly</span> take note of how you felt during a particular day</li>
                            <li>&nbsp;No need to write anything if you don't want to - our <span className="bold">quick-tap buttons</span> will help you out</li>
                            <li>&nbsp;Look through your very own <span className="bold">journal of mood logs</span> for your own complete history</li>
                            <li>&nbsp;Take a peek at your <span className="bold">personalized dashboard</span> to see stats and figures from your recent moods</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Who is Moodi for?</h2>
                        <p>In short - everyone! Whether you're struggling with depression, or simply want to a way of logging your life, Moodi is a valuable tool for tracking your mood patterns.</p>
                    </section>
                </section>
            </div>
        );
    }
}