import React from 'react'
import '../css/StyleFooter.css'
import {AiOutlineInstagram, AiOutlineWhatsApp, AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <a target="_blank" href="https://www.instagram.com/mmoonclothing/"><AiOutlineInstagram className="ig-logo"></AiOutlineInstagram></a>
        </div>
        <div className="footer-item">
          <ul className="footer-menu">
            <li>
              <Link to='/info'>  <h3 className="footer-info">Quienes somos</h3>  </Link>
            </li>
            <li>
            <Link to='/info'><h3 className="footer-info">Como comprar</h3></Link>
            </li>
            <li>
            <Link to='/info'><h3 className="footer-info">Cambios</h3></Link>
            </li>
            <li>
            <Link to='/info'><h3 className="footer-info">Talles</h3></Link>
            </li>
            <li>
            <Link to='/contact'><h3 className="footer-info">Contacto</h3></Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <ul className="footer-menu contact text-center">
            <li>
              
              <a href="#"><h6 className="footer-info"><AiOutlineWhatsApp className="footer-icon"></AiOutlineWhatsApp>+54 9 11 5139-9129</h6></a>
            </li>
            <li>
              <a href="#"><h6 className="footer-info"><AiOutlinePhone className="footer-icon"></AiOutlinePhone>11 51399129</h6></a>
            </li>
            <li>
              <a href="#"><h6 className="footer-info"><AiOutlineMail className="footer-icon"></AiOutlineMail>info@Moon.com.ar</h6></a>
            </li>
            <li>
              <a href="#"><h6 className="footer-info"><AiOutlineEnvironment className="footer-icon"></AiOutlineEnvironment>San lorenzo 1499 - Olivos</h6></a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <div className="col">
            © Copyright Moon Boutique - 2022
          </div>
          <div className="col text-center">
            Creado por Ulisandro & Urigg
          </div>
          <div className="col text-right">
            Todos los derechos reservados.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer