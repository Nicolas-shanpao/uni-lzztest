<template>
	<view class="cu-bar bg-main">
		<view class="action" @tap="BackPage" v-if='isBack'>
			<text class="cuIcon-back text-white"></text> 返回
		</view>
		<view class="content text-bold">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			url: {
				type: String,
				default: '/pages/index/index'
			},
			title: {
				type: String,
				default: '白沙快速出口路智慧工地'
			},
			isBack: {
				type: Boolean,
				default: false
			}
		},
		name: 'my-header',
		computed: {},
		methods: {
			BackPage() {
				let that = this
				uni.reLaunch({
					url: that.url
				});
			}
		}
	}
</script>

<style>
</style>
