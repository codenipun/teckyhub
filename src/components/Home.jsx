import React from 'react'
import "../styles/Home.scss"
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,
     AiFillAmazonCircle,
     AiFillYoutube,
     AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>TechyStar</h1>
                <p>Solution to all your Problems</p>
            </main>
        </div>

        <div className='home2'>
            <img src={vg} alt="Graphics" />
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia velit aliquid, aspernatur odio molestiae eligendi iure. Consectetur sint mollitia blanditiis, deserunt dolores tenetur quo fuga, ad nam numquam minima ipsa soluta cupiditate, itaque eum!</p>
            </div>
        </div>

        <div className='home3' id='about'>
            <div>
                <h1>Who we are ?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore saepe maiores sequi distinctio illo, officia magnam corrupti earum nobis dolorem explicabo eum sunt repellat culpa soluta! Provident, recusandae fugiat laborum consequuntur deserunt nobis mollitia numquam ullam veniam ad magni quibusdam, assumenda iste accusantium. Nam magnam quaerat et illum consectetur a qui laborum provident. Beatae consequatur quam molestiae voluptas modi dicta voluptatibus perspiciatis illum doloremque suscipit itaque aut, labore quos, provident, similique blanditiis dolorem repudiandae. Perferendis eveniet alias, neque adipisci esse consequuntur quam officia dolores quas tenetur deserunt numquam nesciunt magni ea non corrupti hic doloribus quia et asperiores accusantium? Reiciendis!</p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay : "0.3s"}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay : "0.5s"}}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay : "0.7s"}}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay : "0.9s"}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home
