import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './App.css'
import Details from '../components/Details';

function App() {

  return (
    <>
      <div className='max-w-[350px]  mx-auto'>
        <Header/>
          <Details/>
        <Footer/>
      </div>
    </>
  )
}

export default App
