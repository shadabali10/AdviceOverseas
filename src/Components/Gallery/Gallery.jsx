import React, { useState } from 'react'
import axios from 'axios'
const Gallery = () => {
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")

    var data
    const submitimage = () => {
        data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "ml_default")
        console.log('data ' + data);
        axios.post('https://api.cloudinary.com/v1_1/dbmlfvuby/image/upload', data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('error');
                console.log(err);
            })
    }
    const submitvideo = () => {
        data = new FormData()
        data.append("file", video)
        data.append("upload_preset", "ml_default")
        console.log('data ' + data);
        axios.post('https://api.cloudinary.com/v1_1/dbmlfvuby/video/upload', data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('error');
                console.log(err);
            })
    }
    return (
        <div>
            <div>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button onClick={submitimage}>upload image</button>
            </div>
            <div>
                <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
                <button onClick={submitvideo}>upload video</button>
            </div>
        </div>
    )
}

export default Gallery
