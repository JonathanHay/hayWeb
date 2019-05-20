import React, { Component } from 'react';
import "./styles/pageheader.css";
import { Button } from 'semantic-ui-react';
import $ from 'jquery';

class PageHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {

        function enter() {
            document.getElementById("overlay").style.opacity = "0";
            document.getElementById("overlay").style.visibility = "hidden";
            document.getElementById("words").style.visibility = "hidden";
        }

        return (
            <div id="overlay" className="PageHeader">
                <div id="words">
                    <span>Designer</span>
                    <span>Collaborator</span>
                    <span>Engineer</span>
                    <span>Student</span>
                </div>
                <Button onClick={enter} inverted size="massive" style={{ marginTop: "30vh" }}>Enter</Button>
            </div>
        );
    }
}

export default PageHeader;