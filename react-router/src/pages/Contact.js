import React from 'react';

function Contact() {
  return (
    <div style={styles.page}>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us via email or phone.</p>
    </div>
  );
}

const styles = {
  page: {
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Contact;
