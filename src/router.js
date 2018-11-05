import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./view/home/index.vue"; // 首页
import about from "./view/about/index.vue"; // 关于谷主
import skills from "./view/skills/index.vue"; // 十八般武艺
import holyland from "./view/holyland/index.vue"; // 用武圣地
import formula from "./view/formula/index.vue"; // 口诀心法
import tools from "./view/tools/index.vue"; // 兵器谱


Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component: home,
        meta: {
            keepAlive: true, // 需要缓存
            title: '大侠谷'
        }
    },
    {
        path:"/about",
        component: about,
        meta: {
            keepAlive: true, // 需要缓存
            title: '关于谷主'
        }
    },
    {
        path:"/skills",
        component: skills,
        meta: {
            keepAlive: true, // 需要缓存
            title: '十八般武艺'
        }
    },
    {
        path: "/holyland",
        component: holyland,
        meta: {
            keepAlive: true, // 需要缓存
            title: '用武圣地'
        }
    },
    {
        path: "/formula",
        component: formula,
        meta: {
            keepAlive: true, // 需要缓存
            title: '口诀心法'
        }
    },
    {
        path: "/tools",
        component: tools,
        meta: {
            keepAlive: true, // 需要缓存
            title: '兵器谱'
        }
    }
]

var router =  new VueRouter({
    routes
})

export default router;