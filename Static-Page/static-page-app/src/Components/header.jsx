import NavBar from './NavBar'

export default function Header() {
    return (
        <header>
            <div className='header'>
            <div className='logo-container'>
                <img src="src/assets/react.svg" width="20px" alt="react-logo" />
                <h1>React Facts</h1>
            </div>
            <NavBar />
            </div>
        </header>
    );
}
