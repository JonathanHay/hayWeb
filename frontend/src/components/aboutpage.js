import React, { Component } from 'react';
import "./styles/aboutpage.css";
import { Grid, Segment, Icon, Header } from 'semantic-ui-react';

class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

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
                            with an <strong>intense drive to succeed</strong>. I am an avid gamer, a movie lover, and have a pet parrotlet named Harry.
                        </p>
                        <Grid columns="equal" celled='internally'>
                            <Grid.Row style={{ textAlign: "center" }}>
                                <Grid.Column>
                                    <h2>
                                        <Header size="large">More</Header>
                                    </h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <a onClick={() => { this.props.but(2) }}>
                                        <Segment class="drop">
                                            <h3>Projects</h3>
                                            <Icon size="massive" name="newspaper outline"></Icon>
                                        </Segment>
                                    </a>
                                </Grid.Column>
                                <Grid.Column>
                                    <a onClick={() => { this.props.but(1) }}>
                                        <Segment class="drop">
                                            <h3>News</h3>
                                            <Icon size="massive" name="code"></Icon>
                                        </Segment>
                                    </a>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <a onClick={() => { this.props.but(3) }}>
                                        <Segment class="drop">
                                            <h3>Contact</h3>
                                            <Icon size="massive" name="chat"></Icon>
                                        </Segment>
                                    </a>
                                </Grid.Column>
                                <Grid.Column>
                                    <a onClick={() => { this.props.but(4) }}>
                                        <Segment class="drop">
                                            <h3>Resume</h3>
                                            <Icon size="massive" name="clipboard outline"></Icon>
                                        </Segment>
                                    </a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>
                </Grid >
            </div >
        );
    }
}

export default AboutPage;