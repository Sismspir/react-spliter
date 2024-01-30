import './App.css';
import { GiReturnArrow as Return } from 'react-icons/gi';
import {useState, useEffect} from 'react';
import React from 'react';

function App() {
  const [openSetPercentage, setOpenSetPercentage] = useState<boolean>(false);
  const [myobj, setMyObj] = useState({
    name: 'spiros',
    age: 30,
  });
  const [percentage, setPercentage] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0)

  useEffect(() => {
    if(isNaN(people)) {
      setPeople(0);
    }
    if (people === 0) {
      setTip(0);
      setTotal(0);
    };
    if (percentage!==0){
      if(percentage < 0) {
        setPercentage(0);
      } else {
        const tipCalc = bill*(percentage/100)/people;
        setTip(tipCalc) 
      }
    };
    if (bill!==0){
      const totalCalc = (bill + tip)/people;
      setTotal(totalCalc)
    };

    console.log("percentage",percentage, "bill",bill, "people",people, "tip", tip);
  }, [percentage, bill, people, tip]); 
  // console.log(myobj.name);
  //wrong code
  // setMyObj({...myobj, name: 'kostas'});

  //correct code
  // if something happens then execute ->
  // const tempObj = ({...myobj, name: "kostas"});
  // setMyObj(tempObj);
  return (
    <div className="bg-[#cee7f1] min-h-screen flex flex-col items-center justify-center space-y-5 font-serif">
      <div className='text-[1rem] tracking-[1rem] font-bold text-[#31642a] mb-8'>
        <h2>SPLI</h2>
        <h2>TTER</h2>
      </div>
      <div className='bg-[#ffffff] lg:h-[40%] w-[50%] rounded-3xl flex lg:flex-row flex-col lg:items-stretch items-center lg:justify-center min-h-[20rem] min-w-[30rem]'>
        {/* First div*/}
        <div className='bg-[#ffffff] w-[45%] text-[#31642a] mt-4'>
          <p>{myobj.name}</p>
          <form className='text-[#31642a]'>
              <h3 className='font-bold text-xs tracking-[0.08rem] mb-1'>Bill</h3>
              <div className="relative inline-block w-full">
              <input onChange={(e) => {setBill(parseFloat(e.target.value))}} type="number" placeholder="0" name="bill" required className="bg-[#e5eef7] rounded-sm text-right rtl custom-number-input placeholder-semibold pl-[1rem] pr-2 w-[90%]"/>
              <div className="absolute inset-y-0 left-18 left-3 flex items-center pointer-events-none">
                <span className="text-gray-400 ">$</span>
              </div>
              </div>  
          </form>
          <h3 className='font-bold text-[0.8rem] tracking-[0.08rem] mt-6 mb-1'>Select Tip %</h3>
          { !openSetPercentage ?
          (<div className='bg-sky-100 h-[36%] text-center mr-[10%] py-6 rounded-md'>
            <form>
            <p>Enter your tip %:</p>
            <input onChange={(e) => {setPercentage(parseFloat(e.target.value))}} type="number" placeholder="%" name="percentage" required className="outline-none h-[2rem] bg-[#e5eef7] rounded-sm text-right rtl custom-number-input placeholder-semibold pl-[1rem] pr-2 w-[90%]"/>
            </form>
            <button onClick={() => {setOpenSetPercentage(!openSetPercentage)}}><Return/></button>
          </div>) 
          :
          (<div className="grid grid-cols-3 gap-4 mr-[10%]">
            <button onClick ={() => {setPercentage(5)}} className="bg-[#174c4e] text-white p-4 rounded-md text-center min-w-[4rem] hover:bg-[#328d91]">5%</button>
            <button onClick ={() => {setPercentage(10)}} className="bg-[#174c4e] text-white p-4 rounded-md text-center min-w-[4rem] hover:bg-[#328d91]">10%</button>
            <button onClick ={() => {setPercentage(15)}} className="bg-[#174c4e] text-white p-4 rounded-md text-center min-w-[4rem] hover:bg-[#328d91]">15%</button>
            <button onClick ={() => {setPercentage(25)}} className="bg-[#174c4e] text-white p-4 rounded-md text-center min-w-[4rem] hover:bg-[#328d91]">25%</button>
            <button onClick ={() => {setPercentage(50)}} className="bg-[#174c4e] text-white p-4 rounded-md text-center min-w-[4rem] hover:bg-[#328d91]">50%</button>
            <button onClick ={() => {setOpenSetPercentage(!openSetPercentage)}} className="bg-[#e5eef7] text-[#174c4e] text-center py-6 text-[0.7rem] rounded-md font-bold min-w-[4rem] hover:bg-[#d3ffec]">Custom</button>
          </div>) }
          <form className='text-[#31642a] mt-2'>
              <h3 className='font-bold text-xs tracking-[0.08rem] mb-2'>Number of People</h3>
              <div className="relative inline-block w-full">
              <input onChange={(e) => {setPeople(parseFloat(e.target.value))}} type="number" placeholder="0" name="people" required className="bg-[#e5eef7] rounded-sm text-right rtl custom-number-input placeholder-semibold pl-[1rem] pr-2 w-[90%]"/>
              <div className="absolute inset-y-0 left-18 left-3 flex items-center pointer-events-none">
                <span className="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/></svg></span>
              </div>
              </div>  
          </form>
        </div>
        {/* Second div*/}
        <div className='bg-[#174c4e] rounded-xl w-[45%] flex flex-col mb-3 mt-3'>
          <div className='text-[#ffffff] self-center m-3'>
            <div className='flex flex-row space-x-[5vw] mt-[2vh]'>
              <h3>
                Tip Amount <p className='text-slate-400'>/ person</p>
              </h3>
              <div className='flex flex-row space-x-[0.5vw] text-[#7fffd4] text-[2rem] mt-2'>
              $ <div>{(isNaN(tip) || people===0) ? <div> 0.00</div> : <p><div> {tip.toFixed(2)}</div></p>}</div>
              </div>
            </div>
          </div>
          <div  className='text-[#ffffff] self-center m-2'>
            <div className='flex flex-row space-x-[5vw]'>
              <h3>
                Total <p className='text-slate-400'>/ person</p>
              </h3>
              <div className='flex flex-row space-x-[0.5vw] text-[#7fffd4] text-[2rem]'>
              $ {(isNaN(total) || people===0) ? <div> 0.00</div> : <p><div>{total.toFixed(2)}</div></p>}
              </div>
            </div>
          </div>
          <button onClick={() => {setBill(0); setPeople(0); setTip(0); setPercentage(0);}} className='mt-14 mb-4 bg-[#328d91] h-[10%] w-[80%] rounded-sm justify-center self-center text-slate-600 hover:bg-[#7fffd4]'>RESET</button>
        </div>
      </div> 
    </div>
  );
}

export default App;
