import React from 'react';
import '../App.css';
import img1 from '/img1.png'
import img2 from '/img2.png'
import img3 from '/img3.png'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: img1,
      date: "Nov 9, 2023",
      title: "How UX works in web",
      tags: ["UI", "UX"],
    },
    {
      id: 2,
      image: img2,
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application.",
      tags: ["DESIGN", "PRINT"],
    },
    {
      id: 3,
      image: img3,
      date: "Feb 16, 2023",
      title: "3 ways to develop your skill",
      tags: ["FIGMA", "WEB"],
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-content">
      
        <div className="section-header">
          <h2 className="section-title1">
            <span className='title-left'>
                <span className="star-icon"><img src='Star.png'/></span>Blog</span>
            <a href="/" className="view-all-link">view all</a>
          </h2>
        </div>

       
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-post">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-details">
                <p className="blog-date">{post.date}</p>
                <div className='blog-info'><h3 className="blog-title">{post.title}  <span className="read-button">Read</span></h3> </div>
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Blog;