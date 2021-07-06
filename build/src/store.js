import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articlesSelected: true,
    containersSelected: false,
    currentSelection: 'getArticles',
    windowWidth: false,
    favouritesList: [],
    notificationMsgArr: [],
    articles: {
      "articles": [
        {
          "code": 3641637,
          "name": "Lysol  Spray do Dezynfekcji Kwiat Jabłoni 400,ml",
          "weight": 0.44,
          "price": 23.99,
          "stock": 22
        },
        {
          "code": 1469493,
          "name": "MONTANA ROJA CZERWONE WYTRAWNE cz.0,75L",
          "weight": 1.113,
          "price": 18.49,
          "stock": 1
        },
        {
          "code": 2973852,
          "name": "Adidas UEFA IV EDT 100 ml + SG 250 ml 1 szt",
          "weight": 0.622,
          "price": 72.99,
          "stock": 5
        },
        {
          "code": 409759,
          "name": "Lactacyd Femina emulsja do hig.int.z pompką 200 ml",
          "weight": 0.269,
          "price": 13.49,
          "stock": 7
        },
        {
          "code": 2964980,
          "name": "Bielenda Zestaw Botanic Spa Opuncja+Aloes 1 szt",
          "weight": 0.65,
          "price": 29.99,
          "stock": 0
        },
        {
          "code": 1475043,
          "name": " P_O JA CIĘ! SMOK W KRAWACIE!",
          "weight": 0.98,
          "price": 34.9,
          "stock": 0
        },
        {
          "code": 1442090,
          "name": "Monsenhor Vinho Verde B/W 0,75L",
          "weight": 1.218,
          "price": 12.59,
          "stock": 15
        },
        {
          "code": 3429365,
          "name": "Yoskine GeishaSecret krem na dzień i noc 50+,50 ml",
          "weight": 0.284,
          "price": 57.99,
          "stock": 9
        },
        {
          "code": 2934051,
          "name": "P_Zdrowo, lokalnie, naturalnie., 1 szt.",
          "weight": 0.487,
          "price": 29.99,
          "stock": 0
        },
        {
          "code": 3401545,
          "name": "KIDS male klamry do wlosĂłw",
          "weight": 1.55,
          "price": 14.99,
          "stock": 3
        }
      ]
    }
    ,
    containers: {
      "boxes": [{"BoxCode":"10001","Width":700,"Height":500,"Depth":350},{"BoxCode":"10002","Width":700,"Height":500,"Depth":350},{"BoxCode":"10003","Width":700,"Height":500,"Depth":350},{"BoxCode":"10004","Width":700,"Height":500,"Depth":350},{"BoxCode":"10005","Width":700,"Height":500,"Depth":350},{"BoxCode":"10006","Width":700,"Height":500,"Depth":350},{"BoxCode":"10007","Width":700,"Height":500,"Depth":350},{"BoxCode":"10008","Width":700,"Height":500,"Depth":350},{"BoxCode":"10009","Width":700,"Height":500,"Depth":350},{"BoxCode":"10010","Width":700,"Height":500,"Depth":350},{"BoxCode":"10011","Width":700,"Height":500,"Depth":350},{"BoxCode":"10012","Width":700,"Height":500,"Depth":350},{"BoxCode":"10013","Width":700,"Height":500,"Depth":350},{"BoxCode":"10014","Width":700,"Height":500,"Depth":350},{"BoxCode":"10015","Width":700,"Height":500,"Depth":350},{"BoxCode":"10016","Width":700,"Height":500,"Depth":350},{"BoxCode":"10017","Width":700,"Height":500,"Depth":350},{"BoxCode":"10018","Width":700,"Height":500,"Depth":350},{"BoxCode":"10019","Width":700,"Height":500,"Depth":350},{"BoxCode":"10020","Width":700,"Height":500,"Depth":350}]
    }
  },
  getters: {
    getArticles: state =>{
      return state.articles;
    },
    getContainers: state =>{
      return state.containers;
    }
  },
  mutations: {

  },
  actions: {

  }
})
