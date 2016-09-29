<template>
    <div>
        <h2>基础信息</h2>
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