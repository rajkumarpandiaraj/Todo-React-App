import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todolist from './Todolist'

class Todoapp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            item : {
                inputValue : '',
                id : ''
            },
            items : [],
            isEdit : false
        }
    }
    handleChange= (e) => {
        this.setState({
            item:{
                inputValue : e.target.value,
                id: e.target.value
            }
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.setState({
            items : [...this.state.items, this.state.item],
            item : {
                inputValue : '',
                id : ''
            }
        })
    }

    handleClearList = () => {
        this.setState({
            items : []
        })
    }
    
    handleDelete = (id) => {
        const updateItems = this.state.items.filter(item => item.id !== id)
        this.setState({
            items : updateItems
        })
    }

    handleEdit = (id) => {
        const updateItems = this.state.items.filter(item => item.id !== id)
        const editItem = this.state.items.find(item => item.id === id)
        this.setState({
            isEdit : !this.state.isEdit,
            items : updateItems,
            item : {
                inputValue : editItem.inputValue
            }

        })
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-3'>TODO APP</h1>
                <Todoinput inputValue={this.state.item.inputValue} isEdit={this.state.isEdit} handleChange ={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Todolist items = {this.state.items} handleClearList={this.handleClearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
            </div>
        )
    }
}

export default Todoapp
