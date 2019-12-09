import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Monster from './components/Monster/Monster'


class App extends Component {

    render() {
        return (
            <>
                <Monster />
                <DndProvider backend={Backend}>...</DndProvider>
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

