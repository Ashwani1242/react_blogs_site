import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: 'DELETE',
        }).then((
            navigate('/')
        ))
    }

    return ( <div className="blog-details">
        { isLoading && <div> Loading.... </div>}
        { error && <div>{ error }</div> }
        { blog && (
            <article>
                <h1> { blog.title } </h1>
                <br />
                <h3> { blog.subtitle } </h3>
                <h5> written by -  { blog.author }</h5>
                <br />
                <p dangerouslySetInnerHTML={{ __html: blog.body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') }} />
                <button onClick = { handleClick }> Delete Blog </button>
            </article>
        )}
    </div> );
}
 
export default BlogDetails;