import React from 'react'
import styled from 'styled-components'
import { AiOutlineWhatsApp, AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment} from 'react-icons/ai'
import { toast } from 'react-toastify'

const Contact = () => {

    

 const notify = () => toast('Mensaje enviado, te contactamos pronto!!!')


  return (
    <ContactMail>
        <h3> Contacto</h3>
       <ul className='listInfo'>
               <li>Martes a sabados 12hs a 19hs</li>
           <li> <AiOutlineWhatsApp className="footer-icon"></AiOutlineWhatsApp>+54 11 5139-9129</li>
           <li> <AiOutlinePhone className="footer-icon"></AiOutlinePhone>11 5139-9129</li>
           <li> <AiOutlineMail className="footer-icon"></AiOutlineMail>info@Moon.com.ar</li>
           <li> < AiOutlineEnvironment className="footer-icon"></ AiOutlineEnvironment>san lorenzo 1499 - olivos</li>
        </ul>

        <h4>Te Contactamos nosotros</h4>

        <div className='contactoCaja'>
            <form action='#' autoComplete='off'>
                 <input type='text' name='nombre' placeholder='nombre' className='nombre'></input>
                 <input type='email' name='email' placeholder='ingrese tu correo' className='email'></input>
                 <input type='phone' name='telefono' placeholder='telefono'></input>
                 <textarea name='mensaje' placeholder='Mensaje' className='mensaje'></textarea>
                 <button className='btn-enviar' type='button' onClick={notify} >Enviar Mensaje</button>
            </form>
        </div>

    </ContactMail>
  )
}

const ContactMail= styled.div`
display: flex;
flex-direction: column;
padding: 9rem;
align-items: center;

@media screen and (max-width:500px) {
      
   h3{
    padding-top: 4rem;
   }
    
    padding: 5rem;


    .contactoCaja form{
    display: flex;
    flex-direction: column;
    max-width: 300px;
     .mensaje{
        max-width: 300px;
        min-width: 300px;
        min-height: 200px;
     } 
   
  }
}



.listInfo{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 2rem;

    li{
        padding: 1rem;
    }
}


.contactoCaja form{
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    input{
        padding: 0.4rem;
        margin-top: 4rem;
        letter-spacing: 1.15px;
        border-radius: 5px;
        border: 0.5px solid rgb(187,187,187) ;
        color: gray;
        background: none;
        outline: none;
    }
    textarea{
        margin-top:3rem ;
        max-width: 530px;
        max-height: 150px;
        min-height: 140px;
        min-width: 530px;
        letter-spacing: 1.15px;
        border-radius: 5px;
        border: 0.5px solid rgb(187,187,187) ;
        color: gray;
        background: none;
        outline: none;
    }
    .btn-enviar{
        margin-top: 3rem;
        letter-spacing: 1.15px;
        border-radius: 5px;
        border: 0.5px solid rgb(187,187,187) ;
        color: gray;
        background: none;
        outline: none;
        padding: 0.4rem;
    }
}

`

export default Contact