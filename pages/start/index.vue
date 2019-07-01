<template>
	<my-default>
		<view class="start">
			<view>1</view>
			<view>2</view>
			<view>3</view>
			<view>4</view>
			<view>5</view>
			<view>6</view>
			<view>7</view>
			<view>8</view>
			<view>9</view>
			<view>0</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
			<view>122121212121212</view>
		</view>
	</my-default>
</template>

<script>
	export default {
		name: 'start',
		onBackPress() {
			if (this.showMask) {
				this.showMask = false;
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
		
		methods: {},
	}
</script>

<style>
	.start {
		height: 2000upx;
	}
</style>
