<template>
	<view class="cu-bar bg-main">
		<view class="action" @tap="BackPage">
			<text class="cuIcon-back text-white"></text> 返回
		</view>
		<view class="content text-bold">
			操作条
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
