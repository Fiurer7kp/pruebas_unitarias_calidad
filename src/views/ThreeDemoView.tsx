// src/views/ThreeDemoView.tsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeDemoView() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!stageRef.current) return;

    const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
    if (ua.toLowerCase().includes("jsdom")) {
      setSupported(false);
      return;
    }

    const stage = stageRef.current;

    // Renderer
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch (e) {
      setSupported(false);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.setClearColor(0xf8fafc, 1); // slate-50-like
    stage.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      stage.clientWidth / stage.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.5, 2.0, 3.0);
    camera.lookAt(0, 0, 0);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 5, 5);
    scene.add(dir);

    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x22c55e });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = 0.4;
    cubeRef.current = cube;
    scene.add(cube);

    // Animation loop
    let running = true;
    const animate = () => {
      if (!running) return;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.015;
      renderer!.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handler
    const onResize = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(stage);

    // Cleanup
    return () => {
      running = false;
      renderer?.dispose();
      ro.disconnect();
      renderer && stage.removeChild(renderer.domElement);
    };
  }, []);

  const setColor = (hex: number) => {
    cubeRef.current?.material &&
      (cubeRef.current.material as THREE.MeshStandardMaterial).color.setHex(hex);
  };

  const setRandomColor = () => {
    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
    cubeRef.current?.material &&
      (cubeRef.current.material as THREE.MeshStandardMaterial).color.set(color);
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setColor(0xff4d4f)}
          className="px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:opacity-90 transition"
        >
          Rojo
        </button>
        <button
          onClick={() => setColor(0x22c55e)}
          className="px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:opacity-90 transition"
        >
          Verde
        </button>
        <button
          onClick={() => setColor(0x3b82f6)}
          className="px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:opacity-90 transition"
        >
          Azul
        </button>
        <button
          onClick={setRandomColor}
          className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          Random
        </button>
      </div>

      {/* Canvas container */}
      {supported ? (
        <div
          ref={stageRef}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
          style={{ height: "420px", position: "relative" }}
        />
      ) : (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <p className="text-slate-700 dark:text-slate-200">Este dispositivo no soporta WebGL en pruebas. Observa el video y la guía.</p>
        </div>
      )}
    </div>
  );
}
