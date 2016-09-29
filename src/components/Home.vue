<template>
    <div>
        <el-row class="tac">
            <el-col :span="8">
                <h5>带 icon</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
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
    
    export default {
        methods: {
            handleopen(index){
                console.dir(index);

            },
            handleclose(index){
                console.dir(index)
            }   
          }
    }
</script>