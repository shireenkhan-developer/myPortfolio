'use client';

import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// @ts-ignore - maath doesn't have types
import * as random from 'maath/random/dist/maath-random.esm';

const StarField = (props: any) => {
  const ref = useRef<any>();
  
  // Pre-generate sphere data immediately for instant load
  const sphere = useMemo(() => {
    try {
      // Slightly reduced for less congestion - 6500 stars with wider radius
      const count = 6500;
      const radius = 1.6;
      
      if (!isFinite(radius) || radius <= 0 || !isFinite(count) || count <= 0) {
        return new Float32Array(0);
      }
      
      const data = random.inSphere(new Float32Array(count), { radius });
      
      // Validate sphere data to prevent NaN errors
      if (!data || data.length === 0 || !isFinite(data[0])) {
        return new Float32Array(0);
      }
      
      // Validate all values and replace NaN with 0
      let hasInvalid = false;
      for (let i = 0; i < data.length; i++) {
        if (!isFinite(data[i])) {
          data[i] = 0;
          hasInvalid = true;
        }
      }
      
      // If too many invalid values, regenerate
      if (hasInvalid) {
        const validData = random.inSphere(new Float32Array(count), { radius });
        for (let i = 0; i < validData.length; i++) {
          if (!isFinite(validData[i])) {
            validData[i] = (Math.random() - 0.5) * radius * 0.1; // Small random valid value
          }
        }
        return validData;
      }
      
      return data;
    } catch (error) {
      console.error('Error generating starfield:', error);
      // Return a valid minimal sphere on error
      const fallback = new Float32Array(3000);
      for (let i = 0; i < fallback.length; i += 3) {
        const angle = (i / fallback.length) * Math.PI * 2;
        const dist = Math.random() * 1.6;
        fallback[i] = Math.cos(angle) * dist;
        fallback[i + 1] = Math.sin(angle) * dist;
        fallback[i + 2] = (Math.random() - 0.5) * 1.6;
      }
      return fallback;
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current && isFinite(delta)) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  if (!sphere || sphere.length === 0) {
    return null;
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarCanvas;

