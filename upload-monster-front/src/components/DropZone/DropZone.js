import React, { Component } from 'react';
import '../../index.css';
import File from '../../components/UploadFile/file'


export default class DropZone extends Component {

    state = {
        open: false
    }

    openBox() {

        // console.log(`Current mouse State: ${this.state.hover}`);
        this.setState({
            open: true
        }, () => {
            console.log(this.state.hover)

        })

    }


    render() {


        return (
            <>

                <div className={'dropZone'}>
                    <File></File>
                </div>

            </>
        )
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
}