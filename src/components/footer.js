import React, { Component } from 'react';
import "./styles/footer.css";
import { Grid, Segment, Container, Header, List, Divider, Image } from 'semantic-ui-react';
import $ from 'jquery';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        $('html, body').animate({
            scrollTop: $(".Footer").offset().top
        });
    }

    render() {

        const back = {
            backgroundColor: "#1b1c1d"
        }

        return (
            <div className="Footer">
                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                        <Grid divided inverted stackable>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Useful Resources' />
                                <List link inverted>
                                    <List.Item as='a' href="https://www.w3schools.com/">W3Schools</List.Item>
                                    <List.Item as='a' href="https://stackoverflow.com/">StackOverflow</List.Item>
                                    <List.Item as='a' href="https://codepen.io/">CodePen</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Cool Stuff' />
                                <List link inverted>
                                    <List.Item as='a' href="https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA">Computerphile</List.Item>
                                    <List.Item as='a' href="https://www.youtube.com/channel/UCIB5XXHNAWWzTOw6guIMYCg">Harry's Garage</List.Item>
                                    <List.Item as='a' href="https://www.twitch.tv/">Twitch</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h2' content='Contact' />
                                <List link inverted>
                                    <List.Item as='a' href="https://github.com/JonathanHay">Github</List.Item>
                                    <List.Item as='a' href="https://www.linkedin.com/in/jonathan-hay-82885a180/">LinkedIn</List.Item>
                                    <List.Item as='a' href="https://mail.google.com/mail/?view=cm&fs=1&to=jonathanhay0938@gmail.com&su=Referred by Website&body=Hi Jonathan, I need your help!">Gmail</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header inverted as='h4' content='Thanks for Reading!' />
                                <p>
                                    Feel free to contact me if you have an inquiries!
                                </p>
                            </Grid.Column>
                        </Grid>

                        <Divider inverted section />
                        <Image centered size='tiny' src='/icon.png' />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
                            </List.Item>
                            <List.Item as='a' onClick={function () { window.location.reload(); }}>
                                Reload
                            </List.Item>
                            <List.Item >
                                &copy; Jonathan Hay 2019
                             </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default Footer;
