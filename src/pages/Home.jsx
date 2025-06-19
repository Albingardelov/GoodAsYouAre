import './Home.css';
import heroimg from '../assets/heroimg.jpg';
import heroimg2 from '../assets/heroimg2.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };

  const textSections = [
    {
      text: '"I have never felt so seen and appreciated by anyone. I was put on the highest of all pedestals and lived in a dream, but a short-lived one.\n\nFrom lots of declarations of love, flowers and chocolates, it quickly changed to constant insults, devaluation and gaslighting. The latter is the technique that makes us question our own reality and identity."'
    },
    {
      text: 'The hierarchy quickly became visible, where I went from top to bottom from one second to another. The feeling that I am walking on eggshells has set in and I\'m just waiting for the next attack. It is always my fault when hen have done something and nothing I do is enough, never.'
    },
    {
      text: 'I have now, without even thinking, quickly adapted. I have started to act proactively by constantly doing everything before hen point out what I have not done. My whole world became one of internal stress, and I am constantly trying to improvise and give more. In a very short, intense time, I went from being overjoyed to questioning my own reality and dignity'
    },
    {
      text: 'At first, it is not uncommon to dare to question them and suddenly it all starts again. Then you get a place on the pedestal again that makes us forget everything for a short moment, because the feeling of happiness comes back again.'
    },
    {
      text: 'This so-called love bombing is followed by devaluation and discard, where they reject you, often without warning. The cycle starts again because you are not yet broken down enough to be controlled.'
    },
    {
      text: '"Hoover" where you are sucked back if you hesitate, and "future faking" are also common. Future faking means everything you are going to build together, to fulfill your dreams. The techniques are repeated until the day you decide to leave'
    },
    {
      text: 'Do you recognize yourself in any of this? Then you have probably been the victim of a toxic or narcissistic relationship. Do you need advice and support to take back your life and your dignity?\n\nWelcome to Good As You Are'
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <img src={heroimg} alt="Hero" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-text">ACT Therapy</div>
          <div className="hero-text">Motivation Coaching</div>
          <div className="hero-text">Lectures on Narcissism</div>
          <div className="hero-text hero-text-small">Specialized in narcissistic personality</div>
        </div>
      </div>
      <div className="hero-section hero-section-2" style={{ backgroundImage: `url(${heroimg2})` }}>
        <div className="hero2-textblock">
          <Slider {...sliderSettings}>
            {textSections.map((section, index) => (
              <div key={index} className="slider-slide">
                {index === 0 && (
                  <div className="scroll-indicator">
                    <span className="scroll-text">Läs mer</span>
                    <div className="scroll-arrow">↓</div>
                  </div>
                )}
                <p className="hero2-quote">{section.text}</p>
              </div>
            ))}
          </Slider>
          <div className="slide-counter">
            <span className="current-slide">{currentSlide + 1}</span> / <span className="total-slides">{textSections.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 