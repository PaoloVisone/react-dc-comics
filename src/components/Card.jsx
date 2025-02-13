export default function Card() {
    const cardElements = [
        { id: 1, src: '../img/buy-comics-digital-comics.png', alt: "digital", text: "DIGITAL COMICS" },
        { id: 2, src: "../img/buy-comics-merchandise.png", alt: "merchandise", text: "DC MERCHANDISE" },
        { id: 3, src: "../img/buy-comics-subscriptions.png", alt: "subscription", text: "COMIC SHOP LOCATOR" },
        { id: 4, src: "../img/buy-comics-shop-locator.png", alt: "shop-locator", text: "SUBSCRIPTION" },
        { id: 5, src: "../img/buy-dc-power-visa.svg", alt: "power-visa", text: "DC POWER VISA" }
    ];
    return (
        <div className="container flex">

            {/* Itero gli elementi */}
            {cardElements.map((cardElement) => (

                <div className="card">

                    {/* Elementi iterati */}
                    <figure>

                        {/* Immaagine della card */}
                        <img className="main-img" key={cardElement.id} src={cardElement.src} alt={cardElement.alt} />

                    </figure>

                    {/* Testo */}
                    <p>{cardElement.text}</p>

                </div >

            ))}

        </div>

    )
}