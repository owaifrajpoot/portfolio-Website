import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ModelFBX(props) {
  const { onLoaded } = props;
  const fbx = useLoader(FBXLoader, '/assets/avatar-relaxed-v2.fbx');
  const mixerRef = useRef();
  const headRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const headBaseRotation = useRef({ x: 0, y: 0 });
  const loadedTimeoutRef = useRef();

  // 🖱 Global mouse tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2; // Range: -1 to 1
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      mouse.current.x = x;
      mouse.current.y = y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 📦 Load avatar model and find head
  useEffect(() => {
    if (fbx) {
      fbx.scale.set(1.7, 1.7, 1.7);
      fbx.position.set(0, -2.83, 0);
      fbx.rotation.set(0, 0, 0);

      mixerRef.current = new THREE.AnimationMixer(fbx);
      if (fbx.animations.length > 0) {
        const idleAction = mixerRef.current.clipAction(fbx.animations[0]);
        idleAction.play();
      }

      fbx.traverse((child) => {
        if (!headRef.current && child.name.toLowerCase().includes("head")) {
          headRef.current = child;
          console.log("🎯 Head bone:", child.name);

          headBaseRotation.current.x = child.rotation.x - 0.2;
          headBaseRotation.current.y = child.rotation.y;
        }
      });
      // Wait 0.7s after load to ensure avatar is positioned and ready
      loadedTimeoutRef.current = setTimeout(() => {
        if (typeof onLoaded === 'function') {
          onLoaded();
        }
      }, 700);
    }
    return () => {
      if (loadedTimeoutRef.current) clearTimeout(loadedTimeoutRef.current);
    };
  }, [fbx, onLoaded]);

  // 🧠 Animate head movement smoothly
  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);

    if (headRef.current) {
      const maxTiltX = 1.2; // Up/down range
      const maxTiltY = 2.0; // Left/right range

      // No clamp → use full screen range
      const targetRotX = headBaseRotation.current.x + mouse.current.y * maxTiltX;
      const targetRotY = headBaseRotation.current.y + mouse.current.x * maxTiltY;

      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetRotX,
        0.15 // responsiveness
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetRotY,
        0.15
      );
    }
  });

  return <primitive object={fbx} />;
}
