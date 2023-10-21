import { createApp } from 'vue'
import App from './App.vue'

// 导入插件
import router from './router'

// 创建app实例
const app = createApp(App)

// 使用插件
app.use(router)

// 挂载app
app.mount('#app')
