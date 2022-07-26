import React, {useState} from 'react'
import Styled from 'styled-components'
import BurgerButton from './BurgerButton'
import CardWidget from './CardWidget/CardWidget'

function Navbar() {

    const[clicked, setClicked] = useState(false)
    const handleClick = () =>{
        // cuando esta true lo pasa a false y cuando esta false lo pasa a true
        setClicked(!clicked)
    }
    return (
        <div>
            <NavContainer>
                <h2> Chiquibeautys ♥</h2>
                <div className={`links ${clicked ? 'active': ''}`}>
                    <a  href="#h"> Novedades </a>
                    <a  href="#h"> Accesorios </a>
                    <a  href="#h"> Maquillaje </a>
                    <a  href="#h"> Facial </a>
                    <a  href="#h"> Corporal </a>
                    
                </div>
                <CardWidget/>
                <div>

                </div>
                <div className="burger">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>

            </NavContainer>

        </div>
    )
}

export default Navbar
const NavContainer = Styled.nav`

h2{
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
    text-shadow: 0px 5px 2px #ccc;
    transition: 0.2s;

}
h2:hover{
    color: black;
}
span{
    font-weight: 400;
}
padding: 1rem;
background-color: #A9C9FF;
background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);
border-bottom: solid 10px whitesmoke;
border-radius-bottom: 10%;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow 0px 5px 40px #ccc;

a{   
    font-weight: bold;
    color: #fff;
    text-shadow: 0px 5px 20px #ccc;
    text-decoration: none;
    margin-right: 2rem;
    padding: 8px;
    transition: 0.2s;

}


.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .4s ease ;
    a{
        color: whitesmoke;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 985px){
   
        margin-right: 4rem;
        margin-bottom: -10px;
        padding: 0px;
         margin-top: 63px;
         text-align: center;
         display: inline;
     position: initial;
     
     a{
        font-size: 1rem;
        color: white;
        display: inline;
     }
     a:hover{
        color: gray;
        background-color: whitesmoke;
        border-radius: 6%;
        box-shadow 0px 5px %50 #ccc;
        
      }
    }
}

.links.active{
width: 100%;
display: block;
position: absolute;
margin-left: auto;
margin-right: auto;
top: 30%;
left: 0;
right: 0;
text-align: center;
a{
    color: white;}
}
.links.active a:hover{
 color: gray;
}



.burger{
    @media(min-width: 985px){
        display: none;
    }
}


`
const BgDiv = Styled.div `
position: absolute;
background-image: linear-gradient(180deg,   #FFBBEC 10%, #A9C9FF 90%);

top:-700px;
left: -1000px;
width: 100%;
height: 100%;
z-index: -1;
transition: all 0.6s ease z-index ease-in;


&.active{
    border-radius: 0% 0% 80% 0%;
top: 0;
left: 0;

width: 100%;
 height: 100%;

}
`