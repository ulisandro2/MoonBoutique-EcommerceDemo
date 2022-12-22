import React from 'react'
import '../css/InstagramGallery.css'
import CARTERA1 from '../imagenes/cartera.jpg'
import {AiOutlineInstagram} from 'react-icons/ai'

const InstagramGallery = () => {
  return (
    <section className="ig-section">
      <div className="ig-user__container">
        <div className="container-items">
          <div className="item-center">
            <AiOutlineInstagram className="ig-logo"></AiOutlineInstagram>
            <a className="ig-texto" target="_blank" href="https://www.instagram.com/mmoonclothing/"><h2>mmoonclothing</h2></a>
          </div>
        </div>
      </div>
      <div className="ig-gallery__container">
        <div className="items">
          <a href="#"><img src={CARTERA1}></img></a>
        </div>
        <div className="items">
          <a href="#"><img src={CARTERA1}></img></a> 
        </div>
        <div className="items">
          <a href="#"><img src={CARTERA1}></img></a>
        </div>
        <div className="items">
          <a href="#"><img src={CARTERA1}></img></a>
        </div>
        <div className="items">
          <a href="#"><img src={CARTERA1}></img></a>
        </div>
        <div className="items">
          <a href="#"><img src={CARTERA1}></img></a>
        </div>
        <div className="items">
          <a href="#"><img src={CARTERA1}></img></a>
        </div>
      </div>
    </section>
  )
}



export default InstagramGallery

