import { useLocation,Link } from "react-router"
interface Navbar {
    path:string,
    label:string
    
}

const Navbar = () => {
    const location = useLocation()
 
    const navItems : Navbar[] = [
        { label: "Home", path:"/"},
        { label: "About",path: "/about"}
    ]
    return (
        <nav>
            {navItems.map((item : Navbar) => {
                const isActive: boolean = location.pathname === item.path
                return (
                    <Link key={item.path} to={item.path} className={isActive ? "nav-link active" : "nav-link"}>{item.label}</Link>
                )
            })}
        </nav>
    )
}

export default Navbar;