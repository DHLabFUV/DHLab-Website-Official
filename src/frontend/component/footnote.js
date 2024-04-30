@ -1,37 +0,0 @@
import React, { useState } from 'react';
import './footnote.css'

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <p>Subscribe to our newsletter:</p>
      {subscribed ? (
        <div className="newsletter-confirmation">
          Thank you for subscribing! You will receive our latest news and updates.
        </div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export default NewsletterSubscription;