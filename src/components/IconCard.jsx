export default function IconCard() {
    const iconCardElements = [
        { id: 1, src: '../img/buy-comics-digital-comics.png', alt: "digital", text: "DIGITAL COMICS" },
        { id: 2, src: "../img/buy-comics-merchandise.png", alt: "merchandise", text: "DC MERCHANDISE" },
        { id: 3, src: "../img/buy-comics-subscriptions.png", alt: "subscription", text: "COMIC SHOP LOCATOR" },
        { id: 4, src: "../img/buy-comics-shop-locator.png", alt: "shop-locator", text: "SUBSCRIPTION" },
        { id: 5, src: "../img/buy-dc-power-visa.svg", alt: "power-visa", text: "DC POWER VISA" }
    ];
    return (

        <div className="container flex">

            {/* Itero gli elementi */}
            {iconCardElements.map((iconCardElement) => (

                <div className="iconCard">

                    {/* Elementi iterati */}
                    <figure>

                        {/* Immaagine */}
                        <img className="main-img" key={iconCardElement.id} src={iconCardElement.src} alt={iconCardElement.alt} />

                    </figure>

                    {/* Testo */}
                    <p>{iconCardElement.text}</p>

                </div >

            ))}

        </div>

    )
}