import React from 'react'

function Todoitem(props) {
    const {title, handleDelete, handleEdit} = props
    return (
        <>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
    <h4 className='m-0 p-0'>{title}</h4>
            <div>
                <span><i onClick={handleEdit} className='fa-edit fas fas-2x text-success'></i></span>
                <span><i onClick ={handleDelete} className='fa-trash-alt fas fas-2x ml-3 text-danger'></i></span>
                
            </div>
        </li>
        </>
    )
}

export default Todoitem
