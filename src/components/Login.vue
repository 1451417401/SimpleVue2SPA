<template>
    <div>
        <el-row>
            <el-col :span="8" :offset="8">
                <div class="grid-content bg-purple" style="text-align: center;">
                    login
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" :offset="8">
                <div class="grid-content bg-purple">
                     <el-input placeholder="用户名" v-model="username"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" :offset="8">
                <div class="grid-content bg-purple">
                    <el-input placeholder="密码" v-model="password"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" :offset="8">
                <div class="grid-content bg-purple" style="text-align: center;">
                    <router-link :to="'/home/goods'"><el-button type="primary">登录</el-button></router-link>
                </div>
            </el-col>
        </el-row>
        
    </div>
    
</template>
<script>
    export default{
        data(){
            return {
                username: '',
                password: ''
            }
           
        }
    }
</script>