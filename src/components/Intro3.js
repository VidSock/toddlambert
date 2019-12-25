import React from 'react'
import styled from "styled-components"
import Image from '../components/Image'
// import Newsletter from '../components/Newsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`






`



   
const Intro3 = () => (

   


<CustomBox style={{}}>

<ScrollAnimation animateIn="fadeIn">
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
   
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="BOAT" filename="night213.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="CAR" filename="night294.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="BARN" filename="night300.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="CAMP" filename="night303.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
    
   <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="PLANE" filename="night307.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
   
  </div>
</div>
</ScrollAnimation>


</CustomBox>
  
)

export default Intro3