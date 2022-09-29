import React from 'react';
import Review from './Review';

function App() {
  return <main>
    <div className="container">
      <section className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </section>
      <Review />
    </div>
  </main>;
}

export default App;
