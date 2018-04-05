<template>
    <Row>
        <Menu :style="{width:'210px'}" :active-name="activeName"  @on-select="changeMenu" :open-names="['1']">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </template>
                <MenuItem name="vm-login">文章管理</MenuItem>
                <MenuItem name="content">
                    <router-link to="content">评论管理</router-link>
                </MenuItem>
                <MenuItem name="12">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </Row>
</template>

<script>
    export default {
        props: {
            srcMenu: {
                type: String
            }
        },
        data() {
            return {
                activeName: ''
            };
        },
        mounted: function () {
            this.activeName = this.$route.name;
        },


        methods: {
            changeMenu(name) {

                let willpush = true;
                if (this.beforePush !== undefined) {
                    if (!this.beforePush(name)) {
                        willpush = false;
                    }
                }
                if (willpush) {
                    this.$router.push({
                        name: name
                    });
                }
                this.$emit('on-change', this.srcMenu);
            }
        }

    };
</script>
