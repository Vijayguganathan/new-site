import React from 'react';
import img1 from './images/slider1.jpg';
import img2 from './images/slider2.jpg';
import img3 from './images/slider3.jpg';
import colimg1 from './images/col1.jpg';


export default function Home() {
  return (
   <>

    <div id="myCarousel" className="carousel slide" data-ride="carousel">
    
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
  
    
      <div className="carousel-inner">
        <div className="item active">
          <img src={img1} alt="Los Angeles" style={{width:'100%'}} />
        </div>
  
        <div className="item">
          <img src={img2} alt="Chicago" style={{width:'100%'}}/>
        </div>
      
        <div className="item">
          <img src={img3} alt="New york" style={{width:'100%'}} />
        </div>
      </div>
  
   
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    <div className='container'>
    <div className='row'>
      

        <div className='col-md-4 text-center'>
            <img src={colimg1} alt='col-1' style={{width:'100%'}}/>
           
        </div>
        <div className='col-md-4 '>
        <img src={colimg1} alt='col-2' style={{width:'100%'}} />
        </div>

        <div className='col-md-4'>
        <img src={colimg1} alt='col-3' style={{width:'100%'}}/>
        </div>
        </div>

    </div>
   
    </>
  
  )
}
