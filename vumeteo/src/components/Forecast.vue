<template>
    <div class="forecast">
        {{ value }}
    </div>
</template>

<script>
export default {
    name: 'Forecast',
    props: ['id','value']

}
</script>