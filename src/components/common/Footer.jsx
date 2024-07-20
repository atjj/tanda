

import { footerLinks } from "../../constants"
import logo from '../../assets/LOGO.svg';
import insta from '../../assets/icons/instagramIcon.svg';
import whatsapp from '../../assets/icons/whatsappIcon.svg';




const  Footer = () => {
  return (
    <footer className="mt-[100px] md:mt-[80px] md:py-[24px]  md:bg-[#F5F5F5]">

        <div className="container md:flex md:gap-[27px] md:items-start">

            <div>
                <div className="w-[107px] h-[28px]">
                    <img
                        src = {logo}
                        alt = "footerLogo"
                        />
                </div>


                <div className="flex gap-[16px] mt-[16px]">
                    <a href = "#" ><img src = {insta} alt = "instagram"/></a>
                    <a href = "#" ><img src = {whatsapp} alt = "whatsapp"/></a>
                </div>
            </div>


            <div className="pb-[42px] md:flex md:gap-[27px] ">
                {footerLinks.map((item) => {
                    return (
                        <div key = {item.title} className = "mt-[24px] md:mt-[0px] min-w-[134px]">
                                <h3 className = "font-bold">
                                    {item.title}
                                </h3>
                                {item.links.map(({title},index) => <a key = {index} className="cursor-pointer block text-[var(--color-black-thin)]">{title}</a>)}     
                        </div>
                    )
                })}
            </div>

        </div>



    </footer>
  )
}

export default Footer