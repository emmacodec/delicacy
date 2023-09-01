import Delicacies from "./Components/Delicacies";
import Headlines from "./Components/Headlines";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Bookings from "./Pages/Bookings";
import Payment from "./Pages/Payment";
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Bookings" element={<Bookings />} />
        <Route path="/Payment" element={<Payment />} /> 
      </Routes>
    </>
  );
}

export default App;
