import { useState } from "react";

function PostForm({addpost}){
    cont [text,setText]=useState('');
    const [image,setImage]=useState(null);

    const handelsubmit =(e) =>{
        e.preventDefault();
        if(text === ''&& !image)return;
        addpost({text, image});
        setText('');
        setImage(null);
    }
    const handelImageChange =(e) =>{
        const file =e.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));
        }else{
            setImage(null);
        }

    };
    return(
        <form onSubmit={handelsubmit}>
            <textarea placeholder="What's on your mind?" 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            />
            <br/>

            <input type="file"
            accept="image/*"
            onChange={handelImageChange}
            />
            <br/>
            <button type="submit">Post</button>
            </form>
    )
}

export default PostForm;