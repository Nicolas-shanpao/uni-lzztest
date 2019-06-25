<template>
	<view class="hastitle">
		<view class="nav-topbar bg-main">
			<text class="nav-topbar-empty-icon text-white"> </text>
			<text>白沙快速出口路智慧工地</text>
			<text class="nav-topbar-empty-icon text-white"> </text>
		</view>
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
	</view>
</template>

<script>
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
			}
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
	.home {
		.home-title {
			height: 90upx;
			z-index: 9999;
			font-size: 32upx;
			text-align: center;
			line-height: 90upx;
		}
	}
</style>
