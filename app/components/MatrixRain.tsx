'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  opacity?: number;
  speed?: number;
  className?: string;
}

export default function MatrixRain({ opacity = 0.15, speed = 50, className = '' }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\=+*~';
    const charArray = chars.split('');
    const fontSize = 14;

    let columns: number;
    let drops: number[];

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    }

    resize();
    window.addEventListener('resize', resize);

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright head character
        ctx.fillStyle = 'rgba(0, 255, 65, 0.9)';
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, x, y);

        // Dimmer trail character above
        ctx.fillStyle = 'rgba(0, 255, 65, 0.3)';
        ctx.fillText(charArray[Math.floor(Math.random() * charArray.length)], x, y - fontSize);

        drops[i]++;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    }, speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity, pointerEvents: 'none' }}
    />
  );
}
