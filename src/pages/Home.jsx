import './Home.css';
import heroimg from '../assets/heroimg.jpg';
import heroimg2 from '../assets/heroimg2.jpg';

function Home() {
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
      <div className="hero-section hero-section-2">
        <div className="hero2-textblock">
          <p className="hero2-quote">"I have never felt so seen and appreciated by anyone. I was put on the highest of all pedestals and lived in a dream, but a short-lived one.\n\nFrom lots of declarations of love, flowers and chocolates, it quickly changed to constant insults, devaluation and gaslighting. The latter is the technique that makes us question our own reality and identity."</p>
          
          <p className="hero2-quote">The hierarchy quickly became visible, where I went from top to bottom from one second to another. The feeling that I am walking on eggshells has set in and I'm just waiting for the next attack. It is always my fault when hen have done something and nothing I do is enough, never.</p>
          
          <p className="hero2-quote">I have now, without even thinking, quickly adapted. I have started to act proactively by constantly doing everything before hen point out what I have not done. My whole world became one of internal stress, and I am constantly trying to improvise and give more. In a very short, intense time, I went from being overjoyed to questioning my own reality and dignity</p>
          
          <p className="hero2-quote">At first, it is not uncommon to dare to question them and suddenly it all starts again. Then you get a place on the pedestal again that makes us forget everything for a short moment, because the feeling of happiness comes back again.</p>
          
          <p className="hero2-quote">This so-called love bombing is followed by devaluation and discard, where they reject you, often without warning. The cycle starts again because you are not yet broken down enough to be controlled.</p>
          
          <p className="hero2-quote">"Hoover" where you are sucked back if you hesitate, and "future faking" are also common. Future faking means everything you are going to build together, to fulfill your dreams. The techniques are repeated until the day you decide to leave</p>
          
          <p className="hero2-quote">Do you recognize yourself in any of this? Then you have probably been the victim of a toxic or narcissistic relationship. Do you need advice and support to take back your life and your dignity?\n\nWelcome to Good As You Are</p>
        </div>
      </div>
    </div>
  );
}

export default Home; 