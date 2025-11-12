// src/views/ThreeDemoView.tsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeDemoView() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [supported, setSupported] = useState(true);
  const [shape, setShape] = useState<
    "cubo" | "esfera" | "cono" | "torus" | "plano" | "tetra"
  >("cubo");
  const [speed, setSpeed] = useState(1);

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
    } catch {
      setSupported(false);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.setClearColor(0xf8fafc, 1); // slate-50-like
    stage.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      50,
      stage.clientWidth / stage.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.5, 2.0, 3.0);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 5, 5);
    scene.add(dir);

    // Initial Mesh
    const createMesh = (kind: typeof shape): THREE.Mesh => {
      let geo: THREE.BufferGeometry;
      switch (kind) {
        case "esfera":
          geo = new THREE.SphereGeometry(0.7, 32, 16);
          break;
        case "cono":
          geo = new THREE.ConeGeometry(0.7, 1.2, 24);
          break;
        case "torus":
          geo = new THREE.TorusGeometry(0.6, 0.2, 16, 100);
          break;
        case "plano":
          geo = new THREE.PlaneGeometry(1.6, 1.0);
          break;
        case "tetra":
          geo = new THREE.TetrahedronGeometry(0.9, 0);
          break;
        default:
          geo = new THREE.BoxGeometry(1, 1, 1);
      }
      const mat = new THREE.MeshStandardMaterial({ color: 0x22c55e });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = 0.4;
      return mesh;
    };

    const current = createMesh(shape);
    cubeRef.current = current;
    scene.add(current);

    // Animation loop
    let running = true;
    const animate = () => {
      if (!running) return;
      const s = Math.max(0, Math.min(3, speed));
      current.rotation.x += 0.008 * s;
      current.rotation.y += 0.012 * s;
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

  const replaceShape = (kind: typeof shape) => {
    setShape(kind);
    const scene = sceneRef.current;
    if (!scene) return;
    if (cubeRef.current) {
      scene.remove(cubeRef.current);
      (cubeRef.current.geometry as THREE.BufferGeometry).dispose();
    }
    let geo: THREE.BufferGeometry;
    switch (kind) {
      case "esfera":
        geo = new THREE.SphereGeometry(0.7, 32, 16);
        break;
      case "cono":
        geo = new THREE.ConeGeometry(0.7, 1.2, 24);
        break;
      case "torus":
        geo = new THREE.TorusGeometry(0.6, 0.2, 16, 100);
        break;
      case "plano":
        geo = new THREE.PlaneGeometry(1.6, 1.0);
        break;
      case "tetra":
        geo = new THREE.TetrahedronGeometry(0.9, 0);
        break;
      default:
        geo = new THREE.BoxGeometry(1, 1, 1);
    }
    const mat = new THREE.MeshStandardMaterial({ color: 0x22c55e });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = 0.4;
    cubeRef.current = mesh;
    scene.add(mesh);
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
        <div className="ml-4 flex items-center gap-2">
          <label className="text-slate-700 dark:text-slate-200">Velocidad</label>
          <input type="range" min={0} max={3} step={0.1} value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} />
        </div>
      </div>

      {/* Shape selector */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          ["cubo", "Cubo"],
          ["esfera", "Esfera"],
          ["cono", "Cono"],
          ["torus", "Toro"],
          ["plano", "Plano"],
          ["tetra", "Tetra"],
        ].map(([k, label]) => (
          <button
            key={k}
            onClick={() => replaceShape(k as typeof shape)}
            className={
              "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 " +
              (shape === k ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "hover:bg-slate-50 dark:hover:bg-slate-800")
            }
          >
            {label}
          </button>
        ))}
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
