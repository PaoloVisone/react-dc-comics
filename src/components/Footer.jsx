export default function Footer() {
    return (<footer>

        {/* Container */}
        <div className="container flex">

            <div id="content-list">

                {/* Footer List */}
                <div className="foot-list">

                    <ul>
                        <li><a className="big" href="#">DC COMICS</a></li>
                        <li><a href="#">Character</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                    <ul>
                        <li><a className="big" href="#">Shop</a></li>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC collectibles</a></li>
                    </ul>

                </div>

                <div className="foot-list">

                    <ul>
                        <li><a className="big" href="#">DC</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy policy(New)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                </div>

                <div className="foot-list">

                    <ul>
                        <li><a className="big" href="#">SITES</a></li>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>

                </div>

            </div>

            {/* Logo Big */}
            <div id="foot-img">

                <figure>
                    <img id="logo-bg" src="img/dc-logo-bg.png" alt="" />
                </figure>

            </div>

        </div>

        {/* Footer Navbar */}
        <div id="foot-navbar">

            <div className="container flex">

                {/* Button */}
                <div id="content-btn">

                    <button id="btn">SIGN-UP NOW</button>

                </div>


                <div id="icon">

                    {/* Text Follow */}
                    <p id="foot-text">FOLLOW US</p>

                    {/* Icon */}
                    <figure>
                        <img src="img/footer-facebook.png" alt="facebook" />
                    </figure>
                    <figure>
                        <img src="img/footer-periscope.png" alt="periscope" />
                    </figure>
                    <figure>
                        <img src="img/footer-pinterest.png" alt="pinterest" />
                    </figure>
                    <figure>
                        <img src="img/footer-twitter.png" alt="twitter" />
                    </figure>
                    <figure>
                        <img src="img/footer-youtube.png" alt="youtube" />
                    </figure>

                </div>

            </div>

        </div>

    </footer>);
}