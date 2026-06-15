import React from 'react';
export default function Navbar() {
  return (
    <nav style={{backgroundColor: '#065f46', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'sans-serif'}}>
      <span style={{fontWeight: 'bold', fontSize: '1.25rem'}}>KrishiMitra</span>
      <div style={{display: 'flex', gap: '1.25rem'}}>
        <a href="#" style={{color: 'white', textDecoration: 'none', fontSize: '0.9rem'}}>Home</a>
        <a href="#" style={{color: 'white', textDecoration: 'none', fontSize: '0.9rem'}}>Dashboard</a>
      </div>
    </nav>
  );
}