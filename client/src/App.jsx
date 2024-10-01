// import Home from './Pages/Home'
import CustomerDetails from "./Pages/customerDetails"
import Inventory from "./Pages/Inventory";
import About from "./Pages/about"
import Sidebar from "./Pages/Sidebar"
import CustomerManagement from './Pages/customerManage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Sidebar />
//         <div className="content">
//           <Routes>
//             <Route path="/home" element={<Home />} />
            // <Route path="/customer-management" element={<CustomerManagement />} />
            // <Route path="/customer-details" element={<CustomerDetails />} />
            // <Route path="/inventory" element={<Inventory />} />
//             <Route path="/about" element={<About />} />
//             {/* <Route path="/contact" element={<Contact />} /> */}
//             <Route path="/" element={<Home />} /> {/* Default route */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };



// export default App;





// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import SignUp from './components/auth/signup'; // Import your SignUp component

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />{/* Route for SignUp */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CreateAccountForm from "./components/auth/CreateAccountForm";
import SignIn from "./components/auth/Signin";
import "./App.css";
const  App=()=> {
  return (
    <>
      {/* <SignUp/> */}
    {/* <Inventory/> */}
    {/* <CreateAccountForm/> */}
    {/* <SignIn/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/customer-details" element={<CustomerDetails />} />{/* Sign In Route */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Sidebar/>
    </Router>
    </>
  )
}
export default App;



