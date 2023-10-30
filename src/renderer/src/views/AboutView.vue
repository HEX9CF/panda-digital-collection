<template>
  <div id="about">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="制作人员" name="1">
            <h2>制作人员</h2>
            <el-row>
              <el-col :span="12">
                <img src="../assets/stu-logo-white.png" height="100" style="padding: 25px"/>
              </el-col>
              <el-col :span="12">
                <div>
                  <p style="text-align: left">
                    程序设计：郑智豪
                    <br/>
                    模型制作：祝晓成
                    <br/>
                    项目策划：王子怡、陈雪晴
                    <br/>
                    艺术创作：祝晓成、李家红、黄凯晴、刘洋
                  </p>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="关于我们" name="2">
            <div>
              <h2>时韵共霁 言风译月</h2>
              <p class="chsPara">
                在国际气象界，二十四节气被誉为“中国的第五大发明”，本次项目就是围绕二十四节气所展开。
                以“时韵”为题，是指中国源远流长的传统时令，不仅体现了古代农耕社会长久积淀造就的生命逻辑和因时制宜的思想观；还带有着一种“天行有常、四时佳兴”的韵律之美。
              </p>
              <p class="chsPara">
                二十四节气不仅有着极高的文化价值，而且在现代社会对推动绿色生态发展也有着重要意义。关注到世界对人与自然和谐相处的问题日渐重视，我们选择深入挖掘传统之中的美学智慧，“言风译月”就是将气候节语推向世界注重生态文明的语境中去，从而达到“共霁和美”之效。“二十四节气”中蕴含着自然观，时间观，葆有丰富内涵，在我们的项目中，将会保留既中国文化的独特性，同时也与世界文化生动融合。
              </p>
              <p class="chsPara">
                “时韵共霁
                言风译月——多模态翻译中国传统时令节气文化实践研究”将为科学成果增加文化智慧。项目以多模态翻译为核心，致力推广和传播中国优秀传统文化，填补传统节气对外传播的空缺。通过融合文本模态、语音模态、视觉模态，实现时令节气文化翻译的图像叙事、视听叙事、超文本叙事，最终致力于提升中国形象，讲好中国故事，揭示人与自然和谐相处的密码、为推动地球生命共同体提供遵循。在对China
                Daily等网站多模态话语分析的基础上，我们去粗取精，设计和创新出一系列生动阐释时令节气文化内核的网站以及文创产品。
              </p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="版权声明" name="3">
            <div>
              <h2>版权声明</h2>
              <p class="chsPara">
                一、本软件的版权归属于作者，受到版权法和国际版权条约的保护。未经版权所有人书面授权许可，任何组织或个人不得以任何形式全部或部分地复制、转载、摘编、发行或网络传播本软件，否则将承担侵权责任。
              </p>
              <p class="chsPara">
                二、本软件仅供个人学习、研究或欣赏使用。未经版权所有人书面授权许可，任何单位或个人不得将本软件用于商业用途或盈利目的。
              </p>
              <p class="chsPara">
                三、本软件的音频文件和文本文件中所描述的所有人物、事件、地点、名称等，均是虚构的或经过改编的。任何与现实中的人物、事件、地点、名称等相似之处均属巧合。
              </p>
            </div>
          </el-collapse-item>
        </el-collapse>
        <!--<el-skeleton :rows="5" animated />-->
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.chsPara {
  text-indent: 2em;
  text-align: left;
  font-size: 14px;
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>

<script setup>
const title = "关于";
const smallTitle = "About";
</script>
