const navLinks = ["Pricing", "About", "Contact"];

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-list">
                {navLinks.map((li) => (
                    <li key={li}>{li}</li>
                ))}
            </ul>
        </nav>
    );
}
