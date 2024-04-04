import React from 'react'
import { useState } from 'react'
import css from './style.module.css'

// const App = () => {
//   const [username, setusername] = useState('')
//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')
//   const [graduated, setgraduated] = useState(false)
//   const [radio, setradio] = useState('male')
//   const [option, setoption] = useState('option 3')

//   const changeHandler = (e) => setusername(e.target.value)

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username, email, password, graduated, radio, option);
//   }

//   return (
//     <>
//     <form onSubmit={submitHandler}>
//       <input onChange={(e)=> setusername(e.target.value)} type="text" placeholder='username'value={username} /> <br /><br />
//       <input onChange={(e)=> setemail(e.target.value)} type="text" placeholder='email'value={email} /> <br /><br />
//       <input onChange={(e)=> setpassword(e.target.value)} type="text" placeholder='password'value={password} /> <br /><br />
//         <input type="checkbox" onChange={(e) => setgraduated(e.target.checked)} checked={graduated} /> graduated <br /><br />
//         <input type="radio" value={'male'} onChange={(e) => setradio(e.target.value)} checked={radio === 'male' ? true : false} /> Male <br /><br />
//         <input type="radio" value={'female'} onChange={(e) => setradio(e.target.value)} checked={radio === 'female' ? true : false} /> Female <br />  <br />
//         <button >submit</button> 
//      </form>

//     <br />
//       <select value={option} onChange={(e)=>setoption(e.target.value)}>
//       <option value="option 1">option 1</option>
//       <option value="option 2">option 2</option>
//       <option value="option 3">option 3</option>
//       </select>
//     <select value={option} onChange={(e)=>setoption(e.target.value)}></select>
//     </>
//   )
// }


const App=()=>{
 
  const divstyle ={
    width:'100px',
    height:'100px',
    background:"gray",
    color:"white"
  }
return(
  <div>

<div>
  {/* inline jsx */}
  <h1 style={{fontSize:'25px',alignItems:'center'}}>This is Example of React</h1>
  <h2 style={divstyle}>hello</h2>
  <button style={{padding:'10px', borderRadius:'15px', border:'1px solid black',}}>Explore</button>
</div>

<h3 className='text-2xl'>hello bab</h3>
</div>
)

}



export default App