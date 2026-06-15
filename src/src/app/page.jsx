import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <Hero />
      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '2rem', width: '100%', boxSizing: 'border-box'}}>
        <h2 style={{fontFamily: 'sans-serif', color: '#1e293b', fontSize: '1.4rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem'}}>Core Local Crops Under Monitor</h2>
        <Card title="Himalayan Finger Millets (Mandua)" description="Tracking specific mountain gradient soil matrices and local moisture conditions." tag="Active Target" />
        <Card title="Off-Season Organic Vegetables" description="Managing local high-altitude microclimate metrics and greenhouse conditions." tag="High Yield" />
        
        <h2 style={{fontFamily: 'sans-serif', color: '#1e293b', fontSize: '1.4rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '2.5rem'}}>Diagnostic Alert Infrastructure</h2>
        <Card title="Early Pest Warning Systems" description="Proactive data analytics tracking regional blast disease vectors." tag="Risk Watch" />
      </div>
      <Footer />
    </div>
  );
}