import React from "react";
import Bookmark from "./Bookmark/Bookmark";
const Bookmarks=({bookmarks,readingTime})=>{
    return(
        <div className="md:w-1/3">
            <div>
                <h3 className="text-4xl">Reading time:{readingTime}</h3>
            </div>
            <h2>Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map(
                    bookmark=>
                    <Bookmark key={bookmark.id} bookmark={bookmark} >
                    </Bookmark>
                )
            }
        </div>
    );
};
export default Bookmarks;