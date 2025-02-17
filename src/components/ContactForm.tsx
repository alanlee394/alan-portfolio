import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault(); // Prevent default browser behavior

    if (!formRef.current) return;

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    emailjs.sendForm(
      'service_l7jfj7m',
      'template_3zfg78i',
      formRef.current,
      'VE3YwlCWcVoR0AM44'
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Your message has been sent!');
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('Oops, something went wrong. Please try again later.');
      }
    );

    // (Optional) Clear the form fields
    formRef.current.reset();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1 className='contactHeader'>Contact Me</h1>
      <form ref={formRef} onSubmit={sendEmail}>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="user_email">Email</label><br />
          <input 
            type="email" 
            id="user_email" 
            name="user_email" 
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message</label><br />
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button type="submit" className="buttonContact">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
