import React, { Component } from 'react';
import "./footer.css"
import $ from "jquery";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    clearInput = () => {
        $('#fullName').val('')
        $('#email').val('')
        $('#subjectOfMessage').val('')
        $('#textarea').val('')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const subjectOfMessage = document.getElementById("subjectOfMessage").value;
        const textarea = document.getElementById("textarea").value;

        this.setState({
            fullName: '',
            email: '',
            subjectOfMessage: '',
            textarea: ''
        });

        this.clearInput();

        var rbody = {
            fullName: fullName,
            email: email,
            subjectOfMessage: subjectOfMessage,
            textarea: textarea,
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rbody)
        };
        if (requestOptions) {
            fetch('/api/apimessage/message', requestOptions)
                .then(res => res.json())
                .then(res => this.setState({ res }))

                alert("YOUR MESSAGE SENT")

                document.getElementById("showAndHideMessage").innerHTML = "YOUR MESSAGE SENT &#10004";
            setTimeout(function () {
                document.getElementById("showAndHideMessage").innerHTML = "";
            }, 3000);

        } else {
            alert("ERROR. Please try Again")
        }
    };

    render() {
        return (
            <div>
                <div>
                    <div><hr className="hrStyle" /></div>
                    <div className="footerStle">
                        <div className="firstTitle">Enjoy Your Vacation</div>
                        <hr />
                        <div>
                            <a href="https://www.facebook.com/#" className="fa fa-facebook" target="_blank"></a>
                            <a href="https://www.youtube.com/" className="fa fa-youtube" target="_blank"></a>
                            <a href="https://www.instagram.com/" className="fa fa-instagram" target="_blank"></a>
                            <a href="https://www.skype.com/" className="fa fa-skype" target="_blank"></a>
                        </div>
                        <div>know that whatever you need to know is revealed to you in the perfect time and space sequence</div>
                    </div>
                    <div className="inputFooter">
                        <span className="contactUs">Contact Us:</span>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="fullName" placeholder="Full Name" required={true}></input>
                            <br />
                            <input type="email" id="email" placeholder="Email" required={true}></input>
                            <br />
                            <input type="text" id="subjectOfMessage" placeholder="Subject" required={true}></input>
                            <br />
                            <textarea id="textarea" placeholder="What would you like to tell us?" rows="5" cols="33"></textarea>
                            <br />
                            <button className="buttonStyleFooter">SEND</button>
                            <div id="showAndHideMessage"></div>
                        </form>
                    </div>
                    <div className="byMe">BY CHEN YAACOV Ⓒ</div>
                </div>
            </div>
        );
    }
}

export default Footer;