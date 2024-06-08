import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, subtitle, author, body };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsLoading(false);
        })
    }

    return (
        <div className="create">
            <h2>
                Add a new Blog.
            </h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label> Blog Subtitle </label>
                <input
                    type="text"
                    required
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                />
                <label> Blog Body </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label> Blog Author </label>
                <input
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button disabled={isLoading}>
                    {isLoading ? 'Adding Blog...' : 'Add Blog'}
                </button>

            </form>
        </div>
    );
}

export default Create;