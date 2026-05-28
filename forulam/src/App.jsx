import { useState } from 'react'
import { Navbar, Container, Card, Form, InputGroup } from 'react-bootstrap'
import './App.css'

function App() {

  const [posts] = useState([
    {
      id: 1,
      title: 'Why is Vite so much faster than older tools (Webpack)?',
      time: '2 hours ago',
      preview: 'After moving my project to Vite, the development server startup time dropped to under 300ms. It all comes down to Vite leveraging native ESM in the browser and avoiding bundling the entire project ahead of time during development.'
    },
    {
      id: 2,
      title: 'Advantages of Dark Mode in UI Design',
      time: '5 hours ago',
      preview: 'A dark gray background significantly reduces eye strain during night work. The key is to avoid pure black backgrounds with pure white text, as this creates harsh contrast that tires out the eyesight.'
    },
    {
      id: 3,
      title: 'Organizing Your Day with Time Blocking',
      time: 'yesterday',
      preview: 'Splitting your workday into distinct time blocks helps eliminate multitasking. When you set a specific hour for coding and a specific hour for rest in advance, your focus becomes much deeper.'
    }
  ])

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa', color: '#212529', fontFamily: 'system-ui, sans-serif' }}>
      

      <Navbar bg="white" className="py-3 mb-5 main-navbar">
        <Container className="d-flex justify-content-between align-items-center">

          <Navbar.Brand href="#" className="fw-bold fs-3 text-uppercase tracking-wider text-dark m-0">
            FORULAM<span className="logo-dot">.</span>
          </Navbar.Brand>

        
          <Form style={{ width: '280px' }}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search Forulam..."
                className="search-input shadow-none border-0 py-2 px-3"
              />
            </InputGroup>
          </Form>
        </Container>
      </Navbar>


      <Container style={{ maxWidth: '720px' }}>
        <h5 className="feed-title mb-4 fw-semibold">
          Latest Posts
        </h5>

        {posts.map((post) => (
          <Card key={post.id} className="forum-post-card mb-4 border-0 bg-white">
            <Card.Body className="p-4">
              
              <div className="post-time mb-2">
                {post.time}
              </div>
              
              
              <Card.Title className="fs-4 fw-bold text-dark mb-3 post-title-clickable">
                {post.title}
              </Card.Title>

              
              <Card.Text className="post-text-content">
                {post.preview}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  )
}

export default App