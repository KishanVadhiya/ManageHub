// import Home from './Pages/Home'
// import CustomerDetails from "./Pages/customerDetails"
// import Inventory from "./Pages/Inventory";
// import About from "./Pages/about"
// import Sidebar from "./Pages/Sidebar"
// import Invoice from "./Pages/Invoice"
// import CustomerManagement from './Pages/customerManage';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import login from './components/auth/LoginPage';
// import Profile from './Pages/Profile'
// import CreateBusinessAccount from "./Pages/createBusinessAccount";
// import AllAccounts from "./Pages/AllAccount";

// const isLoggedIn = ()=>{
//   const token = localStorage.getItem('token');
//   if(token){
//     return true;
  // }
//   return false;
// }
// const App = () => {
//   return (
//        <Router>
//      <div >
       
//       {/* <Invoice/> */}
//       {isLoggedIn()&&<Sidebar/>}
//          <Routes>
          {/* <Route path="/" element={<Account />} /> */}
          {/* <Route path="/Account" element={<Account />} /> */}
{/*     
            <Route path="/" element={isLoggedIn() ?<CustomerManagement />: <Navigate to='/signin' />} />
            <Route path="/customer-management" element={isLoggedIn() ?<CustomerManagement />:<Navigate to='/signin' />}  />
            <Route path="/customer-details" element={isLoggedIn() ?<CustomerDetails />:<Navigate to='/signin' />} />
            <Route path="/inventory" element={isLoggedIn() ?<Inventory />:<Navigate to='/signin' />} />
            <Route path="/about" element={isLoggedIn() ?<About />:<Navigate to='/signin' />} />
            <Route path="/Invoice" element={isLoggedIn() ?<Invoice />:<Navigate to='/signin' />} />
            <Route path="/profile" element={isLoggedIn() ?<Profile />:<Navigate to='/signin' />} /> */}
          
             {/* <Route path="/contact" element={<Contact />}/> */}
             {/* <Route path="/" element={<Home />} />  */}
//           </Routes>
//    </div>
//     </Router>
//    );
// };
            
         
// export default App;





// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/auth/LoginPage';
// import SignUpPage from './components/auth/SignUpPage';
// import SignUpPage from './components/auth/SignUpPage';
import Contact from "./Pages/Contact"

const App = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/login" element={<LoginPage />} />
        //         <Route path="/signup" element={<SignUpPage />} />
        //         {/* Add other routes like Home or Dashboard */}
        //     </Routes>
        // </Router>
        // <LoginPage/>
        // <SignUpPage/>
        <Contact/>
    );
};

export default App;




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



