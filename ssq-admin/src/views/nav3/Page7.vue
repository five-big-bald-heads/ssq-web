<template>

<el-row >
  <el-col :span="10" v-for="(o, index) in 9" :key="o" >

  
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
		<el-card class="box-card">
	<el-popover
        placement="right"
        width="400"
        trigger="click">
        <p>{{'课程名称：'+ courseName }}</p>
        <p>{{'任课教师：'+ teacherName}}</p>
        <p>{{'教师工号：'+ teacherId}}</p>
        <p>{{'考试时间：'+ examTime}}</p>
  
    <el-button type="info"  @click="getCourse(o)" slot="reference" round>{{'课程' + o + '详情' }}</el-button>
    </el-popover>
		
    </el-card>	
    </el-card>
  
  
 


</el-col>

<el-col :span="10" v-for="(o, index) in 1" :key="o" >

<el-card :body-style="{ padding: '0px' }" shadow="hover">
		<el-card class="box-card">
	<el-popover
        placement="right"
        width="400"
        trigger="click">
        <p>{{'待添加！' }}</p>
        
  
    <el-button type="warning"  slot="reference" round>{{'+添加课程'}}</el-button>
    </el-popover>
		
    </el-card>	
    </el-card>

</el-col>


</el-row>

		


</template>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
</style>


<script>
    export default {
        data: function(){
            return {
			    o:'',
				gridData:[],
				courseid:'',
				examTime:'',
				teacherId:'',
				teacherName:'',
				courseName:'',
				courseList:[],
                form: {
                    no:'',
					name:'',
					phone:'',
					password:'',
					email:'',
					newpassword:'',
					checkpassword:''

                },
				
				seen: false,
            }
        },
        methods: {
		    
			visible:function(){
            this.seen = true;
        },
        invisible:function(){
            this.seen = false;
        },
		
		getCourse(o){
		 
		    console.log(o);
			var para = {
					courseid: o,
					//name: this.filters.name
				};
				console.log(para.courseid);
				
				
				
				
				
				var second_this = this;
				this.$axios.get('/api/CourseMsg',{params:{courseid:para.courseid}})
				.then(function (response) {
					//console.log(response.data["data"]);
					
					second_this.gridData = response.data["data"];   //交给前端显示
					second_this.courseid= response.data["data"]["courseId"];
					second_this.courseName= response.data["data"]["courseName"];
					second_this.teacherName= response.data["data"]["teacherName"];
					second_this.teacherId= response.data["data"]["teacherId"];
					second_this.examTime= response.data["data"]["examTime"];
					
					
					
					
				})
				.catch(function (error) {
					console.log(error);
				});
				
		    
		},
			
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>


