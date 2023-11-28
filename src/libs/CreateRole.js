import * as THREE from "three";

export default class CreateRole {
  constructor(_global) {
    this.Global = _global;
    this.RoleGroup = new THREE.Group();
    this.Global.Scene.add(this.RoleGroup);

    let headGeom = new THREE.BoxGeometry(1, 1, 1);
    let headMater = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    let headMesh = new THREE.Mesh(headGeom, headMater);
    headMesh.position.set(0, 1.5, 0);

    let bodyGeom = new THREE.BoxGeometry(2, 2, 1);
    let bodyMater = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let bodyMesh = new THREE.Mesh(bodyGeom, bodyMater);

    this.LeftArmGroup = new THREE.Group();
    let leftArmGeom = new THREE.BoxGeometry(1, 2, 1);
    let leftArmMater = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    let leftArmMesh = new THREE.Mesh(leftArmGeom, leftArmMater);
    leftArmMesh.position.set(0, -0.5, 0);
    this.LeftArmGroup.add(leftArmMesh);
    this.LeftArmGroup.position.set(-1.5, 0.5, 0);
    this.LeftArmGroup.rotateX(-Math.PI / 2);

    this.RightArmGroup = new THREE.Group();
    let rightArmGeom = new THREE.BoxGeometry(1, 2, 1);
    let rightArmMater = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    let rightArmMesh = new THREE.Mesh(rightArmGeom, rightArmMater);
    rightArmMesh.position.set(0, -0.5, 0);
    this.RightArmGroup.add(rightArmMesh);
    this.RightArmGroup.position.set(1.5, 0.5, 0);
    this.RightArmGroup.rotateX(-Math.PI / 2);

    this.LeftLegGroup = new THREE.Group();
    let leftLegGeom = new THREE.BoxGeometry(1, 2, 1);
    let leftLegMater = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    let leftLegMesh = new THREE.Mesh(leftLegGeom, leftLegMater);
    leftLegMesh.position.set(0, -1, 0);
    this.LeftLegGroup.add(leftLegMesh);
    this.LeftLegGroup.position.set(-0.5, -1, 0);
    this.LeftLegGroup.rotateX(Math.PI / 4);

    this.RightLegGroup = new THREE.Group();
    let rightLegGeom = new THREE.BoxGeometry(1, 2, 1);
    let rightLegMater = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    let rightLegMesh = new THREE.Mesh(rightLegGeom, rightLegMater);
    rightLegMesh.position.set(0, -1, 0);
    this.RightLegGroup.add(rightLegMesh);
    this.RightLegGroup.position.set(0.5, -1, 0);
    this.RightLegGroup.rotateX(-Math.PI / 4);

    this.RoleGroup.add(headMesh);
    this.RoleGroup.add(bodyMesh);
    this.RoleGroup.add(this.LeftArmGroup);
    this.RoleGroup.add(this.RightArmGroup);
    this.RoleGroup.add(this.LeftLegGroup);
    this.RoleGroup.add(this.RightLegGroup);

    this.Global.FunctionMap.set("role", this.Role);
  }

  Role = () => {};
}
