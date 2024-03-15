import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";
const Blog=({blog,handleAddToBookmark})=>{
   const {title,"cover-img":cover, author,author_image, reading_time,"posted-date":posted_date,"hash-tags":hash_tags}=blog;
    console.log(blog);
    return(
        <div >
            <img className="w-full"src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between my-4">
                <div className="flex">
                    <img className="w-10 h-10 rounded-full" src={author_image} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className="ml-2 text-red-600 text-2x;"><IoBookmarkSharp /></button>
                </div>

            </div>
            <h1 text-4xl>{title}</h1>
            <p>
            {
                hash_tags.map((hash,index)=> <span key={index} className="px-2"><a href="">#{hash}</a></span>)
            }
            </p>
        </div>
    );
};
export default Blog;