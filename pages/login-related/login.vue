<template>
	<view class="content">
		<view class="header">
			<image src="../../static/shilu-login/loginbg.png"></image>
		</view>
		<view class="login-box">
			<view class="list">
				<view class="list-call">
					<image class="img" src="/static/shilu-login/1.png"></image>
					<input class="biaoti" v-model="username" placeholder="输入账号" />
				</view>
				<view class="list-call">
					<image class="img" src="/static/shilu-login/2.png"></image>
					<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
				</view>

			</view>

			<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin()">
				<text>登录</text>
			</view>

			<view class="xieyi">
				<navigator url="forget" open-type="navigate">忘记密码</navigator>
				<text>|</text>
				<navigator url="reg" open-type="navigate">注册账户</navigator>
			</view>
		</view>
		<view class="footer">
			<image src="/static/shilu-login/logo.jpg"></image>
		</view>
	</view>
</template>

<script>
	var tha;
	import {
		mapMutations
	} from 'vuex';
	export default {
		onLoad() {
			let that = this;
		},
		data() {
			return {
				username: '',
				password: ''
			};
		},
		methods: {
			bindLogin() {
				if (this.username.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码不正确'
					});
					return;
				}
				let userInfo = {
					username: this.username,
					password: this.password
				}
				this.$store.dispatch('LoginByUsername', userInfo).then(() => {
					console.log(1)
				}).catch(err => {
					this.$message.error(err);
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: hidden;
		background: #FFFFFF;
	}

	.header {
		width: 100%;
	}

	.header image {
		width: 100%;
		height: 480upx;
	}

	.login-box {
		width: 80%;
		height: 40%;
		margin: 5% auto 0;
		padding: 100upx 0;
		border-radius: 8upx;
		box-shadow: 0upx 15upx 30upx 5upx rgba(0, 0, 0, 0.3);
	}

	.list {
		display: flex;
		flex-direction: column;
		padding: 0 30upx;
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230, 230, 230, 1);
	}

	.list-call .img {
		width: 40upx;
		height: 40upx;
	}

	.list-call .biaoti {
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 16upx;
	}

	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width: 470upx;
		height: 100upx;
		background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
		box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
		border-radius: 50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 60upx;
	}

	.dlbutton-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.9), rgba(188, 226, 158, 0.9));
	}

	.xieyi {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-top: 40upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 60upx;
	}

	.xieyi text {
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}

	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 8% 0;
		text-align: center;
	}

	.footer image {
		width: 536upx;
		height: 80upx;
	}
</style>
