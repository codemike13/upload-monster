import React, { Component } from 'react';
import TransitionGroup from 'react-addons-transition-group';
import ReactGridLayout from 'react-grid-layout'
import { Rnd } from 'react-rnd'
import '../../index.css';
import File from '../../components/UploadFile/file'


export default class FoodBox extends Component {

    state = {
        openBox: false,
        width: "100%",
        height: 150,
        x: 0,
        y: 0
    }

    openBox = () => {
        this.setState({
            openBox: !this.state.openBox,
        })
    }


    render() {


        return (



            <div className={'fileUpload'} draggable>
                <Rnd>
                    rnd
                </Rnd>
            </div>

        )
    }
}


const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: '1px solid black',
    }
}




















    // <TransitionGroup
            //     transitionEnterTimeout={500}
            // >
            //     <div
            //         className={"fileUpload "}
            //         onClick={this.openBox}
            //     > Click to load food.. I mean File
            //     {this.state.openBox && <div> HEres some food</div>}
            //     </div>
            //     <div className={'dropZone'}>
            //         <File></File>
            //     </div>
            // </TransitionGroup>
            // <ReactGridLayout className="layout" cols={12} rowHeight={30}>
            //     <div key={1} _grid={{ x: 0, y: 0, w: 1, h: 2 }}>1</div>
            //     <div key={2} _grid={{ x: 9, y: 0, w: 1, h: 2 }}>2</div>
            //     <div key={3} _grid={{ x: 5, y: 0, w: 1, h: 2 }}>3</div>
            // </ReactGridLayout>
            // <div className={'fileUpload'}>

            //     <Rnd
            //         disableDragging={true}
            //         style={styles.container}
            //         size={{ width: this.state.width, height: this.state.height }}
            //         maxHeight={200}
            //         onResizeStop={(e, direction, ref, delta, position) => {
            //             this.setState({
            //                 width: ref.style.width,
            //                 height: ref.style.height,
            //             });
            //         }}
            //     >
            //         rnd
            //     </Rnd>
            // </div>