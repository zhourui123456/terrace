/**
 * Created by microsoft on 2016/4/11.
 */
<<<<<<< e1ebd22d9f2cee081726a00b4384250cf0698b28
=======
<<<<<<< e1ebd22d9f2cee081726a00b4384250cf0698b28
>>>>>>> 528
var app=angular.module('myApp',[],function($provide){
    $provide.factory('alldata',function(){
        return{
            fstdata:[
                {
                    id:1,
                    name:'个人中心',
                    nickname:'账户管理'
                },
                {
                    id:2,
                    name:'系统设置',
                    nickname:'权限管理'
                }
            ],
            secdata:[
                {
                    id:11,
                    parentid:1,
                    name:'个人信息',
                    page:'grxx.html'
                },
                {
                    id:12,
                    parentid:1,
                    name:'修改密码',
                    page:'xgmm.html'
                },
                {
                    id:21,
                    parentid:2,
                    name:'功能配置',
                    page:'gnpz.html'
                },
                {
                    id:22,
                    parentid:2,
                    name:'角色管理',
                    page:'jsgl.html'
                },
                {
                    id:23,
                    parentid:2,
                    name:'用户管理',
                    page:'yhgl.html'
                }
            ],
            thirdata:[
                {
                    ID:1,
                    parentid:23,
                    loginname:'zhangsan',
                    name:'张三',
                    role:'13管理员aaa',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:2,
                    parentid:23,
                    loginname:'lisi',
                    name:'李四',
                    role:'13管理员aaa',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:3,
                    parentid:23,
                    loginname:'wangwu',
                    name:'王五',
                    role:'13管理员aaa',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:4,
                    parentid:23,
                    loginname:'zhangchen',
                    name:'张晨',
                    role:'13管理员aaa',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:5,
                    parentid:23,
                    loginname:'liucheng',
                    name:'刘成',
                    role:'管理员',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:6,
                    parentid:23,
                    loginname:'liji',
                    name:'李继',
                    role:'13管理员aaa',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:7,
                    parentid:23,
                    loginname:'yuantao',
                    name:'袁涛',
                    role:'13管理',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:8,
                    parentid:23,
                    loginname:'wangjian',
                    name:'王建',
                    role:'管理员',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                }
            ],
            fourdata:[
                {
                    ID:1,
                    role:"管理员",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:2,
                    role:"管理员2",
                    state:"禁用",
                    orders:2,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:3,
                    role:"管理员",
                    state:"禁用",
                    orders:5,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:4,
                    role:"管理员2",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:5,
                    role:"管理员0",
                    state:"启用",
                    orders:2,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:6,
                    role:"管理员1",
                    state:"禁用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:7,
                    role:"管理员是",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:8,
                    role:"管理员0",
                    state:"启用",
                    orders:1,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:9,
                    role:"管理员2",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:10,
                    role:"管理2",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:11,
                    role:"管理员2",
                    state:"禁用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                }

            ]
        }
    })
<<<<<<< e1ebd22d9f2cee081726a00b4384250cf0698b28
=======
=======
/*app.factory('alldata', function () {
    return {
        fstdata:[
            {
                id:1,
                name:'个人中心',
                nickname:'账户管理',
                route:"personalCenter"
            },
            {
                id:2,
                name:'系统设置',
                nickname:'权限管理',
                route:"system"
            },
            {
                id:3,
                name:'学校',
                nickname:'学校管理',
                route:"school"
            }
        ],
        secdata:[
            {
                id:11,
                parentid:1,
                name:'个人信息',
                enName:"selfMsg",
                route:'personalCenter.selfMsg',
                routeUrl:'/selfMsg'
            },
            {
                id:31,
                parentid:3,
                name:'学校信息',
                enName:"manager",
                route:'school.manager',
                routeUrl:'/manager'
            },
            {
                id:12,
                parentid:1,
                name:'修改密码',
                enName:"amendPS",
                route:'personalCenter.amendPS',
                routeUrl:'/amendPS'
            },
            {
                id:21,
                parentid:2,
                name:'功能配置',
                enName:"seting",
                route:'system.seting',
                routeUrl:'/seting'
            },
            {
                id:22,
                parentid:2,
                name:'角色管理',
                enName:"role",
                route:'system.role',
                routeUrl:'/role'
            },
            {
                id:23,
                parentid:2,
                name:'用户管理',
                enName:"user",
                route:'system.user',
                routeUrl:'/user'
            }
        ],
        thirdata: [
            {
                ID: 1,
                parentid: 23,
                loginname: 'zhangsan',
                name: '张三',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 2,
                parentid: 23,
                loginname: 'lisi',
                name: '李四',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 3,
                parentid: 23,
                loginname: 'wangwu',
                name: '王五',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 4,
                parentid: 23,
                loginname: 'zhangchen',
                name: '张晨',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 5,
                parentid: 23,
                loginname: 'liucheng',
                name: '刘成',
                role: '管理员',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 6,
                parentid: 23,
                loginname: 'liji',
                name: '李继',
                role: '13管理员aaa',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 7,
                parentid: 23,
                loginname: 'yuantao',
                name: '袁涛',
                role: '13管理',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '启用',
                creattime: '2014-07-27 16:56'
            },
            {
                ID: 8,
                parentid: 23,
                loginname: 'wangjian',
                name: '王建',
                role: '管理员',
                telephone: '15098950322',
                email: '837990335@qq.com',
                state: '禁用',
                creattime: '2014-07-27 16:56'
            }
        ],
        fourdata: [
            {
                ID: 1,
                role: "管理员",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 2,
                role: "管理员2",
                state: "禁用",
                orders: 2,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 3,
                role: "管理员",
                state: "禁用",
                orders: 5,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 4,
                role: "管理员2",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 5,
                role: "管理员0",
                state: "启用",
                orders: 2,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 6,
                role: "管理员1",
                state: "禁用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 7,
                role: "管理员是",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 8,
                role: "管理员0",
                state: "启用",
                orders: 1,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 9,
                role: "管理员2",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 10,
                role: "管理2",
                state: "启用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            },
            {
                ID: 11,
                role: "管理员2",
                state: "禁用",
                orders: 0,
                creattime: '2014-07-27 16:35'
            }

        ],

    }
});*/
app.constant('alldata',{
    fstdata:[
        {
            id:1,
            name:'个人中心',
            nickname:'账户管理',
            route:"personalCenter"
        },
        {
            id:2,
            name:'系统设置',
            nickname:'权限管理',
            route:"system"
        },
        {
            id:3,
            name:'学校',
            nickname:'学校管理',
            route:"school"
        }
    ],
    secdata:[
        {
            id:11,
            parentid:1,
            name:'个人信息',
            enName:"selfMsg",
            route:'personalCenter.selfMsg',
            routeUrl:'/selfMsg'
        },
        {
            id:31,
            parentid:3,
            name:'学校信息',
            enName:"manager",
            route:'school.manager',
            routeUrl:'/manager'
        },
        {
            id:12,
            parentid:1,
            name:'修改密码',
            enName:"amendPS",
            route:'personalCenter.amendPS',
            routeUrl:'/amendPS'
        },
        {
            id:21,
            parentid:2,
            name:'功能配置',
            enName:"seting",
            route:'system.seting',
            routeUrl:'/seting'
        },
        {
            id:22,
            parentid:2,
            name:'角色管理',
            enName:"role",
            route:'system.role',
            routeUrl:'/role'
        },
        {
            id:23,
            parentid:2,
            name:'用户管理',
            enName:"user",
            route:'system.user',
            routeUrl:'/user'
        }
    ],
    thirdata:[
        {
            ID:1,
            parentid:23,
            loginname:'zhangsan',
            name:'张三',
            role:'13管理员aaa',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'启用',
            creattime:'2014-07-27 16:56'
        },
        {
            ID:2,
            parentid:23,
            loginname:'lisi',
            name:'李四',
            role:'13管理员aaa',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'禁用',
            creattime:'2014-07-27 16:56'
        },
        {
            ID:3,
            parentid:23,
            loginname:'wangwu',
            name:'王五',
            role:'13管理员aaa',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'启用',
            creattime:'2014-07-27 16:56'
        },
        {
            ID:4,
            parentid:23,
            loginname:'zhangchen',
            name:'张晨',
            role:'13管理员aaa',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'启用',
            creattime:'2014-07-27 16:56'
        },
        {
            ID:5,
            parentid:23,
            loginname:'liucheng',
            name:'刘成',
            role:'管理员',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'禁用',
            creattime:'2014-07-27 16:56'
        },
        {
            ID:6,
            parentid:23,
            loginname:'liji',
            name:'李继',
            role:'13管理员aaa',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'禁用',
            creattime:'2014-07-27 16:56'
        },
        {
            ID:7,
            parentid:23,
            loginname:'yuantao',
            name:'袁涛',
            role:'13管理',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'启用',
            creattime:'2014-07-27 16:56'
        },
        {
            ID:8,
            parentid:23,
            loginname:'wangjian',
            name:'王建',
            role:'管理员',
            telephone:'15098950322',
            email:'837990335@qq.com',
            state:'禁用',
            creattime:'2014-07-27 16:56'
        }
    ],
    fourdata:[
        {
            ID:1,
            role:"管理员",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:2,
            role:"管理员2",
            state:"禁用",
            orders:2,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:3,
            role:"管理员",
            state:"禁用",
            orders:5,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:4,
            role:"管理员2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:5,
            role:"管理员0",
            state:"启用",
            orders:2,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:6,
            role:"管理员1",
            state:"禁用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:7,
            role:"管理员是",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:8,
            role:"管理员0",
            state:"启用",
            orders:1,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:9,
            role:"管理员2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:10,
            role:"管理2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:11,
            role:"管理2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:12,
            role:"管理2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:13,
            role:"管理2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:14,
            role:"管理2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:15,
            role:"管理2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:16,
            role:"管理2",
            state:"启用",
            orders:0,
            creattime:'2014-07-27 16:35'
        },
        {
            ID:17,
            role:"管理员2",
            state:"禁用",
            orders:0,
            creattime:'2014-07-27 16:35'
        }

    ],
    fivedata: ['ID', '登录名', '真实姓名', '角色', '手机', '邮箱', '状态', '创建时间', '操作'],
    manage: ['管理员', '13管理', '13管理员aaa'],
    status: ['禁用', '启用']
>>>>>>> 5.28
>>>>>>> 528
});

