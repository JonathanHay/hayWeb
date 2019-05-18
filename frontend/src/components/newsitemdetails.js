import React, { Component } from 'react';
import "./styles/newsitemdetails.css";
import { Modal, Grid, Button, Icon, Image } from "semantic-ui-react";

class NewsItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            modalOpen: false
        });
    }
    handleOpen() {
        this.setState({
            modalOpen: true
        });
    }

    selectTrigger() {
        if (this.props.thumb) {
            return null;
        } else {
            return <Grid.Row centered><Button onClick={this.handleOpen} color="blue">Details&nbsp;</Button></Grid.Row>;
        }
    }

    render() {
        return (
            <div className="NewsItemDetails">
                <Modal style={{ width: "66vw" }}
                    trigger={this.selectTrigger()}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}>
                    <Modal.Header style={{ backgroundColor: "#1b1c1d", height: "8vw" }}>
                        <h1 style={{ display: "inline", color: "whitesmoke" }} >{this.props.title}</h1>
                        <Button onClick={this.handleClose} style={{ textAlign: "center", float: "right" }} color="red"><Icon style={{ display: "inline-block", textAlign: "right" }} name='close' /></Button>
                        <p style={{ color: "white" }} >posted {this.props.date}</p>
                    </Modal.Header>
                    <Modal.Content>
                        <Grid columns="equal">
                            <Grid.Row centered>
                                <Grid divided='vertically' columns="equal" style={{ width: "66vw" }}>
                                    <Grid.Row divided style={{ height: "25vw", width: "100%", backgroundColor: "whitesmoke" }} centered>
                                        <Grid.Column>
                                            <Image fluid style={{ height: "22vw", width: "100%", objectFit: "contain" }} alt="" src={this.props.image}></Image>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <p>{this.props.body}</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row centered style={{ minHeight: "10vw" }}>
                                        <p>{this.props.additional}</p>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default NewsItemDetails;