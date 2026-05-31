import { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { fetchDiscussions } from '../../services/main/Main'

function MainResponsive() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const data = fetchDiscussions()
    setPosts(data)
  }, [])

  return (
    <Container fluid="md" className="px-3 mt-3">
      
      <Row className="g-4">
        
        <Col xs={12} lg={8}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="feed-title m-0 fw-semibold">
              Latest Posts
            </h5>
            <Badge bg="primary" className="rounded-pill px-3 py-2" style={{ fontSize: '12px' }}>
              {posts.length} Active
            </Badge>
          </div>

          {posts.map((post) => (
            <Card key={post.id} className="forum-post-card mb-4 border-0 bg-white">
              <Card.Body className="p-3 p-md-4"> 
                <div className="post-time mb-2">
                  {post.time}
                </div>
                
                <Card.Title className="fs-5 fs-md-4 fw-bold text-dark mb-3 post-title-clickable">
                  {post.title}
                </Card.Title>

                <Card.Text className="post-text-content" style={{ fontSize: '14px' }}>
                  {post.preview}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          <div className="sticky-lg-top" style={{ top: '100px', zIndex: 10 }}>
            
            <Card className="border-0 bg-white p-4 mb-4 forum-post-card">
              <Card.Body className="p-0">
                <h6 className="fw-bold mb-3 text-uppercase tracking-wider" style={{ fontSize: '13px', color: '#6c757d' }}>
                  Forum Rules
                </h6>
                <p className="text-muted m-0" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  Welcome to Forulam! Be respectful, keep discussions technical, and help others build amazing things. 
                </p>
              </Card.Body>
            </Card>

            <Card className="border-0 bg-white p-4 forum-post-card">
              <Card.Body className="p-0">
                <h6 className="fw-bold mb-3 text-uppercase tracking-wider" style={{ fontSize: '13px', color: '#6c757d' }}>
                  Trending Topics
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <Badge bg="light" text="dark" className="border px-2 py-1" style={{ cursor: 'pointer' }}>#vite</Badge>
                  <Badge bg="light" text="dark" className="border px-2 py-1" style={{ cursor: 'pointer' }}>#react19</Badge>
                  <Badge bg="light" text="dark" className="border px-2 py-1" style={{ cursor: 'pointer' }}>#bootstrap</Badge>
                  <Badge bg="light" text="dark" className="border px-2 py-1" style={{ cursor: 'pointer' }}>#frontend</Badge>
                </div>
              </Card.Body>
            </Card>

          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default MainResponsive