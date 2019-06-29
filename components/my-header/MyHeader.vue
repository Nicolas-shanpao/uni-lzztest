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
		name: 'my-header',
		computed: {},
		props: {},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style>
</style>
