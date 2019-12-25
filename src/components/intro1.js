import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../components/Image'
import styled from 'styled-components'

const Intro1Box = styled.div`
#wrapper {
     max-width: 500px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
	z-index:-1;
    margin-top: calc(50vh - 200px);
}

.planet {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: #ebf3fe;
  display: block;
  border-radius: 50%;
  position: relative;
  box-shadow: inset -40px 0px 0px #d8e8f7, inset 20px 0px 0px #ffffff, inset -50px 0px 0px 20px #e2eefa, 0px 0px 0px 20px  rgba(255, 255, 255, 0.05), 0px 0px 0px 40px  rgba(255, 255, 255, 0.025), 0px 0px 0px 60px  rgba(255, 255, 255, 0.0125);
  border: solid 10px;
  transition: all 0.2s ease-in;
}

.planet:after {
  content: "";
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d8e8f7;
  position: absolute;
  top: 20%;
  left: 20%;
  box-shadow: 40px -20px 0px -10px #d8e8f7, 40px 10px 0px -15px #d8e8f7;
}

.face {
  position: absolute;
  width: 100px;
  top: 50%;
  left: 40%;
}

.zzz1, .zzz2, .zzz3{
  color:white;
  position:absolute;
  top:0;
  right:10%;
  font-size:36px;
  opacity:0;
  font-family: 'Shadows Into Light', cursive;
      animation-name: zzz-sleep;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.zzz1:after, .zzz2:after, .zzz3:after {
  content:"z";
}

.zzz1 {
  animation-delay: 0s;
  
}

.zzz2 {
  animation-delay: 1.2s;
  right:15%;
  top:3%;
}

.zzz3 {
  animation-delay: 2.4s;
  right:10%;
  top:6%;
}



.day .mouth {
  margin-top: 15px;
  height: 15px;
  width: 15px;
  diplay: block;
  border-radius: 0px 0px 50% 50%;
  background-color: transparent;
  float: left;
  border: 6px solid #151843;
  border-top: 0;
  margin-right: 10px;
  position: relative;
  margin-left:0px;
  animation-name: none;
}

.mouth {
  margin-top: 15px;
  height: 25px;
  width: 25px;
  diplay: block;
  border-radius: 50%;
  background-color: #151843;
  float: left;
  border: none;
  border-top: 0;
  margin-right: 10px;
  margin-left:2px;
  position: relative;
  
    animation-name: mouth-sleep;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

.day .mouth:after {
  content: "";
  width: 6px;
  height: 6px;
  position: absolute;
  display: block;
  top: -3px;
  left: -6px;
  background-color: #151843;
  border-radius: 50%;
}

.day .mouth:before {
  content: "";
  width: 6px;
  height: 6px;
  position: absolute;
  display: block;
  top: -3px;
  left: 15px;
  background-color: #151843;
  border-radius: 50%
}

.day .eye {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin-right: 10px;
  animation-name: eye-blink;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  position: relative;
  overflow: hidden
}

.eye {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin-right: 8px;
  position: relative;

}

.day .eye-in {
  content: "";
  width: 20px;
  height: 20px;
  background-color: #151843;
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  transform: scale(1, 1) !important;
  border:none;
}


.eye-in {
  width: 15px;
  height: 8px;
  display: block;
  position: absolute;
  top: 5px;
  left: -1px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 5px solid #151843;
    border-top: 0;
}




.pos-star1 {
  top: 50px;
  left: 50px;
}

.pos-star2 {
  top: 250px;
  left: 450px;
}

.pos-star3 {
  top: 240px;
  left: 5px;
}

.star {
  width: 20px;
  height: 20px;
  background-color: white;
  display: block;
  border-radius: 50%;
  float: left;
  position: absolute;
  transform-origin: 50% 50%;
  animation-name: star3;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  transform-origin: 50% 50%;
  transition: all 0.3s ease-out;
}

.star:before {
  width: 20px;
  height: 20px;
  content: "";
  background-color: white;
  position: absolute;
  transform: scale(1, 2) rotate(45deg);
  animation-name: star1;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  border-radius: 20%;
  transition: all 0.3s ease-out;
}

.star:after {
  width: 20px;
  height: 20px;
  content: "";
  background-color: white;
  position: absolute;
  transform: scale(2, 1) rotate(45deg);
  animation-name: star2;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
  border-radius: 20%;
  transition: all 0.3s ease-out;
}

@keyframes star1 {
  0% {
    transform: scale(1, 2) rotate(45deg);
  }
  50% {
    transform: scale(1, 1) rotate(45deg);
  }
  100% {
    transform: scale(1, 2) rotate(45deg);
  }
}

@keyframes star2 {
  0% {
    transform: scale(2, 1) rotate(45deg);
  }
  50% {
    transform: scale(1, 1) rotate(45deg);
  }
  100% {
    transform: scale(2, 1) rotate(45deg);
  }
}

@keyframes star3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes eye-blink {
  0% {
    transform: scale(1, 1)
  }
  2% {
    transform: scale(1, 0)
  }
  4% {
    transform: scale(1, 1)
  }
}

@keyframes mouth-sleep {
  0% {
    transform: scale(1, 1)
  }
  35% {
    transform: scale(0.7, 0.7)
  }
  40% {
    transform: scale(0.7, 0.7)
  }
  75% {
    transform: scale(1, 1)
  }
}

@keyframes wiggle {
  0% {
    transform: translate(0px, 0px)
  }
  50% {
    transform: translate(50px, 0px)
  }
  100% {
    transform: translate(0px, 0px)
  }
}

@keyframes zzz-sleep {
  0% {
    transform: translate(0px, 0px) scale(1, 1);
    opacity:0;

  }
   25% {
    transform: translate(-5px, -10px) scale(1.1, 1.1);
  }
  50% {
    transform: translate(8px, -20px) scale(0.9, 0.9);
    opacity:1;
  }
   75% {
    transform: translate(-15px, -30px) scale(1.1, 1.1);
  }
  100% {
    transform: translate(15px, -40px) scale(0.9, 0.9);
    opacity:0;
  }
}


@keyframes zzz-awake {
  0% {
    transform: translate(0px, 0px) scale(1, 1) rotate(0deg);

  }
  
   100% {
    transform: translate(-15px, -30px) scale(2, 2) rotate(10deg);
         opacity:0;
  }
  
}


/* DAY TIME */

#button {
      border: 2px solid #f1c40f;
    padding: 20px 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
    color: #f1c40f;
    text-decoration: none;
    position: absolute;
    display: block;
    text-align: center;
    background: transparent;
    text-shadow: none;
    font-family: sans-serif;
    margin: 0 auto;
    bottom: -30px;
    border-radius: 100px;
    max-width: 200px;
    left: 0;
    right: 0;
  transition:all 0.2s ease;
}
#button:active {
  transform:scale(0.95);
  transition:all 0.2s ease;
}

#button:hover {
      border: 2px solid #f1c40f;
    color: #fff;
   background: #f1c40f;
}

.day #button {
     border: 2px solid #ff8603;
    color: #ff8603;
   background: #transparent;
}

.day #button:hover {
      border: 2px solid #ff8603;
    color: #fff;
   background: #ff8603;
}

.day .planet {
  background-color: #ffdb01 !important;
  box-shadow: inset -40px 0px 0px #ff8603, inset 20px 0px 0px #ffffff, inset -50px 0px 0px 20px #ffd201, 0px 0px 0px 20px  rgba(255, 210, 1, 0.2), 0px 0px 0px 40px  rgba(255, 210, 1, 0.1), 0px 0px 0px 60px  rgba(255, 210, 1, 0.05);
}

.day .planet:after {
  background-color: #ffd201;
  box-shadow: 40px -20px 0px -10px #ffd201, 40px 10px 0px -15px #ffd201;
}

.day .star:after,
.day .star:before {
  animation-name: none;
  transform: none;
  width: 50px;
  height: 50px;
  border-radius: 50%
}

.day .star:after {
  left: 150%;
  box-shadow: -50px -25px 0px 10px white, -10px -25px 0px -5px white, inset -7px 0px 0px 3px #ebf3fe;
}

.day .star:before {
  left: 50%;
  top: 0;
  border-radius: 0;
  width: 75px;
}

.day {

}

#nightbg {
  background-color: lightblue !important;
  width:100px;
  height:100px;
  position:absolute;
  top: 100px;
  left: calc(50% - 50px);
  border-radius:50%;
  transition:all 0.7s ease;
}

#nightbg:before {
  content:"";
  width:200px;
  height:200px;
  border-radius:50%;
  background-color:rgba(173, 216, 230, 0.1);
  position:absolute;
  left:-50px;
  top:-50px;
}

.day #nightbg {
  transform: scale(30);
}

.day .star {
  width: 50px;
  height: 50px;
  animation-name: wiggle;
  animation-duration: 10s;
}

.day .zzz1:after, .day .zzz2:after, .day .zzz3:after {
  content:"!";
}

.day .zzz1, .day .zzz2, .day .zzz3{
  color:white;
  top:0;
  right:10%;
      animation-name: zzz-awake;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity:1;
}


.day .zzz1 {

}

.day .zzz2 {
  animation-delay: 0.2s;
  right:15% !important; 
  top:3%;
}

.day .zzz3 {
  animation-delay: 0.4s;
  right:10% !important;
  top:6%;
}



`

const Intro1 = () => (

<Intro1Box>

<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'60px', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  
 <div className="" style={{position:'absolute', top:'20px', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'1',}}>
  
  <ScrollAnimation animateIn="fadeIn" delay={1400} offset={0} style={{ paddingTop:'0', overflow:'hidden',}}>
  <div id="wrapper">
  <div id="nightbg"></div>
  <div class="zzz1"></div>
  <div class="zzz2"></div>
  <div class="zzz3"></div>
  <a href="#" id="button">Click me</a>
    <div class="planet"> 
    <div class="face">
        <div class="eye">
        <div class="eye-in"></div>
      </div>
      <div class="mouth"></div>
      <div class="eye">
        <div class="eye-in"></div>
      </div>
    </div>
  </div>
  <div class="star pos-star1 "></div>
  <div class="star pos-star2 "></div>
  <div class="star pos-star3 "></div>
</div>
</ScrollAnimation>
  
  
  
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
        
        
        



</div>
</div>

</Intro1Box>    

)

export default Intro1