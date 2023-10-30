<template>
  <div>
    <div id="menu">
      <el-menu
        :collapse="true"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="modelDialogVisible = true">
          <el-icon><Wallet/></el-icon>
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
          <el-icon><VideoCamera/></el-icon>
          <template #title>视角复位</template>
        </el-menu-item>
        <el-menu-item index="4" @click="ElMessageBox.alert(
  '旋转：按住[鼠标左键]拖动画面<br/>缩放：滚动鼠标滚轮<br/>平移：按住[鼠标右键]拖动画面',
  '操作说明', { dangerouslyUseHTMLString: true, } )">
          <el-icon><Pointer/></el-icon>
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
            <el-card class="modelCard" @click="selectModel(models.lichun1)">
              <img src="../assets/avatar/lichun1.gif" width="100" height="100"/><br/>
              <p>立春</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(models.yushui1)">
              <img src="../assets/avatar/yushui1.gif" width="100" height="100"/><br/>
              <p>雨水</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(models.jingzhe1)">
              <img src="../assets/avatar/jingzhe1.gif" width="100" height="100"/><br/>
              <p>惊蛰</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(models.chunfen1)">
              <img src="../assets/avatar/chunfen1.gif" width="100" height="100"/><br/>
              <p>春分</p>
            </el-card>
            <el-card class="modelCard" @click="selectModel(models.qingming1)">
              <img src="../assets/avatar/qingming1.gif" width="100" height="100"/><br/>
              <p>清明</p>
            </el-card>
          </el-space>
        </el-tab-pane>
        <el-tab-pane label="夏季 Summer">
          <el-space wrap>
            <el-card class="modelCard" @click="selectModel(models.lixia1)">
              <img src="../assets/avatar/lixia1.gif" width="100" height="100"/><br/>
              <p>立夏</p>
            </el-card>
          </el-space>
        </el-tab-pane>
        <el-tab-pane label="秋季 Autumn">
          <el-space wrap>
            <el-card class="modelCard" @click="selectModel(models.hanlu1)">
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
import {ElMessageBox} from "element-plus";
import * as models from "../scripts/importModels"
import * as handleThree from "../scripts/handleThree"

const chatDialogVisible = ref(false)
const modelDialogVisible = ref(false)

const selectModel = (model) => {
  modelDialogVisible.value = false;
  init();
  handleThree.loadModel(model.obj, model.mtl);
}

const init = () => {
  const canvas = document.querySelector('#three');
  handleThree.initThree(canvas);
  handleThree.loadGrid();
  handleThree.loadLight();
  // handleThree.loadFloor();
  handleThree.animate();
}

onMounted(() => {
  selectModel(models.lichun1)
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

