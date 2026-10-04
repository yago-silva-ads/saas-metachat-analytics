import React from 'react';
import { BarChart3, MessageCircle, TrendingUp, Check, ArrowRight, Zap, Target } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="saas-container">
      <header className="header">
        <div className="logo">
          <BarChart3 size={28} />
          <span>MetaFlow AI</span>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div>
          <button className="btn btn-outline" style={{ marginRight: '1rem' }}>Login</button>
          <button className="btn btn-primary">Start Free Trial</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Track Meta Ads & Manychat<br/>in One Place.</h1>
          <p>
            Stop losing money on blind traffic. Our AI-powered dashboard connects your 
            Facebook Ads spend directly to Manychat conversions. Maximize your ROI.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Connect Accounts <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline">View Live Demo</button>
          </div>
        </section>

        <section id="dashboard" className="mockup-container">
          <div className="mockup-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          
          <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h3>Global Performance Overview</h3>
              <span style={{ color: '#94a3b8' }}>Last 7 Days (USD)</span>
            </div>
            
            <div className="dashboard-grid">
              <div className="metric-card">
                <div className="metric-title">Total Ad Spend (Meta)</div>
                <div className="metric-value">
                  $1,240.50
                  <span className="metric-trend">↓ 12%</span>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-title">Manychat Leads Generated</div>
                <div className="metric-value">
                  842
                  <span className="metric-trend" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.1)' }}>↑ 34%</span>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-title">Cost Per Lead (CPL)</div>
                <div className="metric-value">
                  $1.47
                  <span className="metric-trend">↓ 8%</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', height: '200px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
              [ Interactive Conversion Chart Placed Here ]
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <h2>Pricing for Global Scalers</h2>
          <div className="pricing-grid">
            
            <div className="price-card">
              <div className="price-title">Starter</div>
              <div className="price-amount"><span className="price-currency">$</span>29<span style={{fontSize: '1rem', color: '#94a3b8'}}>/mo</span></div>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Perfect for solopreneurs testing campaigns.</p>
              <button className="btn btn-outline" style={{ width: '100%' }}>Get Started</button>
              <ul className="features-list">
                <li><Check size={18} className="feature-icon" /> 1 Meta Business Account</li>
                <li><Check size={18} className="feature-icon" /> 1 Manychat Workspace</li>
                <li><Check size={18} className="feature-icon" /> Daily Data Sync</li>
                <li><Check size={18} className="feature-icon" /> Basic ROI Reports</li>
              </ul>
            </div>

            <div className="price-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="price-title">Pro Agency</div>
              <div className="price-amount"><span className="price-currency">€</span>89<span style={{fontSize: '1rem', color: '#94a3b8'}}>/mo</span></div>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>For media buyers scaling internationally.</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>Start 14-Day Free Trial</button>
              <ul className="features-list">
                <li><Check size={18} className="feature-icon" /> Unlimited Meta Accounts</li>
                <li><Check size={18} className="feature-icon" /> Unlimited Manychat Accs</li>
                <li><Check size={18} className="feature-icon" /> Hourly Data Sync</li>
                <li><Check size={18} className="feature-icon" /> Advanced AI Insights</li>
                <li><Check size={18} className="feature-icon" /> White-label Reports</li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 MetaFlow AI SaaS. Engineered for global performance.</p>
      </footer>
    </div>
  );
}

export default App;
