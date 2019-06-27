<template>
	<view class="contents">
		<home v-if="PageCur=='home'"></home>
		<message v-if="PageCur=='message'"></message>
		<contacts v-if="PageCur=='contacts'"></contacts>
		<self v-if="PageCur=='self'"></self>

		<!-- 底部窗口 -->
		<view class="cu-modal bottom-modal" :class="bottomModal?'show':''" @tap="hideModal">
			<view class="cu-dialog">
				<view class="padding-sm icon-box">
					<view class="icon-tabbar" @click="ToChange" data-path="safe">
						<view class="icon-lg text-main cuIcon-safe"></view>
						安全问题
					</view>
					<view class="icon-tabbar" @click="ToChange" data-path="safe">
						<view class="icon-lg text-main cuIcon-safe"></view>
						安全问题
					</view>
					<view class="icon-tabbar" @click="ToChange" data-path="safe">
						<view class="icon-lg text-main cuIcon-safe"></view>
						安全问题
					</view>
					<view class="icon-tabbar" @click="ToChange" data-path="safe">
						<view class="icon-lg text-main cuIcon-safe"></view>
						安全问题
					</view>
					<view class="icon-tabbar" @click="ToChange" data-path="safe">
						<view class="icon-lg text-main cuIcon-safe"></view>
						安全问题
					</view>
					<view class="icon-tabbar" @click="ToChange" data-path="safe">
						<view class="icon-lg text-main cuIcon-safe"></view>
						安全问题
					</view>
				</view>
			</view>
		</view>
		<view class="lzz-tabbar cu-bar tabbar bg-white">
			<view class="action" @click="NavChange" data-cur="home" :class="PageCur=='home'?'text-main':'text-gray'">
				<view class="cuIcon-homefill"></view>
				<view>首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="message" :class="PageCur=='message'?'text-main':'text-gray'">
				<view class="cuIcon-message">
					<view class="cu-tag badge">99</view>
				</view>
				<view>消息</view>
			</view>
			<view class="action text-gray add-action" @click="AddChange" data-cur="contacts">
				<button class="cu-btn cuIcon-add bg-main shadow"></button>
				新增
			</view>
			<view class="action" @click="NavChange" data-cur="contacts" :class="PageCur=='contacts'?'text-main':'text-gray'">
				<view class="cuIcon-addressbook"></view>
				<view>联系人</view>
			</view>
			<view class="action" @click="NavChange" data-cur="self" :class="PageCur=='self'?'text-main':'text-gray'">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				<view>我的</view>
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
				PageCur: 'home',
				bottomModal: false
			};
		},
		computed: {
			...mapState({
				forcedLogin: state => state.user.forcedLogin,
				token: state => state.user.token,
			}),
		},
		onLoad() {},
		mounted() {
			console.log(this.token)
			if (!this.token) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login-related/login'
								});
							} else {
								uni.navigateTo({
									url: '../login-related/login'
								});
							}
						}
					}
				});
			} else {
				this.$store.dispatch('GetUserinfo').then(() => {
					console.log(1)
				}).catch(err => {
					this.$message.error(err);
				})
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			AddChange: function() {
				this.bottomModal = true
			},
			hideModal(e) {
				this.bottomModal = false
			},
			ToChange(e) {
				console.log(e.currentTarget.dataset.path)
			}
		}
	};
</script>

<style>
	.lzz-tabbar {
		width: 100%;
		position: fixed;
		bottom: 0;
		box-shadow: 0 -5upx 15upx #999;
	}
</style>
