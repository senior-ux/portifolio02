import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    const letters = '01';
    const columns: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columnCount = Math.floor(window.innerWidth / 18);
      columns.length = columnCount;
      for (let i = 0; i < columnCount; i += 1) {
        columns[i] = Math.random() * canvas.height;
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.font = '18px monospace';

      columns.forEach((y, index) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = index * 18;
        ctx.fillText(text, x, y);
        if (y > canvas.height + 20 || Math.random() > 0.98) {
          columns[index] = 0;
        } else {
          columns[index] = y + 20;
        }
      });
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-full w-full opacity-50"
      aria-hidden="true"
    />
  );
};

export default MatrixRain;
