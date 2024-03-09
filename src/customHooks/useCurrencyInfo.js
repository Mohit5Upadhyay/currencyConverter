
// custom hook --> just the function and return the in the form of array [varibable,func]

import {useState,useEffect} from 'react'

function useCurrecyInfo(currency){

    const [data,setData] = useState({})


    // jab bhi reload hoga page to data fetch ho jayega
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // api return the data in the form of string --> json convert kiya he
        .then((res) => res.json())
        // resmust be holded in useState
        .then((res) => setData(res[currency]))
        console.table(data)
    },[currency])
    console.log(data);

    return data
}

export default useCurrecyInfo;