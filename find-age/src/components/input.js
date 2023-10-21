import React from 'react';
// import Logo from './logo.svg';
import './input.css'
import Date from './date';
export default function Input(){
    return(
        <div className='main'>
            
            <div className='Icontener'>
                <div typeof='date'>
                    <p className='pa'>DAY</p>
                    <input id='day'  placeholder='DD' className='input'/>
                    
                    <p className='hiden'>This filde is requer</p>
                </div>
                <div>
                    <p className='pa'>MONTH</p>
                    <input id='month' placeholder='MM' className='input'/>
                    <p className='hiden'>This filde is requer</p>
                </div>
                <div>
                    <p className='pa'>YEAR</p>
                    <input id='year' placeholder='YY' className='input'/>
                    <p className='hiden'>This filde is requer</p>
                </div>
            </div>
            <div className='linebtn'>
                <div className='line'></div>
            <button className='btn' type='submit'><i class="bi bi-arrow-down"></i></button>
            </div>
            <div>
                <div className='contentValue'>
                    <span className='value'>- -</span>
                    <h1>year</h1>
                </div>
                <div className='contentValue'>
                    <span className='value'>- -</span>
                    <h1>month</h1>
                </div>
                <div className='contentValue'>
                    <span className='value'>- -</span>
                    <h1>days</h1>
                </div>
                <Date />
            </div>
            
          
        </div>
    )
}