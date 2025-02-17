// Importo le card
import Card from "./Card";


export default function Section() {
    return (<section>

        {/* Label */}
        <span id="label">CURRENT SERIES</span>

        {/* Card */}
        <Card />

        {/* Button */}
        <div className="content-btn dir-ctr">

            <button className="btn blu">LOAD MORE</button>

        </div>

    </section>);
}