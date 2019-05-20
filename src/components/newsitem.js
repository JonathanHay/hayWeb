import React, { Component } from 'react';
import "./styles/newsitem.css";
import NewsItemDetails from "./newsitemdetails";
import { Modal, Grid, Button, Icon, Card, Reveal, Header, Image, Container } from "semantic-ui-react";

class NewsItem extends Component {
    //Additional will be on standalone page
    constructor(props) {
        super(props);

        if (props.thumb === true) {
            this.state = {
                style: {
                    fontSize: "1em",
                    minHeight: "14em",
                },
                showDetails: false
            };
        } else {
            this.state = {
                style: {
                    maxWidth: "100%",
                    height: "30em"
                },
                showDetails: false
            };
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
        this.renderNotThumb = this.renderNotThumb.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.adminView = this.adminView.bind(this);
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

    showDetails() {
        this.detailsModal.handleOpen();
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

    render() {
        return (
            <div className="NewsItem" style={this.state.style}>
                <Grid centered>
                    <Container style={this.state.style}>
                        <this.renderThumb style={{ height: "inherit" }} content={
                            <div>
                                <a onClick={this.showDetails}>
                                    <h2><Header>{this.props.title}</Header></h2>
                                    <Image style={{ height: "10em", maxWidth: "90%" }} id="image" src={this.props.image} fluid centered></Image>
                                </a>
                                <NewsItemDetails title={this.props.title} body={this.props.body} additional={this.props.additional} image={this.props.image} date={this.props.date} thumb={true} ref={(ref) => { this.detailsModal = ref; }}></NewsItemDetails>
                            </div>
                        }></this.renderThumb>
                        <this.renderNotThumb content={
                            <div>
                                <h1><Header>{this.props.title}</Header></h1>
                                <Reveal animated="move right" >
                                    <Reveal.Content visible>
                                        <Image id="image" style={{ height: "20em", width: "50em" }} src={this.props.image} centered fluid></Image>
                                    </Reveal.Content>
                                    <Reveal.Content hidden>
                                        <p>{this.props.body}</p>
                                        <NewsItemDetails title={this.props.title} body={this.props.body} additional={this.props.additional} image={this.props.image} date={this.props.date} thumb={false}></NewsItemDetails>
                                    </Reveal.Content>
                                </Reveal>
                            </div>
                        }></this.renderNotThumb>
                        <Card.Meta class="meta">
                            Posted {this.props.date}
                        </Card.Meta>
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
                    </Container>
                </Grid>
            </div >
        );
    }
}

export default NewsItem;