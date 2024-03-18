import Image from "next/image";
import "./BlogCard.css";
import Link from "next/link";
const BlogCard = (props) => {
  const { id, title, image, catagory, details } = props;
  return (
    <div className="blogCardContainer">
      <div className="blogCardImageContainer">
        <Image className="cardImage" src={image} alt="blog image" />
      </div>
      <div className="blogCardDetails pl-2">
        <Link href={`/blogs/${id}`} className="text-xl text-red-400">
          {id}. {title}
        </Link>
        <span className="text-blue-400 pt-2">
          <br />
          {catagory}
        </span>
        <p className="pt-2">{details}</p>
      </div>
    </div>
  );
};
export default BlogCard;
