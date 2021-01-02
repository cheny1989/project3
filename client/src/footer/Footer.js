import React from 'react';
import "./footer.css"


function Footer() {
    return (
        <div>
            <div><hr className="hrStyle" /></div>
            <div className="footerStle">
                <div className="firstTitle">Enjoy Your Vacation</div>
                <hr />
                <div>
                    <a href="https://www.facebook.com/#" className="fa fa-facebook"></a>
                    <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                    <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                    <a href="https://www.skype.com/" className="fa fa-skype"></a>
                </div>
                <div>know that whatever you need to know is revealed to you in the perfect time and space sequence</div>
            </div>
        </div>
    )
}

export default Footer;