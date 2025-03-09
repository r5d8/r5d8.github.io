// This file contains the JavaScript code for rendering a 3D logo using Three.js.

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.module.js';

let scene, camera, renderer, logo;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TextGeometry('Your Logo', {
        font: new THREE.FontLoader().load('path/to/font.json'), // Load your font here
        size: 1,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const material = new THREE.MeshStandardMaterial({ color: 0x00ffa2 });
    logo = new THREE.Mesh(geometry, material);
    scene.add(logo);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    logo.rotation.x += 0.01;
    logo.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();