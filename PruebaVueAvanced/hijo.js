Vue.component('hijo',{
    template: //html
    `
    <div class="hijo">
        <button @click="aumentar">+</button>
        <button @click="disminuir(2)">-</button>
        <h1>numero {{ numero }}</h1>
    </div>
    `,
    computed: {
      ...Vuex.mapState(["numero"])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir'])
    }
    });