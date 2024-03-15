import React from "react";
import Bookmark from "./Bookmark/Bookmark";
const Bookmarks=({bookmarks})=>{
    return(
        <div className="md:w-1/3">
            <h2>Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map(
                    bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
                )
            }
        </div>
    );
};
export default Bookmarks;