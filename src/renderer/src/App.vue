<template>
  <div>
    <canvas id="three"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {PointLight} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GridHelper} from "three";

import mtlPath from '../../../resources/models/1.mtl?url'
import objPath from '../../../resources/models/1.obj?url'

export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color('#aaa')
      const canvas = document.querySelector('#three')
      const renderer = new THREE.WebGLRenderer({canvas, antialias: true})

      // 摄像机
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      // camera.position.x = 10
      // camera.position.y = 10
      camera.position.z = 20

      const rsPath = window.api.getRsPath();
      // const mtlPath = rsPath + '/models/1.mtl'
      // const objPath = rsPath + '/models/1.obj'

      console.log(rsPath)
      console.log(window.sysInfo.env)
      console.log(window.sysInfo.cwd)

      // 加载mtl材质
      const mtlLoader = new MTLLoader()
      mtlLoader.setCrossOrigin("Anonymous")
      mtlLoader.setResourcePath(rsPath + '/textures/')
      mtlLoader.load(mtlPath, (mtl) => {
        mtl.preload()
        // 加载obj模型
        const objLoader = new OBJLoader()
        objLoader.setMaterials(mtl)
        objLoader.load(objPath, (obj) => {
          scene.add(obj)
        })
      })

      // 灯光
      // const light = new PointLight(0xffffbb, 1)
      // light.position.set(10, 10, 10)
      // scene.add(light)

      // 控制器
      const controls = new OrbitControls(camera, renderer.domElement);
      // 阻尼感
      controls.enableDamping = true

      // 网格
      const gridHelper = new GridHelper(10, 10)
      scene.add(gridHelper)

      // 地板
      // let floorGeometry = new THREE.PlaneGeometry(3000, 3000)
      // let floorMaterial = new THREE.MeshPhongMaterial({color: 0xff0000})
      // let floor = new THREE.Mesh(floorGeometry, floorMaterial)
      // floor.rotation.x = -0.5 * Math.PI
      // floor.receiveShadow = true
      // floor.position.y = -1
      // scene.add(floor)

      // 光源
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
      //光源等位置
      dirLight.position.set(-10, 8, -5)
      //可以产生阴影
      dirLight.castShadow = true
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
      scene.add(dirLight)

      renderer.shadowMap.enabled = true;

      const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      hemLight.position.set(0, 48, 0)
      scene.add(hemLight)

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement
        var width = window.innerWidth
        var height = window.innerHeight
        var canvasPixelWidth = canvas.width / window.devicePixelRatio
        var canvasPixelHeight = canvas.height / window.devicePixelRatio

        const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height
        if (needResize) {
          renderer.setSize(width, height, false)
        }
        return needResize
      }

      function animate() {
        controls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animate)

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement
          camera.aspect = canvas.clientWidth / canvas.clientHeight
          camera.updateProjectionMatrix()
        }
      }

      animate()
    },
  },
}
</script>

<style scoped>
#three {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>

