let url = {
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topLists:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    cartAdd:'/cart/add',
    cartList:'/cart/list',
    cartReduce:'/cart/reduce',
    cartRemove:'/cart/remove',
    cartMremove:'/cart/mremove',
    addressLists:'/address/list',
    addressAdd:'/address/add',
    addressRemove:'/address/remove',
    addressUpdate:'/address/update',
    addressSetDefault:'/address/setDefault'
}

// 开发环境和真实环境的切换
let host =  'https://www.easy-mock.com/mock/5cb032271724331619d828ad/vue-shop'

for (let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url