<template>
	<view class="self">
		<view class="self-top">
			<image src="/static/self/self-bg.png" class="self-top"></image>
			<view class="self-message padding-left-xl">
				<text class="text-white text-bold text-xl">{{userinfo.name}}</text>
				<text class="padding-left-lg text-white">{{userinfo.job}}</text>
			</view>
			<image :src="userinfo.headImage" class="self-avatar"></image>
		</view>

		<view class="cu-list menu sm-border">
			<view class="cu-item">
				<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey">当前版本</text>
				</navigator>
			</view>
			<view class="cu-item">
				<navigator class="content" hover-class="none" url="/pages/self/changepw" open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey">修改密码</text>
				</navigator>
			</view>
			<view class="cu-item">
				<button class="cu-btn content" open-type="contact" @click="clear()">
					<text class="cuIcon-btn text-olive"></text>
					<text class="text-grey">清除缓存</text>
				</button>
			</view>
			<view class="cu-item">
				<navigator class="content" hover-class="none" url="/pages/start/index" open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey">去模板</text>
				</navigator>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				userinfo: state => state.user.userinfo,
			}),
		},
		methods:{
			clear(){
				console.log(1)
				uni.removeStorageSync('token');
				uni.reLaunch({
					url: '../login-related/login'
				});
			}
		}
	}
</script>

<style>
	.self-top {
		width: 100%;
		height: 340upx;
	}

	.self-message {
		position: fixed;
		top: 180upx;
		width: 100%;
		height: 50upx;
	}

	.self-avatar {
		width: 128upx;
		height: 128upx;
		border-radius: 50%;
		position: fixed;
		top: 220upx;
		left: -4upx;
		right: 0;
		margin: 0 auto;
	}
</style>
