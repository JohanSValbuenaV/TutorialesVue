Vue.component('hijo',{
    template: //html
    `
    <div class="hijo">
        <button @click="aumentar">+</button>
        <button @click="disminuir(2)">-</button>
        <button @click="obtenercursos">Cursos</button>

        <h1>numero {{ numero }}</h1>

        <ul v-for="item of cursos">
                <li> {{item.nombre}}  {{item.id}}</li>
        </ul>
    </div>
    `,
    computed: {
      ...Vuex.mapState(['numero','cursos'])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenercursos'])
    }
    });