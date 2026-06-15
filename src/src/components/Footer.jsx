import React from 'react';
export default function Footer() {
  return (
    <footer style={{backgroundColor: '#0f172a', color: '#94a3b8', padding: '1.25rem', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'sans-serif', marginTop: 'auto'}}>
      <p style={{margin: 0}}>&copy; {new Date().getFullYear()} KrishiMitra Platform. TBI-GEU Project Deployment.</p>
    </footer>
  );
}