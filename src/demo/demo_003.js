import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


// 将渲染器添加到页面中
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 200, 0, 300 );
camera.lookAt( 200, 0, 0 );

// 创建场景
const scene = new THREE.Scene();

// 创建文本对象
new FontLoader().load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json?url', (font)=>{

    const textGeometry = new TextGeometry('Hello three.js!', {
      font: font,
      size: 50,
      height: 1,
      curveSegments: 12,
      bevelEnabled: false,

    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);
    // 将文本对象添加到场景中
    // 渲染场景
    renderer.render(scene, camera);
})










