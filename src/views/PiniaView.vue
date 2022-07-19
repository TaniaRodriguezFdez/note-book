<script>
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore,['counter', 'msg'])
    }
}
</script>

<template>
<h2>Pinia View</h2>
<span>{{counter }}/{{msg }}/{{name}}</span>
</template>

<style>
</style>