import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Signup from "./components/Signup";

// Placeholder Pages
//const Home = () => <h1 className="text-center text-3xl mt-4">Home Page</h1>;
//const Jobs = () => <h1 className="text-center text-3xl mt-4">Jobs Page</h1>;
//const Login = () => <h1 className="text-center text-3xl mt-4">Login Page</h1>;
//const Signup = () => <h1 className="text-center text-3xl mt-4">Signup Page</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2025 JobMatch. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;


//--------------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar */}
//         <Navbar />
//         {/* Main Content */}
//         <main>
//           <h1 className="text-center text-3xl mt-4">Testing Navbar</h1>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
