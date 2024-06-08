import { useState } from "react";

const Create = () => {

    const [ title, setTitle ] = useState('');
    const [ subTitle, setSubTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');

    return ( 
        <div className="create">
            <h2>
                Add a new Blog.
            </h2>
            <form>
                <label> Blog Title </label>
                <input 
                    type="text" 
                    required
                    value = { title }
                    onChange = { (e) => setTitle( e.target.value ) }
                />
                <label> Blog Subtitle </label>
                <input 
                    type="text" 
                    required
                    value = { subTitle }
                    onChange = { (e) => setSubTitle( e.target.value )} 
                />
                <label> Blog Body </label>
                <textarea 
                    required 
                    value = { body }
                    onChange = { (e) => setBody( e.target.value ) }
                />
                <label> Blog Author </label>
                <input 
                    required 
                    value = { author }
                    onChange = { (e) => setAuthor( e.target.value ) }
                />
                <button> Add Blog</button>
            </form>
        </div>
     );
}

export default Create;