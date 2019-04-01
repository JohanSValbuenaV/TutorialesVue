const store = new Vuex.Store({
    state:{
        numero:10,
        cursos:[]
    },
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state,n){
            state.numero -= n
        },
        llenarCursos(state,cursonAccion){
            state.cursos = cursonAccion
        }
    },
    actions:{
        obtenercursos: async function ({commit}){
            const data = await fetch('cursos.json');
            const cursos = await data.json();
            commit('llenarCursos',cursos) 
        }
    }
    
    });