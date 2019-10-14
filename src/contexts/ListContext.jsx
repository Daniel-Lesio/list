import React , {createContext , useState , useEffect} from 'react'
import uuid from 'uuid'

export const ListContext = createContext();     

const ListContextProvider  = (props) => {
    
    const [items , setItems] = useState(
        ()=>{
            const localData = localStorage.getItem('items');
            return localData ? JSON.parse(localData) : [] 
        }
    )
    const addToList = (task,description)=>setItems([...items,{ id:uuid(),task,description}])
    
    

    const removeFromList = ( id ) => {
        setItems(items.filter(item => item.id !== id ))
    }

    useEffect(()=>{
        localStorage.setItem('items' ,JSON.stringify(items) )
    },[items])

    return ( 
        <ListContext.Provider value={{ items, addToList , removeFromList }} >
            { props.children }
        </ListContext.Provider>
     );
}
export default ListContextProvider ;