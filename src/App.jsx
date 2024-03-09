

import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrecyInfo from './customHooks/useCurrencyInfo'


function App() {

  const [amount ,setAmount]  = useState()
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState()


  const currecyInfo = useCurrecyInfo(from)
  const options = Object.keys(currecyInfo)

  const [error,setError] = useState("")

  const swap = ()=>{
    setFrom(to)
    setTo(from)

    // optional 
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

const convert = ()=>{
  setConvertedAmount(amount * currecyInfo[to])

}

const err=()=>{

    if (amount ===  null || amount === undefined || amount === NaN) {
        
        let putError =document.getElementById('input-box').style.border="3px solid red"
        setError(putError)
    }
    
}


return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                  }}
              >
                  <div className="w-full mb-1" id='input-box'>
                      <InputBox
                          
                          label="From"
                          currencyOptions={options}
                          amount={amount}
                        //   currency - amount
                          onCurrencyChange={(currency)=>setAmount(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount)=>setAmount(amount)}

                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          currencyOptions={options}
                          amount={convertedAmount}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={to}
                          amountDiasable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" 
                  onClick={err}>
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
