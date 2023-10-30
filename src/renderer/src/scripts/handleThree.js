import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls";
import {MTLLoader} from "three/addons/loaders/MTLLoader";
import {OBJLoader} from "three/addons/loaders/OBJLoader";

let scene, camera, renderer, controls;

export const initThree = (canvas) => {
  // 实例化对象
  scene = new THREE.Scene()
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    // 抗锯齿
    antialias: true
  })
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  controls = new OrbitControls(camera, renderer.domElement)

  // 背景
  scene.background = new THREE.Color('#eee')
  // 雾
  scene.fog = new THREE.Fog('#eee', 20, 100)

  // 启用阴影映射
  renderer.shadowMap.enabled = true

  // 摄像机位置
  cameraReset()

  // 控制器阻尼感
  controls.enableDamping = true
}

export const resizeRendererToDisplaySize = (renderer) => {
  const canvas = renderer.domElement
  var width = window.innerWidth
  var height = window.innerHeight
  var canvasPixelWidth = canvas.width / window.devicePixelRatio
  var canvasPixelHeight = canvas.height / window.devicePixelRatio

  const needResize =
    canvasPixelWidth !== width || canvasPixelHeight !== height
  if (needResize) {
    renderer.setSize(width, height, false)
  }
  return needResize
}

export const animate = () => {
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
  }
}

// 地板
export const loadFloor = () => {
  let floorGeometry = new THREE.PlaneGeometry(8000, 8000)
  let floorMaterial = new THREE.MeshPhongMaterial({
    color: 0x857ebb,
    shininess: 0,
  })

  let floor = new THREE.Mesh(floorGeometry, floorMaterial)
  floor.rotation.x = -0.5 * Math.PI
  floor.receiveShadow = true
  floor.position.y = -0.001
  scene.add(floor)
}

// 光源
export const loadLight = () => {
  const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
  hemLight.position.set(0, 20, 20)
  scene.add(hemLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
  dirLight.position.set(10, 8, 5)
  dirLight.castShadow = true
  dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
  scene.add(dirLight)
}

// 模型
export const loadModel = (objPath, mtlPath) => {
  const rsPath = window.api.getRsPath();

  // 加载mtl材质
  const mtlLoader = new MTLLoader()
  mtlLoader.setCrossOrigin("Anonymous");
  mtlLoader.setResourcePath(rsPath + '/textures/');
  mtlLoader.load(mtlPath, (mtl) => {
    mtl.preload();

    // 加载obj模型
    const objLoader = new OBJLoader()
    objLoader.setMaterials(mtl);
    objLoader.load(objPath, (obj) => {
      scene.add(obj);
    })
  })
}

// 网格
export const loadGrid = () => {
  const gridHelper = new THREE.GridHelper(10, 10)
  scene.add(gridHelper)
}

// 重置视角
export const cameraReset = () => {
  camera.position.x = 0
  camera.position.y = 15
  camera.position.z = 15
}
