import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Navbar, Container, Form, InputGroup, Nav } from 'react-bootstrap'
import MainOverview from './pages/main/MainOverview'

function App() {
  const defaultColor = '#212529' 
  const [logoColor, setLogoColor] = useState(defaultColor)
  const [colorTimeoutId, setColorTimeoutId] = useState(null) 

  const colors = ['#0d6efd', '#dc3545', '#198754', '#ffc107', '#6f42c1', '#fd7e14', '#0dcaf0']

  const handleLogoClick = (e) => {
    e.preventDefault() 

    if (colorTimeoutId) {
      clearTimeout(colorTimeoutId)
    }

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setLogoColor(randomColor)

    const newTimeoutId = setTimeout(() => {
      setLogoColor(defaultColor)
    }, 2000)

    setColorTimeoutId(newTimeoutId)
  }

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f8f9fa', color: '#212529', fontFamily: 'system-ui, sans-serif' }}>

      <Navbar bg="white" expand="lg" className="py-3 mb-4 main-navbar">
        <Container>
          <Navbar.Brand 
            href="#" 
            onClick={handleLogoClick}
            className="fw-bold fs-3 text-uppercase tracking-wider m-0 me-4 logo-interactive"
            style={{ color: logoColor, transition: 'color 0.2s ease' }}
          >
            FORULAM<span className="logo-dot">.</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav-menu" className="border-0 shadow-none" />

          <Navbar.Collapse id="main-nav-menu">
            <Nav className="me-auto my-2 my-lg-0 gap-2">
              <Nav.Link href="#" className="nav-menu-link text-dark fw-medium">Home</Nav.Link>
              <Nav.Link href="#" className="nav-menu-link text-secondary">Discussions</Nav.Link>
              <Nav.Link href="#" className="nav-menu-link text-secondary">Categories</Nav.Link>
              <Nav.Link href="#" className="nav-menu-link text-secondary">About</Nav.Link>
            </Nav>

            <Form className="d-flex" style={{ width: '250px' }}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search Forulam..."
                  className="search-input shadow-none border-0 py-2 px-3"
                />
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="flex-grow-1 mb-5">
        <MainOverview />
      </div>

      <footer className="bg-white py-4 mt-auto main-footer">
        <Container className="d-flex justify-content-center align-items-center">
          
          <div className="footer-links-container text-muted d-flex flex-wrap justify-content-center align-items-center text-center">
            <span className="footer-link-item">&copy; {new Date().getFullYear()} Forulam. All rights reserved.</span>
            <span className="footer-separator">&bull;</span>
            <a href="#" className="footer-link-item text-decoration-none text-muted">This page is available under the Creative Commons Attribution-ShareAlike License</a>
            <span className="footer-separator">&bull;</span>
            <a href="#" className="footer-link-item text-decoration-none text-muted">Terms of Use</a>
            <span className="footer-separator">&bull;</span>
            <a href="#" className="footer-link-item text-decoration-none text-muted">Privacy Policy</a>
          </div>

        </Container>
      </footer>

    </div>
  )
}

export default App