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
                <div className={'fileSelect'}>
                    <form action="fileupload" method="post" enctype="multipart/form-data">
                        <input type="file" name="fileToUpload" />
                        <input type="submit"></input>
                    </form>
                </div>
                <div id="dropzone" className={'dropZone'}>
                    {/* <File></File> */}
                </div>

            </>
        )
    }
}


// const styles = {
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// }