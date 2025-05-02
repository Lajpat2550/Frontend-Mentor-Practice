import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("");
  const [toggle, setToggle] = useState(false);
  const [id, setID] = useState();
  // const getData = async () => {
  useEffect(() => {
    const data = fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slip.advice);
        setAdvice(data.slip.advice);
        setID(data.slip.id);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [toggle])
  // }
  // getData()

  return (
    <>
      <div className="@container px-7 gap-1 lg:px-14 bg-gray-600 lg:mt-11 lg:w-[495px] lg:h-[300px] w-[345px] h-[315px] rounded-xl flex flex-col items-center justify-center">
        <div className='h-[20%] mt-7 font-sans text-[12px] text-green-400 font-bold tracking-[2px] w-[100%] flex justify-center items-center'>ADVICE # {id}</div>
        <div className="w-[100%] mt-2 h-[50%] text-center text-2xl font-bold">
          {advice}
        </div>
        <div className='w-[100%] mt-6 h-[5%]'>
          <img className='w-[100%] h-[100%] ' src="src/images/pattern-divider-mobile.svg" alt="image loading..." />
        </div>
        <button onClick={()=> setToggle(prev => !prev)} className='w-[65px] h-[65px] min-w-[65px] min-h-[65px] hover:shadow-[0px_0px_35px_0px_rgb(74,222,128)] relative top-[9.5%] overflow-hidden bg-green-300 rounded-[100%] flex justify-center items-center'>
          <img className='h-[100%] m-auto w-[100%] p-5 bg-green-300 flex justify-center items-center' src="src/images/icon-dice.svg" alt="" srcset="loading loader" />
        </button>
      </div>
    </>
  )
}

export default App
