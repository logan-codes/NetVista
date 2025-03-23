import { Link,useNavigate } from "react-router-dom";
import logo from "/svgviewer-png-output.png";
import { Button } from "@/components/ui/button"

export default function Header() {
    const navigate = useNavigate();
    return (
        <nav className="bg-amber-400 p-4 w-screen h-13 flex justify-between items-center overflow-auto">
                <div className="flex items-center gap-2">
                        <img src={logo} />
                    <Link to="/">
                        <h1 className="font-sans font-extrabold">NetVista</h1>
                    </Link>
                </div>
                <div>
                    <Button variant={"outline"}><Link to="/login">Sign Up</Link></Button>
                </div>
                
        </nav>
    );
};