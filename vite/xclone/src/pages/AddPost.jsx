import PostForm from "../components/PostForm";

function AddPost({AddPost}){
    return(
        <div>
            <h1>Add a new Post</h1>
            <PostForm addpost={AddPost}/>
        </div>
    )
}
export default AddPost;