import {  useState } from 'react'
import Display from './components/Display/Display'
import Main from './components/Main/Main'
import Container from './UI/Container/Container'



function App() {
  return (
    <Container>
          <Display  />
          <Main />
    </Container>
  )
}

export default App
