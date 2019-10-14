import React ,{ useContext , useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import {ListContext} from '../contexts/ListContext';

const Item = ({item}) => {
    const [ show , setShow] = useState(false)
    const { removeFromList } = useContext(ListContext)
    useEffect(() => { setShow(true) },[] )
    const anim = useSpring({
        opacity : show ? '1' : '0',
        padding : show ? '20px' : '0px',
        marginTop: show ? '50px' : '0px',
        height : show ? 100:0,
        transform : show ? 'scale(1)' : 'scale(0)',
        left : show ?  '0px' : '1000px',
    }
    )

    const remove =()=>{ 
        setShow(!show)
        setTimeout( ()=>{ removeFromList(item.id) },500 )
        console.log(!show)
        
    }
    return (
        <animated.div   className="item shadow" style={{ ...anim, display : 'flex' , justifyContent : 'center' ,flexDirection : 'column', background : '#fff' }}  >
            <div  onClick={remove} style={close} className='shadow' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
            <h2 style={{ marginBottom : '15px',textTransform : "uppercase"  }} >{item.task}</h2>
            <p style={{ color: '#333' }}>{item.description}</p>
        </animated.div>
    );
}

export default Item;


const close = { 
    background : 'white',
    position : 'absolute' ,
    right : '-15px',
    top : 0,
    transform : 'translateY(-50%)',
    width : '30px',
    borderRadius : '50%',
    height : '30px',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    cursor : 'pointer',
    
}