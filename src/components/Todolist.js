import React from 'react'
import Todoitem from './Todoitem'

function Todolist(props) {
    const {items, handleClearList, handleDelete, handleEdit} = props
    return (
        <div className ='row'>
            <div className='col-12 col-md-8 mx-auto'>
                <ul className='list-group mt-5 list-unstyled'>
                    <h2 className='text-center'>Todo List</h2>
                    {
                        items.map( item => <Todoitem key={item.id} title={item.inputValue} handleDelete = {() => handleDelete(item.id)} handleEdit = {() => handleEdit(item.id)} />)
                    }
                </ul>
                <button className='btn btn-block btn-danger' onClick={handleClearList} >Clear List</button>
            </div>
        </div>
    )
}

export default Todolist
