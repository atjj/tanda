import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './App.css'

import Details from '../components/Details';
import { Button } from '@nextui-org/react';
function App() {

  return (
    <>
      <div /* className='max-w-[350px] md:max-w-[628px] relative  mx-auto' */>
        <Header/>
          <Details/>
        <Footer/>
        <div className="sticky md:mt-[21px] w-[100%] max-w-[100%] left-0 right-0 bottom-0  z-50  bg-[var(--color-white)] py-[16px] border-t-[1px]">
              <div className='container flex justify-between'>
                  <div>
                      <p className="text-[var(--color-blue)] font-bold ">100000 сом</p>
                      <p className="line-through text-[var(--color-gray)] text-[14px]">99000 сом</p>
                  </div>
                  <Button className="bg-[var(--color-blue)] py-[14px] px-[52px] text-[14px] text-[var(--color-white)] rounded-[16px]">
                      Купить сейчас
                  </Button>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
