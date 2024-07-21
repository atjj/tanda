import loader from '../assets/loader.svg';
import starIcon from '../assets/icons/Star.svg';
import points from '../assets/icons/points.svg';
import StarRating from './StarRating';
import close from '../assets/icons/Cancel.svg';
import writeReview from '../assets/icons/writeReview.svg';
import burger from '../assets/icons/burger.svg';
import porifleSmall from '../assets/icons/profileSmall.svg';

import {
        Modal,
        ModalContent, 
        ModalHeader, 
        ModalBody, 
        ModalFooter, 
        useDisclosure,
        Breadcrumbs, 
        BreadcrumbItem,
        Card, 
        CardBody,
        Image,
        Button,
        CardHeader
       } from "@nextui-org/react";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import productsCard from '../json/card.json';
import reviews from '../json/reviews.json';
import images from '../json/images.json';

import { useRef,useState,useEffect } from 'react';

import CallToAction from './CallToAction';

import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_ID } from '../apollo/product';

const  Details = () => {

   const {data} = useQuery(GET_PRODUCT_BY_ID);


   const {isOpen, onOpen, onOpenChange} = useDisclosure();
   const [containerWidth, setContainerWidth] = useState(0);
   const divBlock = useRef();

   useEffect(() => {

     updateWidth();
     window.addEventListener('resize', updateWidth);
     
     return () => {
       window.removeEventListener('resize', updateWidth);
     };
   }, []);
 
   const updateWidth = () => {
    if (divBlock.current) {
      setContainerWidth(divBlock.current.getBoundingClientRect().width);
    }
  };

  const countByWidth = () => {
   if(containerWidth == 350)
       return {space: 70, slide: 1.5};
   else if(containerWidth == 628)
       return {space: -120, slide: 1.5};
   else if(containerWidth == 1200)
        return {space: 30,slide: 3};
   else
       return {space:70, slide: 1.5}  
    }

   const space = countByWidth();



   const cta = (containerWidth == 1200) ? <CallToAction/> : null;


   return (
    <div ref = {divBlock} className = "container mt-[24px] md:mt-[17px] xl:mt-[23px]">

        {cta}
        
        <nav className='hidden xl:block'>
            <ul className='text-[18px] flex gap-[40px]'>
                <li><button className='flex items-center gap-[8px]' ><img src = {burger}/>Все категории</button> </li>
                <li>Стать продавцом</li>
                <li>О нас</li>
                <li>Курьерам</li>
                <li>Контакты</li>
                <li>Доставка</li>
            </ul>
        </nav>


        <Breadcrumbs className='hidden md:block xl:mt-[24px]' separator="/" >
            <BreadcrumbItem>Главная</BreadcrumbItem>
            <BreadcrumbItem>Бытовая техника</BreadcrumbItem>
            <BreadcrumbItem color='primary'>{data?.barcode?.category?.parent?.name}</BreadcrumbItem>
        </Breadcrumbs>

        <div className='xl:flex xl:gap-[40px] xl:mt-[32px]'>

            <div className='xl:flex xl:gap-[20px]'>

                <div className='md:flex md:gap-[20px] md:h-[673px] xl:h-[500px] md:mt-[32px] xl:mt-[0px]'>
                    <Swiper
                        className = 'hidden md:block md:m-[0px]'
                        direction='vertical'
                        spaceBetween = {(containerWidth === 1200) ? 125 : 50} 
                        slidesPerView = {(containerWidth === 1200) ? 5 : 5.5} 
                        onSlideChange = {() => console.log('slide change')}
                        onSwiper = {(swiper) => console.log(swiper)}
                        >
                            {images.map(({id}) =>
                                <SwiperSlide key = {id} className='md:w-[88px] md:h-[123px]'>
                                    <Card className='md:bg-[var(--color-gray-lighter)] md:w-[88px] md:h-[123px] md:md:rounded-[4px] md:shadow-none md:flex md:items-center md:justify-center'>
                                        <Image
                                            src= {loader}
                                            width={66}
                                            height={94}
                                            />
                                    </Card>
                                </SwiperSlide>
                            )}
                    </Swiper>

                    <div className = "flex items-center justify-center h-[430px] md:h-[100%] md:w-[520px] xl:w-[386px] rounded-[16px] bg-[#F5F5F5]">
                        <img src= {loader} className='w-[80%] md:w-[85%]'/>
                    </div>
                </div>

                <div className='xl:w-[367px]'>
                    <p className='leading-[28px] mt-[20px] xl:mt-[0px] md:mt-[40px] text-[24px] font-bold md:w-full xl:w-[285px]'>{data?.barcode?.title}</p>

                    <div className='mt-[24px] md:mt-[16px]'>
                        <p className='text-[18px] xl:flex xl:gap-[8px]'><img className='hidden xl:block' src = {porifleSmall}/>Название магазина</p>
                        <p className='text-[var(--color-gray)]'>Бренд</p>
                    </div>

                    <div className='flex gap-[16px] mt-[24px] md:mt-[16px]'>
                        <div className='flex gap-[4px]'>
                            <img src = {starIcon}/>
                            <span>4.9</span>
                        </div>
                        <a href = "#" className='underline text-[var(--color-gray)]'>10 отзывов</a>
                    </div>



                    <div className='mt-[24px]'>
                        <h3 className='text-[18px] font-medium'>Описание</h3>
                        <p className='mt-[8px] md:mt-[12px] text-[var(--color-black-thin)] xl:leading-[22px]'>
                            {data?.barcode?.description}
                        </p>

                        <p onClick={onOpen} className='mt-[24px] underline cursor-pointer'>Смотреть характеристики</p>

                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='full' className='md:w-[600px] md:h-[95%]'  hideCloseButton>
                            <ModalContent className='p-[0px]'>
                                {(onClose) => (
                                    <>
                                    <ModalHeader className="flex justify-between items-center px-[20px] md:px-[40px] pt-[54px] md:pt-[34px]  pb-[20px] md:pb-[26px] border-b-1 border-[var( --color-gray-light)] text-[20px] md:text-[24px] font-semibold">
                                        <p>Характеристики</p>
                                        <button className='border-none bg-[--color-white]  p-[0px]' onClick = {onClose}>
                                            <Image
                                                src = {close}                                        
                                            />
                                        </button>
                                    </ModalHeader>
                                    <ModalBody className='pt-[32px] px-[20px] md:px-[40px] pb-[129px] md:pb-[289px] overflow-auto'>
                                        <div className='flex gap-[40px] md:gap-[140px] md:gap-[24px] md:text-[18px]'>
                                            <ul className='flex flex-col md:w-[248px] gap-[16px] text-[var(--color-gray)]'>
                                                <li>Способ установки</li>
                                                <li>Напряжение</li>
                                                <li>Цвет</li>
                                                <li>Материал</li>
                                                <li>Способ установки</li>
                                                <li>Напряжение</li>
                                                <li>Цвет</li>
                                                <li>Материал</li>
                                            </ul>
                                            <ul className='flex flex-col gap-[16px]'>
                                                <li>Способ установки</li>
                                                <li>Напряжение</li>
                                                <li>Цвет</li>
                                                <li>Материал</li>
                                                <li>Способ установки</li>
                                                <li>Напряжение</li>
                                                <li>Цвет</li>
                                                <li>Материал</li>
                                            </ul>
                                        </div>


                                    </ModalBody>
                                    <ModalFooter className='px-[20px] md:px-[125px] py-[0px] border-t-[1px]'>
                                        <div className="sticky w-[100%] max-w-[100%] left-0 right-0 bottom-0  z-50  flex justify-between items-center  bg-[var(--color-white)] py-[16px]">
                                            <div>
                                                <p className="text-[var(--color-blue)] font-bold md:text-[20px] ">{data?.barcode?.sellingPrice}</p>
                                                <p className="line-through text-[var(--color-gray)] text-[14px] md:text-[18px]">{data?.barcode?.sellingPrice}</p>
                                            </div>
                                            <Button className="bg-[var(--color-blue)] py-[14px] px-[52px] text-[14px] md:text-[16px] text-[var(--color-white)] rounded-[16px]">
                                                Купить сейчас
                                            </Button>
                                        </div>
                                    </ModalFooter>
                                    </>
                                )}
                             </ModalContent>
                        </Modal>

                        <Button className = 'xl:hidden mt-[24px] md:mt-[80px] h-[44px] w-full md:w-[304px] rounded-[16px] text-[14px] text-[var(--color-blue)] bg-[var(--color-blue-thin)] font-semibold	'>
                            Оформить в кредит
                        </Button>
                    </div>
                </div>
            </div>

            <div className='hidden xl:block'>
                <Card className='rounded-[16px] w-[285px] shadow-[0px_0px_4px_0px_#00000026] p-[0px]'>
                    <CardBody className='px-[8px] py-[40px]'>
                        <div className='flex gap-[16px] items-center'>
                            <span className='text-[var(--color-blue)] font-bold text-[24px]'>{data?.barcode?.sellingPrice}</span>
                            <span className='line-through text-[var(--color-gray)] text-[20px]'>{data?.barcode?.sellingPrice}</span>
                        </div>
                        <Button className='mt-[20px] h-[44px] font-semibold text-[var(--color-white)] bg-[var(--color-blue)]'>Купить сейчас</Button>
                        <Button className='text-[var(--color-blue)] bg-[var(--color-blue-thin)] font-semibold h-[44px] mt-[16px]'>Оформить кредит</Button>

                    </CardBody>
                </Card>
            </div>

        </div>


        <div className='mt-[50px] md:mt-[80px] xl:mt-[100px]'>
            <h3 className='text-[18px] md:text-[24px] underline font-semibold'>Отзывы</h3>

            <div className='mt-[16px] xl:mt-[24px] flex justify-between items-center'>
                <div className='flex gap-[18px]'>
                    <div className='flex gap-[1.5px]'>
                        <span className = 'text-[18px] font-semibold'>4.9</span>
                        <StarRating/>
                    </div>

                    <p className='text-[var(--color-gray-light)]'>60 отзывов</p>
                </div>
    
                <button className='md:hidden'>
                    <img src = {points}/>
                </button>

                <button className='hidden md:block md:flex gap-[16px]'>
                    <img src = {writeReview}/>
                    <span>Написать отзыв</span>
                </button>


            </div>

            <div className='mt-[16px]'>
                <Swiper
                    spaceBetween={space.space}
                    slidesPerView={space.slide}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {reviews.map(({image,name,date,time,comment},index) =>
                        <SwiperSlide key = {index} >
                            <Card className='bg-[var(--color-gray-lighter)] w-[259px] md:w-[304px] xl:w-[387px] rounded-[16px] xl:h-[268px] shadow-none' >
                                <CardBody className='p-[12px] md:py-[24px] md:px-[16px] xl:px-[24px] xl:pt-[24px] xl:pb-[16px]'>
                                    <div className='flex xl:gap-[30px]'>
                                        <div className='flex gap-[8px]  items-center'>
                                            <div className='w-[40px] h-[40px] md:w-[48px] md:h-[48px] xl:w-[54px] rounded-full bg-[#D9D9D9]'>
                                                <img src = {image}/>
                                            </div>
                                            <div>
                                                <p className='font-semibold'>{name}</p>
                                                <p className='text-[12px] text-[var(--color-gray)]'>{`${date}, ${time}`}</p>
                                            </div>
                                        </div>
                                        <StarRating styles={`h-[16px] w-[16px] md:w-[20px] md:h-[20px]`}/>
                                    </div>
                                    <div className='text-[12px]  md:text-[14px] mt-[8px] md:mt-[16px] leading-[14px] md:leading-[16px] xl:leading-[18px]'>
                                        {comment}
                                    </div>
                                    <button className='hidden xl:block xl:absolute xl:bottom-[16px] xl:underline text-[var(--color-gray)] xl:right-[16px]'>Пожаловаться на отзыв </button>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    )}
                </Swiper>

                <Button className = 'mt-[24px] xl:mt-[32px] h-[44px] w-full md:w-[304px] xl:w-[269px] rounded-[16px] text-[14px] text-[var(--color-blue)] bg-[var(--color-blue-thin)] font-semibold	'>
                    Смотреть все отзывы           
                </Button>
            </div>

            <div className='mt-[50px] md:mt-[80px] xl:mt-[100px]'>
                <h3 className='text-[18px] md:text-[24px] font-semibold'>Похожие товары</h3>

                <div className='mt-[16px] xl:mt-[24px] flex flex-wrap gap-x-[16px] gap-y-[32px] md:gap-x-[20px] md:gap-y-[40px] xl:gap-x-[20px] xl:gap-y-[24px]'>
                    {productsCard.map(({name,product_type,reviews,price},index) => 
                        <Card key = {index} className = 'w-[167px] md:w-[196px] xl:w-[285px] shadow-none'>           
                            <CardHeader className='bg-[var(--color-gray-lighter)] h-[215px] md:h-[252px] xl:h-[369px] rounded-[8px] flex items-center justify-center'>
                                <Image
                                    alt = "product"
                                    src = {loader}
                                    className = "object-cover w-[135px] md:w-[164px] xl:w-[222px]"
                                    />                      
                            </CardHeader>
                            <CardBody className = 'mt-[9px] xl:mt-[16px] p-[0px]'>

                                <p className='font-semibold text-[14px] xl:text-[16px]'>{name}</p>
                                <p className='mt-[9px] text-[var(--color-gray)] text-[14px] xl:text-[16px]'>{product_type}</p>
                                <div className='mt-[9px] flex text-[14px] gap-[4px] items-center'>
                                    <StarRating styles = {"h-[16px] w-[16px]"}/>
                                    <span>{reviews} отзывов</span>
                                </div>
                                <p className='font-semibold mt-[9px]'>{price} сом</p>

                            </CardBody>
                            <Button className='mt-[11px] xl:mt-[16px] bg-[var(--color-blue)] text-[14px] xl:py-[12px] xl:text-[16px] text-[var(--color-white)] font-semibold rounded-[16px]'>
                                Купить сейчас
                            </Button>      
                        </Card>)}
                </div>

            </div>

        </div>

    </div>
  )
}

export default Details