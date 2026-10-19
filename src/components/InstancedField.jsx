// components/InstancedField.jsx
// A nod to the GPU-driven renderer: 5,000 instances orbiting in a tilted disc.
// Plain 2D canvas, animates only while on screen, single still frame under reduced motion.
import { useEffect, useRef } from 'react';

const COUNT = 5000;
const TILT = 0.42;
const ACCENT_EVERY = 41;

const InstancedField = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const instances = Array.from({ length: COUNT }, () => {
      const r = 0.18 + Math.pow(Math.random(), 0.6) * 0.82;
      return {
        r,
        a: Math.random() * Math.PI * 2,
        y: (Math.random() - 0.5) * 0.22 * (1.2 - r),
        speed: 0.00012 / r,
      };
    });

    const cosT = Math.cos(TILT);
    const sinT = Math.sin(TILT);
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let visible = false;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height * 0.52;
      const spread = Math.min(width, height * 1.9) * 0.62;

      for (let i = 0; i < COUNT; i++) {
        const p = instances[i];
        const ang = p.a + t * p.speed;
        const x = Math.cos(ang) * p.r;
        const z = Math.sin(ang) * p.r;
        const yRot = p.y * cosT - z * sinT;
        const zRot = p.y * sinT + z * cosT;
        const scale = 1 / (1.7 + zRot);
        const size = 1.6 * scale + 0.2;

        ctx.globalAlpha = 0.18 + 0.7 * (1 - (zRot + 1) / 2);
        ctx.fillStyle = i % ACCENT_EVERY === 0 ? '#ff5a4f' : '#c9d4ea';
        ctx.fillRect(cx + x * scale * spread, cy + yRot * scale * spread, size, size);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => {
      draw(t);
      if (visible) frame = requestAnimationFrame(loop);
    };

    resize();
    draw(0);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (!visible || reduceMotion) draw(0);
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !reduceMotion;
      cancelAnimationFrame(frame);
      if (visible) frame = requestAnimationFrame(loop);
    });
    intersectionObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={`block w-full h-full ${className}`} aria-hidden="true" />;
};

export default InstancedField;
