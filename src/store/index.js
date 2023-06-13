import { createStore } from "vuex";

export default createStore({
    state:{
        comic:{},
        favoriteIds:[]
    },
    mutations:{
        loadComic(state,payload){
            state.comic = payload
        },
        cleanComic(state,payload){
            state.comic = {}
        },
        addFavoriteIds(state,payload){
            if(!state.favoriteIds.includes(payload)){
                state.favoriteIds.push(payload)
            }
        },
        deleteFavoriteIds(state, payload) {
            if (state.favoriteIds.includes(payload)) {
              const index = state.favoriteIds.indexOf(payload);
              state.favoriteIds.splice(index, 1);
            }
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{

    }
})