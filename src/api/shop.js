/**
 * Mocking client-server processing
 */
const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
    {"id": 4, "title": "clothes", "price": 39.99, "inventory": 7},
]
const AV = require('leancloud-storage');
var APP_ID = 'xbw5yxoGzsf4XvBxqT1SuHuh-gzGzoHsz';
var APP_KEY = 'VcyNlPKWStifLVFHJLIWQFqv';

let lists=[];
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
// const query = new AV.Query('Pt');
// query.include('owner');
// query.include('image');
// query.find().then( (products)=> {
//     console.log(products);
//     products.forEach((product) => {
//         let id = product.id;
//         let data = product._serverData;
//         let productTitle = data.title;
//         let productDescription = data.description;
//         let price = data.price;
//         let productImage = data.image;
//         let productImageUrl;
//         if (productImage) {
//             productImageUrl = productImage.attributes.url;
//         } else {
//             productImageUrl = './../storage.png'
//         }
//         this.lists.push({
//             id,
//             productImageUrl,
//             title:productTitle,
//             productDescription,
//             price,
//              inventory: 10
//         });
//     });
// })




export default {
    getProducts (cb) {
        // setTimeout(() => cb(_products), 100)
        const query = new AV.Query('Pt');
        query.include('image');
        query.find().then( (products)=> {
            console.log(products);
            products.forEach((product) => {
                let id = product.id;
                let data = product._serverData;
                let productTitle = data.title;
                let productDescription = data.description;
                let price = data.price;
                let type = data.type;
                let productImage = data.image;
                let productImageUrl;
                if (productImage) {
                    productImageUrl = productImage.attributes.url;
                } else {
                    productImageUrl = './../storage.png'
                }
                lists.push({
                    id,
                    productImageUrl,
                    title:productTitle,
                    productDescription,
                    price,
                    type,
                    inventory: 1000
                });
            });
        }).then(cb(lists))
    },

    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            // (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
            //     ? cb()
            //     : errorCb()
            cb()
        }, 100)
    }
}
