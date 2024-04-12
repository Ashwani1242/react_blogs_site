import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new Fuvking website!', body: 'lorem ipsum...', author: 'Bobbombom', id: 1 },
        { title: 'A Fuvking welcome party!', body: 'lorem ipsum...', author: 'Bhupendra Jogi', id: 2 },
        { title: 'Top Fuvking Web Dev Tips', body: 'lorem ipsum...', author: 'Gabriella', id: 3 },
        { title: 'How to become a Fuvking Developer', body: 'lorem ipsum...', author: 'Rasputin', id: 4 },
        { title: 'Top Fuvking App Dev Tips', body: 'lorem ipsum...', author: 'Gabriella', id: 5 },
        { title: 'Ayyein', body: 'lorem ipsum...', author: 'Baigan', id: 6 },
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All The Fuvking Blogs!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;