<template>
	<view class="hastitle">
		<view class="nav-topbar bg-main">
			<view class="home-title-text">
				<navigator class="nav-topbar-icon" hover-class="none" url="/pages/index/index" open-type="redirect">
					<text class="cuIcon-back text-white"></text>
				</navigator>
			</view>
			<text>修改密码</text>
			<text class="nav-topbar-empty-icon text-white"> </text>
		</view>
		<form>
			<view class="cu-form-group">
				<view class="title text-bold">原密码</view>
				<input placeholder="请输入原密码" name="input" v-model="oldpsd"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-bold">新密码</view>
				<input placeholder="请输入新密码" name="input" v-model="newpsd"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-bold">确认新密码</view>
				<input placeholder="请再次输入新密码" name="input" v-model="reppsd"></input>
			</view>
		</form>
		<view class="padding-sm">
			<button class="cu-btn block bg-main margin-tb-sm lg" type="">确定</button>
		</view>
		<view class="cu-item">
			<navigator class="content" hover-class="none" url="/pages/top-navigator" open-type="redirect">
				<text class="cuIcon-discoverfill text-orange"></text>
				<text class="text-grey">修改密码</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpsd: '',
				newpsd: '',
				reppsd: '',
			}
		},
		methods: {

		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(5em + 15px);
	}
</style>
