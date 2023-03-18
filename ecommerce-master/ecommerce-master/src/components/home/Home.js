import Products from '../products/Products'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src='./assets/images/hero.jpg' alt='hero'/>
              <div className='content'>
                <div className="title">New Season Arrivals</div>
                <p className="subtitle">Check out all the trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Home