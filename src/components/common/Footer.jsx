

import { footerLinks } from "../../constants"
import logo from '../../assets/LOGO.svg';
import insta from '../../assets/icons/instagramIcon.svg';
import whatsapp from '../../assets/icons/whatsappIcon.svg';




const  Footer = () => {
  return (
    <footer className="mt-[100px] md:mt-[80px] xl:mt-[200px]  md:py-[24px] xl:py-[40px]  md:bg-[#F5F5F5]">

        <div className="container md:flex md:gap-[27px] xl:justify-between md:items-start">

            <div>
                <div className="w-[107px] h-[28px] xl:w-[130px] xl:h-[32px]">
                    <img
                        src = {logo}
                        alt = "footerLogo"
                        className="w-[100%]"
                        />
                </div>


                <div className="flex gap-[16px] mt-[16px] xl:mt-[24px]">
                    <a className="xl:w-[32px] " href = "#" ><img src = {insta} className="w-[90%]" alt = "instagram"/></a>
                    <a className="xl:w-[32px] " href = "#" ><img src = {whatsapp} className="w-[90%]" alt = "whatsapp"/></a>
                </div>
            </div>


            <div className="pb-[42px] md:pb-[0px]  md:flex md:gap-[27px] xl:gap-[160px] ">
                {footerLinks.map((item) => {
                    return (
                        <div key = {item.title} className = "mt-[24px] md:mt-[0px] min-w-[134px]">
                                <h3 className = "font-bold xl:text-[20px]">
                                    {item.title}
                                </h3>
                                {item.links.map(({title},index) => <a key = {index} className="cursor-pointer block text-[var(--color-black-thin)] xl:text-[18px] mt-[8px] md:mt-[12px]">{title}</a>)}     
                        </div>
                    )
                })}
            </div>

        </div>



    </footer>
  )
}

export default Footer