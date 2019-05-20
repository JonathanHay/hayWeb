import React, { Component } from 'react';
import { Menu, Button, Container, Header, Modal, Grid, Form, Segment, Message } from 'semantic-ui-react'
import AboutPage from "./aboutpage";
import NewsPage from "./newspage";
import ResumePage from "./resumepage";
import ProjectsPage from "./projectspage";
import Footer from "./footer";
import $ from 'jquery';
import firebase, { auth, provider } from './firebase.js';
import "./styles/nav.css";

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sel: 0,
            modalOpen: false,
            user: null,
            admin: false,
            email: "",
            password: "",
            errorMessage: null
        };
        this.handleButton = this.handleButton.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.displayUser = this.displayUser.bind(this);
        this.updateE = this.updateE.bind(this);
        this.updateP = this.updateP.bind(this);
        this.displayError = this.displayError.bind(this);

    }

    componentDidMount() {
        auth.onAuthStateChanged((u) => {
            if (u) {
                this.setState({
                    user: u,
                    admin: true
                });
            }
        });
    }

    handleButton(x) {
        this.setState({
            sel: x
        });
    }

    openModal() {
        this.setState({
            modalOpen: true
        });
    }
    closeModal() {
        this.setState({
            modalOpen: false
        });
    }
    login() {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            const u = result.user;
            this.setState({
                user: u,
                admin: true
            });
            this.closeModal();
        }).catch(e => {
            this.setState({
                errorMessage: e.message
            });
        });
    }
    logout() {
        auth.signOut().then(() => {
            this.setState({
                user: null,
                admin: false
            });
        });
    }

    renderLogin() {
        if (this.state.user === null) {
            return <Button onClick={this.openModal} inverted>Login</Button>
        } else {
            return <Button onClick={this.logout} inverted>Logout</Button>;
        }
    }

    displayUser() {
        if (this.state.user === null) {
            return null;
        } else {
            return <Menu.Item >Logged in as {this.state.user.email}</Menu.Item>
        }
    }

    displayError() {
        if (this.state.errorMessage === null) {
            return null;
        } else {
            return <Message negative><Message.Header>Login Failed.</Message.Header><p>{this.state.errorMessage}</p></Message>;
        }

    }

    updateE(e) {
        this.setState({ email: e.target.value });
    }
    updateP(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        var para = <AboutPage but={this.handleButton}></AboutPage>;
        if (this.state.sel === 0) {
            para = <AboutPage but={this.handleButton}></AboutPage>;
        } else if (this.state.sel === 1) {
            para = <NewsPage admin={this.state.admin}></NewsPage>;
        } else if (this.state.sel === 2) {
            para = <ProjectsPage admin={this.state.admin}></ProjectsPage>;
        } else if (this.state.sel === 3) {
            para = <ResumePage></ResumePage>;
        } else if (this.state.sel === 4) {
            $('html, body').animate({
                scrollTop: $(".Footer").offset().top
            });
        }

        var modal =
            <Modal
                basic
                trigger={this.renderLogin()}
                open={this.state.modalOpen}
                onClose={this.closeModal}
                closeIcon
                style={{ width: "38em" }}
            >
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Administrator Login
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.state.email} onChange={this.updateE} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.updateP}
                                />
                                {this.displayError()}
                                <Button onClick={this.login} color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Modal>
            ;

        return (

            <div className="Nav">
                <div id="masthead">
                    <Container style={{ display: "table", fontSize: "3vw" }}>
                        <Header style={{ verticalAlign: "middle", display: "table-cell", height: "20vw" }} inverted size="huge">Jonathan Hay</Header>
                    </Container>
                </div>
                <div id="main">
                    <Container>
                        <Menu inverted pointing secondary >
                            <Menu.Item
                                name='home'
                                active={this.state.sel === 0}
                                onClick={() => this.handleButton(0)}
                            >
                                Home
                            </Menu.Item>
                            <Menu.Item
                                name='news'
                                active={this.state.sel === 1}
                                onClick={() => this.handleButton(1)}
                            >
                                News
                            </Menu.Item>

                            <Menu.Item
                                name='projects'
                                active={this.state.sel === 2}
                                onClick={() => this.handleButton(2)}
                            >
                                Projects
                            </Menu.Item>
                            <Menu.Item
                                name='resume'
                                active={this.state.sel === 3}
                                onClick={() => this.handleButton(3)}
                            >
                                Resume
                            </Menu.Item>
                            <Menu inverted floated="right" >
                                {this.displayUser()}
                                {modal}
                            </Menu>
                        </Menu>
                    </Container>
                </div>
                <Container id="content" style={{ minHeight: "100vh" }}>
                    {para}
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}

export default Nav;