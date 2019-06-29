<template>
	<view class="defaultpage">
		<MyHeader />
		<view class="content" :style="[{top:StatusBar + 'px'}]">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import MyHeader from '@/components/my-header/MyHeader.vue'

	export default {
		components: {
			MyHeader
		}
	}
</script>
<style scoped>
	.defaultpage {
		padding-top: 70upx;
	}

	.content {
		height: calc(100vh - 170upx);
		overflow-y: scroll;
	}
</style>
