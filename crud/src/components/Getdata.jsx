import React from 'react'
import axios from 'axios'

export const Getdata=()=> {
    const [dataa,setdata]=React.useState([])
    function getdata(){
    axios.get("https://fakestoreapi.com/products").then((r)=>setdata(r.data))
    }

    React.useEffect(()=>{
getdata()
console.log('data',dataa)
handlesort()
    },[])


    const handlesort=(val)=>{
const selected=val
console.log(selected)
var res=[...dataa]
if(selected=='htl'){
    console.log("kfjk")
    res.sort((a,b)=>{
        return b.price-a.price
    })
}else if(selected=='lth'){
    res.sort((a,b)=> {
return a.price-b.price
    })
}
setdata(res)
    }

    
  return (
<>

    <select onChange={(e)=>handlesort(e.target.value)}>
    <option value='htl'>High-To-Low</option>
    <option value='lth'>Low-To-High</option>

</select>
    <div className='main1'>
       
        {dataa.map((e)=>{
            return (<div className='main2'>
            <img className='imgg' src={e.image}></img>
            <h3><span style={{color:'red'}}>Category</span> :{e.category}</h3>
            <p><span style={{color:'red'}}>Price</span> {e.price}</p>
            <p><span style={{color:'red'}}>Title :</span>{e.title}</p>
            </div>)
        })}
    </div>
    </>
  )
}
