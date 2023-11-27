import * as THREE from "three";

export default class CreateRole {
  constructor(_global) {
    this.Global = _global;

    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.Global.Scene.add(cube);
  }
}
