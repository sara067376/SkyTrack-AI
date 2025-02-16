import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogs = [
    {
      category: "Career",
      title: "Maximize Your Job Search Potential",
      description: "Discover strategies to enhance your job search and career growth.",
      author: "John Doe",
      date: "11 Jan 2022",
      readTime: "5 min read",
    },
    {
      category: "Advice",
      title: "Navigating the Job Market Successfully",
      description: "Learn how to effectively navigate the competitive job market.",
      author: "Jane Smith",
      date: "12 Jan 2022",
      readTime: "4 min read",
    },
    {
      category: "Insights",
      title: "The Future of Remote Work",
      description: "Explore the evolving landscape of remote work and its implications.",
      author: "Alice Brown",
      date: "13 Jan 2022",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container text-center">
        <p className="mb-3 font-semibold">Blog</p>
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
          Latest Insights & Trends
        </h2>
        <p className="md:text-md mb-10">Explore our latest articles for job seekers and professionals.</p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="text-left">
              <Link to="#" className="block mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt={`Blog ${index + 1}`}
                  className="w-full object-cover aspect-[3/2] rounded-lg"
                />
              </Link>
              <Link to="#" className="text-sm font-semibold text-blue-600 mb-2 block">
                {blog.category}
              </Link>
              <Link to="#" className="block">
                <h5 className="text-xl font-bold md:text-2xl">{blog.title}</h5>
              </Link>
              <p className="text-gray-600">{blog.description}</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt={`Author ${index + 1}`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h6 className="text-sm font-semibold">{blog.author}</h6>
                  <p className="text-xs text-gray-500">{blog.date} • {blog.readTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Button variant="contained" color="primary">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
