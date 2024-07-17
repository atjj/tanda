import {Button} from "@nextui-org/react";


import { footerLinks } from "../../constants"
import logo from '../../assets/LOGO.svg';
import insta from '../../assets/icons/instagramIcon.svg';
import whatsapp from '../../assets/icons/whatsappIcon.svg';




const  Footer = () => {
  return (
    <footer>

        <div className="w-[107px] h-[28px]">
            <img
                src = {logo}
                alt = "footerLogo"
                />
        </div>


        <div className="flex gap-[16px] mt-[16px]">
            <img src = {insta} alt = "instagram"/>
            <img src = {whatsapp} alt = "whatsapp"/>
        </div>


        <div className="pb-[42px]">
            {footerLinks.map((item) => {
                return (
                    <div key = {item.title} className = "mt-[24px] min-w-[134px]">
                            <h3 className = "font-bold">
                                {item.title}
                            </h3>
                            {item.links.map(({title},index) => <a key = {index} className="block">{title}</a>)}     
                    </div>
                )
            })}
        </div>

{/*         <div className="flex justify-between  py-[16px] border-t-[1px]">
            <div>
                <p className="text-[var(--color-blue)] font-bold ">100000 сом</p>
                <p className="line-through text-[var(--color-gray)] text-[14px]">99000 сом</p>
            </div>
            <Button className="bg-[var(--color-blue)] py-[14px] px-[52px] text-[14px] text-[var(--color-white)] rounded-[16px]">
                Купить сейчас
            </Button>
        </div> */}
    </footer>
  )
}

export default Footer