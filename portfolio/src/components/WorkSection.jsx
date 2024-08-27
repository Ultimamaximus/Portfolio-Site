import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide's CSS
import "../styles/WorkSection.css";
import Project from "./Project";
import projectImage1 from "../images/project-image1.png";
import projectImage2 from "../images/project-image2.png";
import projectImage3 from "../images/project-image3.png";
import projectImage4 from "../images/project-image4.png";

const WorkSection = () => {
  return (
    <div>
      <h2 className="work-section-title">02 Latest Work</h2>
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 5000, // Adjust the interval between slides
          perPage: 2, // Adjust how many slides to show per view
          gap: '10px', // Gap between slides
          pagination: true,
          arrows: false,
          pauseOnHover: true,
          breakpoints: {
            768: {
              perPage: 1, // Show one project per view on screens smaller than 768px
              gap: '5px', // Adjust gap between slides for smaller screens
            },
          },
        }}
        className="work-section-container"
      >
        <SplideSlide>
          <Project
            image={projectImage1}
            title="DevFlix"
            summary="DevFlix is a React-based movie app similar to IMDb. It utilizes the TMDB API to pull its dataset, providing detailed information about films and enhancing the movie-watching experience."
            link="https://devflixprime.netlify.app/"
          />
        </SplideSlide>
        <SplideSlide>
          <Project
            image={projectImage2}
            title="Silvanus Grove"
            summary="This web application is your one-stop destination for all things green and leafy. Developed using React for the frontend, Firebase for the database, and Stripe for payment processing, Silvanus Grove offers a seamless shopping experience for plant enthusiasts and green thumbs alike."
            link="https://symphonious-sable-ca8f44.netlify.app/"
          />
        </SplideSlide>
        <SplideSlide>
          <Project
            image={projectImage3}
            title="Wordle"
            summary="This Wordle Game Clone is a web-based replica of the popular word game, challenging users to deduce a hidden 5-letter word within 6 attempts using color-coded feedback."
            link="https://jade-taiyaki-b3543c.netlify.app/"
          />
        </SplideSlide>
        <SplideSlide>
          <Project
            image={projectImage4}
            title="Muse"
            summary="Muse is a creative React-based application that allows users to seamlessly create Spotify playlists outside of the official app. Utilizing the Spotify API, playlists are automatically synced and added to your Spotify account, providing a convenient and enhanced user experience for music lovers."
            link="https://merry-youtiao-ecf432.netlify.app/"
          />
        </SplideSlide>
        {/* You can add more SplideSlide components if you have more projects */}
      </Splide>
    </div>
  );
};

export default WorkSection;
