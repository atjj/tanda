import { useState,useEffect } from "react";

import starIcon from '../assets/icons/Star.svg';
import loader from '../assets/loader.svg';


import { Button } from "@nextui-org/react";

const CallToAction = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 600) {  // Укажите значение прокрутки, после которого блок должен появиться
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`${isVisible ? 'xl:fixed' : 'xl:hidden'} xl:top-0 xl:left-0 xl:right-0 xl:w-[100%] xl:max-w-[100%] xl:py-[16px] xl:z-50 xl:bg-[var(--color-white)] border-1 border-[#DEDEDE]`}>
            <div className="container flex justify-between items-center">
                <div className="flex gap-[29px]">
                    <div className = "w-[32px] px-[2px] h-[47px] bg-[#F5F5F5] flex items-center justify-between">                
                        <img className="w-[28px] h-[40px]" src= {loader}/>
                    </div>

                    <div>
                        <div className="text-[#575757] font-bold">Стиральная машина Atlant на 7 кг</div>
                        <div className="flex gap-[16px]">
                            <div className='flex gap-[4px]'>
                                    <img src = {starIcon}/>
                                    <span>4.9</span>
                            </div>
                            <a href = "#" className='underline text-[var(--color-gray)]'>60 отзывов</a>
                        </div>
                    </div>
                </div>


                <div className="flex gap-[40px]">
                    <div>
                        <p className="text-[var(--color-blue)] font-bold md:text-[20px] ">100000 сом</p>
                        <p className="line-through text-[var(--color-gray)] text-[14px] md:text-[18px]">99000 сом</p>
                    </div>

                    <div className="flex justify-between items-center gap-[24px]">
                        <Button className="w-[160px] rounded-[16px] h-[44px] text-[--color-blue] border-[1px] border-[var(--color-blue)] font-semibold bg-[var(--color-white)]">Купить сейчас</Button>
                        <Button className="w-[160px] rounded-[16px] h-[44px] text-[--color-white] font-semibold bg-[var(--color-blue)]">В корзину</Button>
                    </div>
                </div>

            </div>
      </div>
    );
  };

export default CallToAction