import { Link } from 'react-router-dom'

function Landing () {
  return(
    <div class="landing">
      <h1 class="hText">Find Art You Love
      <br />
      And Make Your Own Piece Of Art
      </h1>
      <Link to="/draw" className="tryArt">Try it!</Link>
    </div>
  )
}

export default Landing;