import { useState } from 'react'
import { Container, Button, Card } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="text-center p-5 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <Card.Title className="mb-3 fs-2 fw-bold">Dobrodošli!</Card.Title>
          
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => setCount((count) => count + 1)}
            className="w-100"
          >
            Klikova: {count}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App