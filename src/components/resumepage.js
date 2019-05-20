import React, { Component } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';
import "./styles/resumepage.css";
import $ from 'jquery';

class ResumePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        $('html, body').animate({
            scrollTop: $(".ResumePage").offset().top
        });
    }

    render() {

        const indent = {
            paddingLeft: "2em",
            textAlign: "left"
        }

        const pad = {
            paddingTop: "2em"
        }

        const para = {
            fontSize: "1.5em",
            lineHeight: "1.5em",
            textAlign: "left",
            paddingBottom: "2em"
        }

        const project = {
            fontSize: "1.5em",
            lineHeight: "1.5em",
            textAlign: "left",
            paddingBottom: "0em"
        }

        const listItem = {
            fontSize: "1.5em",
            lineHeight: "1.5em",
            textAlign: "left",
            paddingBottom: "0em"
        }

        const date = {
            fontSize: "1.5em",
            float: "right",
            textAlign: "right"
        }

        return (
            <div className="ResumePage">
                <Grid celled="internally" relaxed padded="vertically">
                    <Grid.Row stretched>
                        <Grid.Column width={6}>
                            <Grid.Row>
                                <Header as="h2">Personal Information</Header>
                                <Header textAlign="left" as="h3">Email</Header>
                                <p style={indent}>jonathanhay0938@gmail.com</p>
                                <p style={indent}>jhay22@uwo.ca (university email)</p>
                                <Header textAlign="left" as="h3">GitHub</Header>
                                <p style={indent}>https://github.com/JonathanHay</p>
                                <Header textAlign="left" as="h3">Website</Header>
                                <p style={indent}>https://jonathanhay.io</p>
                            </Grid.Row>
                            <Grid.Row>
                                <Header as="h2" style={pad}>Languages</Header>
                                <Grid celled="internally" columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <p>Highly Proficient</p>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <p>Moderately Proficient</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <ul>
                                                <li>C, C++, C#</li>
                                                <li>Python</li>
                                                <li>Java</li>
                                                <li>JavaScript</li>
                                            </ul>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ul>
                                                <li>Dart</li>
                                                <li>Assembly(ARM)</li>
                                                <li>Typescript</li>
                                                <li>PHP</li>
                                            </ul>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Row>
                            <Grid.Row>
                                <Header as="h2" style={pad}>Backend/Databases</Header>
                                <Grid columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <ul>
                                                <li>SQL (MySQL)</li>
                                                <li>MongoDB</li>
                                                <li>AWS</li>
                                            </ul>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ul>
                                                <li>Google Firebase</li>
                                                <li>REST APIs</li>
                                            </ul>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Row>
                            <Grid.Row>
                                <Header as="h2" style={pad}>Design/Management</Header>
                                <Grid columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <ul>
                                                <li>Agile</li>
                                                <li>Scrum</li>
                                                <li>Spiral</li>
                                            </ul>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ul>
                                                <li>XP</li>
                                                <li>Waterfall</li>
                                                <li>UML</li>
                                            </ul>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Row>
                            <Grid.Row>
                                <Header as="h2" style={pad}>Other</Header>
                                <Grid columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <ul>
                                                <li>Unity</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>GitHub</li>
                                                <li>All major OS CLIs</li>
                                            </ul>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ul>
                                                <li>
                                                    <p style={{ marginBottom: "0" }}>Network Config</p>
                                                    <p>(Protocols/OSI)</p>
                                                </li>
                                                <li>SDLC</li>
                                                <li>Microsoft Office</li>
                                                <li>XML</li>
                                            </ul>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Grid divided="vertically" style={{ paddingLeft: "2em" }}>
                                <Grid.Row>
                                    <Grid columns="equal" style={{ width: "100%" }}>
                                        <Header as="h2" style={{ width: "100%" }} textAlign="left"><strong>PERSONAL STATEMENT</strong></Header>
                                        <p style={para}>
                                            A creative, willing-to-learn, and design-oriented 3rd Year Software Engineering Student,
                                            with Web, Mobile, and Desktop development experience, with an eagerness to expand my knowledge in new technology.
                                    </p>
                                    </Grid>
                                </Grid.Row>
                                <Grid.Row>
                                    <Header style={{ width: "100%" }} textAlign="left" as="h2"><strong>EDUCATION</strong></Header>
                                    <Grid columns="equal" style={{ width: "100%" }}>
                                        <Grid.Column>
                                            <p style={project}>
                                                <strong>Western University</strong>, <i>London ON</i>
                                            </p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <p style={date}>
                                                <i>2016-Present</i>
                                            </p>
                                        </Grid.Column>
                                    </Grid>
                                    <ul style={{ paddingBottom: "2em" }}>
                                        <li style={listItem}>Enrolled in Bachelor of Engineering Science (3rd year Software Engineering)</li>
                                        <li style={listItem}>3.0 Cumulative GPA</li>
                                    </ul>
                                </Grid.Row>
                                <Grid.Row>
                                    <Header style={{ width: "100%" }} textAlign="left" as="h2"><strong>PROJECTS</strong></Header>
                                    <Grid columns="equal" style={{ width: "100%" }}>
                                        <Grid.Column>
                                            <p style={project}>
                                                <strong>TrainCSV</strong>
                                            </p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <p style={date}>
                                                <i>2016</i>
                                            </p>
                                        </Grid.Column>
                                    </Grid>
                                    <ul>
                                        <li style={listItem}>
                                            Simple command line CSV reader for fast and creatable query with simple <strong>custom query language</strong>
                                        </li>
                                    </ul>
                                    <Grid columns="equal" style={{ width: "100%" }}>
                                        <Grid.Column>
                                            <p style={project}>
                                                <strong>Bustopia</strong>
                                            </p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <p style={date}>
                                                <i>2018-Present</i>
                                            </p>
                                        </Grid.Column>
                                    </Grid>
                                    <ul>
                                        <li style={listItem}>
                                            Java-based 2D bus management game
                                            </li>
                                        <li style={listItem}>
                                            Currently working on <strong>online leaderboards, cloud save files,</strong> and more interactive
                                                gameplay with a new <strong>physics engine</strong> to allow minigames outside of normal management mode
                                            </li>
                                    </ul>
                                    <Grid columns="equal" style={{ width: "100%" }}>
                                        <Grid.Column>
                                            <p style={project}>
                                                <strong>Personal Website</strong>
                                            </p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <p style={date}>
                                                <i>2019-Present</i>
                                            </p>
                                        </Grid.Column>
                                    </Grid>
                                    <ul>
                                        <li style={listItem}>
                                            A website to better showcase my projects and to give updates on what I’ve been up to and what I’m working on
                                            </li>
                                        <li style={listItem}>
                                            Created using <strong>JavaScript, JSX(HTML), CSS, React, Node, Express, MongoDB</strong> and more interactive
                                                and <strong>Google Firebase Auth</strong>
                                        </li>
                                    </ul>
                                </Grid.Row>
                                <Grid.Row>
                                    <Header style={{ width: "100%" }} textAlign="left" as="h2"><strong>EXTRACURRICULARS AND INTERESTS</strong></Header>
                                    <Grid columns="equal" style={{ width: "100%" }}>
                                        <Grid.Column>
                                            <p style={project}>
                                                <strong>Lead Programmer, Mother Teresa High School FIRST Robotics Competition Team, <i> London, ON</i></strong>
                                            </p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <p style={date}>
                                                <i>2015-2016</i>
                                            </p>
                                        </Grid.Column>
                                    </Grid>
                                    <ul>
                                        <li style={listItem}>
                                            Oversaw all coding by First robotics team 5288 and was instrumental in the robot’s functionality.
                                    </li>
                                    </ul>
                                    <Grid columns="equal" style={{ width: "100%" }}>
                                        <Grid.Column>
                                            <p style={project}>
                                                <strong>Electrical Tinkerer</strong>
                                            </p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                        </Grid.Column>
                                    </Grid>
                                    <ul>
                                        <li style={listItem}>
                                            Familiar with Arduino and Raspberry Pi, circuits, and FPGAs.
                                            </li>
                                    </ul>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ResumePage;