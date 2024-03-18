import "./BlogPage.css";
import BlogCard from "@/app/components/card/blogCard/BlogCard";
import BlogImage from "@/app/public/js.jpg";
const BlogPage = () => {
  const blogData = [
    {
      id: 1,
      title:
        "Exploring the Factory Pattern in JavaScript: Simplifying Object Creation",
      image: BlogImage,
      catagory: "JavaScript 1",
      details:
        "In the realm of software development, managing object creation efficiently is paramount to building scalable and maintainable applications. The Factory Pattern emerges as a powerful design principle, offering a structured methodology to create objects while abstracting the complexity of instantiation.",
    },
    {
      id: 2,
      title:
        "Exploring the Factory Pattern in JavaScript: Simplifying Object Creation",
      image: BlogImage,
      catagory: "JavaScript 2",
      details:
        "In the realm of software development, managing object creation efficiently is paramount to building scalable and maintainable applications. The Factory Pattern emerges as a powerful design principle, offering a structured methodology to create objects while abstracting the complexity of instantiation.",
    },
    {
      id: 3,
      title:
        "Exploring the Factory Pattern in JavaScript: Simplifying Object Creation",
      image: BlogImage,
      catagory: "JavaScript 3",
      details:
        "In the realm of software development, managing object creation efficiently is paramount to building scalable and maintainable applications. The Factory Pattern emerges as a powerful design principle, offering a structured methodology to create objects while abstracting the complexity of instantiation.",
    },
    {
      id: 4,
      title:
        "Exploring the Factory Pattern in JavaScript: Simplifying Object Creation",
      image: BlogImage,
      catagory: "JavaScript 4",
      details:
        "In the realm of software development, managing object creation efficiently is paramount to building scalable and maintainable applications. The Factory Pattern emerges as a powerful design principle, offering a structured methodology to create objects while abstracting the complexity of instantiation.",
    },
    {
      id: 5,
      title:
        "Exploring the Factory Pattern in JavaScript: Simplifying Object Creation",
      image: BlogImage,
      catagory: "JavaScript 5",
      details:
        "In the realm of software development, managing object creation efficiently is paramount to building scalable and maintainable applications. The Factory Pattern emerges as a powerful design principle, offering a structured methodology to create objects while abstracting the complexity of instantiation.",
    },
  ];

  return (
    <div className="mainBlogContainer">
      <div className="blogTitleContainer">
        <h1 className="blogTitle">Blogs</h1>
      </div>
      <div className="blogContainer">
        {blogData.map((blog) => (
          <div className="blogs" key={blog.id}>
            <BlogCard
              id={blog.id}
              image={blog.image}
              title={blog.title}
              catagory={blog.catagory}
              details={blog.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;
