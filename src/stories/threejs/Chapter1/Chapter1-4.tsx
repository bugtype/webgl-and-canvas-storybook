//@ts-nocheck
import React from 'react';
import * as THREE from 'three';

export class Chapter1_4 extends React.Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xeeeeee));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // 디버거용 축
    var axes = new THREE.AxisHelper(100);
    scene.add(axes);

    // 평면
    var planGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
    var planMaterial = new THREE.MeshLambertMaterial({ color: 0xccccccc });
    var plane = new THREE.Mesh(planGeometry, planMaterial);

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    plane.receiveShadow = true;

    scene.add(plane);
    // 정사각형
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    cube.castShadow = true;

    scene.add(cube);

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0x7777ff,
      wireframe: true,
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    sphere.castShadow = true;

    scene.add(sphere);

    // 분리
    this.makeSpotLight(scene);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    var step = 0;
    function renderScene() {
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      cube.rotation.z += 0.02;

      step += 0.04;

      sphere.position.x = 20 + 10 * Math.cos(step);
      sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

      requestAnimationFrame(renderScene);
      renderer.render(scene, camera);
    }

    this.mount.appendChild(renderer.domElement);
    renderScene();
  }

  makeSpotLight(scene: THREE.Scene) {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
