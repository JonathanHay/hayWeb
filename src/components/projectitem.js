import React, { Component } from 'react';
import "./styles/projectitem.css";
import { Modal, Grid, Button, Icon, Card, Responsive, Header, Image, Container } from "semantic-ui-react";

class ProjectItem extends Component {
    //Additional will be on standalone page
    constructor(props) {
        super(props);

        if (props.thumb === true) {
            this.state = {
                style: {
                    fontSize: "1em",
                    height: "14em",
                    width: "14em"
                },
                showDetails: false,
                sel: 1
            };
        } else {
            this.state = {
                style: {
                    width: "100%",
                    minHeight: "35em"
                },
                sel: 1,
                showDetails: false
            };
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
        this.renderNotThumb = this.renderNotThumb.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.adminView = this.adminView.bind(this);
        this.moveSelect = this.moveSelect.bind(this);
        this.chooseImage = this.chooseImage.bind(this);
        this.renderDetailButton = this.renderDetailButton.bind(this);
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

    deletePost() {
        this.props.del(this.props.i);
        this.handleClose();
    }

    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    renderNotThumb(el) {
        if (this.props.thumb === true) {
            return null;
        } else {
            return el.content;
        }
    }
    renderThumb(el) {
        if (this.props.thumb === true) {
            return el.content;
        } else {
            return null;
        }
    }

    adminView(x) {
        if (this.props.admin === true) {
            return x.content;
        } else {
            return null;
        }
    }

    moveSelect(x) {
        var temp;
        if (x) {
            if (this.state.sel < 3) {
                temp = this.state.sel + 1;
                this.setState({
                    sel: temp
                });
            }
        } else {
            if (this.state.sel > 1) {
                temp = this.state.sel - 1;
                this.setState({
                    sel: temp
                });
            }
        }
    }

    chooseImage(x) {
        if (this.state.showDetails) {
            return <p>{this.props.body}</p>
        } else {
            if (x === 1) {
                return <Image style={{ height: "20em", width: "50em", backgroundColor: "whitesmoke", objectFit: "contain" }} src={this.props.image1} centered fluid></Image>;
            } else if (x === 2) {
                return <Image style={{ height: "20em", width: "50em", backgroundColor: "whitesmoke", objectFit: "contain" }} src={this.props.image2} centered fluid></Image>;
            } else if (x === 3) {
                return <Image style={{ height: "20em", width: "50em", backgroundColor: "whitesmoke", objectFit: "contain" }} src={this.props.image3} centered fluid></Image>;
            } else {
                return null;
            }
        }
    }

    renderDetailButton() {
        if (this.state.showDetails) {
            return <Button onClick={this.toggleDetails}>Hide Details</Button>;
        } else {
            return <Button onClick={this.toggleDetails}>Show Details</Button>;
        }
    }

    render() {

        return (
            <div className="ProjectItem" style={this.state.style}>
                <Grid centered>
                    <this.renderThumb style={{ height: "inherit" }} content={
                        <div>
                            <h2><Header>{this.props.title}</Header></h2>
                            <Image style={{ height: "10em", width: "90%", objectFit: "contain" }} id="image" src={this.props.image1} fluid centered></Image>
                            <Card.Meta>
                                {this.props.date}
                            </Card.Meta>
                        </div>
                    }></this.renderThumb>
                    <this.renderNotThumb content={
                        <div>
                            <Grid centered>
                                <Grid.Column width={10}>
                                    <Grid columns="equal" verticalAlign='middle' style={{ width: "100%" }}>
                                        <Grid.Row centered>
                                            <h1><Header>{this.props.title}</Header></h1>
                                            {this.chooseImage(this.state.sel)}
                                            <Card.Meta>
                                                {this.props.date}
                                            </Card.Meta>
                                        </Grid.Row>
                                        <Grid.Row centered><Responsive {...Responsive.onlyMobile}>{this.renderDetailButton()}</Responsive></Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column style={{ textAlign: "center" }}>
                                                <a onClick={() => { this.moveSelect(false) }} style={{ height: "100%" }}><Icon name="arrow left" size="massive"></Icon></a>
                                            </Grid.Column>
                                            <Grid.Column style={{ textAlign: "center" }} >
                                                <a onClick={() => { this.moveSelect(true) }} style={{ minHeight: "100%" }}><Icon name="arrow right" size="massive" style={{ height: "100%" }}></Icon></a>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                                <Responsive as={Grid.Column} {...Responsive.onlyComputer} width={6}>
                                    <Grid.Row>
                                        <Header as="h3" content="Description"></Header>
                                        <p>{this.props.body}</p>
                                    </Grid.Row>
                                </Responsive>
                            </Grid>
                        </div>
                    }></this.renderNotThumb>
                    <this.renderNotThumb content={
                        <this.adminView content={
                            <Modal style={{ width: "20vw" }}
                                trigger={<Grid.Row centered><Button onClick={this.handleOpen} color="red">Delete Post&nbsp;<Icon name='minus' /></Button></Grid.Row>}
                                open={this.state.modalOpen}
                                onClose={this.handleClose}>
                                <Modal.Header>Delete Post</Modal.Header>
                                <Modal.Content>
                                    <Grid columns="equal">
                                        <Grid.Row centered>
                                            Are you SURE?
                                                </Grid.Row>
                                        <Grid.Row centered>
                                            <Button onClick={this.deletePost} style={{ textAlign: "center" }} color="orange">Confirm&nbsp;&nbsp;&nbsp;<Icon name='check' /></Button>
                                        </Grid.Row>
                                    </Grid>
                                </Modal.Content>
                            </Modal>
                        }></this.adminView>
                    }></this.renderNotThumb>
                </Grid>
            </div >
        );
    }
}

export default ProjectItem;