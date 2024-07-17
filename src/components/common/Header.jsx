import mainLogo from '../../assets/LOGO.svg';
import searchIcon from '../../assets/icons/search.svg';
import accountIcon from '../../assets/icons/Account.svg';
import cartIcon from '../../assets/icons/Shopping_cart.svg';
import burger from '../../assets/icons/burger.svg';




const  Header = () => {

  return (
    <header className="flex justify-between items-center mt-[43px] ">

        <div>
            <img
                src = {mainLogo}
                alt = "logo"
                />
        </div>

        <nav className='py-[6px]'>
            <ul className = "flex items-center gap-[20px]">
                <li>
                    <img src = {searchIcon}/>
                </li>
                <li>
                    <img src = {accountIcon}/>
                </li>
                <li>
                    <img src = {cartIcon}/>
                </li>
                <li>
                    <img src = {burger}/>
                </li>
            </ul>
        </nav>


    </header>
  )
}

export default Header