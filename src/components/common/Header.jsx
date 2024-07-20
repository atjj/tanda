import mainLogo from '../../assets/LOGO.svg';
import searchIcon from '../../assets/icons/search.svg';
import accountIcon from '../../assets/icons/Account.svg';
import cartIcon from '../../assets/icons/Shopping_cart.svg';
import burger from '../../assets/icons/burger.svg';




const  Header = () => {

  return (
    <header className="container flex justify-between items-center mt-[43px] md:mt-[32px] ">

        <div>
            <a href = '#'>
                <img
                    src = {mainLogo}
                    alt = "logo"
                    />
            </a>
        </div>

        <nav className='py-[6px]'>
            <ul className = "flex items-center gap-[20px] md:gap-[32px]">
                <li>
                    <a href = '#' ><img src = {searchIcon}/></a>
                </li>
                <li>
                    <a href = '#' ><img src = {accountIcon}/></a>
                </li>
                <li>
                    <a href = '#' ><img src = {cartIcon}/></a>
                </li>
                <li>
                   <a href = '#' ><img src = {burger}/></a>
                </li>
            </ul>
        </nav>


    </header>
  )
}

export default Header