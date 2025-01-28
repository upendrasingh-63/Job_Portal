import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(""); // Added state for phone number
  const [role, setRole] = useState(""); // Added state for role
  const [resume, setResume] = useState(null); // Added state for resume
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number
  const [phoneNumberError, setPhoneNumberError] = useState(false); // Validation error

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;

    // Allow only numbers
    const formattedInput = input.replace(/\D/g, "");

    if (formattedInput.length <= 10) {
      setPhoneNumber(formattedInput);
      setPhoneNumberError(false); // Reset error if valid
    } else {
      setPhoneNumberError(true); // Show error if length exceeds 10
    }
  };
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
      setResume(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      setPhoneNumberError(true);
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // Combine country code with phone number
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    console.log("Signup submitted", {
      name,
      email,
      password,
      fullPhoneNumber,
      role,
      resume,
    });
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="flex mt-1">
              {/* Country Code Dropdown */}
              <select
                id="country-code"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="p-3 border border-gray-300 rounded-l-lg bg-gray-100"
              >
                <option value="+1">+1 (US)</option>
                <option value="+91">+91 (India)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                {/* Add more country codes as needed */}
              </select>

              {/* Phone Number Input */}
              <input
                type="tel"
                id="number"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumberChange(e)}
                className="flex-1 p-3 border border-gray-300 rounded-r-lg"
                placeholder="Enter your phone number"
                required
              />
            </div>
            {phoneNumberError && (
              <p className="text-red-500 text-sm mt-1">
                Phone number must be 10 digits.
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)} // Correct state update
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="recruiter">Recruiter</option>
              <option value="job_seeker">Job Seeker</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume Upload
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
