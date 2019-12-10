import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Monster from './components/Monster/Monster'
import DropZone from './components/DropZone/DropZone'
import FoodBox from './components/FoodBox/foodBox'


class App extends Component {

    render() {
        return (
            <div className={'container'}>
                <Monster />
                <FoodBox />
                <DropZone />

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

