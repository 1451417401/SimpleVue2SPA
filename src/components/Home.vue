<template>
    <div>
        <el-row class="tac">
            <el-col :span="8">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
                        <el-menu-item index="1-1"><div @click="goodsSelect">商品列表</div></el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>订单管理</template>
                        <el-menu-item index="2-1"><div @click="ordersSelect">订单列表</div></el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>账号管理</template>
                        <el-menu-item index="3-1"><div @click="infoSetting">基础信息</div></el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="16">
                <div>
                     <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import router from '../router'
    export default {
        methods: {
            handleopen(index){

            },
            handleclose(index){
            },
            goodsSelect(){
                console.dir(11)
                router.push({ path: '/home/goods' })
            },
            ordersSelect(){
                console.dir(22)
                router.push({ path: '/home/orders' })
            },
            infoSetting(){
                console.dir(33)
                router.push({ path: '/home/setting' })
            }
          }
    }
</script>