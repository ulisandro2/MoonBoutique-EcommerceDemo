import React from 'react'
import styled from 'styled-components'

const Info = () => {
  return (
    
    <ContainerInfo>
         <ol>
            <li>
              <h5>Como nace MOON Boutique</h5>
                <p>
                    MOON surge en 2022, como un pequeño emprendimiento de ropa femenina moderna de todos
                    los estilos , con una gran cantidad de stock y todos los talles posibles con una excelente calidad de ropa , ademas
                    de vender carteras de alta calidad.
                </p>
            </li>
            <li>
              <h5>Como comprar</h5>
              <p>Una vez tengas decidido que producto comprar, presiona "detalle" y estando en el detalle selecciona cuantos productos
                quieres y agregalo al carrito, puedes ir al carrito o seguir comprando. En el carrito estara la cantidad y el precio de cada producto y su total
                ,para seguir con la compra presiona en "Chekout" y pasaras a pagar el producto seleccionando el medio de pago que mas te guste. 
              </p>
            </li>
            <li>
              <h5>Como cambiar </h5>
              <p> Si no estás conforme con nuestro producto, puedes realizar un cambio del mismo de alguna de las siguientes formas:

                .Podrás cambiar el artículo en nuestro showroom siempre y cuando el mismo se encuentre en las mismas condiciones que les llegó!
                .No podes venir al showroom? Envianos un mail a shop@Moon.com.ar y te ayudamos a hacer el cambio desde tu domicilio! Los envíos por cambio quedan a cargo del cliente.
Aceptamos devoluciones, tienen 10 días para devolver el producto (desde que lo recibis o desde que está listo en nuestro showroom)! Deberian acercarse al local o enviar el articulo al showroom. El dinero se reintegra vía la plataforma de Mercado Pago o transferencia bancaria según la forma de pago que se haya elegido, según la tarjeta el reintegro es inmediato o no. Solo aceptamos devoluciones de la temporada actual, sale y garage sale no entran en la politica de devoluciones. 
Si hiciste un cambio de la primer compra, el cambio se podrá volver a cambiar pero el o los productos cambiados no tienen devolución.
Todos nuestro productos tienen cambio (60 dias) siempre y cuando estén en condiciones (etiqueta de cartón, tela y sin uso).</p>
            </li>
            <li>
              <h5>Talles</h5>
              <p>Una de las mayores dudas al comprar online: qué talle soy? 
Moon maneja distintos tipos de articulos, amplios y holgados, semil holgados que marcan más la silueta, por ende un talle 1 puede variar en las prendas. Les detallamos un génerico, y cualquier duda nos pueden escribir por Instagram (Moonboutique) o al mail info@Moon.com.ar y las asesoramos!

PANTALONES con elástico en la cintura : 
Talle 0: - contorno cintura 66 cm - / - tiro 26,5 cm - / - largo 84 cm -.
Talle 1: - contorno cintura 70 cm - / - tiro 28 cm - / - largo 86 cm -.
Talle 2: - contorno cintura 75 cm - / - tiro 29,5 cm - / - largo 88 cm -.
Talle 3: - contorno cintura 80 cm - / - tiro 32 cm - / - largo 90 cm -.

CAMISAS HOLGADAS / LARGAS -:
Talle 0: - ancho sisa 44/45 cm -  / - largo 66/68 cm -.
Talle 1:  ancho sisa 46/47 cm -  / - largo 68 cm -.
Talle 2:  ancho sisa 48/50 cm -  / - largo 70 cm -.
Talle 3:  ancho sisa 50/52 cm -  / - largo 72/74 cm -.

TOPS :
Talle 1:  ancho sisa 46/47 cm -  / - largo 56/58 cm -.
Talle 2:  ancho sisa 48/50 cm -  / - largo 58/60 cm -.

VESTIDOS:
Talle 1:  ancho sisa 46/47 cm -  / - largo 80/81 cm -.
Talle 2:  ancho sisa 48/50 cm -  / - largo 83/84 cm -.
Talle 3:  ancho sisa 50/52 cm -  / - largo 86/87 cm -.</p>
            </li>
         </ol>
    </ContainerInfo>
  
  
  
    )


}


const ContainerInfo= styled.div`

@media screen and (max-width:500px) {
   
  padding: 1rem;
  margin-top: 200px;
  
}



padding: 8rem;
font-size:19px;




`

export default Info