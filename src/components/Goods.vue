<template>
    <div>
        <h2>商品列表</h2>
        <div>
             <button @click='increment'>Increment +1</button>
             <button @click='decrement'>decrement -1</button>
              <h3>Count is {{ count }}</h3>
        </div>
        <router-link :to="'/login'">go login</router-link>
    </div>
</template>

<script>
    import store from '../vuex/store'
    console.dir(store)
    export default {
        methods: {
            increment () {
              store.commit('increment')
            },
            decrement () {
                store.commit('decrement')
            }
          },
        computed: {
            count () {
                return store.getters.getCount
            }
        }
    }
</script>