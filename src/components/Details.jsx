import loader from '../assets/loader.svg';
import startIcon from '../assets/icons/Star.svg';
import points from '../assets/icons/points.svg';
import { Button } from '@nextui-org/react';
import StarRating from './StarRating';
import { SwiperSlide,Swiper } from 'swiper/react';
import {Card, CardBody} from "@nextui-org/react";


import 'swiper/css';

const  Details = () => {

  return (
    <div className = "mt-[24px]">
        <div className = "flex items-center justify-center h-[430px] rounded-[16px] bg-[#F5F5F5]">
            <img src= {loader}/>
        </div>
        <p className='leading-[1.1em] mt-[20px] text-[24px] font-bold w-[285px]'>Стиральная машина Atlant на 7 кг</p>

        <div className='mt-[24px]'>
            <p className='text-[18px]'>Название магазина</p>
            <p className='text-[var(--color-gray)]'>Бренд</p>
        </div>

        <div className='flex gap-[16px] mt-[24px]'>
            <div className='flex gap-[4px]'>
                <img src = {startIcon}/>
                <span>4.9</span>
            </div>
            <a href = "#" className='underline text-[var(--color-gray)]'>10 отзывов</a>
        </div>

        <div className='mt-[24px]'>
            <h3 className='text-[18px] font-medium'>Описание</h3>
            <p className='mt-[8px] text-[var(--color-black-thin)]'>
                Промышленная швейная машина «Jack JK-H2» выполнена с увеличенным челноком и двойным транспортом ткани. Ось челнока расположена горизонтально. Двойной механизм подачи ткани позволяет предотвратить посадку материала. 
                Модель явлется усовершенствованным вариантом машины Jack JK6380BCQ но имеет ряд доработок: Латунные втулки на механизме продвижения Рекомендуется использовать для изготовления различных чехлов для транспортных средств, подушек для дивана, тентов, изделий из кожи и предметов одежды. Отлично подходит для профессиональной швеи.
            </p>

            <p className='mt-[24px] underline cursor-pointer'>Смотреть характеристики</p>


            <Button className = 'mt-[24px] h-[44px] w-full rounded-[16px] text-[14px] text-[var(--color-blue)] bg-[var(--color-blue-thin)] font-semibold	'>
                Оформить в кредит
            </Button>
        </div>

        <div className='mt-[50px]'>
            <h3 className='text-[18px] underline font-semibold'>Отзывы</h3>

            <div className='mt-[16px] flex justify-between'>
                <div className='flex gap-[1.5px]'>
                    <span className = 'text-[18px] font-semibold'>4.9</span>
                    <StarRating/>
                </div>

                <p className='text-[var(--color-gray-light)]'>60 отзывов</p>
    
                <div>
                    <img src = {points}/>
                </div>
            </div>

            <div className='mt-[16px]'>
                <Swiper
                    spaceBetween={80}
                    slidesPerView={1.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card className='bg-[var(--color-gray-lighter)] w-[259px] rounded-[16px] shadow-none' >
                            <CardBody className='p-[12px]'>
                                <div className='flex'>
                                    <div className='flex gap-[8px]  items-center'>
                                        <div className='w-[40px] h-[40px] rounded-full bg-[#D9D9D9]'>
                                            <img src = {""}/>
                                        </div>
                                        <div>
                                            <p className='font-semibold'>Сайкал</p>
                                            <p className='text-[12px] text-[var(--color-gray)]'>17 мая 2023, 20:46</p>
                                        </div>
                                    </div>
                                    <StarRating styles={`h-[16px] w-[16px]`}/>
                                </div>
                                <div className='text-[12px] mt-[8px] leading-[14px]'>
                                    Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый.По сути отжим в ней это просто кружение.
                                </div>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='bg-[var(--color-gray-lighter)] w-[259px] rounded-[16px] shadow-none' >
                            <CardBody className='p-[12px]'>
                                <div className='flex'>
                                    <div className='flex gap-[8px]  items-center'>
                                        <div className='w-[40px] h-[40px] rounded-full bg-[#D9D9D9]'>
                                            <img src = {""}/>
                                        </div>
                                        <div>
                                            <p className='font-semibold'>Сайкал</p>
                                            <p className='text-[12px] text-[var(--color-gray)]'>17 мая 2023, 20:46</p>
                                        </div>
                                    </div>
                                    <StarRating styles={`h-[16px] w-[16px]`}/>
                                </div>
                                <div className='text-[12px] mt-[8px] leading-[14px]'>
                                    Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый.По сути отжим в ней это просто кружение.
                                </div>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='bg-[var(--color-gray-lighter)] w-[259px] rounded-[16px] shadow-none' >
                            <CardBody className='p-[12px]'>
                                <div className='flex'>
                                    <div className='flex gap-[8px]  items-center'>
                                        <div className='w-[40px] h-[40px] rounded-full bg-[#D9D9D9]'>
                                            <img src = {""}/>
                                        </div>
                                        <div>
                                            <p className='font-semibold'>Сайкал</p>
                                            <p className='text-[12px] text-[var(--color-gray)]'>17 мая 2023, 20:46</p>
                                        </div>
                                    </div>
                                    <StarRating styles={`h-[16px] w-[16px]`}/>
                                </div>
                                <div className='text-[12px] mt-[8px] leading-[14px]'>
                                    Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый.По сути отжим в ней это просто кружение.
                                </div>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='bg-[var(--color-gray-lighter)] w-[259px] rounded-[16px] shadow-none' >
                            <CardBody className='p-[12px]'>
                                <div className='flex'>
                                    <div className='flex gap-[8px]  items-center'>
                                        <div className='w-[40px] h-[40px] rounded-full bg-[#D9D9D9]'>
                                            <img src = {""}/>
                                        </div>
                                        <div>
                                            <p className='font-semibold'>Сайкал</p>
                                            <p className='text-[12px] text-[var(--color-gray)]'>17 мая 2023, 20:46</p>
                                        </div>
                                    </div>
                                    <StarRating styles={`h-[16px] w-[16px]`}/>
                                </div>
                                <div className='text-[12px] mt-[8px] leading-[14px]'>
                                    Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый.По сути отжим в ней это просто кружение.
                                </div>
                            </CardBody>
                        </Card>
                    </SwiperSlide>     
                </Swiper>

                <Button className = 'mt-[24px] h-[44px] w-full rounded-[16px] text-[14px] text-[var(--color-blue)] bg-[var(--color-blue-thin)] font-semibold	'>
                    Смотреть все отзывы           
                </Button>
            </div>

            <div className='mt-[50px]'>
                <h3 className='text-[18px] font-semibold'>Похожие товары</h3>
                <div className='mt-[16px]'>

                <div className = "flex py-[20px] items-center w-[167px] justify-center rounded-[16px] bg-[#F5F5F5]">
                            <img src= {loader} width={135} height={199}/>
                        </div>
                    <Card className='w-[167px]'>
  
                    <CardBody>

                    </CardBody>
                    </Card>

                </div>

            </div>


        </div>


    </div>
  )
}

export default Details