import React from 'react'

const page = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black bg-white">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        About SnapLink
      </h1>

      <p className="text-lg text-gray-700 leading-8 mb-6">
        SnapLink is a fast, secure, and easy-to-use URL shortener designed to
        transform long and complex URLs into short, clean, and shareable links.
        Whether you're sharing links on social media, emails, or messaging
        platforms, SnapLink helps make every URL simple and professional.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">
        Why Choose SnapLink?
      </h2>

      <ul className="list-disc pl-6 text-gray-700 space-y-3">
        <li>Create short URLs instantly.</li>
        <li>Simple and user-friendly interface.</li>
        <li>Fast and reliable redirection.</li>
        <li>Secure link management.</li>
        <li>Works seamlessly across all devices.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-600 mt-10 mb-4">
        Our Mission
      </h2>

      <p className="text-lg text-gray-700 leading-8">
        Our mission is to make link sharing effortless by providing a reliable,
        secure, and efficient platform that saves time and improves the way
        people share URLs online.
      </p>
    </div>
  )
}

export default page
