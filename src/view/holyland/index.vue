<template>
	<div class="content" style="width:1100px;">
    <i class="iconfont icon-num-four bgNum"></i>
		<div class="main-timeline">
			<div class="timeline" v-for="(item,index) in holylandList" :key="index">
				<div class="timeline-content">
					<span class="timeline-year">{{item.date}}</span>
					<div class="content">
						<h3 class="title">{{item.title}}</h3>
						<p class="description">
							{{item.desc}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
      holylandList:[]
		}
	},
	created () {
    this.loadData()
	},
	methods: {
    loadData(){
        const _this = this
        _this.$axios.get('/holylandList').then((rs) => {
            _this.holylandList = rs.data
        })
    }
	}
}
</script>
<style lang="scss">
@import "./../../assets/css/color.scss";
.main-timeline {
  font-family: "Roboto", sans-serif;
  padding: 20px 0;
  position: relative;
  &::after, &::before{
    content: "";
    height: 40px;width: 40px;background-color: #e7e7e7;
    border-radius: 50%;border:10px solid #303334;
    transform: translateX(-50%);
    position: absolute;left: 50%;top: -15px;z-index: 2;
  }
  &::after{
    top: auto;
    bottom: 15px;
  }
  .timeline {
    padding: 35px 0;
    margin-top: -30px;
    position: relative;
    z-index: 1;
    &::before,&::after{
      content: "";
      height: 100%;width: 50%;
      border-radius: 150px 0 0 150px;
      border: 15px solid #46b2bc;
      border-right: none;position: absolute;
      left: 0;top: 0;z-index: -1;
    }
    &::before{
      background-image:linear-gradient(#6b7e84,#3d464b);
      opacity: .6;
    }
    &::after{
      height: calc(100% - 30px);
      width: calc(50% - 12px);
      border-color: #65c7d0;
      left: 12px;top: 15px;
    }
    &:nth-child(even):before {
      left: auto;
      right: 0;
      border-radius: 0 150px 150px 0;
      border: 15px solid red;
      border-left: none;
    }
    &:nth-child(even):after {
      left: auto;
      right: 12px;
      border: 15px solid green;
      border-left: none;
      border-radius: 0 150px 150px 0;
    }
  }
  .timeline-content {
    display: inline-block;
    &:hover{
      text-decoration: none;
    }
  }
  .timeline-year {
    color: #65c7d0;
    font-size: 40px;
    font-weight: 600;
    display: inline-block;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    left: 10%;
  }
  .content {
    color: #909090;
    width: 50%;
    padding: 20px;
    display: inline-block;
    float:right
  }
  .title {
    color: #65c7d0;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
  }
  .description {
    font-size: 15px;
    letter-spacing: 1px;
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
  }
}

.main-timeline .timeline:nth-child(even) .content {float: left;}
.main-timeline .timeline:nth-child(even) .timeline-year {left: auto;right:10%;}
.main-timeline .timeline:nth-child(5n + 2):before {border-color: #42b983;}
.main-timeline .timeline:nth-child(5n + 2):after {border-color: #33ca86;}
.main-timeline .timeline:nth-child(5n + 2) .timeline-year {color: #42b983;}
.main-timeline .timeline:nth-child(5n + 2) .title {color: #42b983;}
.main-timeline .timeline:nth-child(5n + 3):before {border-color: #00f883;}
.main-timeline .timeline:nth-child(5n + 3):after {border-color: #20f883;;}
.main-timeline .timeline:nth-child(5n + 3) .timeline-year {color: #00f883;}
.main-timeline .timeline:nth-child(5n + 3) .title {color: #00f883;}
.main-timeline .timeline:nth-child(5n + 4):before {border-color: #ffff66;}
.main-timeline .timeline:nth-child(5n + 4):after {border-color: #eaea83;}
.main-timeline .timeline:nth-child(5n + 4) .timeline-year {color: #ffff66;}
.main-timeline .timeline:nth-child(5n + 4) .title {color: #ffff66;}
.main-timeline .timeline:nth-child(5n + 5):before {border-color: #0071bd;}
.main-timeline .timeline:nth-child(5n + 5):after {border-color: #0050a3;}
.main-timeline .timeline:nth-child(5n + 5) .timeline-year {color: #0071bd;}
.main-timeline .timeline:nth-child(5n + 5) .title {color: #0071bd;}
</style>