import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function SistemaSolar() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [speed, setSpeed] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!stageRef.current) return;
    const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
    if (ua.toLowerCase().includes("jsdom")) return;

    const stage = stageRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1220);
    const camera = new THREE.PerspectiveCamera(50, stage.clientWidth / stage.clientHeight, 0.1, 200);
    camera.position.set(0, 6, 14);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const sunLight = new THREE.PointLight(0xffffff, 1.2);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 32, 16),
      new THREE.MeshStandardMaterial({ color: 0xffc107, emissive: 0xff9800, emissiveIntensity: 0.8 })
    );
    scene.add(sun);

    type Planet = { mesh: THREE.Mesh; radius: number; speed: number; angle: number; name: string };
    const planets: Planet[] = [
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 12), new THREE.MeshStandardMaterial({ color: 0x9e9e9e })), radius: 2.5, speed: 0.02, angle: 0, name: "Mercurio" },
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.4, 24, 12), new THREE.MeshStandardMaterial({ color: 0xff7043 })), radius: 3.3, speed: 0.018, angle: 0, name: "Venus" },
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 12), new THREE.MeshStandardMaterial({ color: 0x42a5f5 })), radius: 4.1, speed: 0.015, angle: 0, name: "Tierra" },
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.35, 24, 12), new THREE.MeshStandardMaterial({ color: 0xff3d00 })), radius: 4.8, speed: 0.013, angle: 0, name: "Marte" },
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.9, 24, 12), new THREE.MeshStandardMaterial({ color: 0xffb74d })), radius: 6.5, speed: 0.01, angle: 0, name: "Júpiter" },
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.8, 24, 12), new THREE.MeshStandardMaterial({ color: 0xfff59d })), radius: 8.0, speed: 0.008, angle: 0, name: "Saturno" },
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.6, 24, 12), new THREE.MeshStandardMaterial({ color: 0x80deea })), radius: 9.5, speed: 0.006, angle: 0, name: "Urano" },
      { mesh: new THREE.Mesh(new THREE.SphereGeometry(0.6, 24, 12), new THREE.MeshStandardMaterial({ color: 0x4fc3f7 })), radius: 11.0, speed: 0.005, angle: 0, name: "Neptuno" }
    ];
    planets.forEach(p => scene.add(p.mesh));

    let running = true;
    const animate = () => {
      if (!running) return;
      if (!paused) {
        planets.forEach(p => {
          p.angle += p.speed * speed;
          const x = Math.cos(p.angle) * p.radius;
          const z = Math.sin(p.angle) * p.radius;
          p.mesh.position.set(x, 0, z);
        });
        sun.rotation.y += 0.005 * speed;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = stage.clientWidth, h = stage.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(stage);

    return () => {
      running = false;
      ro.disconnect();
      renderer.dispose();
      stage.removeChild(renderer.domElement);
    };
  }, [speed, paused]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => setPaused(p => !p)} className="px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
          {paused ? "Reanudar" : "Pausar"}
        </button>
        <div className="flex items-center gap-2">
          <span className="text-slate-700 dark:text-slate-200">Velocidad</span>
          <input type="range" min={0} max={3} step={0.1} value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} />
        </div>
      </div>
      <div ref={stageRef} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900" style={{ height: "420px" }} />
    </div>
  );
}