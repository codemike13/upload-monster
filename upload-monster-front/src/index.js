import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Monster from './components/Monster/Monster'
// import ResizePanel from './components/ResizePanel/ResizePanel';
import DropZone from './components/DropZone/DropZone'
// import FoodBox from './components/FoodBox/foodBox'
import { PanelSize } from './components/ResizePanel/ResizePanel'



class App extends Component {

    handleData = (value) => {
        console.log(value)
    }


    render() {
        return (

            <div>
                <div className={'container'}>
                    <Monster />
                    <DropZone></DropZone>
                </div >
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

