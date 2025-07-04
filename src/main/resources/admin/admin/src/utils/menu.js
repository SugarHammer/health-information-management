const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "系统公告",
                    "menuJump": "列表",
                    "tableName": "xitonggonggao"
                }], "menu": "系统公告管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "用户", "menuJump": "列表", "tableName": "yonghu"}],
                "menu": "用户管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除", "审核", "查看评论"],
                    "menu": "医师",
                    "menuJump": "列表",
                    "tableName": "xinlizixunshi"
                }], "menu": "医师管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "健康专栏",
                    "menuJump": "列表",
                    "tableName": "xinlingzhuanlan"
                }], "menu": "健康专栏管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "压力测试",
                    "menuJump": "列表",
                    "tableName": "yaliceshi"
                }], "menu": "压力测试管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "测试数据",
                    "menuJump": "列表",
                    "tableName": "ceshishuju"
                }], "menu": "测试数据管理"
            }, {
                "child": [{
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "医师预约",
                    "menuJump": "列表",
                    "tableName": "zixunshiyuyue"
                }], "menu": "医师预约管理"
            }, {
                "child": [{"buttons": ["查看", "修改", "删除"], "menu": "小纸条", "menuJump": "列表", "tableName": "xiaozhitiao"}],
                "menu": "留言管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }, {"buttons": ["新增", "查看", "修改", "删除"], "menu": "聊天", "tableName": "chat"}], "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "系统公告列表",
                    "menuJump": "列表",
                    "tableName": "xitonggonggao"
                }], "menu": "系统公告模块"
            }, {
                "child": [{
                    "buttons": ["查看", "预约", "预约线下"],
                    "menu": "医师列表",
                    "menuJump": "列表",
                    "tableName": "xinlizixunshi"
                }], "menu": "医师模块"
            }, {
                "child": [{"buttons": ["查看"], "menu": "健康专栏列表", "menuJump": "列表", "tableName": "xinlingzhuanlan"}],
                "menu": "健康专栏模块"
            }, {
                "child": [{"buttons": ["查看", "测试"], "menu": "压力测试列表", "menuJump": "列表", "tableName": "yaliceshi"}],
                "menu": "压力测试模块"
            }, {
                "child": [{"buttons": ["查看"], "menu": "留言列表", "menuJump": "列表", "tableName": "xiaozhitiao"}],
                "menu": "留言模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["查看", "删除"],
                    "menu": "测试数据",
                    "menuJump": "列表",
                    "tableName": "ceshishuju"
                }], "menu": "测试数据管理"
            }, {
                "child": [{"buttons": ["查看", "删除"], "menu": "医师预约", "menuJump": "列表", "tableName": "zixunshiyuyue"}],
                "menu": "医师预约管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "留言",
                    "menuJump": "列表",
                    "tableName": "xiaozhitiao"
                }], "menu": "留言管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "系统公告列表",
                    "menuJump": "列表",
                    "tableName": "xitonggonggao"
                }], "menu": "系统公告模块"
            }, {
                "child": [{
                    "buttons": ["查看", "预约", "预约线下"],
                    "menu": "医师列表",
                    "menuJump": "列表",
                    "tableName": "xinlizixunshi"
                }], "menu": "医师模块"
            }, {
                "child": [{"buttons": ["查看"], "menu": "健康专栏列表", "menuJump": "列表", "tableName": "xinlingzhuanlan"}],
                "menu": "健康专栏模块"
            }, {
                "child": [{"buttons": ["查看", "测试"], "menu": "压力测试列表", "menuJump": "列表", "tableName": "yaliceshi"}],
                "menu": "压力测试模块"
            }, {
                "child": [{"buttons": ["查看"], "menu": "留言列表", "menuJump": "列表", "tableName": "xiaozhitiao"}],
                "menu": "留言模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "是",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["查看", "删除"],
                    "menu": "医师预约",
                    "menuJump": "列表",
                    "tableName": "zixunshiyuyue"
                }], "menu": "医师预约管理"
            }, {"child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "聊天", "tableName": "chat"}], "menu": "系统管理"}],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "系统公告列表",
                    "menuJump": "列表",
                    "tableName": "xitonggonggao"
                }], "menu": "系统公告模块"
            }, {
                "child": [{
                    "buttons": ["查看", "预约", "预约线下"],
                    "menu": "医师师列表",
                    "menuJump": "列表",
                    "tableName": "xinlizixunshi"
                }], "menu": "医师模块"
            }, {
                "child": [{"buttons": ["查看"], "menu": "健康专栏列表", "menuJump": "列表", "tableName": "xinlingzhuanlan"}],
                "menu": "健康专栏模块"
            }, {
                "child": [{"buttons": ["查看", "测试"], "menu": "压力测试列表", "menuJump": "列表", "tableName": "yaliceshi"}],
                "menu": "压力测试模块"
            }, {
                "child": [{"buttons": ["查看"], "menu": "留言列表", "menuJump": "列表", "tableName": "xiaozhitiao"}],
                "menu": "留言模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "是",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "医师",
            "tableName": "xinlizixunshi"
        }]
    }
}
export default menu;
