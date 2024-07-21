import loader from '../assets/loader.svg';
import startIcon from '../assets/icons/Star.svg';
import points from '../assets/icons/points.svg';
import StarRating from './StarRating';
import close from '../assets/icons/Cancel.svg';
import writeReview from '../assets/icons/writeReview.svg';

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


import { SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/css';

import productsCard from '../json/card.json';
import reviews from '../json/reviews.json';
import images from '../json/images.json';

import { useRef,useState,useEffect } from 'react';



const  Details = () => {

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

  const countSpace = () => {
   if(containerWidth == 350)
       return 70;
   else if(containerWidth == 628)
       return -120;
   else
       return 70  
    }
   console.log(containerWidth);

   const space = countSpace();
   console.log("space:",space)



  return (
    <div ref={divBlock} className = "container mt-[24px] md:mt-[17px]">

        {/* <button onClick = {showDivWidth}>fff</button> */}

        <Breadcrumbs className='hidden md:block' separator="/" >
            <BreadcrumbItem>Главная</BreadcrumbItem>
            <BreadcrumbItem>Бытовая техника</BreadcrumbItem>
            <BreadcrumbItem color='primary'>Стиральные машины</BreadcrumbItem>
        </Breadcrumbs>

        <div className='md:flex md:gap-[20px] md:h-[673px] md:mt-[32px]'>

            <Swiper
                className='hidden md:block md:m-[0px]'
                direction='vertical'
                spaceBetween = {50}
                slidesPerView = {5.5}
                onSlideChange = {() => console.log('slide change')}
                onSwiper = {(swiper) => console.log(swiper)}
                    >
                        {images.map(({id,url}) =>
                            <SwiperSlide key = {id} className='md:w-[88px] md:h-[123px]'>
                                <Card className='md:bg-[var(--color-gray-lighter)] md:w-[88px] md:h-[123px] md:md:rounded-[4px] md:shadow-none md:flex md:items-center md:justify-center'>
                                    <Image
                                        src= {url}
                                        width={66}
                                        height={94}
                                        />
                                </Card>
                            </SwiperSlide>
                        )}
                    </Swiper>

            <div className = "flex items-center justify-center h-[430px] md:h-[100%] md:w-[520px] rounded-[16px] bg-[#F5F5F5]">
                <img src= {loader} className='w-[80%] md:w-[85%]'/>
            </div>
        </div>
        <p className='leading-[1.1em] mt-[20px] md:mt-[40px] text-[24px] font-bold w-[285px] md:w-full'>Стиральная машина Atlant на 7 кг</p>

        <div className='mt-[24px] md:mt-[16px]'>
            <p className='text-[18px]'>Название магазина</p>
            <p className='text-[var(--color-gray)]'>Бренд</p>
        </div>



        <div className='flex gap-[16px] mt-[24px] md:mt-[16px]'>
            <div className='flex gap-[4px]'>
                <img src = {startIcon}/>
                <span>4.9</span>
            </div>
            <a href = "#" className='underline text-[var(--color-gray)]'>10 отзывов</a>
        </div>

        <div className='mt-[24px]'>
            <h3 className='text-[18px] font-medium'>Описание</h3>
            <p className='mt-[8px] md:mt-[12px] text-[var(--color-black-thin)]'>
                Промышленная швейная машина «Jack JK-H2» выполнена с увеличенным челноком и двойным транспортом ткани. Ось челнока расположена горизонтально. Двойной механизм подачи ткани позволяет предотвратить посадку материала. 
                Модель явлется усовершенствованным вариантом машины Jack JK6380BCQ но имеет ряд доработок: Латунные втулки на механизме продвижения Рекомендуется использовать для изготовления различных чехлов для транспортных средств, подушек для дивана, тентов, изделий из кожи и предметов одежды. Отлично подходит для профессиональной швеи.
            </p>

            <p onClick={onOpen} className='mt-[24px] underline cursor-pointer'>Смотреть характеристики</p>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='full' className='md:w-[600px] md:h-[90%]'  hideCloseButton>
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
                                    <ul className='flex flex-col gap-[16px] text-[var(--color-gray)]'>
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
                                        <p className="text-[var(--color-blue)] font-bold md:text-[20px] ">100000 сом</p>
                                        <p className="line-through text-[var(--color-gray)] text-[14px] md:text-[18px]">99000 сом</p>
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

            <Button className = 'mt-[24px] md:mt-[80px] h-[44px] w-full md:w-[304px] rounded-[16px] text-[14px] text-[var(--color-blue)] bg-[var(--color-blue-thin)] font-semibold	'>
                Оформить в кредит
            </Button>
        </div>

        <div className='mt-[50px] md:mt-[80px]'>
            <h3 className='text-[18px] md:text-[24px] underline font-semibold'>Отзывы</h3>

            <div className='mt-[16px] flex justify-between items-center'>
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
                    spaceBetween={space}
                    slidesPerView={1.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {reviews.map(({image,name,date,time,comment},index) =>
                        <SwiperSlide key = {index} >
                            <Card className='bg-[var(--color-gray-lighter)] w-[259px] md:w-[304px] rounded-[16px] shadow-none' >
                                <CardBody className='p-[12px] md:py-[24px] md:px-[16px]'>
                                    <div className='flex'>
                                        <div className='flex gap-[8px]  items-center'>
                                            <div className='w-[40px] h-[40px] md:w-[48px] md:h-[48px] md rounded-full bg-[#D9D9D9]'>
                                                <img src = {image}/>
                                            </div>
                                            <div>
                                                <p className='font-semibold'>{name}</p>
                                                <p className='text-[12px] text-[var(--color-gray)]'>{`${date}, ${time}`}</p>
                                            </div>
                                        </div>
                                        <StarRating styles={`h-[16px] w-[16px] md:w-[20px] md:h-[20px]`}/>
                                    </div>
                                    <div className='text-[12px] md:text-[14px] mt-[8px] leading-[14px] md:leading-[16px]'>
                                        {comment}
                                    </div>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    )}
                </Swiper>

                <Button className = 'mt-[24px] h-[44px] w-full md:w-[304px] rounded-[16px] text-[14px] text-[var(--color-blue)] bg-[var(--color-blue-thin)] font-semibold	'>
                    Смотреть все отзывы           
                </Button>
            </div>

            <div className='mt-[50px] md:mt-[80px]'>
                <h3 className='text-[18px] md:text-[24px] font-semibold'>Похожие товары</h3>

                <div className='mt-[16px] flex flex-wrap gap-x-[16px] gap-y-[32px] md:gap-x-[20px] md:gap-y-[40px]'>
                    {productsCard.map(({image,name,product_type,reviews,price},index) => 
                        <Card key={index} className='w-[167px] md:w-[196px] shadow-none'>           
                            <CardHeader className='bg-[var(--color-gray-lighter)] h-[215px] md:h-[252px] rounded-[8px] flex items-center justify-center'>
                                <Image
                                    alt = "product"
                                    className = "object-cover"
                                    src = {image}
                                    classNames = "w-[135px] md:w-[164px]"
                                    />
                            </CardHeader>
                            <CardBody className='mt-[9px] p-[0px]'>

                                <p className='font-semibold text-[14px]'>{name}</p>
                                <p className='mt-[9px] text-[var(--color-gray)] text-[14px]'>{product_type}</p>
                                <div className='mt-[9px] flex text-[14px] gap-[4px] items-center'>
                                    <StarRating styles = {"h-[16px] w-[16px]"}/>
                                    <span>{reviews} отзывов</span>
                                </div>
                                <p className='font-semibold mt-[9px]'>{price} сом</p>

                            </CardBody>
                            <Button className='mt-[11px] bg-[var(--color-blue)] text-[14px] text-[var(--color-white)] font-semibold rounded-[16px]'>
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