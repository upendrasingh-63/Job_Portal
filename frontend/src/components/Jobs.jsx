import React, { useState } from "react";

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "Tech Solutions", location: "Remote", type: "Full-Time" },
  { id: 2, title: "Backend Developer", company: "Innovative Apps", location: "San Francisco, CA", type: "Part-Time" },
  { id: 3, title: "UI/UX Designer", company: "Creative Minds", location: "New York, NY", type: "Freelance" },
  { id: 4, title: "Data Scientist", company: "AI Analytics", location: "Austin, TX", type: "Full-Time" },
  { id: 5, title: "Project Manager", company: "Smart Projects", location: "Remote", type: "Contract" },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filtered jobs based on search and filter criteria
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || job.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Job Listings</h1>
        <p className="mt-2 text-lg">Browse and find the perfect job for you!</p>
      </header>

      {/* Search and Filter Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300 rounded-lg p-3"
          />

          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/4 border border-gray-300 rounded-lg p-3"
          >
            <option value="All">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </section>

      {/* Job Listings */}
      <section className="max-w-6xl mx-auto px-4">
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 mt-8">
            No jobs found matching your criteria.
          </p>
        )}
      </section>
    </div>
  );
}

// Job Card Component
function JobCard({ job }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-500">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mt-2">
        {job.type}
      </span>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
}

export default Jobs;
