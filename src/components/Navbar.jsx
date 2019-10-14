import React from 'react';

const Navbar = () => {

    return (
        <nav style={styles} id='navbar' className='shadow'>
            <span style={{lineHeight : 3, letterSpacing : 10}}  >myList</span>
        </nav>
    );
}

export default Navbar;
const styles = {position: 'fixed',top : 0,width :'100vw',background :'white',lineHeight : 3,color :'#333',textAlign:'center'}


