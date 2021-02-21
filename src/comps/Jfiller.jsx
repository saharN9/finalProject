import React from 'react'
import {Container ,Jumbotron} from 'react-bootstrap'
function Jfiller (){


    return (
        <Jumbotron fluid className="w-100">
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
         
        </Container>
      </Jumbotron>
    )
}
export default Jfiller;
