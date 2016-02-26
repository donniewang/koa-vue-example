/**
 * Created by donnie on 16/2/26.
 */

<template>
    <div>
        <div style="width:100%;height:30px;"><i class="glyphicon glyphicon-edit icon-white"></i> Test</div>
        <h1>{{msg}}</h1>
        <a1></a1>
        <b1></b1>
        <c1></c1>
    </div>
</template>

<script>
import A1 from './a.vue'
import B1 from './b.vue'
import C1 from './c.vue'

export default {
    data () {
        return {
            msg: 'Hello from vue-loader!'
        }
    },
    components: {
        A1,
        B1,
        C1
    }
}
</script>

<style scoped>
</style>
