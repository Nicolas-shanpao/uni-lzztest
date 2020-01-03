<template>
	<view>
		<cu-custom bgColor="bg-main">
			<block slot="content">白沙快速出口路智慧工地</block>
		</cu-custom>
		<!-- 下拉刷新组件 -->
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="90" @refresh="onPulldownReresh"
		 @setEnableScroll="setEnableScroll">
			<!-- 轮播 -->
			<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
			 duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<!-- 常用应用 -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-favorfill text-yellow"></text>
					<text class="text-bold">常用应用</text>
				</view>
			</view>
			<!-- 常用应用图标 -->
			<view class="padding-sm icon-box bg-gray">
				<view class="icon-tabbar" @click="ToChange" data-path="scan">
					<view class="icon-lg text-main cuIcon-scan"></view>
					扫一扫
				</view>
				<view class="icon-tabbar" @click="test" data-path="safe">
					<view class="icon-lg text-main cuIcon-safe"></view>
					测试
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
			<!-- 产值进度 -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-favorfill text-yellow"></text>
					<text class="text-bold">产值进度</text>
				</view>
			</view>
			<!-- 产值进度图标 -->
			<view class="padding-sm icon-box bg-gray">
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
			<!-- 产值进度 -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-favorfill text-yellow"></text>
					<text class="text-bold">产值进度</text>
				</view>
			</view>
			<!-- 产值进度图标 -->
			<view class="padding-sm icon-box bg-gray">
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
		</mix-pulldown-refresh>
	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	export default {
		data() {
			return {
				dotStyle: false,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				enableScroll: true,
			}
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			ToChange(e) {
				console.log(e.currentTarget.dataset.path)
				uni.scanCode({
					success: function(res) {
						console.log(res);
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			test() {
				this.$store.dispatch('test').then(() => {
					console.log(1)
				}).catch(err => {
					this.$message.error(err);
				})
			}, //下拉刷新
			onPulldownReresh() {
				console.log(1)
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable) {
				if (this.enableScroll !== enable) {
					this.enableScroll = enable;
				}
			},
		},
		mounted() {},
		components: {
			mixPulldownRefresh
		},

	}
</script>

<style lang="scss">
</style>
