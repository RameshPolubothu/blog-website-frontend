import React from 'react'
import { formatDate } from '../../../utilis/dateFormater';

import EditorJSHTML from 'editorjs-html';
const editorJSHTML = EditorJSHTML();
const SingleBlogCard = ({blog}) => {
    const { title, createdAt, author, content, coverImg } = blog || {};
    const htmlContent = editorJSHTML.parse(content).join('');
  return (
    <>
     <div className="bg-white p-8">
             {/* header */}
             <div>
             <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
             <p className="mb-6">{formatDate(createdAt)} by<span className="text-blue-400 cursor-pointer"> {author?.username}</span></p>
             </div>
              <div>
                <img src={coverImg} alt="" className="w-full md:h-[520px] bg-cover" />
              </div>

              {/* details */}
              <div className="mt-8 space-y-4">
                {/* <p>{blog.conent & <span>{content}</span>}</p> */}
                
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='space-y-3 editorjsdiv'/>
                <div>
                    <span className="text-lg font-medium">Rating: </span>
                    <span>4.4  (based on 2,370 reviews)</span>
                </div>
              </div>
    </div>
    </>
  )
}

export default SingleBlogCard