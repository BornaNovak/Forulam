import { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import { fetchDiscussions } from '../../services/main/Main'

function MainOverview() {
  const [posts, setPosts] = useState([])

  // Fetch data when component mounts
  useEffect(() => {
    const data = fetchDiscussions()
    setPosts(data)
  }, [])

  return (
    <Container style={{ maxWidth: '720px' }} className="mt-3">
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
  )
}

export default MainOverview