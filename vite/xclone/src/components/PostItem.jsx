function PostItem({text,image}){
     
    return(
        <div>
            <p>{text}</p>
            {image &&(
                <img
                src={image}
                alt='Uploaded image'
                style={{width:'50vh',height:'50vw',borderRadius:'20px'}
    }/>
            )}
        </div>
    );
}