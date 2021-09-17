import React, {useState} from 'react'
import './Slider.css'
import ButtonSlider from './ButtonSlider'
import DSlider from './DSlider'


const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(1)
   const nextSlide = () => {
        if(slideIndex !== DSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === DSlider.length){
            setSlideIndex(1)
        }
    }
   const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(DSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
   
   return (
      <div className="cont-slider">
         {DSlider.map((obj,index) =>{
            return (
               <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                  <img src={process.env.PUBLIC_URL + `/Imgs/img${index +1}.jpg`}></img>
               </div>

            )
         })}
         <ButtonSlider moveSlide={nextSlide} direction={"next"}/>
         <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>
         <div className="cont-dots">
               {Array.from({length: 10}).map((item, index) => (
                  <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}>
                  </div>
               ))}
            </div>
      </div>
   )
}

export default Slider