import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// 将渲染器添加到页面中
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 10, 0, 10 );
camera.lookAt( 0.5, 0, 0 );

// 创建场景
const scene = new THREE.Scene();
const loader = new GLTFLoader();

loader.load( require('../assets/glb/shiba.glb?url'), function ( gltf ) {

	scene.add( gltf.scene );
  renderer.render(scene, camera)


}, undefined, function ( error ) {

	console.error( error );

} );








