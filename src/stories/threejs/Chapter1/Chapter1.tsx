//@ts-nocheck
import React from 'react';
import * as THREE from 'three';

export class Chapter1 extends React.Component {
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

    var axes = new THREE.AxisHelper(20);
    scene.add(axes);

    // camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
