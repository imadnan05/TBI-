import React from 'react';
export default function Card({ title, description, tag }) {
  return (
    <div style={{backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem', fontFamily: 'sans-serif', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
      <span style={{backgroundColor: '#d1fae5', color: '#065f46', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold'}}>{tag}</span>
      <h3 style={{color: '#1e293b', marginTop: '0.75rem', marginBottom: '0.5rem', fontSize: '1.2rem'}}>{title}</h3>
      <p style={{color: '#64748b', fontSize: '0.85rem', margin: 0, lineHeight: '1.4'}}>{description}</p>
    </div>
  );
}