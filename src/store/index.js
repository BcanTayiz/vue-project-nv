import { createStore } from "vuex";

export default createStore({
    state:{
        comic:{}
    },
    mutations:{
        loadComic(state,payload){
            state.comic = payload
        },
        cleanComic(state,payload){
            state.comic = {}
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{

    }
})