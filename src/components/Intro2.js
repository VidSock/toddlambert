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
  
  

   

  
  
  
  <ScrollAnimation animateIn="fadeIn" delay={1400} offset={0} style={{ paddingTop:'0', overflow:'hidden',}}>
        <div className="typewriter"><h1
          className="booma normal txtshadow-header hit-the-floor"
          style={{
            color: '#fff',
            fontSize: '4rem',
           position: 'relative',
//            top: '100px',
           right: '8%',
//            backgroundColor: '#ff0000',
            textAlign: 'right', 
            float: 'none',
          }}
        >
         Code Monkey
        </h1></div>
        </ScrollAnimation>
        
        
        
        
        
  <ScrollAnimation animateIn="bounceInRight" delay={1500} style={{position:'relative', top:'0', right:'10%',}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'2rem',
           color: 'white',
           fontStyle:'normal',
           position: 'relative',
            textAlign: 'right', 
            transform: 'rotate(-7deg)',
            transformOrigin: 'center',
            right:'15%',
            top:'60px',
          }}
        >
          by Day
        </h2>
        </ScrollAnimation>
        
          <ScrollAnimation animateIn="bounceInRight" delay={1500} style={{position:'relative', top:'0', right:'10%',}}>
        <h2
          className="boom1 narrow txtshadow mobile-txt"
          style={{
           fontSize:'4.8rem',
           color: 'white',
           position: 'relative',
            textAlign: 'right', 
              letterSpacing: '.0rem',
              right:'',
          }}
        >
          Photographer
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={1450} style={{position:'relative', top:'0', right:'10%',}}>
        <h3
          className="boom2"
          style={{
           fontSize:'4rem',
           color: 'white',
           position: 'relative',
//            top: '230px',
            textAlign: 'right',
            textTransform: 'normal', 
            right:'9%',
            top:'10px',
            height:'120%',
            marginBottom:'20px',
          }}
        >
         by Night
        </h3>
        </ScrollAnimation>


        




        
        </div>
        
        
        

<div className=" kenburns-bottom-left" style={{position:'absolute', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'-1',}}>
        <Image className="" alt="Todd Lambert Web development for photographers" filename="todd-camping.jpg" style={{backgroundSize:'cover', zIndex:'0',}} />
        </div>

</div>
</div>
</ScrollAnimation>


</CustomBox>
  
)

export default Intro2