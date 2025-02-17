// Contact.tsx
import React from 'react';
// 1. Import your ContactForm component
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">

      {/* 2. Render the ContactForm component here */}
      <ContactForm />
    </section>
  );
};

export default Contact;
