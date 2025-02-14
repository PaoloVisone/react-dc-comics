// Importo comics.js
import comics from "/comics.js";

console.log(comics);


export default function Card() {
    return (

        <div className="container flex wrap">

            {comics.map((comic) => (

                <div className="card">

                    <img key={comic.id} src={comic.thumb} alt={comic.series} />
                    <p className="text-img">{comic.series}</p>

                </div >

            ))
            }

        </div >
    );
}