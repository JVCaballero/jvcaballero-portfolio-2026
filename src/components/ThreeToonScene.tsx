import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface ThreeToonSceneProps {
  interactive?: boolean;
  className?: string;
  intensity?: number;
}

export const ThreeToonScene: React.FC<ThreeToonSceneProps> = ({
  interactive = true,
  className = 'w-full h-full',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 9;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting (Theme-reactive)
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x1e293b : 0xffffff,
      isDark ? 1.2 : 0.7
    );
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(
      isDark ? 0x818cf8 : 0xffffff,
      isDark ? 1.5 : 1.2
    );
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(
      isDark ? 0x38bdf8 : 0xbae6fd,
      isDark ? 1.1 : 0.8
    );
    dirLight2.position.set(-5, -4, 4);
    scene.add(dirLight2);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Toon Materials based on Design System & Current Theme
    const primaryColor = isDark ? 0x818cf8 : 0x3525cd;
    const secondaryColor = isDark ? 0x6366f1 : 0x2e5bff;
    const accentColor = isDark ? 0x38bdf8 : 0x0ea5e9;
    const tertiaryColor = isDark ? 0xc084fc : 0x6366f1;

    const primaryMaterial = new THREE.MeshToonMaterial({
      color: primaryColor,
      wireframe: false,
    });

    const secondaryMaterial = new THREE.MeshToonMaterial({
      color: secondaryColor,
      wireframe: false,
    });

    const accentMaterial = new THREE.MeshToonMaterial({
      color: accentColor,
      wireframe: false,
    });

    const tertiaryMaterial = new THREE.MeshToonMaterial({
      color: tertiaryColor,
      wireframe: false,
    });

    // Geometries
    const geometries = [
      new THREE.IcosahedronGeometry(0.9, 0),
      new THREE.TorusGeometry(0.75, 0.22, 16, 80),
      new THREE.OctahedronGeometry(0.85, 0),
      new THREE.CylinderGeometry(0.4, 0.4, 1.1, 24),
      new THREE.DodecahedronGeometry(0.7, 0),
    ];

    interface AnimatedMesh extends THREE.Mesh {
      userData: {
        rotationSpeedX: number;
        rotationSpeedY: number;
        rotationSpeedZ: number;
        floatSpeed: number;
        offset: number;
        baseY: number;
        baseX: number;
      };
    }

    const meshes: AnimatedMesh[] = [];

    // Instantiate 14 floating objects
    for (let i = 0; i < 14; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const matChoice = i % 4;
      const mat =
        matChoice === 0
          ? primaryMaterial
          : matChoice === 1
          ? secondaryMaterial
          : matChoice === 2
          ? accentMaterial
          : tertiaryMaterial;

      const mesh = new THREE.Mesh(geo, mat) as unknown as AnimatedMesh;

      const posX = (Math.random() - 0.5) * 11;
      const posY = (Math.random() - 0.5) * 8.5;
      const posZ = (Math.random() - 0.5) * 5;

      mesh.position.set(posX, posY, posZ);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      const scale = Math.random() * 0.45 + 0.35;
      mesh.scale.setScalar(scale);

      mesh.userData = {
        rotationSpeedX: (Math.random() - 0.5) * 0.02,
        rotationSpeedY: Math.random() * 0.025 + 0.005,
        rotationSpeedZ: (Math.random() - 0.5) * 0.015,
        floatSpeed: Math.random() * 0.006 + 0.002,
        offset: Math.random() * Math.PI * 2,
        baseY: posY,
        baseX: posX,
      };

      group.add(mesh);
      meshes.push(mesh);
    }

    // Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse follow interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      group.rotation.y = targetX * 0.6;
      group.rotation.x = -targetY * 0.6;

      const time = Date.now() * 0.0015;

      // Animate individual pieces
      meshes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotationSpeedX;
        mesh.rotation.y += mesh.userData.rotationSpeedY;
        mesh.rotation.z += mesh.userData.rotationSpeedZ;
        mesh.position.y =
          mesh.userData.baseY +
          Math.sin(time + mesh.userData.offset) * (mesh.userData.floatSpeed * 60);
        mesh.position.x =
          mesh.userData.baseX +
          Math.cos(time * 0.7 + mesh.userData.offset) * 0.15;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometries.forEach((g) => g.dispose());
      primaryMaterial.dispose();
      secondaryMaterial.dispose();
      accentMaterial.dispose();
      tertiaryMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive, isDark]);

  return <div ref={containerRef} className={className} id="threejs-canvas-wrapper" />;
};
