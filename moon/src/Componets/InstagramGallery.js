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
            <h2>mmoonclothing</h2>
          </div>
        </div>
      </div>
      <div className="ig-gallery__container">
        <div className="grid-items">
          <img src={CARTERA1}></img>
        </div>
        <div className="grid-items">
          <img src={CARTERA1}></img>
        </div>
        <div className="grid-items">
          <img src={CARTERA1}></img>
        </div>
        <div className="grid-items">
          <img src={CARTERA1}></img>
        </div>
        <div className="grid-items">
          <img src={CARTERA1}></img>
        </div>
        <div className="grid-items">
          <img src={CARTERA1}></img>
        </div>
        <div className="grid-items">
          <img src={CARTERA1}></img>
        </div>
      </div>
    </section>
  )
}



export default InstagramGallery

