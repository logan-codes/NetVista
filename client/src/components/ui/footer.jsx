import { Link } from "react-router-dom";
import logo from "/svgviewer-png-output.png";


export default function Footer() {
    return (
        <nav className="bg-amber-200 p-2 w-screen h-13 flex justify-between items-center overflow-auto">
            <div className="flex items-center gap-2 ">
                <img src={logo} />
                <Link to="/">
                    <h1 className="font-sans font-extrabold">NetVista</h1>
                </Link>
            </div>
            <div>
                <p>Created by Team with care.</p>
            </div>
        </nav>
    );
};