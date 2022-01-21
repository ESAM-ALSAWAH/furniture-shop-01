import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Faqs, Payments, Services, Team } from '../pages'
const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/our-team" element={<Team />} />
    </Routes>
  )
}
export default RoutesPages
