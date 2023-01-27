import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5; // value from -0.5 to 0.5
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: "#03fc24" })
);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

const anim = () => {
  const elapsedTime = clock.getElapsedTime();

  controls.update();
  r;
  renderer.render(scene, camera);

  window.requestAnimationFrame(anim);
};

anim();
