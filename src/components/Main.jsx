export default function Main() {
    return (<main>

        {/* Container */}
        <div className="container flex">

            {/* Card */}
            <div className="card">
                <figure>
                    <img className="main-img" src="img\buy-comics-digital-comics.png" alt="digital" />
                </figure>
                <p>DIGITAL COMICS</p>
            </div>
            <div className="card">
                <figure>
                    <img className="main-img" src="img\buy-comics-merchandise.png" alt="merchandise" />
                </figure>
                <p>DC MERCHANDISE</p>
            </div>
            <div className="card">
                <figure>
                    <img className="main-img" src="img\buy-comics-subscriptions.png" alt="subscription" />
                </figure>
                <p>COMIC SHOP LOCATOR</p>
            </div>
            <div className="card">
                <figure>
                    <img className="main-img" src="img\buy-comics-shop-locator.png" alt="shop-locator" />
                </figure>
                <p>SUBSCRIPTION</p>
            </div>
            <div className="card">
                <figure>
                    <img className="main-img" src="img\buy-dc-power-visa.svg" alt="power-visa" />
                </figure>
                <p>DC POWER VISA</p>
            </div>

        </div>

    </main>);
}