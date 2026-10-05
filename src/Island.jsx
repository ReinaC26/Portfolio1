import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const assetBase = import.meta.env.BASE_URL;
const modelUrl = `${assetBase}models/fantasy-island.glb`;
const dracoUrl = `${assetBase}draco/`;

function Model({ onReady }) {
  const { scene } = useGLTF(modelUrl, dracoUrl);
  const modelScale = window.innerWidth < 700 ? 2.4 : 3.15;
  useEffect(() => { onReady?.(); }, [onReady]);
  return <primitive object={scene} position={[0, -0.28, 0]} rotation={[0, Math.PI, 0]} scale={modelScale} />;
}

function SceneControls() {
  const compact = useThree((state) => state.size.width < 520);
  return <OrbitControls enableRotate enablePan={false} enableZoom autoRotate={false} rotateSpeed={0.45} zoomSpeed={0.7} minDistance={compact ? 3.6 : 2.9} maxDistance={compact ? 8 : 8.5} minPolarAngle={0.58} maxPolarAngle={1.35} />;
}

export default function Island({ onReady }) {
  return <Canvas className="three-canvas" dpr={[1, 1.4]} camera={{ position: [2.8, 2.4, -3.7], fov: 38 }} gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}>
    <ambientLight intensity={1.5} />
    <directionalLight position={[-3, 7, 5]} intensity={2.4} />
    <directionalLight position={[4, 2, -4]} intensity={0.7} color="#c9e6ec" />
    <Model onReady={onReady} />
    <SceneControls />
  </Canvas>;
}
