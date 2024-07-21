import mainLogo from '../../assets/LOGO.svg';
import searchIcon from '../../assets/icons/search.svg';
import accountIcon from '../../assets/icons/Account.svg';
import cartIcon from '../../assets/icons/Shopping_cart.svg';
import burger from '../../assets/icons/burger.svg';




const  Header = () => {

  return (
    <header className="mt-[43px] md:mt-[32px] xl:py-[16px] xl:mt-[0] xl:bg-[#F5F5F5]">

            <div className='container flex justify-between items-center '>
                <div className='xl:w-[154px]'>
                    <a href = '#'>
                        <img
                            src = {mainLogo}
                            alt = "logo"
                            className='w-full'
                            />
                    </a>
                </div>



                <div className='hidden relative xl:block w-[694px] h-[40px]'>
                    <img src = {searchIcon} className='absolute left-[0px] top-[11px] left-[16px]' />
                    <input
                        placeholder='Искать на UNO'
                        type='search'
                        className='w-full py-[10px] px-[48px] rounded-[16px]' 
                    />
                </div>


                <nav className='py-[6px] xl:hidden'>
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

                <div className='hidden xl:flex  xl:gap-[24px]'>
                    <div className='h-[47px]'>
                        <button className='flex items-center flex-col'>
                            <img src = {accountIcon}/>
                            <span>Войти</span>
                        </button>
                    </div>

                    <div className='h-[47px]'>
                        <button className='flex items-center flex-col'>
                            <img src = {cartIcon}/>
                            <span>Корзина</span>
                        </button>
                    </div>

                </div>
            </div>


    </header>
  )
}

export default Header