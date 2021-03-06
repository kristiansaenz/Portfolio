import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation" >
                    <div class="navbar-brand">
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a href="#AboutSection" class="navbar-item">about me</a>
                            <a href="#SkillsSection" class="navbar-item">skills</a>
                            <a href="#ExperienceSection" class="navbar-item">experience</a>
                            <a href="#EducationSection"class="navbar-item">education</a>
                            <a href="#PortfolioSection" class="navbar-item">portfolio</a>
                            <a href="#ContactSection" class="navbar-item">contact</a>
                        </div>
                    </div>
                    <div class="navbar-end"></div>
                </nav>
                <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation" >
                            <nav class="level is-mobile">
                                <p class="level-item has-text-centered">
                                    <a href="#AboutSection" class="navbar-item">about me</a>
                                </p>
                                <p class="level-item has-text-centered">
                                    <a href="#SkillsSection" class="navbar-item">skills</a>
                                </p>
                                <p class="level-item has-text-centered">
                                    <a href="#ExperienceSection" class="navbar-item">experience</a>
                                </p>
                                <p class="level-item has-text-centered">
                                    <a href="#EducationSection"class="navbar-item">education</a>
                                </p>
                                <p class="level-item has-text-centered">
                                    <a href="#PortfolioSection"class="navbar-item">portfolio</a>
                                </p>
                                <p class="level-item has-text-centered">
                                    <a href="#ContactSection" class="navbar-item">contact</a>
                                </p>
                            </nav>

            </nav>
        </div>

        );
    }
}

export default Navbar;