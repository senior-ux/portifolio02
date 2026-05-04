import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(0.9, 0.28, 128, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x0e4c92,
      metalness: 0.65,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const ambient = new THREE.AmbientLight(0x66d7ff, 0.7);
    const directional = new THREE.DirectionalLight(0x7c3aed, 1.2);
    directional.position.set(3, 3, 5);
    scene.add(ambient, directional);

    const resize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', resize);

    let frameId: number;
    const animate = () => {
      knot.rotation.x += 0.003;
      knot.rotation.y += 0.004;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none absolute inset-0 opacity-40" />;
};

export default ThreeScene;
