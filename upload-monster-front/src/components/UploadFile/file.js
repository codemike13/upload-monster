import React, { Component } from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
import '../../index.css';


class File extends Component {


    render() {

        return (
            <DragDropContainer targetKey="file">
                <div>
                    <div >Drag from here</div>
                </div>
            </DragDropContainer>

        )
    }
}

export default File
