import React, { Component } from 'react'
// import { DropTarget } from 'react-drag-drop-container';
import ResizePanel from '../ResizePanel/ResizePanel';
import { PanelSize } from '../ResizePanel/ResizePanel'

import '../../index.css';

class Monster extends Component {

    state = {
        size: 0,
        isOpen: false
    }
    consume(e) {
        e.containerElem.style.display = 'none';
    }



    update = (type, value) => event => {
        this.setState(state => {
            return {
                [type]: value
            };
        });
    };

    handleDrag = (e, ui) => {

        this.setState((s, p) => ({ size: Math.max(10, this.state.size - (ui.deltaY * -1)) }))
    }

    onChangeValueHandler = (val) => {
        this.setState({ value: val.target.value })
        console.log(val);

    }

    render() {


        const { value, onChangeValue } = this.props;

        return (

            <>

                <ResizePanel value={this.props.value} onChangeValue={this.onChangeValueHandler} onDrag={this.handleDrag} direction="s">
                    <div className={'slider'}>
                        <PanelSize.Consumer

                            onChange={this.update("panelSize", this.props.size)}
                        >
                            {(value) => (
                                < div className={'div2'}>

                                </div>

                            )}
                        </PanelSize.Consumer>
                    </div>
                </ResizePanel>
            </>

        )
    }
}
export default Monster

// const styles = {
//     monster: {
//         backgroundImage: 'url("/MonsterHandsDown.png")'
//     }
