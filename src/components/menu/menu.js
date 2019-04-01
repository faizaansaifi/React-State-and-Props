import React,{Component} from 'react';
import DishList from '../containers/DishList/DishList';
import './menu.css'


export default class Menu extends Component {
    state = {
        dishes: [{
            name: "Pacific Halibut",
            desc: "Everyone’s favorite white fish. We will cut it to the size you need and ship it.",
        },

            {
                name: "Lobster",
                desc: "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
            }]
    }

    render() {
        return (
            <div className="Menu">
                <h1>MENU</h1>
                <DishList dishes={this.state.dishes}/>
            </div>

        )
    }
}
/*
export default Menu;*/
/*
const Menu=(props)=>{
    const dishes = [
        {
            name: "Pacific Halibut",
            desc:
                "Everyone’s favorite white fish. We will cut it to the size you need and ship it.",
        },

        {
            name: "Lobster",
            desc:
                "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
        }
    ]
    return (
        <div className="Menu">
            <h1>MENU</h1>
         <DishList dishes={dishes}/>
        </div>
     
    )
}

export default Menu;*/