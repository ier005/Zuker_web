import * as types from '../mutation-types'
import profApi from '../../api/profApi'
import router from '../../router'
import Axios from 'axios'

const state = {
	
}

const getters = {
}

const actions = {
	initProfile({commit, dispatch}, payload) {
		profApi.getProfile(payload, data => {
			// data = {username:'test', email:'test'}
			commit(types.INIT_PROFILE, data);
		})
	},
	updateinfo ({commit, dispatch}, payload) {
		profApi.updateinfo(payload, data => {
			if (data == 1) {
				dispatch('initProfile')
				commit(types.SHOW_TOP_POPUP, {'msgtype': 'success', 'content':'修改成功！', 'msgcontenttype': 'updateinfo'})
			} else if(data == 0){
				commit(types.SHOW_TOP_POPUP, {'msgtype': 'error', 'content':'修改失败！', 'msgcontenttype': 'updateinfo'})
			}
			else {
				commit(types.SHOW_TOP_POPUP, {'msgtype': 'warning', 'content':'用户名已被使用，不可重复！', 'msgcontenttype': 'updateinfo'})
			}
		})
	},
	// updateEmail ({commit, dispatch}, payload) {
	// 	profApi.updateEmail(payload, data => {
	// 		if (data.profId > 0) {
	// 			dispatch('initProfile')
	// 			commit(types.SHOW_TOP_POPUP, {'msgtype': 'success', 'content':'修改成功！'})
	// 		} else {
	// 			commit(types.SHOW_TOP_POPUP, {'msgtype': 'error', 'content':'修改失败！'})
	// 		}
	// 	})
	// },
	updatepwd ({commit, dispatch}, payload) {
		profApi.updatePassword(payload, data => {
			if (data == 1) {
				commit(types.SHOW_TOP_POPUP, {'msgtype': 'success', 'content':'修改成功！', 'msgcontenttype': 'updatepwd'});
			} else if (data == 0) {
				commit(types.SHOW_TOP_POPUP, {'msgtype': 'error', 'content':'密码错误！', 'msgcontenttype': 'updatepwd'})
			} else {
				commit(types.SHOW_TOP_POPUP, {'msgtype': 'error', 'content':'修改失败！',  'msgcontenttype': 'updatepwd'})
			}
		})
	},
	// updateImage ({commit, dispatch}, payload) {
	// 	profApi.updateImage(payload, data => {
	// 		if (data.profId > 0) {
	// 			dispatch('initProfile')
	// 			commit(types.SHOW_TOP_POPUP, {'msgtype': 'success', 'content':'修改成功！'})
	// 		} else {
	// 			commit(types.SHOW_TOP_POPUP, {'msgtype': 'error', 'content':'修改失败！'})
	// 		}
	// 	})
	// },
}

const mutations = {
	
}

export default {
	state,
	getters,
	actions,
	mutations
}
