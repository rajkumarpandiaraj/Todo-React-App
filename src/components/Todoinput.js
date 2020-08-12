import React from 'react'

function Todoinput(props) {
    const {inputValue, handleChange, handleSubmit, isEdit} = props
    return (
        <div className='row'>
            <div className='col-12 col-md-8 mx-auto'>
                <div className='card card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type='text'value={inputValue} onChange={handleChange} className='form-control' placeholder='Enter Todo'/>
                    </div>
                    <button className={
                        isEdit? 'btn btn-success btn-block' : 'btn btn-primary btn-block'
                    } type='submit'>
                        {isEdit? 'Edit Todo' : 'Add Todo' }
                    </button>
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default Todoinput
