import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './Rom.css';

const RomanticLandingPage = () => {
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonOpacity, setnoButtonOpacity] = useState(0);

  const handleNoHover = () => {
    setnoButtonOpacity(0);

  }

  const handleMouseLeave = () => {
    setnoButtonOpacity(1);
  }
  // Confetti effect using canvas-confetti
  const createConfetti = () => {
    // Multiple bursts of confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#dda0dd'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    createConfetti();
  };







  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const babyEmojis = {
    crying: "😭👶",
    happy: "😊👶"
  };

  return (
    <div className="romantic-container">
      {/* Background decorative elements */}
      <div className="bg-decorations">
        <div className="decoration-1"></div>
        <div className="decoration-2"></div>
        <div className="decoration-3"></div>
        <div className="decoration-4"></div>
      </div>



      <div className="main-card">
        
        {/* Step 1 */}
        {step === 1 && (
          <div className="content-section">
            <h1 className="heading-primary">
              Hey Aryaaaaaa! 💖<br />
              How are you?<br />
              How is your mood??
            </h1>
            <div className="content-section-sm">
              <button
                onClick={() => setStep(2)}
                className="btn btn-pink"
              >
                GOOD! 😊
              </button>
              <button
                onClick={() => setStep('bad1')}
                className="btn btn-gray"
              >
                BAD 😔
              </button>
            </div>
          </div>
        )}

        {/* Bad mood step 1 */}
        {step === 'bad1' && (
          <div className="content-section">
            <div className="text-8xl">{babyEmojis.crying}</div>
            <h2 className="heading-secondary">
              PLEASEEE SMILEEEE 🥺
            </h2>
            <button
              onClick={() => setStep(1)}
              className="btn btn-pink btn-small"
            >
              Try Again 💕
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="content-section">
            <h2 className="heading-primary">
              Do you like Himanshu? 💕
            </h2>
            <div className="content-section-sm">
              <button
                onClick={() => setStep(3)}
                className="btn btn-pink"
              >
                YES 💖
              </button>
              <button
                onClick={() => setStep('bad2')}
                className="btn btn-red"
              >
                NO 😤
              </button>
            </div>
          </div>
        )}

        {/* Bad mood step 2 */}
        {step === 'bad2' && (
          <div className="content-section">
            <div className="text-8xl">{babyEmojis.crying}</div>
            <h2 className="heading-tertiary">
              MEEE SAD!! SAD!! 😭<br />
              HIMANSHU IS A GOOD GUY<br />
              and LIKES TO TAKE CARE OF YOU 💕
            </h2>
            <button
              onClick={() => setStep(2)}
              className="btn btn-pink btn-small"
            >
              Reconsider 💭
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && !showConfetti && (
          <div className="content-section">
            <h2 className="heading-secondary">
              ARYAA, WILL YOU BE<br />
              HIS GIRLFRIEND?? 🥺👉👈
            </h2>
            <div className="content-section-sm relative">
              <button
                onClick={handleYesClick}
                className="btn btn-green"
              >
                YES! 💚
              </button>
              <div style={{padding:"30px"}} onMouseEnter={handleNoHover} onMouseLeave={handleMouseLeave}>
                <button
                onClick={() => setStep('bad3')}
                className="btn btn-red"
                style={{opacity:noButtonOpacity, pointerEvents:"none"}}

              >
                NO 😤
              </button>
              </div>

            </div>
          </div>
        )}

        {/* Bad mood step 3 - if they click NO on girlfriend question */}
        {step === 'bad3' && (
          <div className="content-section">
            <div className="text-8xl">{babyEmojis.crying}</div>
            <h2 className="heading-tertiary">
              NOOOO!! 😭💔<br />
              BUT WHY?? 🥺<br />
              THINK AGAIN PLEASE!! 💕
            </h2>
            <button
              onClick={() => setStep(3)}
              className="btn btn-pink btn-small"
            >
              Reconsider 💭
            </button>
          </div>
        )}

        {/* Success step */}
        {showConfetti && (
          <div className="content-section">
            {/* <div className="text-8xl">{babyEmojis.happy}</div> */}
            <h2 className="heading-primary animate-bounce">
              SHY AARAAA 🙈🙈🙈
            </h2>
            <div className="text-6xl">💖</div>
          </div>
        )}
      </div>


    </div>
  );
};

export default RomanticLandingPage;