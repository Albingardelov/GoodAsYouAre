import React from 'react';
import './AboutMe.css';
import Portrait from '../assets/Fakebild.png';
import VbgBackground from '../assets/Vbg.jpg';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-image-container">
          <img src={Portrait} alt="Petra Thulin" className="hero-image" />
        </div>
      </div>

      <div className="content-section">
        <div className="content-background">
          <img src={VbgBackground} alt="" className="background-image" />
          <div className="content-overlay"></div>
        </div>
        
        <div className="about-me-content">
          <p className="title-text">
            Why I became an ACT Therapist
          </p>

          <p>
            With psychology and well-being as my primary interests, combined with a long experience with narcissists and toxic individuals, the choice to become an ACT therapist was a natural one. I want to help you reach your full potential by supporting, coaching and being there for you.
          </p>

          <p>
            The feeling of being able to help others back to their inner self, motivation, drive and well-being again is something absolutely amazing. I believe that everyone can make a difference if we take the time and dare to show love and care. I always stand up for justice, humanity and am not afraid to stand up for those with less strength than myself.
          </p>

          <p className="title-text">
            Experience with Narcissists and Toxic Individuals
          </p>

          <p>
            Unfortunately, too much "open arms" can also attract the wrong individuals, such as toxic people and even worse – narcissists. This has given me a long experience with both introverted and extroverted narcissists. I know how mentally tormenting it is both to be in, to get out of but above all, to get back to yourself again.
          </p>

          <p>
            With broad subject knowledge, I want to help you get through this with better conditions than I had myself. The method of my "self therapy" was when I realized the importance and miracle of acceptance and forgiving myself. Letting go of my self-blame and accepting that it has been a part of life.
          </p>

          <p>
            I started to wonder why the same thing happens, why the same type of personality always finds me. It is no coincidence, but went way back in my childhood and my subconscious. It could be attachment issues, such as parental divorce, lack of love and attention, alcoholism, domestic violence. There is always a reason.
          </p>

          <p>
            With a new approach, this led me to the techniques/tools of ACT – Acceptance Commitment Therapy. Today, I have instead turned my experiences into a huge strength and see them instead as my best teachers in life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 