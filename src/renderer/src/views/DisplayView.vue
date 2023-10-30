<template>
  <div>
    <div id="menu">
      <el-menu
        :collapse="true"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="modelDialogVisible = true">
          <el-icon>
            <Wallet/>
          </el-icon>
          <template #title>数字藏品</template>
        </el-menu-item>
<!--
        <el-menu-item index="2" @click="chatDialogVisible = true">
          <el-icon>
            <ChatSquare/>
          </el-icon>
          <template #title>聊天</template>
        </el-menu-item>
-->
        <el-menu-item index="3" @click="cameraReset">
          <el-icon>
            <VideoCamera/>
          </el-icon>
          <template #title>视角复位</template>
        </el-menu-item>
        <el-menu-item index="4" @click="ElMessageBox.alert(
  '旋转：按住[鼠标左键]拖动画面<br/>缩放：滚动鼠标滚轮<br/>平移：按住[鼠标右键]拖动画面',
  '操作说明', { dangerouslyUseHTMLString: true, } )">
          <el-icon>
            <Pointer/>
          </el-icon>
          <template #title>操作说明</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div>
      <canvas id="three"></canvas>
    </div>
    <el-dialog
      v-model="modelDialogVisible"
      title="数字藏品柜"
      width="80%"
      align-center
      draggable
    >
      <el-tabs style="height: auto">
        <el-tab-pane label="春季 Spring">
          <el-space wrap>
            <el-card class="modelCard" @click="selectModel(lichun1Obj, lichun1Mtl)">
              <img src="../assets/avatar/lichun1.gif" width="100" height="100"/><br/>
              <p>立春</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(yushui1Obj, yushui1Mtl)">
              <img src="../assets/avatar/yushui1.gif" width="100" height="100"/><br/>
              <p>雨水</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(jingzhe1Obj, jingzhe1Mtl)">
              <img src="../assets/avatar/jingzhe1.gif" width="100" height="100"/><br/>
              <p>惊蛰</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(chunfen1Obj, chunfen1Mtl)">
              <img src="../assets/avatar/chunfen1.gif" width="100" height="100"/><br/>
              <p>春分</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(qingming1Obj, qingming1Mtl)">
              <img src="../assets/avatar/qingming1.gif" width="100" height="100"/><br/>
              <p>清明</p>
            </el-card>
          </el-space>
        </el-tab-pane>
        <el-tab-pane label="夏季 Summer">
          <el-space wrap>
            <el-card class="modelCard" @click="selectModel(lixia1Obj, lixia1Mtl)">
              <img src="../assets/avatar/lixia1.gif" width="100" height="100"/><br/>
              <p>立夏</p>
            </el-card>
          </el-space>
        </el-tab-pane>
        <el-tab-pane label="秋季 Autumn">
          <el-space wrap>
            <el-card class="modelCard" @click="selectModel(hanlu1Obj, hanlu1Mtl)">
              <img src="../assets/avatar/hanlu1.gif" width="100" height="100"/><br/>
              <p>寒露</p>
            </el-card>
          </el-space>
        </el-tab-pane>
        <el-tab-pane label="冬季 Winter"></el-tab-pane>
      </el-tabs>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="modelDialogVisible = false">关闭 Cancel</el-button>
      </span>
      </template>
    </el-dialog>
    <el-dialog
      v-model="chatDialogVisible"
      title="Chat"
      width="50%"
      align-center
      draggable
    >
      <span>It's a Dialog</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="chatDialogVisible = false">关闭 Cancel</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import * as THREE from 'three';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {ElMessageBox} from "element-plus";

import lichun1Obj from '../../../../resources/models/lichun1.obj?url'
import lichun1Mtl from '../../../../resources/models/lichun1.mtl?url'
import yushui1Obj from '../../../../resources/models/yushui1.obj?url'
import yushui1Mtl from '../../../../resources/models/yushui1.mtl?url'
import jingzhe1Obj from '../../../../resources/models/jingzhe1.obj?url'
import jingzhe1Mtl from '../../../../resources/models/jingzhe1.mtl?url'
import chunfen1Obj from '../../../../resources/models/chunfen1.obj?url'
import chunfen1Mtl from '../../../../resources/models/chunfen1.mtl?url'
import qingming1Obj from '../../../../resources/models/qingming1.obj?url'
import qingming1Mtl from '../../../../resources/models/qingming1.mtl?url'

import lixia1Obj from '../../../../resources/models/lixia1.obj?url'
import lixia1Mtl from '../../../../resources/models/lixia1.mtl?url'

import hanlu1Obj from '../../../../resources/models/hanlu1.obj?url'
import hanlu1Mtl from '../../../../resources/models/hanlu1.mtl?url'

const chatDialogVisible = ref(false)
const modelDialogVisible = ref(false)
let canvas, scene, camera, renderer, controls;

const initThree = () => {
  canvas = document.querySelector('#three')

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

const resizeRendererToDisplaySize = (renderer) => {
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

const animate = () => {
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
const loadFloor = () => {
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
const loadLight = () => {
  const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
  hemLight.position.set(0, 48, 0)
  scene.add(hemLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
  //光源等位置
  dirLight.position.set(-10, 8, -5)
  //可以产生阴影
  dirLight.castShadow = true
  dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
  scene.add(dirLight)
}

// 模型
const loadModel = (objPath, mtlPath) => {
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
const loadGrid = () => {
  const gridHelper = new THREE.GridHelper(10, 10)
  scene.add(gridHelper)
}

// 重置视角
const cameraReset = () => {
  camera.position.x = 0
  camera.position.y = 15
  camera.position.z = 15
}

const selectModel = (objPath, mtlPath) => {
  modelDialogVisible.value = false;
  init();
  loadModel(objPath, mtlPath);
}

const init = () => {
  initThree();
  loadGrid();
  loadLight();
  // loadFloor();
  animate();
}

onMounted(() => {
  init();
  loadModel(lichun1Obj, lichun1Mtl);
});
</script>

<style scoped>
#three {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
}

#menu {
  position: fixed;
  z-index: 9999;
  left: 0;
  height: 100%;
  background-color: #121212;
  color: white;
}

el-menu {
  width: 200px;
  min-height: 400px;
}

.modelCard {
  width: 150px;
  height: auto;
  padding: 0;
}
</style>

