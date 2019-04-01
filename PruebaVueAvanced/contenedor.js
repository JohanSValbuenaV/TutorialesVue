const store = new Vuex.Store({
    state:{
        numero:10
    },
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state,n){
            state.numero -= n
        }
    }
    
    });