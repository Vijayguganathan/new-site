import React from 'react';
import colimg1 from './images/col1.jpg';

export default function Aboutus(props) {
    const txt={
        fontSize:'20px',
        fontFamily:'Viner Hand ITC',
        lineHeight:'50px',
        marginLeft:'40px',
        textAlign:'justify'
    }
    const bt=
    {
        fontSize:'20px',
        marginLeft:'100px',
       
    }
  return (
    
    <div className='row'>
        <div className='col-md-6'>
            <h1 style={{marginLeft:'20px'}}> {props.title} </h1>
            <p style={txt}>{props.cont}</p>
            <button className='btn btn-primary' style={bt}>{props.btcont}</button>
            <br/>
            <br/>
           
        </div>
        <div className='col-md-6'>
        <img src={colimg1} alt='col-1' style={{width:'100%',height:'350px'}}/>

        </div>
    </div>
  )
}
