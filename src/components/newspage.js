import React, { Component } from 'react';
import "./styles/newspage.css";
import NewsItem from "./newsitem";
import backendLink from "../backendLink";
import { Button, Icon, Modal, Grid, Input, TextArea, Header, List, Segment, Rail, Container } from 'semantic-ui-react'
import $ from 'jquery';

class NewsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selected: 0,
            title: '',
            image: '',
            description: '',
            date: '',
            modalOpen: false
        };
        this.savePost = this.savePost.bind(this);
        this.updateTit = this.updateTit.bind(this);
        this.updateImg = this.updateImg.bind(this);
        this.updateDes = this.updateDes.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.CurrentItem = this.CurrentItem.bind(this);
        this.adminView = this.adminView.bind(this);
        this.moveSelect = this.moveSelect.bind(this);
    }

    componentDidMount() {
        $('html, body').animate({
            scrollTop: $(".NewsPage").offset().top
        });
        this.load();
    }

    async load() {
        var result = [];
        var temp = await fetch(backendLink.BackendIP + "/newsitems")
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                return res.newsitem;
            });

        for (var i = 0; i < temp.length; i++) {
            result.push(
                { title: temp[i].title, description: temp[i].body, additional: temp[i].additional, image: temp[i].image, date: temp[i].date, _id: temp[i]._id }
            );
        }
        this.setState({
            items: result
        });
        this.setState({ selected: this.state.items.length - 1 });
    }

    async post() {
        var td = new Date();
        td = await (td.toString()).substr(4, 11);
        this.setState({ date: td });
        var res = await fetch(backendLink.BackendIP + "/newsitems", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newsitem: {
                    title: this.state.title,
                    body: this.state.description,
                    additional: '-default',
                    image: this.state.image,
                    date: this.state.date
                }
            })
        });
        var data = await res.json();
        return data;
    }

    savePost() {
        this.post().then(data => {
            var temp = this.state.items;
            temp.push({ title: this.state.title, description: this.state.description, additional: "-default", image: this.state.image, date: this.state.date, _id: data._id });
            this.setState({
                items: temp
            });
            this.setState({ selected: this.state.items.length - 1 });
        });
        this.handleClose();
    }

    updateTit(e) {
        this.setState({ title: e.target.value });
    }
    updateImg(e) {
        this.setState({ image: e.target.value });
    }
    updateDes(e) {
        this.setState({ description: e.target.value });
    }

    handleClose(e) {
        this.setState({
            modalOpen: false
        });
    }
    handleOpen() {
        this.setState({
            modalOpen: true
        });
    }

    deletePost(x) {
        var temp = this.state.items;
        var delID = temp.splice(x, 1)[0]._id;
        this.setState({ items: temp });
        this.setState({ selected: this.state.items.length - 1 });
        fetch('http://localhost:3001/newsitems/' + delID, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    selectItem(x) {
        this.setState({ selected: x });
    }

    CurrentItem(props) {
        if (this.state.selected < 0) {
            this.setState({
                selected: 0
            });
        }
        if (props.length > 0) {
            return <NewsItem
                i={this.state.selected}
                title={this.state.items[this.state.selected].title}
                body={this.state.items[this.state.selected].description}
                additional="-default"
                image={this.state.items[this.state.selected].image}
                date={this.state.items[this.state.selected].date}
                del={this.deletePost} thumb={false}
                admin={this.props.admin}>
            </NewsItem>;
        } else {
            return <h1>No items</h1>;
        }
    }

    selectTrigger() {
        if (this.props.thumb) {
            return null;
        } else {
            return <Grid.Row centered><Button onClick={this.handleOpen} color="blue">Details&nbsp;</Button></Grid.Row>;
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
            if (this.state.selected < (this.state.items.length - 1)) {
                temp = this.state.selected + 1;
                this.setState({
                    selected: temp
                });
            }
        } else {
            if (this.state.selected > 0) {
                temp = this.state.selected - 1;
                this.setState({
                    selected: temp
                });
            }
        }
    }

    render() {
        return (
            <div className="NewsPage">
                <Grid celled="internally" centered>
                    <Grid.Row>
                        <h1><Header>News and Updates</Header></h1>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Container>
                                <h2><Header color="red" textAlign="left" style={{ width: "100%" }}>Latest Post</Header></h2>
                                <Grid columns="equal" verticalAlign='middle' style={{ width: "100%" }}>
                                    <Grid.Row centered>
                                        <this.CurrentItem length={this.state.items.length}></this.CurrentItem>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: "center" }}>
                                            <a onClick={() => { this.moveSelect(true) }} style={{ height: "100%" }}><Icon name="arrow left" size="massive"></Icon></a>
                                        </Grid.Column>
                                        <Grid.Column style={{ textAlign: "center" }} >
                                            <a onClick={() => { this.moveSelect(false) }} style={{ minHeight: "100%" }}><Icon name="arrow right" size="massive" style={{ height: "100%" }}></Icon></a>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={6} style={{ paddingTop: "0" }}>
                            <Container>
                                <Header textAlign="left" style={{ paddingTop: "0.7em", paddingBottom: "0em" }}>Previous Posts</Header>
                                <List celled style={{ overflowY: "scroll", overflowX: "hidden", height: "30em" }}>
                                    {this.state.items.slice(0).reverse().map(function (item, index) {
                                        return <List.Item style={{ padding: "0", paddingTop: "1em" }} key={index}><NewsItem key={index} i={index} title={item.title} body={item.description} additional="-default" image={item.image} date={item.date} del={this.deletePost} thumb={true} sel={this.state.selected} select={this.selectItem} admin={false}></NewsItem></List.Item>;
                                    }.bind(this))}
                                </List>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <this.adminView content={
                        <Modal
                            trigger={<Grid.Row centered><Button onClick={this.handleOpen} color="green">New Post&nbsp;<Icon name='plus' /></Button></Grid.Row>}
                            open={this.state.modalOpen}
                            onClose={this.handleClose}>
                            <Modal.Header>New Post</Modal.Header>
                            <Modal.Content>
                                <Grid columns="equal">
                                    <Grid.Row centered>
                                        <Grid.Column>
                                            Post Title: <Input value={this.state.title} onChange={this.updateTit} placeholder="Title..."></Input>
                                        </Grid.Column>
                                        <Grid.Column>
                                            ImageURL: <Input value={this.state.image} onChange={this.updateImg} placeholder="URL..."></Input>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row centered>
                                        <TextArea value={this.state.description} onChange={this.updateDes} placeholder="Description..." style={{ minWidth: "100%", maxWidth: "100%", minHeight: "10vw", maxHeight: "10vw" }}></TextArea>
                                    </Grid.Row>
                                    <Grid.Row centered>
                                        <Button onClick={this.savePost} style={{ textAlign: "center" }} color="green">Save&nbsp;&nbsp;&nbsp;<Icon name='check' /></Button>
                                    </Grid.Row>
                                </Grid>
                            </Modal.Content>
                        </Modal>
                    }></this.adminView>
                </Grid>
            </div >
        );
    }
}

export default NewsPage;