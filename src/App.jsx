import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  function handleChange(e){
    setError(null)
    setEmail(e.target.value)
  }
  function handleSubmit(){
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
      return setError('Check your email please')
  }

  console.log(email)
  return (
    <>
    <nav>
      <img src="/images/logo.svg" alt="Logo" className='nav-logo'/>
      <button className='nav-btn'>Try it free</button>
    </nav>
    <section className='header-section'>
      <h1 className='header-title'>Build The Community Your Fans Will Love</h1>
      <p className='header-text'>
        Huddle re-imagines the way we build communities. You have a voice, but so does 
        your audience. Create connections with your users as you engage in genuine discussion. 
      </p>
      <button className='header-btn'>Get Started For Free</button>
      <img className='header-img' src='/images/screen-mockups.svg' alt='Illustration'></img>
    </section>
    <section className='stats-section'>
      <div className='stats-item'>
        <img className='stats-img' src='/images/icon-communities.svg' alt='Icon'/>
        <h1 className='stats-number'>1.4k+</h1>
        <p className='stats-text'>Communities Formed</p>
      </div>
      <div className='stats-item'>
        <img className='stats-img' src='/images/icon-messages.svg' alt='Icon'/>
        <h1 className='stats-number'>2.7m+</h1>
        <p className='stats-text'>Messages Sent</p>
      </div>
    </section>
    <section className='grow-section'>
      <img className='grow-img' src='/images/illustration-grow-together.svg' alt='Illustration'></img>
      <div className='grow-content'>
        <h1 className='grow-title'>Grow Together</h1>
        <p className='grow-text'>
          Generate meaningful discussions with your audience and build a strong, loyal community. 
          Think of the insightful conversations you miss out on with a feedback form. 
        </p>
      </div>
    </section>
    <section className='flowing-section'>
      <img className='flowing-img' src='/images/illustration-flowing-conversation.svg' alt='Illustration'></img>
      <div className='flowing-content'>
        <h1 className='flowing-title'>Flowing Conversations</h1>
        <p className='flowing-text'>
          You wouldn&#39;t paginate a conversation in real life, so why do it online? Our threads have 
          just-in-time loading for a more natural flow.
        </p>
      </div>
    </section>
    <section className='users-section'>
      <img className='users-img' src='/images/illustration-your-users.svg' alt='Illustration'></img>
      <div className='users-content'>
        <h1 className='users-title'>Your Users</h1>
        <p className='users-text'>
          It takes no time at all to integrate Huddle with your app&#39;s authentication solution. This means, 
          once signed in to your app, your users can start chatting immediately.
        </p>
      </div>
    </section>
    <section className='banner'>
      <h1 className='banner-title'>Ready To Build Your Community?</h1>
      <button className='banner-btn'>Get Started For Free</button>
    </section>
    <section className='footer-section'>
      <div className='footer-contacts'>
        <img className='footer-logo' src='/images/logo.svg' alt='Logo'></img>
        <p className='footer-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
          vestibulum a, ultrices quis sem.
        </p>
        <div className='contact-item'>
          <img className='contact-icon' src='/images/icon-phone.svg' alt='Icon'></img>
          <p className='contact-text'>Phone: +1-543-123-4567</p>
        </div>
        <div className='contact-item'>
          <img className='contact-icon' src='/images/icon-email.svg' alt='Icon'></img>
          <p className='contact-text'>example@huddle.com</p>
        </div>
        <div className='socials'>
          <FontAwesomeIcon className='social-icon' icon={faFacebookSquare} size='xl' /> 
          <FontAwesomeIcon className='social-icon' icon={faInstagram} size='xl' /> 
          <FontAwesomeIcon className='social-icon' icon={faTwitterSquare} size='xl' />
        </div>
      </div>
      <div className='subscribe'>
        <h1 className='subscribe-title'>Newsletter</h1>
        <p className='subscribe-text'>
          To recieve tips on how to grow your community, sign up to our weekly newsletter. We&#39;ll never 
          send you spam or pass on your email address
        </p>
        <div className='subscribe-input-container'>
          <div className='subscribe-input-wrapper'>
            <input className={`subscribe-input ${error ? "error" : ""}`} type='text' name='email' value={email} onChange={handleChange} />
            {error && <p className='error'>{error}</p>}
          </div>
          <button className='subscribe-btn' onClick={handleSubmit}>Subscribe</button>
        </div>
      </div>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian/">aveandrian</a>.
      </p>
    </section>
    </>
  )
}

export default App
