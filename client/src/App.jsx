// import Home from './Pages/Home'
// import Account from "./Pages/Account";
import CustomerDetails from "./Pages/customerDetails"
import Inventory from "./Pages/Inventory";
import About from "./Pages/about"
import Sidebar from "./Pages/Sidebar"
import Invoice from "./Pages/Invoice"
import CustomerManagement from './Pages/customerManage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/auth/Signin';
// import CreateBusinessAccount from "./Pages/createBusinessAccount";
// import AllAccounts from "./Pages/AllAccount";

const isLoggedIn = ()=>{
  const token = localStorage.getItem('token');
  if(token){
    return true;
  }
  return false;
}
const App = () => {
  return (
       <Router>
     <div >
       
      {/* <Invoice/> */}
      {isLoggedIn()&&<Sidebar/>}
         <Routes>
          {/* <Route path="/" element={<Account />} /> */}
          {/* <Route path="/Account" element={<Account />} /> */}
    
            <Route path="/" element={isLoggedIn() ?<CustomerManagement />: <SignIn/>} />
            <Route path="/customer-management" element={isLoggedIn() ?<CustomerManagement />:<SignIn/>}  />
            <Route path="/customer-details" element={isLoggedIn() ?<CustomerDetails />:<SignIn/>} />
            <Route path="/inventory" element={isLoggedIn() ?<Inventory />:<SignIn/>} />
            <Route path="/about" element={isLoggedIn() ?<About />:<SignIn/>} />
            <Route path="/Invoice" element={isLoggedIn() ?<Invoice />:<SignIn/>} />
            <Route path="/signin" element={<SignIn />} />
             {/* <Route path="/contact" element={<Contact />}/> */}
             {/* <Route path="/" element={<Home />} />  */}
          </Routes>
   </div>
    </Router>
   );
};
            
         
export default App;





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


// import Home from './Pages/Home';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import CreateAccountForm from "./components/auth/CreateAccountForm";
// import SignIn from "./components/auth/Signin";
// import "./App.css";
// const  App=()=> {
  // return (
  //   <>
      {/* <SignUp/> */}
    {/* <Inventory/> */}
    {/* <CreateAccountForm/> */}
    {/* <SignIn/> */}
    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/customer-details" element={<CustomerDetails />} />{/* Sign In Route */}
        {/* <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Sidebar/>
//     </Router> */} 
//     </>
//   )
// }
// export default App;



