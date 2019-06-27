import http from './interface'
import url from './url'

export const loginByUsername = (data) => {
	return http.request({
		url: url.login,
		method: 'POST',
		data,
	})
}
