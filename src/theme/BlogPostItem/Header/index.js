import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';

// export default function BlogPostItemHeader() {
//   return (
//     <header>
//       <BlogPostItemHeaderTitle />
//       <BlogPostItemHeaderInfo />
//       <BlogPostItemHeaderAuthors />
//     </header>
//   );
// }



export default function BlogPostItemHeader() {
  return (
    <header className="blog-post-header">
      <BlogPostItemHeaderTitle />

      <div className="blog-meta-line">
        <BlogPostItemHeaderAuthors />
        <span className="blog-meta-separator">▪</span>
        <BlogPostItemHeaderInfo />
      </div>
    </header>
  );
}
