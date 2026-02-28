 import chefIcon from '../assets/chef-hat.png'

export default function Header() {
    return(
        <header>
            <img src={chefIcon} alt='chef-icon' width={30}/>
            <h1>Chef Claude</h1>
        </header>
    )
}