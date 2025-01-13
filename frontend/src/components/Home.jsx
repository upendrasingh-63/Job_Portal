import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Welcome to JobMatch</h1>
        <p className="text-lg mt-4">Find your dream job or the perfect candidate with ease!</p>
      </section>

      {/* Search Bar */}
      <section className="mt-8 max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Search for Jobs</h2>
          <form className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Job title or keywords"
              className="flex-1 border border-gray-300 rounded-lg p-3"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="mt-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Job Cards */}
          <JobCard
            title="Frontend Developer"
            company="Tech Solutions"
            location="Remote"
          />
          <JobCard
            title="Backend Developer"
            company="Innovative Apps"
            location="San Francisco, CA"
          />
          <JobCard
            title="UI/UX Designer"
            company="Creative Minds"
            location="New York, NY"
          />
        </div>
      </section>
    </div>
  );
}

// Job Card Component
function JobCard({ title, company, location }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{company}</p>
      <p className="text-gray-500">{location}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}

export default Home;
