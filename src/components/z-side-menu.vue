

<template>
    <Layout :style="{minHeight: (fullHeight-64)+'px'}">
        <Sider :collapsed-width="70" width="70">
            <Menu theme="dark" width="auto" :active-name="srcMenu" class="collapsed-menu" >
                <MenuItem name="content">
                    <Icon type="ios-navigate"></Icon>
                    <span>Option 1</span>
                </MenuItem>
                <MenuItem name="search">
                    <Icon type="search"></Icon>
                    <span>Option 2</span>
                </MenuItem>
                <MenuItem name="1-3">
                    <Icon type="settings"></Icon>
                    <span>Option 3</span>
                </MenuItem>
            </Menu>
        </Sider>

        <div class="index-submenu" :style="{height: (fullHeight-64)+'px'}">
            <ZsSideMenuSub :srcMenu="srcMenu" @on-change="handleChange"></ZsSideMenuSub>
        </div>
    </Layout>
</template>

<script>
    import ZsSideMenuSub from '@/components/z-side-menu-sub.vue';


    export default {
        data() {
            return {
                fullHeight: document.documentElement.clientHeight,
                srcMenu: ''
            };
        },

        methods: {
            handleChange(name) {
                this.$set(this.$data,'srcMenu',name);
            }
        },
        components: {
            ZsSideMenuSub
        }
    };
</script>

<style scoped>

</style>