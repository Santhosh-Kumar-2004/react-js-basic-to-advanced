import React from 'react';

function Home() {
  return (
    <div style={styles.page}>
      <h2>Welcome to the Home Page!</h2>
      <p>This is the main page of our application.</p>
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

export default Home;
