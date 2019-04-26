<template>
		<div class="form-box">
			<el-form ref="form" :model="form" label-width="10%">
				<el-form-item label="工号" >
					<el-input v-model="form.no" :disabled="true"></el-input>
				</el-form-item>
				<el-form-item label="姓名" :disabled="true">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="手机号">
					<el-input v-model="form.phone"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="form.email"></el-input>
				</el-form-item>
				<el-form-item label="旧密码">
					<el-input v-model="form.password"></el-input>
				</el-form-item>
				<el-form-item label="新密码">
					<el-input v-model="form.newpassword"></el-input>
				</el-form-item>
				<el-form-item label="再次输入新密码">
					<el-input v-model="form.checkpassword"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onSubmit">提交</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    no:'',
					name:'',
					phone:'',
					password:'',
					email:'',
					newpassword:'',
					checkpassword:''

                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>
