import React , { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import Item from './Item';

const List = () => {
    const {items}= useContext(ListContext)
    
    console.log(items.length)
    const list = items.length>0 ? items.map( item => (
        <Item item={item} key={item.id}></Item>
     ) ) :
     (<div className=''><h4>Nie ma żadnej książki</h4></div>)
    return (
        <div>
            <div className='container'  style={{ marginTop : '70px'}}>
            {list}
            

            </div>
        </div>
    );
}
export default List;
