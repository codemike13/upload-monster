import React, { Component } from 'react'
import { DropTarget } from 'react-drag-drop-container';

import '../../index.css';

class Monster extends Component {

    consume(e) {
        e.containerElem.style.display = 'none';
    }

    render() {
        return (



            <DropTarget targetKey="file" onHit={this.consume} >
                <div className={"monster"}>

                </div>

            </DropTarget>
        )
    }
}
export default Monster

