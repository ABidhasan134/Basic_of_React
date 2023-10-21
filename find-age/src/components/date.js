import React from 'react'
let Bday=document.querySelector("#day");
let Bmonth=document.querySelector("#month");
let Byear=document.querySelector("#year");
const btn =document.querySelector(".btn");

const submition=()=>{
    console.log("working");
}
btn.addEventListener("click",submition);


export default function Date() {
    console.log(Bday);
  return (
    <div>
     
    </div>
  )
}
