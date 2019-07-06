import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Teacher from './views/nav1/Teacher.vue'
import Student from './views/nav1/Student.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav2/Page6.vue'
import Page7 from './views/nav3/Page7.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页' , hidden: true },
            { path: '/Teacher', component: Teacher, name: '教师管理'  },
            { path: '/Student', component: Student, name: '学生管理'  },
            // { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '签到查询',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/PublishAndSignInSearch', component: Page4, name: '签到发布查询' },
            { path: '/HistorySignInSearch', component: Page5, name: '历史签到查询' },
			{ path: '/StudentSignInSearch', component: Page6, name: '学生签到查询' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '课程管理',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/ClassSearch', component: Page7, name: '课程查询' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
		hidden: true,
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;