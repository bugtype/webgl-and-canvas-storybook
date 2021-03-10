//@ts-nocheck
import React from 'react';
import * as THREE from 'three';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbStrToHex(rgbStr) {
  const rgba = rgbStr.match(/\d+/g);
  const r = Number(rgba[0]);
  const g = Number(rgba[1]);
  const b = Number(rgba[2]);

  return parseInt(
    componentToHex(r) + componentToHex(g) + componentToHex(b),
    16
  );
}

export class Square2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshStandardMaterial({
      color: rgbStrToHex(this.props.color),
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    //
    const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
    camera.position.z = 2;
    console.log(this.props);
    var animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += this.props.speed;
      cube.rotation.y += this.props.speed;
      cube.rotation.z += this.props.speed;
      cube.material = new THREE.MeshStandardMaterial({
        color: rgbStrToHex(this.props.color),
      });
      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
