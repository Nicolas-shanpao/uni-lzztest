<template>
	<view class="contents" :style="[{height:windowHeight + 'px'}]">
		<!--
		* 广告组件
		* timedown 倒计时时间
		* imageUrl 背景图
		* url 跳转链接
		*  -->
		<!-- #ifndef MP -->
		<mix-advert ref="mixAdvert" :timedown="8" imageUrl="/static/advert.jpg" :url="advertNavUrl"></mix-advert>
		<!-- #endif -->
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
						质量问题
					</view>
					<view class="icon-tabbar" @click="ToChange" data-path="safe">
						<view class="icon-lg text-main cuIcon-safe"></view>
						环保问题
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
	import mixAdvert from '@/components/mix-advert/vue/mix-advert';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	export default {
		data() {
			return {
				PageCur: 'home',
				bottomModal: false,
				windowHeight: this.windowHeight,
				advertNavUrl: ''
			};
		},
		computed: {
			...mapState({
				forcedLogin: state => state.user.forcedLogin,
				token: state => state.user.token,
			}),
		},
		onReady() {
			// #ifndef MP
			this.$refs.mixAdvert.initAdvert();
			// #endif
		},
		mounted() {
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
				this.$store.dispatch('GetUserinfo').then((res) => {
					console.log(res)
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
		},
		components: {
			mixLoadMore,
			mixAdvert
		},
		onBackPress() {
			if (this.bottomModal) {
				this.bottomModal = false;
				return true;
			} else {
				uni.showModal({
					title: '提示',
					content: '是否退出uni-app？',
					success: function(res) {
						if (res.confirm) {
							// 退出当前应用，改方法只在App中生效
							plus.runtime.quit();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				return true;
			}
		},
	};
</script>

<style>
	.lzz-tabbar {
		width: 100%;
		position: absolute;
		bottom: 0;
		box-shadow: 0 -5upx 15upx #999;
	}
</style>
