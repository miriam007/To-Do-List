import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Todolist extends React.Component{
    state ={
        list: [],
        inputValue: '',
    };
    //adds user input
    handleChange(e){
        this.setState({inputValue: e.target.value})
    };
    //creates a new array
    handleSubmit(e){
        e.preventDefault();
        const newList= this.state.list.slice();
        if (this.state.inputValue) {
            newList.push(this.state.inputValue);
            this.setState({list: newList, inputValue: ''})
        }
        };
    renderAddButton(){
       if (this.state.inputValue) {
            return <button className="addbutton" type="submit" onClick={this.handleInputSubmit}>Add</button>
        }
    };
    //this handles the delete button next to the user item
    handleDelete=(item, index)=>{
        const deletedList= this.state.list.slice();
        deletedList.splice(index, 1)
        this.setState({list: deletedList})
    };   
    //returns the user list to the page, a delete button is created next to each item 
    renderList(){
        return this.state.list.map((item, index)=> {
            return <ul>
                        <li>{item}<DeleteIcon className="deletebutton" onClick={()=>{this.handleDelete(item,index)}}/></li> 
                    </ul>
        })
    };
    //renders the basic layout
    render() {
        return (
            <div>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                <h2>To Do List</h2>
                <div>
                    <input 
                        value={this.state.inputValue}
                        type="text" 
                        placeholder="Type to add to your list"
                        onChange={(e) =>this.handleChange(e)}
                    />
                    <button className="addbutton" type="submit">Add</button>
                </div>
                {this.renderList()}
                </form>
            </div>
            
        );
    }
}
