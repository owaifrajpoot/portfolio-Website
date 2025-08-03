// src/components/CanvasWrapper.jsx
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import ModelFBX from './ModelFBX';

export default function CanvasWrapper({ onAvatarLoaded }) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 2.2], fov: 22 }}
      style={{ height: '100vh', background: '#1a1a1a' }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <ModelFBX onLoaded={onAvatarLoaded} />
    </Canvas>
  );
}
