import React, { Component } from 'react';
import "./styles/aboutpage.css";
import { Grid, Segment, Icon, Header, Divider, List } from 'semantic-ui-react';
import $ from 'jquery';

class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        $('html, body').animate({
            scrollTop: $(".AboutPage").offset().top
        });
    }

    render() {
        const navItem = {
            marginLeft: "0em",
            marginRight: "1em"
        }

        return (
            <div className="AboutPage">
                <Grid>
                    <Grid.Row>
                        <h1>
                            <Header>Hi, My name is Jonathan Hay...</Header>
                        </h1>
                    </Grid.Row>
                    <Grid.Row>
                        <h2>
                            <Header size="large">About Me</Header>
                        </h2>
                        <p>
                            I am a third year Software Engineering student at Western University. I am a <strong>hard working</strong>, <strong>willing-to-learn</strong> student
                            with an <strong>intense drive to succeed</strong>. I am an avid gamer, a car enthusiast, a movie lover, and have a pet parrotlet named Harry.
                        </p>
                    </Grid.Row>
                    <Grid.Row centered width={2}>
                        <List horizontal>
                            <List.Item style={navItem}>
                                <a onClick={() => { this.props.but(2) }}>
                                    <Segment inverted color="teal" className="drop">
                                        <h3>Projects</h3>
                                        <Icon inverted size="massive" name="newspaper outline"></Icon>
                                    </Segment>
                                </a>
                            </List.Item>
                            <List.Item style={navItem}>
                                <a onClick={() => { this.props.but(1) }}>
                                    <Segment inverted color="teal" className="drop">
                                        <h3>News</h3>
                                        <Icon inverted size="massive" name="code"></Icon>
                                    </Segment>
                                </a>
                            </List.Item>
                            <List.Item style={navItem}>
                                <a onClick={() => { this.props.but(4) }}>
                                    <Segment inverted color="teal" className="drop">
                                        <h3>Contact</h3>
                                        <Icon inverted size="massive" name="chat"></Icon>
                                    </Segment>
                                </a>
                            </List.Item>
                            <List.Item style={navItem}>
                                <a onClick={() => { this.props.but(3) }}>
                                    <Segment inverted color="teal" className="drop">
                                        <h3>Resume</h3>
                                        <Icon inverted size="massive" name="clipboard outline"></Icon>
                                    </Segment>
                                </a>
                            </List.Item>
                        </List>
                    </Grid.Row>
                </Grid >
            </div >
        );
    }
}

export default AboutPage;