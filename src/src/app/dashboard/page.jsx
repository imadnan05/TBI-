import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Dashboard() {
  return (
    <div style={{backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <div style={{maxWidth: '1000px', margin: '2rem auto', padding: '2rem', width: '100%', boxSizing: 'border-box', fontFamily: 'sans-serif'}}>
        <h1 style={{color: '#1e293b', fontSize: '1.8rem', marginBottom: '0.5rem'}}>Analytics Dashboard Terminal</h1>
        <p style={{color: '#64748b', fontSize: '0.95rem'}}>Field advisory telemetry metrics and diagnostic data are tracked inside this sub-page interface block.</p>
      </div>
      <Footer />
    </div>
  );
}