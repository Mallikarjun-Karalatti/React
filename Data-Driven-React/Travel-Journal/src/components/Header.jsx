import globeLogo from '../assets/globe.png'

export default function Header() {
    return (
        <header>
            <div className='header'>
                <img src={globeLogo} width={25} height={25} alt='globe-icon' />
                <h1>my travel journal</h1>
            </div>
        </header>
    )
}