import Types from './MiddlewareTypes'


const requestMiddlewareMasterAction = (action) => ({
  type: Types.MIDDLEWARE_MASTER_ACTION,
  action
})


/**
 Makes available all the action creators we've created.
 */
export default {
  requestMiddlewareMasterAction

}
