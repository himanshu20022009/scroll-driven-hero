import React, { useLayoutEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

function CarArt() {
  return (
    <svg className="car-art" viewBox="0 0 900 500" role="img" aria-label="Coral red electric car">
      <defs>
        <linearGradient id="paint" x1=".15" y1="0" x2=".85" y2="1">
          <stop stopColor="#ff806d"/><stop offset=".5" stopColor="#f14839"/><stop offset="1" stopColor="#bd2523"/>
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#334b4a"/><stop offset="1" stopColor="#101c20"/>
        </linearGradient>
        <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#fff" stopOpacity=".55"/><stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-40%" width="140%" height="200%"><feGaussianBlur stdDeviation="17"/></filter>
      </defs>
      <ellipse cx="459" cy="397" rx="336" ry="28" fill="#192321" opacity=".2" filter="url(#shadow)"/>
      <path d="M124 328c8-35 22-61 54-75l94-32 92-103c19-21 46-33 75-34l132-2c34 0 59 11 84 34l101 93 67 22c29 10 46 31 49 63l4 40-41 30H153l-34-12z" fill="url(#paint)" stroke="#9f2824" strokeWidth="5"/>
      <path d="m296 215 81-87c16-17 38-26 62-26l76-1v116z" fill="url(#glass)" stroke="#dc6556" strokeWidth="6"/>
      <path d="m528 101 42-1c26 0 46 8 66 27l88 82H528z" fill="url(#glass)" stroke="#dc6556" strokeWidth="6"/>
      <path d="m381 111 22-8c15-2 27-3 41-2v114H294z" fill="url(#shine)" opacity=".42"/>
      <path d="M513 236h25v98h-25z" fill="#b9342d" opacity=".65"/>
      <path d="M143 303c46-11 84-14 125-11l-2 27c-48 5-90 4-126-2z" fill="#ffe8c6"/>
      <path d="M711 286c31-2 58 3 81 14l8 17c-32-7-61-7-88 0z" fill="#fff0d2"/>
      <path d="M151 345h626l-24 39H196z" fill="#a52c27" opacity=".62"/>
      <path d="M164 337c66-12 122-13 185-8m57 0h129m59 1c56-2 102 2 151 14" fill="none" stroke="#ffb3a2" strokeWidth="4" opacity=".58"/>
      <g><circle cx="282" cy="367" r="63" fill="#202524"/><circle cx="282" cy="367" r="39" fill="#d5d0c4"/><circle cx="282" cy="367" r="28" fill="#68716b"/><circle cx="282" cy="367" r="9" fill="#e8e4d9"/><path d="M282 339v56m-28-28h56m-48-20 40 40m0-40-40 40" stroke="#e8e4d9" strokeWidth="5"/></g>
      <g><circle cx="683" cy="367" r="63" fill="#202524"/><circle cx="683" cy="367" r="39" fill="#d5d0c4"/><circle cx="683" cy="367" r="28" fill="#68716b"/><circle cx="683" cy="367" r="9" fill="#e8e4d9"/><path d="M683 339v56m-28-28h56m-48-20 40 40m0-40-40 40" stroke="#e8e4d9" strokeWidth="5"/></g>
      <path d="M376 228h153" stroke="#ffb8a4" strokeWidth="3" opacity=".62"/>
    </svg>
  );
}

const metrics = [
  ['58%', 'More collections made\nat a pick-up point'],
  ['23%', 'Fewer “where is it?”\nphone calls'],
  ['27%', 'More first-time\ncollections'],
  ['40%', 'Less time spent\nwaiting in'],
];

function App() {
  const section = useRef(null);
  const car = useRef(null);
  const headline = useRef(null);
  const stats = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.fromTo(headline.current, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1 })
        .fromTo('.metric', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7, stagger: .12 }, '-=.35')
        .fromTo('.car-art', { y: 60, scale: .94, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 1.15, ease: 'power2.out' }, '-=.8');

      gsap.to(car.current, {
        x: () => window.innerWidth < 700 ? 20 : 150,
        y: -30,
        rotate: -4,
        scale: .82,
        ease: 'none',
        scrollTrigger: { trigger: section.current, start: 'top top', end: 'bottom bottom', scrub: 1.2, invalidateOnRefresh: true },
      });
      gsap.to('.hero-copy', {
        y: -80, autoAlpha: .45, ease: 'none',
        scrollTrigger: { trigger: section.current, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section className="scroll-stage" ref={section}>
        <div className="hero">
          <header className="topbar"><a className="brand" href="#top" aria-label="Fizz home">fizz<span>®</span></a><span className="top-note">A better way to pick up</span><a className="menu-link" href="#impact">THE IMPACT <span>↗</span></a></header>
          <div className="hero-copy" id="top">
            <p className="eyebrow"><span className="eyebrow-dot"/> LESS WAITING. MORE LIVING.</p>
            <h1 ref={headline}>W E L C O M E <i>I T Z</i> F I Z Z</h1>
            <p className="subhead">Good things are closer than you think.</p>
            <div className="metrics" ref={stats} id="impact">
              {metrics.map(([value, label], index) => <div className="metric" key={value}><span className="metric-number">{value}</span><span className="metric-label">{label}</span><span className="metric-index">0{index + 1}</span></div>)}
            </div>
          </div>
          <div className="car-wrap" ref={car}><CarArt /></div>
          <div className="ground-line"/>
          <div className="bottom-note"><span>MADE FOR THE MOMENT</span><span>SCROLL TO FEEL THE DIFFERENCE <b>↓</b></span><span>01 — 04</span></div>
        </div>
      </section>
      <section className="outro"><p className="eyebrow"><span className="eyebrow-dot"/> YOUR TIME, YOURS AGAIN</p><h2>Pick up a little<br/><i>more life.</i></h2><a href="#top" className="back-top">BACK TO THE TOP <span>↑</span></a><span className="outro-mark">fizz®</span></section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
