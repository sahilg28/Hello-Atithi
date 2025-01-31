import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TripForm from './pages/TripForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip-form" element={<TripForm />} />
      </Routes>
    </Router>
  )
}

export default App
