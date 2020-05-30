<template>
    <div class="x-notifications">
        <div class="x-notifications__item" v-for="(item, index) in notificationsList" :key="index">
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            notificationsList: []
        }
    },
}
</script>