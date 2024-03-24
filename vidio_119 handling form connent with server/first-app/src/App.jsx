import "./App.css";
import { useState } from "react";
import {useForm} from 'react-hook-form'


function App() {

    const {
      register,
      handleSubmit,
      watch,
      setError, // this is error is set by me 
      formState: { errors, isSubmitting },
    } = useForm();
    
    const delay = (d)=>{
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve()
        }, d * 1000);
      })
    }


  const onSubmit = async (data) =>{
    // await delay(2)
    // console.log(data)

    let r = await fetch("http://localhost:3000/", {method:"POST", headers:{
      "Content-Type":"application/json",

    }, body:JSON.stringify(data)})
    let res = await r.text();
    console.log(data, res)



    /* 
    if(data.username !== "shubham"){
      setError('myform', {message:'your form is not in good order bcz credentials not valid'})
    }
    if(data.username === "rohan"){
      setError('blocked', {message:'This user is Blocked'})
    }
     */


  }

  return (
    <>
   
   
   {isSubmitting && <div>Loadding...</div>}
   <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>

        <input placeholder='username' {...register("username",  { required: {value:true, message:"This field is required"},minLength:{value:3,message:"Min length is 3"},maxLength:{value:8,message:"Max length is 8"}, })}  type="text" />
        {errors.username && <div className="red">{errors.username.message}</div> }
        
        <br />
        <input placeholder='userpassword' {...register("password",{required:{value:true, message:"This field is require"},minLength:{value:7,message:"min Length of password is 7 "}})} type="password" />
        {errors.password && <div className="red">{errors.password.message}</div> }

        <br />
        <input disabled={isSubmitting} type="submit"/>
        {errors.myform && <div className="red">{errors.myform.message}</div> }
        {errors.blocked && <div className="red">{errors.blocked.message}</div> }
      </form>
    </div>






    {/*

    <div className="container">
      <form action="" onSubmit={handleSubmit()}>

        <input placeholder='username' {...register("username",  { required: true,minLength:3,maxLength:8, })}  type="text" />
        {errors.username && <div className="red">There is some error in username</div> }
        
        <br />
        <input placeholder='userpassword' {...register("password")} type="password" />
        <br />
        <input type="submit"/>
      </form>
    </div>
     */}
    </>
  );
};

export default App;

/* 
react hook form source link  'https://react-hook-form.com/get-started'

install this :- npm install react-hook-form



install this for changing localhost url number 

 npm i cors



install this 
npm i body-parser

*/