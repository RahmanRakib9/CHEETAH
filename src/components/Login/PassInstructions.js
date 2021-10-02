import React from 'react';

const PassInstructions = () => {
     return (
          <ul style={{ color: "white", backgroundColor: '#1a1a1a', borderRadius: '5%', marginTop: '10%' }}>
               <li><small>Passwords must be at least 6 characters.</small></li>
               <li><small>Passwords must be contain at least 1 numeric digit <span style={{ color: 'orange' }}>(Example: abcdef7)</span></small></li>
               <li><small>Email address should be valid.</small></li>
               <li><small> <a href="https://www.facebook.com/ra.kib.9655806" rel="noreferrer" target='_blank' style={{ color: 'white' }}>Need help?</a></small></li>
          </ul>
     );
};

export default PassInstructions;