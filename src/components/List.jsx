import React , { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import Item from './Item';

const List = () => {
    const {items}= useContext(ListContext)
    
    console.log(items.length)
    const list = items.length>0 ? items.map( item => (
        <Item item={item} key={item.id}></Item>
     ) ) :
     (<div className=''></div>)
    return (
        <div>
            <div className='container'>
            {list}
            

            </div>
        </div>
    );
}
export default List;
