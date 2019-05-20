import React, { Component } from 'react';
import "./styles/projectspage.css";
import backendLink from "../backendLink";
import ProjectItem from "./projectitem";
import { Button, Icon, Modal, Grid, Input, TextArea, Header, List, Segment, Rail, Container } from 'semantic-ui-react'
import $ from 'jquery';

class ProjectPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selected: 0,
            title: '',
            image1: '',
            image2: '',
            image3: '',
            description: '',
            date: '',
            repo: '',
            modalOpen: false
        };
        this.savePost = this.savePost.bind(this);
        this.updateTit = this.updateTit.bind(this);
        this.updateImg1 = this.updateImg1.bind(this);
        this.updateImg2 = this.updateImg2.bind(this);
        this.updateImg3 = this.updateImg3.bind(this);
        this.updateDes = this.updateDes.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateRepo = this.updateRepo.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.CurrentItem = this.CurrentItem.bind(this);
        this.adminView = this.adminView.bind(this);
    }

    componentDidMount() {
        console.log(backendLink.BackendIP)
        $('html, body').animate({
            scrollTop: $(".ProjectsPage").offset().top
        });
        this.load();
    }

    async load() {
        var result = [];
        var temp = await fetch(backendLink.BackendIP + "/projects")
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                return res.project;
            });

        for (var i = 0; i < temp.length; i++) {
            result.push(
                { title: temp[i].title, description: temp[i].body, additional: temp[i].additional, image1: temp[i].image1, image2: temp[i].image2, image3: temp[i].image3, date: temp[i].date, repo: temp[i].date, _id: temp[i]._id }
            );
        }
        this.setState({
            items: result
        });
        this.setState({ selected: this.state.items.length - 1 });
    }

    async post() {
        var res = await fetch(backendLink.BackendIP + "/projects", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                project: {
                    title: this.state.title,
                    body: this.state.description,
                    additional: '-default',
                    image1: this.state.image1,
                    image2: this.state.image2,
                    image3: this.state.image3,
                    date: this.state.date,
                    repo: this.state.repo
                }
            })
        });
        var data = await res.json();
        return data;
    }

    savePost() {
        this.post().then(data => {
            var temp = this.state.items;
            temp.push({ title: this.state.title, description: this.state.description, additional: "-default", image1: this.state.image1, image2: this.state.image2, image3: this.state.image3, date: this.state.date, repo: this.state.repo, _id: data._id });
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
    updateImg1(e) {
        this.setState({ image1: e.target.value });
    }
    updateImg2(e) {
        this.setState({ image2: e.target.value });
    }
    updateImg3(e) {
        this.setState({ image3: e.target.value });
    }
    updateRepo(e) {
        this.setState({ repo: e.target.value });
    }
    updateDes(e) {
        this.setState({ description: e.target.value });
    }
    updateDate(e) {
        this.setState({ date: e.target.value });
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
        fetch('http://localhost:3001/projects/' + delID, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    selectItem(x) {
        console.log(x);
        this.setState({ selected: x });
    }

    CurrentItem(props) {
        if (this.state.selected < 0) {
            this.setState({
                selected: 0
            });
        }
        if (props.x > 0) {
            return <ProjectItem
                i={this.state.selected}
                title={this.state.items[this.state.selected].title}
                body={this.state.items[this.state.selected].description}
                additional="-default"
                image1={this.state.items[this.state.selected].image1}
                image2={this.state.items[this.state.selected].image2}
                image3={this.state.items[this.state.selected].image3}
                date={this.state.items[this.state.selected].date}
                repo={this.state.items[this.state.selected].repo}
                del={this.deletePost} thumb={false}
                admin={this.props.admin}>
            </ProjectItem>;
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

    render() {
        return (
            <div className="ProjectsPage">
                <Grid divided="vertically">
                    <Grid.Row>
                        <h1><Header>Projects</Header></h1>
                    </Grid.Row>
                    <Grid.Row style={{ paddingBottom: "5em" }}>
                        <this.CurrentItem x={this.state.items.length}></this.CurrentItem>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid>
                            <Grid.Row>
                                <Header textAlign="left" style={{ paddingTop: "0.7em", paddingBottom: "0em" }} content="All Projects"></Header>
                            </Grid.Row>
                            <Grid.Row>
                                <List horizontal>
                                    {this.state.items.slice(0).reverse().map(function (item, index) {
                                        return <List.Item style={{ marginLeft: "0", marginRight: "1em" }} key={index}><a onClick={() => { this.selectItem(this.state.items.length - index - 1) }}><Segment><ProjectItem key={index} i={index} title={item.title} body={item.description} additional="-default" image1={item.image1} image2={item.image2} image3={item.image3} date={item.date} del={this.deletePost} thumb={true} sel={this.state.selected} select={this.selectItem} admin={false}></ProjectItem></Segment></a></List.Item>;
                                    }.bind(this))}
                                </List>
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>
                    <Grid.Row>
                        <this.adminView content={
                            <Modal
                                trigger={<Grid.Row centered><Button onClick={this.handleOpen} color="green">New Post&nbsp;<Icon name='plus' /></Button></Grid.Row>}
                                open={this.state.modalOpen}
                                onClose={this.handleClose}>
                                <Modal.Header>New Project</Modal.Header>
                                <Modal.Content>
                                    <Grid columns="equal">
                                        <Grid.Row centered>
                                            <Grid.Column>
                                                Project Title: <Input value={this.state.title} onChange={this.updateTit} placeholder="Title..."></Input>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Grid>
                                                    <Grid.Row>
                                                        Image1URL: <Input value={this.state.image1} onChange={this.updateImg1} placeholder="URL..."></Input>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        Image2URL: <Input value={this.state.image2} onChange={this.updateImg2} placeholder="URL..."></Input>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        Image3URL: <Input value={this.state.image3} onChange={this.updateImg3} placeholder="URL..."></Input>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        Repo: <Input value={this.state.repo} onChange={this.updateRepo} placeholder="URL..."></Input>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        Date: <Input value={this.state.date} onChange={this.updateDate} placeholder="YYYY[-YYYY]"></Input>
                                                    </Grid.Row>
                                                </Grid>
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
                    </Grid.Row>
                </Grid>
            </div >
        );
    }
}
export default ProjectPage;