import Vue from 'vue'
import Vuex from 'vuex'
import {
	loginByUsername
} from '@/vmeitime-http/index.js'

Vue.use(Vuex)
const token = uni.getStorageSync('token');
const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		userName: "",
		token: token,
		userinfo: {}
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_USERINFO(state, userinfo) {
			state.userinfo = userinfo;
		}
	},
	actions: {
		LoginByUsername({
			commit
		}, userInfo) {
			return new Promise((resolve, reject) => {
				loginByUsername({
					username: 'admin',
					password: 'bim201818'
				}).then(response => {
					if (res.data.code != 100) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						});
						reject(error)
					} else {
						let token = res.data.content.token
						token = token.replace("\"", "").replace("\"", "");
						commit('SET_TOKEN', token)
						uni.setStorageSync('token', token);
						uni.navigateTo({
							url: '../index/index'
						});
						resolve(response)
					}
				}).catch(error => {
					reject(error)
				})
			})
		},

		GetUserinfo({
			state,
			commit
		}) {
			console.log(state)
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'http://baisha.checcbim.com/bimplatform/v1/api/contact/getuserinfo',
					header: {
						'content-type': 'application/x-www-form-urlencoded', //自定义请求头信息
						'Authorization': state.token //自定义请求头信息
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						console.log(res)
						if (res.statusCode == 401) {
							uni.showToast({
								title: res.data.content,
								icon: 'none'
							});
							uni.reLaunch({
								url: '../../index/index'
							});
						} else {
							commit('SET_USERINFO', res.data)
						}
					}
				});
			})
		},
	}
})

export default store
