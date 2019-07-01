<template>
	<view class="defaultpage">
		<view class="top-bar bg-green" :style="[{height:StatusBar+'px'}]">

		</view>
		<MyHeader />
		<view class="contents" :style="[{height:'calc(100vh - '+(StatusBar+CustomBar)+'px)'}]">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import MyHeader from '@/components/my-header/MyHeader.vue'

	export default {
		components: {
			MyHeader
		},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			}
		},
		mounted() {
			let self = this
			// wx.getSystemInfo({
			// 	success: function({
			// 		model,
			// 		screenHeight,
			// 		statusBarHeight
			// 	}) {
			// 		const iphoneX = /iphone x/i.test(model);
			// 		const iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
			// 		self.globalData.isIPhoneX = iphoneX || iphoneNew
			// 	},
			// })
			uni.getSystemInfo({
				success: function(res) {
					console.log(res.model);
					console.log(res.pixelRatio);
					console.log(res.windowWidth);
					console.log(res.windowHeight);
					console.log(res.language);
					console.log(res.version);
					console.log(res.platform);
					console.log(res.statusBarHeight);
					console.log(res);
					uni.showModal({
						title: '提示',
						content: self.StatusBar + '//' + self.CustomBar + '-----' + res.model + '-' + res.pixelRatio + '-' + res.windowWidth +
							'-' + res.windowHeight + '-' + res.language +
							'-' + res.statusBarHeight + '-' + res.platform,
						success: function(ress) {
							console.log(ress)
						}
					});
				}
			});
		}
	}
</script>
<style scoped>
	.defaultpage {}

	.contents {
		/* height: calc(100vh - 170upx); */
		overflow-y: scroll;
	}
</style>
