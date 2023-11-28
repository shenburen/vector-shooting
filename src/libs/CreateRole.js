import * as THREE from "three";

export default class CreateRole {
  constructor(_global) {
    this.Global = _global;

    let headGeom = new THREE.BoxGeometry(1, 1, 1);
    let headMater = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    let headMesh = new THREE.Mesh(headGeom, headMater);
    headMesh.position.set(0, 1.5, 0);

    let bodyGeom = new THREE.BoxGeometry(2, 2, 1);
    let bodyMater = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let bodyMesh = new THREE.Mesh(bodyGeom, bodyMater);

    let leftArmGeom = new THREE.BoxGeometry(1, 2, 1);
    let leftArmMater = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    let leftArmMesh = new THREE.Mesh(leftArmGeom, leftArmMater);
    leftArmMesh.rotateX(Math.PI / 2);
    leftArmMesh.position.set(-1.5, 0.5, 0.5);

    let rightArmGeom = new THREE.BoxGeometry(1, 2, 1);
    let rightArmMater = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    let rightArmMesh = new THREE.Mesh(rightArmGeom, rightArmMater);
    rightArmMesh.rotateX(Math.PI / 2);
    rightArmMesh.position.set(1.5, 0.5, 0.5);

    let leftLegGeom = new THREE.BoxGeometry(1, 2, 1);
    let leftLegMater = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    let leftLegMesh = new THREE.Mesh(leftLegGeom, leftLegMater);
    leftLegMesh.position.set(-0.5, -2, 0);

    let rightLegGeom = new THREE.BoxGeometry(1, 2, 1);
    let rightLegMater = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    let rightLegMesh = new THREE.Mesh(rightLegGeom, rightLegMater);
    rightLegMesh.position.set(0.5, -2, 0);

    this.Global.Scene.add(headMesh);
    this.Global.Scene.add(bodyMesh);
    this.Global.Scene.add(leftArmMesh);
    this.Global.Scene.add(rightArmMesh);
    this.Global.Scene.add(leftLegMesh);
    this.Global.Scene.add(rightLegMesh);
  }
}
