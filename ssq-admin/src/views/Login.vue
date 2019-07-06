<template>
<div class="login-wrap" >
<div >
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">管理员登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2">登录</el-button>
	 </el-form-item>
	 
      <el-button style="width:100%;" @click.native.prevent="handleReset2">重置</el-button>
    
  </el-form>
  </div>
 </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import { requestLogin } from '../api/api';
  //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
		
		note: {
           backgroundImage: "url(" + require("../../src/assets/bg1.jpg") + ")",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
		   marginTop: "100px",
        },
		
		
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {    //这是提交的数据
        var _this = this;
		
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');  //这是测试代码，应该是规则通过，页面转换到/table
            this.logining = true;
			var second_this = this;
			var third_this = this;
            //NProgress.start();
			var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };  //表单提交的信息
			
			//start
			let params = {   //获取表单参数
				username: loginParams.username,
				password: loginParams.password
			}
			
			let data = new FormData();
			data.append('username',params.username);
			data.append('password',params.password);
			console.log(data);
			
			this.$axios.post('/api/supperlogin',data)
				.then(function (response) {
					console.log(1)
					console.log(response.data['msg']);
					console.log(response.data['data']);
					if (response.data['code'] !== 200) {
					    if(response.data['msg'] === "用户名错误")
						{
						    
							second_this.$message({
							message: "用户不存在！",
							type: 'error'
							});
						}
						if(response.data['msg'] === "密码错误")
						{
							second_this.$message({
							message: "密码错误，请重新输入!",
							type: 'error'
							});
						}
						console.log(response.data['msg']);
						
						
					} else {
					    console.log(1)
						let user = null;
						//sessionStorage.setItem('user', JSON.stringify(loginParams.username));
						sessionStorage.setItem('user',JSON.stringify(params));
						var value = sessionStorage.getItem('user');    //用户数据存入和取出
						console.log(value);
						user = JSON.parse(value);
						console.log(user.username);
						
						//third_this.$router.replace({ path: '/home' });
						third_this.$router.push({ path: '/Teacher' });
					}
					
					
					
				})
				.catch(function (error) {
					console.log(error);
			});
			
			
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>

   .login-wrap{
        position: absolute;
        width:100%;
        height:120%;
        background-image: url(../../src/assets/login-bg.jpg);
        background-size: 100%;
    }
	
	.ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }


  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
	
	}
</style>