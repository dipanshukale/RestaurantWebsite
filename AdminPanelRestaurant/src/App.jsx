import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import AdminPanel from './Components/AdminPanel'
import AdminPanel2 from './Components/AdminPanel2';
import Homepage from './Components/Homepage';
import DashboardLayout from "./Components/DashboardLayout";
import ChartsPage from "./Components/OrderChartsPage";
import RestaurantChartsPage from "./Components/RestaurantChartsPage";

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}> <Route index element={ <Homepage/>} /> </Route>
          <Route path="/home-delivery" element={<DashboardLayout />}><Route index element={<AdminPanel/>} /></Route>
          <Route path="/order" element={<DashboardLayout />}> <Route index element={<AdminPanel2 />} /> </Route>
          <Route path="/restaurantcharts" element={<DashboardLayout />}> <Route index element={<ChartsPage />} /></Route>
          <Route path="/Home-delivery-restaurantcharts" element={<DashboardLayout />}> <Route index element={<RestaurantChartsPage/>} /></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
