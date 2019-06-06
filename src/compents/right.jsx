/* eslint-disable no-useless-constructor */
import '../App.css';
import React, { Component } from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';
class RightSide extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.initThree();
}
showType=()=>{
  let selectValue = this.props.selectValue;
  //显示
  // this.initThree()
}
initThree=()=>{
  var scene = new THREE.Scene();
        
  var camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
  
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize((window.innerWidth-200), window.innerHeight);
  document.getElementsByClassName('rightside')[0].appendChild(renderer.domElement);
  //立方体
  var geometry = new THREE.CubeGeometry(1,1,2);
  //平方体
 
  //圆柱体
  var colordata = null;
  var selectValue = this.props.selectValue;
  if(selectValue == 'Square'){
    colordata={color: 0x00ff00}
  }else if(selectValue == 'Rectangle'){
    colordata={color: 0xffffff}
  }else{
    colordata={color: 0xf2f2f2}
  }
  var material = new THREE.MeshBasicMaterial(colordata);
  var cube = new THREE.Mesh(geometry, material); 
  scene.add(cube);
  camera.position.z = 5;
  function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
  }
  render();
}
  render() {
    return <div className='rightside' onClick={this.showType}>
       </div>;
  }
}

export default RightSide;
