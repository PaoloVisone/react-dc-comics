// Importo comics.js
import comics from "/comics.js";

console.log(comics);


export default function Card() {
    return (

        <div className="container flex wrap">

            {comics.map((comic) => (

                <div className="card">
                    <div className="img">

                        <img key={comic.id} src={comic.thumb} alt={comic.series} />

                    </div>

                    <div className="text-img">

                        <p>{comic.series}</p>

                    </div>

                </div >

            ))
            }

        </div >
    );
}