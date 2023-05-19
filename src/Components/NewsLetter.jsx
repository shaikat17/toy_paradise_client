import React, { useState } from 'react';
import Swal from 'sweetalert2';

function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the email value, such as sending it to a backend server
    console.log(email);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Newsletter Subscription Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    setEmail('');
  };

  return (
    <section className="bg-gray-100 py-10 mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-6">Stay updated with the latest news and special offers.</p>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="email"
            className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-[#56BC97]"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="bg-[#56BC97] text-white px-4 py-2 rounded-r-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
