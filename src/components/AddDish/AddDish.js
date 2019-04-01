import React,{Component} from 'react'
import './AddDish.css'


class AddDish extends Component{
  
    constructor(props){
        super(props);
        this.state={
            dish:{}
        }
    }
    handleOnChange=(event)=>{
        
        let newDish={};
        newDish[event.target.name]=event.target.value 
    
     this.setState({
         dish:{
             ...this.state.dish,
             ...newDish
         }
     })
    }

    render(){
        return (
            <div className="add_dish">
             <form className="add_dish_form" onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)}>

              <label>Name</label>
              <input onChange={this.handleOnChange} type="text" value={this.state.dish.name}  name="name"/>
              <label>Description</label>
              <input onChange={this.handleOnChange} type="text" value={this.state.dish.desc}  name="desc"/>

              <button type="submit">Add</button>
              </form>
            </div>
          )

        
    }
}




export default AddDish
