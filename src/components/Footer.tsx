import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Ways to reach me</h1><br></br>
            <div className="social-media">
                {/*<SocialIcon className="si" target="_blank" network="facebook" href="https://www.facebook.com/profile.php?id=100008587188632"/>*/}
                <SocialIcon className="si" target="_blank" network="email" href="mailto:netanelkozel@gmail.com"/>
                <SocialIcon className="si" target="_blank" network="instagram" href="https://www.instagram.com/netanelkozel/"/>
                <SocialIcon className="si" target="_blank" network="linkedin" href="https://www.linkedin.com/in/netanel-kozel-b231371a0/"/>
                <SocialIcon className="si" target="_blank" network="github" href="https://github.com/natikozel/"/>

            </div>
        </footer>
    );
};


export default Footer;