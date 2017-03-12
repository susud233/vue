//改变状态的方式是提交mutations,这是个同步的事物
import * as types from './mutation-type'

export default{
  [types.ADD_TOTAL_TIME] (state, time) {
  	state.totalTime = state.totalTime + time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
  	state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan) {
  	const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'
    
    state.list.push(
      Object.assign({ name: '丫丫', avatar: avatar }, plan)
    )
  },
  [types.DELETE_PLAN] (state, idx) {
  	state.list.splice(idx, 1)
  }
}