<template>
    <div>
        <el-card shadow="never">
            <el-menu @select="onSelect">
                <el-menu-item v-for="item in constantRouterMap" v-if="item.meta"
                    :key="item.path" :index="item.path"
                    :class="{
                        'is-active':item.path==$route.path
                    }">
                    <i :class="item.meta.icon"></i>
                    <!-- <span slot="title">{{item.meta.title}}</span> -->
                    <g-link :to="item.path">{{item.meta.title}}</g-link>
                </el-menu-item>
            </el-menu>
        </el-card>

        
    </div>
</template>

<script>
    import { constantRouterMap } from '@/router'
    export default {
        data() {
            return {
                constantRouterMap,
            }
        },

        mounted() {
            let arr = this.$route.path.split("/")
            this.active = "/" + arr[1] + "/" + arr[2]
        },
        methods: {
            onSelect(index) {
                this.$router.push(index)
            },
            openTokenDialog() {
                this.$refs.tokenDialog.open(() => {
           
                })
            },
            cancellation() {
                this.$store.dispatch("Cancellation")
            }
        }
    }
</script>