// import request from '@/helpers/request'
//
// const URL = {
//     REGISTER: '/auth/register',
//     LOGIN: '/auth/login',
//     LOGOUT: '/auth/logout',
//     GET_INFO: '/auth'
// };
//
// export default {
//     register({username, password}) {
//         return request(URL.REGISTER, 'POST', {username, password})
//     },
//
//     login({username, password}) {
//         return request(URL.LOGIN, 'POST', {username, password})
//     },
//
//     logout() {
//         return request(URL.LOGOUT)
//     },
//     getInfo() {
//         return request(URL.GET_INFO)
//     }
// }
const AV = require('leancloud-storage');
const APP_ID = 'xbw5yxoGzsf4XvBxqT1SuHuh-gzGzoHsz';
const APP_KEY = 'VcyNlPKWStifLVFHJLIWQFqv';


AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

const user = new AV.User();
let username = 'xhzdcyy';
let password = '123456';

export default {
    register({username, password, email}) {
        let user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        return user.signUp()
    },
    login({username, password}) {
        return AV.User.logIn(username, password);
    },
    logout() {
        return AV.User.logOut();
    },
    getInfo(){
        return AV.User.current()
    }

}
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   console.log('LeanCloud Rocks!');
// })


// var username = 'xhzdcyy';
// var password = '123456';
// var email = '1@qq.com';

// LeanCloud - 注册
// https://leancloud.cn/docs/leanstorage_guide-js.html#注册
// var user = new AV.User();
// user.setUsername(username);
// user.setPassword(password);
// user.setEmail(email);
// user.signUp().then(function (loginedUser) {
//     //   window.location.href = "./../products-list/products-list.html";
//     console.log('ok');
// }, (function (error) {
//     alert(JSON.stringify(error));
// }));


// LeanCloud - 登录
// https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
// AV.User.logIn(username, password).then(function (loginedUser) {
//     //   window.location.href = "./../products-list/products-list.html";
//     // console.log(loginedUser);
//     console.log(loginedUser.attributes.username);
//
//     console.log(AV.User.current())
// }, function (error) {
//     console.log(JSON.stringify(error));
// });
//
// console.log(AV.User.current().attributes)

