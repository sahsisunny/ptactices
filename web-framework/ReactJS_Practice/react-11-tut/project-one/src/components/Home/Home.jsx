import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";

// import React from "react";
import "./Home.scss";
import vg from "../../assets/1.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Sunny Sahsi</h1>
          <p>Hello there! I am Sunny Sahsi, a full stack web developer.</p>
        </main>
      </div>
      <div className="services" id="services">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={1000}
        >
          <div>
            <img src={c1} alt={c1} />
            <p className="legend">Full Stack Development</p>
          </div>
          <div>
            <img src={c2} alt={c2} />
            <p className="legend">Pear to Pear Support</p>
          </div>
          <div>
            <img src={c3} alt={c3} />
            <p className="legend">Pear to Pear Support</p>
          </div>
          <div>
            <img src={c4} alt={c4} />
            <p className="legend">Pear to Pear Support</p>
          </div>
        </Carousel>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are a team of talented designers making websites with Bootstrap.
            And we are here to make your website look awesome.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            error exercitationem odit non, in esse minima rerum vero a dolorum,
            laborum, adipisci eos sunt porro velit cumque aliquid repudiandae
            qui sint impedit omnis? Pariatur similique eaque non voluptatum ab
            necessitatibus, adipisci laudantium odio tempora sequi placeat
            corrupti distinctio voluptatem reprehenderit praesentium fugiat
            debitis mollitia facilis aliquam repellendus eum maxime? Eos nostrum
            adipisci cupiditate, obcaecati minima voluptatem perferendis officia
            nesciunt impedit maiores atque, perspiciatis repellendus repudiandae
            totam blanditiis. Eos alias cupiditate asperiores ad enim dolore
            ipsum accusantium autem est quos voluptas corporis quidem nostrum
            debitis impedit praesentium, perferendis sint! Obcaecati, corrupti?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillFacebook />
              <p>Facebook</p>
            </div>

            <div style={{ animationDelay: "1.1s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
          </article>
        </div>
      </div>

      <div className="contact" id="contact">
        <div>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="abc" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="abc@example.com" />
            </div>
            <div>
              <label>Message</label>
              <textarea
                type="email"
                required
                placeholder="Tell us about your query....."
              />
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
