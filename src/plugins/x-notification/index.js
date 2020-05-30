
import Notifications from './Notifications';

const XNotification = {
    install(Vue, options) {

        Vue.component('notifications', Notifications);

        Vue.prototype.$pushNotify = function (methodOptions) {
            console.log('push notify')
        }
    }
}

export default XNotification