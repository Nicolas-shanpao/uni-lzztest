<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">导航栏</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		name: 'top-nav',
	}
</script>

<style>
</style>
