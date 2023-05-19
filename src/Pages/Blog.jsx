import React from 'react';
import { useLocation } from 'react-router-dom';
import { changeTitle } from '../utils/dynamicTitle';

const Blog = () => {
    // title Change
  const { pathname } = useLocation();
  changeTitle(pathname);

  const blogPosts = [
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces.'
    },
    {
      question: 'How do I install Tailwind CSS in my project?',
      answer: 'You can install Tailwind CSS using npm or Yarn. Refer to the official Tailwind CSS documentation for detailed installation instructions.'
    },
    {
      question: 'What are the advantages of using Tailwind CSS?',
      answer: 'Tailwind CSS provides a low-level utility-first approach, which allows for easy customization, smaller file sizes, and faster development compared to traditional CSS frameworks.'
    },
    // Add more blog posts here
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog Section</h2>
        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{post.question}</h3>
              <p className="text-gray-700">{post.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
