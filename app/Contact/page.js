import React from 'react'

const page = () => {
  return (
    <div className="my-15 bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        Contact Us
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mb-8">
        We'd love to hear from you! Whether you have questions, feedback,
        suggestions, or need help with SnapLink, feel free to reach out.
        Our team is always ready to assist you.
      </p>

      <div className="space-y-3 text-lg text-black">
        <p><strong>Email:</strong> support@snaplink.com</p>
        <p><strong>Phone:</strong> +91 93403 48987</p>
        <p><strong>Address:</strong> Madhya Pradesh, India</p>
      </div>

      
    </div>
  )
}

export default page
