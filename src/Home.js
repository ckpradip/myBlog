
import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState ([
        {title: "My Website", body: "Lorem Ipsum", author: "PCK", id:1},
        {title: "Welcome Party", body: "Lorem Ipsum", author: "Alex", id:2},
        {title: "Webdev tooltips", body: "Lorem Ipsum", author: "Ben", id:3}
    ]);


    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }


    return (
        <div className="home">
            {/* {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}

            <BlogList  blogs={blogs} title={"Main Page"} handleDelete={handleDelete} />
            <p></p>
            <BlogList  blogs={blogs.filter((blog) => blog.author === 'PCK')} title={"PCKs Page"} handleDelete/>
        </div>
    )
}


export default Home;