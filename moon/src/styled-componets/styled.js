import styled from 'styled-components';
import React ,{useState}from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { GiShoppingBag} from 'react-icons/gi';
import Logo from '../imagenes/Moon-white-sin-b.png';



const StyledNav = () => {


    const[navbar , setNavbar] = useState(false);
const changeBackground = () => {
  if(window.scrollY >= 500){
    setNavbar(true);
  }
  else{
    setNavbar(false);
  }
};

window.addEventListener('scroll', changeBackground);


const [sidebar , setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)

  return (
      <header >
        <div className={navbar ? 'header-container active' : 'header-container'} >
          <section className="section-advertising"><h6 className="info__text">Turip ip ip / -Elperro qepd</h6></section>
          <nav className="nav-container" >
            <div className="nav-container__columnas">
              <div className="col">
                <div className="col__laterales jc-start">
              
               
                  <GiHamburgerMenu className="icon" onClick={showSidebar} />
                  
               
               
                </div>
              </div>
  
              <div className="col">
                <div className="logo">
                  <a href="#"><img alt='' src={Logo} className="moon"></img></a>
                </div>
              </div>
  
              <div className="col">
                <div className="col__laterales jc-end">
                  <GiShoppingBag className="icon"></GiShoppingBag>
                </div>  
              </div>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default StyledNav

export const Container = styled.div`



.header-container{
    position: fixed;
    left: 20px;
    right: 20px;
    z-index: 999;
    transition: all 0.4s ease;
}

.header-container.active{
    background-color: #000;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, .6);
}

/* Info */
.section-advertising{
    padding: 5px 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
}

.info__text{
    font-size: 15px;
    margin: 0;
}

/* Navegador */
.nav-container{
    /* background-color: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.9)); */
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0 15px;
    /* margin: 0 auto; */
    /* width: 89.9%; */
    /* align-items: center; */
    /* height: 80px; */
    /* top: 0px; 22px */
}

.nav-container__columnas{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items: center!important;
    margin: 0 -15px;
    height: 80px;
}

.col{
    max-width: 100%;
    padding: 0 15px;
    flex-basis: 0;
    flex-grow: 1;
    position: relative;
}

.jc-end{
    justify-content: flex-end;

}

.jc-start{
    justify-content: flex-start;
}
.col__laterales{
    display: flex;
    margin: 0 -15px;
    align-items: center;
}

.searcher{
    display: block;
    box-sizing: inherit;
    margin: 0;
    position: relative;
    font-size: 14px;
    width: 50%;
}

.searcher div{
    margin-bottom: 0;
    position: relative;
}

.search-input{
    height: 34px;
    background: transparent;
    border-radius: 50px;
    font-size: 12px;
    display: block;
    padding: 12px;
    width: 100%;
    border-style: none;
    border: 1px solid rgba(255, 255, 255, 0.9);
    appearance: none;
    color: #fff;
    font-weight: 200;
}

.search-button{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -14px;
    background: none;
    border: 0;
}

.search-input::placeholder{
    color: #fff;
}

ul{
    display: flex;
    list-style: none;
}

.logo{
    display: flex;
    align-items: center;
    justify-content: center;
}

.moon{
    height: 50px;
}

.icon{
    height: 28px;
    width: 28px;
    color: #fff;
    padding: 0px;
    margin: 0 15px;
}


@media screen and (max-width: 777px) {
    .searcher{
        display: none;
    }

}

`