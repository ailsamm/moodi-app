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
                    <h2>What is Moodi?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui scelerisque, convallis dolor at, sollicitudin ligula. Duis sodales leo ut sollicitudin varius. Fusce sollicitudin mi purus. Suspendisse magna ligula, ultricies ac dictum non, feugiat eget neque. Aliquam congue libero vitae purus placerat aliquet. In eget libero ultricies, vulputate ipsum non, interdum ex. Donec vitae elit sed urna convallis posuere. Nulla sit amet tincidunt augue. Maecenas sit amet viverra mauris, a pulvinar lectus.
                    Duis sit amet consectetur libero, vitae faucibus dolor. Nunc et ante quis est pretium feugiat a at justo. Phasellus ac lacus mauris. Aliquam erat volutpat. Mauris gravida mattis urna, a eleifend ante pretium ac. Pellentesque sit amet cursus tellus. Vestibulum elementum, mi iaculis euismod iaculis, lectus massa efficitur eros, eu dignissim ex est ac lectus. Nam maximus, purus sit amet accumsan consequat, lacus ipsum suscipit erat, eu bibendum est ex quis neque. Fusce sagittis massa in gravida elementum. Mauris varius tristique nulla et gravida. In hac habitasse platea dictumst. Aliquam lorem metus, elementum sed scelerisque eu, eleifend at justo. Donec pulvinar dui libero, ac sodales augue posuere ac. In mollis tortor et convallis rutrum. Suspendisse tristique bibendum augue, a pellentesque mauris efficitur vel.</p>
                </section>
            </div>
        );
    }
}