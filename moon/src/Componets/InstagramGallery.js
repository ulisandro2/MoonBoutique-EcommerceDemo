import React from 'react'
import '../css/InstagramGallery.css'
import Cartera1 from '../imagenes/cartera.jpg'
import Cartera2 from '../imagenes/cartera2.jpg'
import Cartera3 from '../imagenes/cartera3.jpg'
import RemeraNaranja from '../imagenes/remeraNaranja.jpg'
import RemeraRosa from '../imagenes/remeraRosa.jpg'
import Remeras from '../imagenes/remeras.jpg'
import Remeras2 from '../imagenes/remeras2.jpg'
import TopYCartera from '../imagenes/top y cartera.jpg'
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
          <a target="_blank" href="https://www.instagram.com/p/Cj4LoB2uvE5/"><img src={Cartera1}></img></a>
        </div>
        <div className="items">
          <a target="_blank" href="https://www.instagram.com/p/Cj4LoB2uvE5/"><img src={Cartera2}></img></a> 
        </div>
        <div className="items">
          <a target="_blank" href="https://www.instagram.com/p/Cj7_QDYuovI/"><img src={Remeras}></img></a>
        </div>
        <div className="items">
          <a target="_blank" href="https://www.instagram.com/p/Cj7_QDYuovI/"><img src={RemeraNaranja}></img></a>
        </div>
        <div className="items">
          <a target="_blank" href="https://www.instagram.com/p/Cj4LoB2uvE5/"><img src={Cartera3}></img></a>
        </div>
        <div className="items">
          <a target="_blank" href="https://www.instagram.com/p/Cj7_QDYuovI/"><img src={Remeras2}></img></a>
        </div>
        <div className="items">
          <a target="_blank" href="https://www.instagram.com/p/Cj7_QDYuovI/"><img src={RemeraRosa}></img></a>
        </div>
      </div>
    </section>
  )
}



export default InstagramGallery

