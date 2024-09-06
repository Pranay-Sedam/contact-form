// // import Contact from "./Contact/Contact";

// // function App  () {
// //   return (
// //     <div>
// //       <Contact />
// //     </div>
// //   )
// // }

// // export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Contact from './Contact/Contact'; // Your Contact component
// import Admin from "./Admin/Admin"

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Contact />} />
//         <Route path='/Admin' element={<Admin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import AdminPage from './Admin/Admin';
import LoginPage from './LoginAdmin/LoginPage'; // Import the Login Page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} /> {/* Route for Login Page */}
        <Route path="/admin" element={<AdminPage />} /> {/* Admin Page route */}
      </Routes>
    </Router>
  );
};

export default App;

