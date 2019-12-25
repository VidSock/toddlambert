import React from 'react'
import styled from "styled-components"
import Image from '../components/Image'
// import Newsletter from '../components/Newsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`



.popsemicontainer {
  .btn {
	  position:relative;
	  top:30px;
// 	  z-index:3;
    margin: 0 auto;      
    color: #fff;  
    height:50px;
    width:auto;
    padding:.8rem 2rem;   
    line-height: 20px;    
    background: #DB2600;
    font-weight:bold;
    border: 0;
    border-radius: 3px;  
    cursor: pointer;
    text-align: center; 
    transition: background 0.3s ease-in;
    &:hover { background: #ff0000; cursor:pointer; }
  }
  .content {
    height: 0; 
    width: auto; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    display:none;
    transition: opacity 0.2s ease-in; 
	}      
  }     
  
    .modal-content, 
  .modal-backdrop {
    height: 0; 
    width: 0; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    transition: opacity 0.2s ease-in; 
  }
  
    .modal-close {
	  position:absolute;
	  top:45px;
	  right:105px;
// 	  z-index:5;
	  
    color: #999;
    padding-top: 0;
	font-size:28px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover { color: #666;
    }       
  }

  #semitoggle {
    display: block;
    visibility: hidden;
    &.active ~ .modal-backdrop,
    &:checked ~ .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.0);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
      visibility: visible;
      opacity: 1;      
      transition: opacity 0.2s ease-in; 
    }

    &.active ~ .content,
    &:checked ~ .content {  
	opacity: 1;
      background-color: transparent;
	  width:auto !important;
      height: auto;
      padding:0 0 0 0 !important;
	margin:0 auto;
	display:block;
//       z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      @media (max-width: 400px) {  }                   
    }  
  }
}
#semitoggle {
	&.active ~ .btn,
    &:checked ~ .btn {
// 	display:none;
	}
}
`



   
const Intro2 = () => (

   


<CustomBox style={{}}>

<ScrollAnimation animateIn="fadeIn">
<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'60px', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  
 <div className="" style={{position:'absolute', top:'60px', left:'0', width:'97vw', height:'100vh', overflow:'hidden', padding:'20px 0 0 0', border:'0px solid red', zIndex:'1',}}>
  
  

   

  
  
  
  <ScrollAnimation animateIn="fadeIn" delay={1400} offset={0} style={{position:'relative', top:'0', left:'0', paddingTop:'0', overflow:'hidden', width:'100%',}}>
        <div className="typewriter"><h1
          className="boom normal txtshadow-header"
          style={{
            color: '#fff',
            fontSize: '4rem',
            textAlign: 'center', 
            width:'600px',
          }}
        >
         Code Monkey
        </h1></div>
        </ScrollAnimation>
        
        
        
        
        
  <ScrollAnimation animateIn="bounceInRight" delay={1550} style={{position:'relative', top:'0', right:'0', display:'flex', justifyContent:'center', alignContent:'center',}}>
        <h2
          className="boom narrow txtshadow-header mobile-txt"
          style={{
           fontSize:'2rem',
           color: 'white',
           fontStyle:'normal',
            textAlign: 'center', 
            transform: 'rotate(-7deg)',
            transformOrigin: 'center',
            background:'#666',
            borderRadius:'12px',
            padding:'3px 10px',
            margin:'0 auto',
//             width:'100px !important',
            display:'inline-block',
          }}
        >
          by Day
        </h2>
        </ScrollAnimation>
        
          <ScrollAnimation animateIn="bounceInRight" delay={4600} style={{position:'relative', top:'20px', right:'0',}}>
        <h2
          className="boom narrow txtshadow-header mobile-txt"
          style={{
           fontSize:'4.8rem',
           color: 'white',
            textAlign: 'center', 
            letterSpacing: '.0rem',

          }}
        >
          Photographer
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={4650} style={{position:'', top:'0', right:'0',}}>
        <h3
          className="boom txtshadow-header mobile-txt"
          style={{
           fontSize:'3rem',
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
 
//             height:'120%',
//             marginBottom:'20px',
          }}
        >
         by Night
        </h3>
        </ScrollAnimation>


        




        
        </div>
        
        
        

<div className="" style={{position:'absolute', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'-1',}}>
<ScrollAnimation animateIn="fadeIn">
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
   
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Stars" filename="todd-in-action2.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Camp" filename="todd-in-action4.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="todd-in-action7.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    

    

   
  </div>
</div>
</ScrollAnimation>
        </div>

</div>
</div>
</ScrollAnimation>


</CustomBox>
  
)

export default Intro2