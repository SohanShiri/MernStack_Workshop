import PostList from "../components/PostList";
import PostItem from "../components/PostItem";

function Home({Post}){
    return(
        <div>
        <p>Welcome To the wall post of Nitte </p>
        {Post.length==0?(
            <p>No Posts yet !!</p>
        ):(
            <PostList posts ={Post}/>
        )}
        </div>
    )
}