<template>
  <el-breadcrumb class="app-breadcrumb" separator="♥♥♥" style="opacity:0;height:0px;backgroundColor:rgba(62, 218, 153, 1);borderRadius:4px;padding:0px 20px 0px 20px;boxShadow:0px 0px 1px;borderWidth:0px;borderStyle:dotted solid double dashed;borderColor:rgba(255, 255, 255, 1);">
    <transition-group name="breadcrumb" class="box" :style="2==1?'justifyContent:flex-start;':2==2?'justifyContent:center;':'justifyContent:flex-end;'">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.name }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.name }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
import { generateTitle } from '@/utils/i18n'
export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
    this.breadcrumbStyleChange()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      // only show routes with meta.title
      let route = this.$route
      let matched = route.matched.filter(item => item.meta)
      const first = matched[0]
      matched = [{ path: '/index' }].concat(matched)

      this.levelList = matched.filter(item => item.meta)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Index'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    },
    breadcrumbStyleChange(val) {
      this.$nextTick(()=>{
        document.querySelectorAll('.app-breadcrumb .el-breadcrumb__separator').forEach(el=>{
          el.innerText = "♥♥♥"
          el.style.color = "rgba(242, 214, 52, 1)"
        })
        document.querySelectorAll('.app-breadcrumb .el-breadcrumb__inner a').forEach(el=>{
          el.style.color = "rgba(1, 5, 13, 1)"
        })
        document.querySelectorAll('.app-breadcrumb .el-breadcrumb__inner .no-redirect').forEach(el=>{
          el.style.color = "rgba(255, 255, 255, 1)"
        })

        let str = "vertical"
        if("vertical" === str) {
          let headHeight = "60px"
          headHeight = parseInt(headHeight) + 10 + 'px'
          document.querySelectorAll('.app-breadcrumb').forEach(el=>{
            el.style.marginTop = headHeight
          })
        }

      })
    },
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  display: block;
  font-size: 14px;
  line-height: 50px;

  .box {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
