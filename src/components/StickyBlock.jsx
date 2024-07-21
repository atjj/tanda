import { Button } from '@nextui-org/react';

const  StickyBlock = () => {
  return (
    <div className="sticky xl:hidden md:mt-[21px] w-[100%] max-w-[100%] left-0 right-0 bottom-0  z-50  bg-[var(--color-white)] py-[16px] border-t-[1px]">
        <div className='container flex justify-between items-center md:px-[138px]'>
            <div>
                <p className="text-[var(--color-blue)] font-bold md:text-[20px] ">100000 сом</p>
                <p className="line-through text-[var(--color-gray)] text-[14px] md:text-[18px]">99000 сом</p>
            </div>
            <Button className="bg-[var(--color-blue)] py-[14px] px-[52px] text-[14px] md:text-[16px] text-[var(--color-white)] rounded-[16px]">
                Купить сейчас
            </Button>
        </div>
    </div>
  )
}

export default StickyBlock