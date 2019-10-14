import React, {useContext , useState } from 'react';
import { ListContext } from '../contexts/ListContext';

const Form = () => {
const { addToList } = useContext(ListContext)
const [task, setTask] = useState( '' )
const [description,setDescription] = useState( '' )
const handleSubmit = (e)=>{
    e.preventDefault()
    addToList(task ,description)
    setTask('')
    setDescription('')
}
    return (
        <div  >
            
            <form onSubmit={handleSubmit} styles={{ display : 'flex',flexDirection : 'column' , justifyContent : 'center'  }}>
                        <div className='container' style={{ display : 'flex' ,flexDirection : 'column' }} >
                        <input placeholder='task' required onChange={ (e)=>setTask(e.target.value) } value={task}  className='mt-5 p-2 rounded shadow' type="text" style={{ lineHeight : '30px' , border : 'solid 1px white'  }}/>    
                        <input required value={description}  onChange={ (e)=>setDescription(e.target.value) }  className='mt-3 p-1 rounded shadow' style={{ lineHeight : '40px',border : 'solid 1px white'  }} placeholder='description'></input>
                        <input value='addToList'  className='mt-3 btn rounded shadow' type="submit" style={{ height : '40px', wordWrap : 'true' ,fontSize : '24px',lineHeight:'40px' , border : 'solid 1px white', background : 'white', cursor : 'pointer' }}/> 
                        </div>
                </form>
        </div>
    );
}

export default Form;
