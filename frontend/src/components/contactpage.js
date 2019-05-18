import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import "./styles/contactpage.css";

class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const back = {
            backgroundColor: "whitesmoke"
        }

        return (
            <div className="ContactPage">
                <Grid centered>
                    <Grid centered style={{ width: "50%" }} columns="equal">
                        <Grid.Row>
                            <Grid.Column><Image style={back} fluid src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></Image></Grid.Column>
                            <Grid.Column><Image style={back} fluid src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"></Image></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column><Image style={back} fluid src="https://cdn4.iconfinder.com/data/icons/happily-colored-snlogo/512/gmail-email-mail-logo-circle-material.png"></Image></Grid.Column>
                            <Grid.Column><Image style={back} fluid src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"></Image></Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ContactPage;