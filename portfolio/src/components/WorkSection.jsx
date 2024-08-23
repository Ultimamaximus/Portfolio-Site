import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./WorkSection.css";
import Project from "./Project";
import projectImage1 from "../Images/project-image1.png";
import projectImage2 from "../Images/project-image2.png";
import projectImage3 from "../Images/project-image3.png";
import projectImage4 from "../Images/project-image4.png";

const WorkSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.scrollWidth;
    const viewportWidth = container.clientWidth;

    gsap.to(container, {
      scrollLeft: containerWidth - viewportWidth,
      duration: 40, // Adjust the duration to control the scroll speed
      ease: "linear",
      repeat: -1, // Infinite loop
      modifiers: {
        scrollLeft: gsap.utils.unitize((value) => value % containerWidth),
      },
    });

    return () => gsap.killTweensOf(container); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h2 className="work-section-title">02 Latest Work</h2>
      <div className="work-section-container" ref={containerRef}>
        {/* Original set of projects */}
        <Project
          image={projectImage1}
          title="DevFlix"
          summary="DevFlix is a React-based movie app similar to IMDb. It utilizes the TMDB API to pull its dataset, providing detailed information about films and enhancing the movie-watching experience."
          link="https://devflixprime.netlify.app/"
        />
        <Project
          image={projectImage2}
          title="Silvanus Grove"
          summary="This web application is your one-stop destination for all things green and leafy. Developed using React for the frontend, Firebase for the database, and Stripe for payment processing, Silvanus Grove offers a seamless shopping experience for plant enthusiasts and green thumbs alike."
          link="https://symphonious-sable-ca8f44.netlify.app/"
        />
        <Project
          image={projectImage3}
          title="Wordle"
          summary="This Wordle Game Clone is a web-based replica of the popular word game, challenging users to deduce a hidden 5-letter word within 6 attempts using color-coded feedback."
          link="https://jade-taiyaki-b3543c.netlify.app/"
        />
        <Project
          image={projectImage4}
          title="Muse"
          summary="Muse is a creative React-based application that allows users to seamlessly create Spotify playlists outside of the official app. Utilizing the Spotify API, playlists are automatically synced and added to your Spotify account, providing a convenient and enhanced user experience for music lovers."
          link="https://merry-youtiao-ecf432.netlify.app/"
        />

        {/* Cloned set of projects for seamless scrolling */}
        <Project
          image={projectImage1}
          title="DevFlix"
          summary="DevFlix is a React-based movie app similar to IMDb. It utilizes the TMDB API to pull its dataset, providing detailed information about films and enhancing the movie-watching experience."
          link="https://devflixprime.netlify.app/"
        />
        <Project
          image={projectImage2}
          title="Silvanus Grove"
          summary="This web application is your one-stop destination for all things green and leafy. Developed using React for the frontend, Firebase for the database, and Stripe for payment processing, Silvanus Grove offers a seamless shopping experience for plant enthusiasts and green thumbs alike."
          link="https://symphonious-sable-ca8f44.netlify.app/"
        />
        <Project
          image={projectImage3}
          title="Wordle"
          summary="This Wordle Game Clone is a web-based replica of the popular word game, challenging users to deduce a hidden 5-letter word within 6 attempts using color-coded feedback."
          link="https://jade-taiyaki-b3543c.netlify.app/"
        />
        <Project
          image={projectImage4}
          title="Muse"
          summary="Muse is a creative React-based application that allows users to seamlessly create Spotify playlists outside of the official app. Utilizing the Spotify API, playlists are automatically synced and added to your Spotify account, providing a convenient and enhanced user experience for music lovers."
          link="https://merry-youtiao-ecf432.netlify.app/"
        />
      </div>
    </div>
  );
};

export default WorkSection;
