import React, { useEffect } from 'react';
import * as THREE from 'three';

const ParticlesAnimation = () => {
  useEffect(() => {
    let SEPARATION = 100,
      AMOUNTX = 50,
      AMOUNTY = 50;
    let container;
    let camera, scene, renderer;
    let particles = [];
    let count = 0;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const init = () => {
      container = document.createElement('div');
      container.id = 'particles';
      container.className = 'particles';

      const heroSection = document.getElementById('homepage-hero');
      if (heroSection) {
        heroSection.appendChild(container);
      }

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;

      scene = new THREE.Scene();

      // Create particles
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.PointsMaterial({
        color: 0xC41E3A,
        size: 5,
        transparent: true,
        opacity: 0.8
      });

      const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
      let i = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
          positions[i + 1] = 0; // y
          positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z
          i += 3;
        }
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Use WebGLRenderer instead of CanvasRenderer
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // transparent background
      container.appendChild(renderer.domElement);

      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('touchstart', onDocumentTouchStart, false);
      document.addEventListener('touchmove', onDocumentTouchMove, false);
      window.addEventListener('resize', onWindowResize, false);
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onDocumentTouchStart = (event) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const onDocumentTouchMove = (event) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Update particles
      const positions = particles.geometry.attributes.position.array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
            (Math.sin((iy + count) * 0.5) * 50); // Update Y position
          i += 3;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.1;
    };

    init();
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('touchstart', onDocumentTouchStart);
      document.removeEventListener('touchmove', onDocumentTouchMove);
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
      scene.remove(particles);
      particles.geometry.dispose();
      particles.material.dispose();
      renderer.dispose();
    };
  }, []);

  return null;
};

export default ParticlesAnimation;