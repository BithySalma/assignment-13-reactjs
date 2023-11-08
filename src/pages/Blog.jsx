import BlogOne from '../components/blog/blogOne';
import BlogTwo from '../components/blog/blogTwo';
import BlogThree from '../components/blog/BlogThree';
import BlogFour from '../components/blog/BlogFour';
const Blog = () => {
    return (
        <div className='d-flex justify-content-center'>
            <h1>Blog Page</h1>
            <BlogOne/>
            <BlogTwo/>
            <BlogThree/>
            <BlogFour/>
        </div>
    );
};

export default Blog;