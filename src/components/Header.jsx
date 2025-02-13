// Importo il componetnte Logo
import Logo from "./Logo.jsx";
// Importo il componente Navbar
import Navbar from "./Navbar.jsx";

export default function Header() {
    return (<header>

        {/* Logo DC */}
        <div className="container flex">

            <Logo />

            {/* Navbar */}

            <Navbar />

        </div>

    </header>);
}