<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="main-header">
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <Icon type="ios-navigate"></Icon>
                                首页
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-keypad"></Icon>
                                账户管理
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-analytics"></Icon>
                                运维中心
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="gear-b"></Icon>
                                系统管理
                            </MenuItem>
                        </div>
                        <div class="header-avator-con">
                            <VmMsgPush style="margin-left:20px" :data="msgPushData"></VmMsgPush>
                            <Dropdown style="margin-left: 20px" @on-click="handleClickUserDropdown" >
                                <a href="javascript:void(0)">
                                    <Avatar :src="avatar"/>
                                    <span class="main-user-name">{{ userName }}</span>

                                    <Icon type="arrow-down-b"></Icon>

                                </a>
                                <DropdownMenu slot="list"  >
                                    <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                    <DropdownItem name="logout" divided  >退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </Menu>
            </Header>

            <ZsSideMenu></ZsSideMenu>

            <Layout>
                <Content class="main-content" :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <!--<VmContent></VmContent>-->
                    <router-view></router-view>
                </Content>
            </Layout>

        </Layout>
    </div>
</template>
<script>

    import VmMsgPush from '@/components/vm-msg-push';
    import VmContent from '@/components/content.vue';
    import ZsSideMenu from '@/components/z-side-menu.vue';


    export default {
        data() {
            return {
                isCollapsed: true,
                userName: '',
                avatar:'',
                msgPushData: [
                    {
                        image: '',
                        from: 'JesseLuo',
                        time: '2017-1-8',
                        message: 'I like your website very much!'
                    },
                    {
                        image: '',
                        from: 'JesseLuo',
                        time: '2017-1-8',
                        message: 'I like your website very much!'
                    },
                    {
                        image: '',
                        from: 'JesseLuo',
                        time: '2017-1-8',
                        message: 'I like your website very much!'
                    },
                    {
                        image: '',
                        from: 'JesseLuo',
                        time: '2017-1-8',
                        message: 'I like your website very much!'
                    },
                    {
                        image: '',
                        from: 'JesseLuo',
                        time: '2017-1-8',
                        message: 'I like your website very much!'
                    }
                ],
                data1: [
                    {
                        title: '用户管理',
                        expand: true,
                        children: [
                            {
                                title: '潜在客户',
                                expand: true,
                                children: [
                                    {
                                        title: '合同管理'
                                    },
                                    {
                                        title: '渠道查询'
                                    }
                                ]
                            },
                            {
                                title: '投资用户',
                                expand: true,
                                children: [
                                    {
                                        title: '资料查询'
                                    },
                                    {
                                        title: '全息视图'
                                    }
                                ]
                            }
                        ]
                    }
                ]

            };
        },

        components: {
            VmMsgPush,
            VmContent,
            ZsSideMenu
        },
        methods: {
            handleChange(name) {
                alert(name);
            },
            handleClickUserDropdown(name) {
                if('logout' == name){
                    this.$store.dispatch('user/logout', this.form).then(() => {
                        this.$router.push({
                            name: 'login'
                        });
                    }).catch((e) => {
                        console.log(e);
                    });
                }
            },
        },
        mounted: function () {
            this.$store.dispatch('user/userInfo', this.form).then(() => {
                this.userName = this.$store.state.user.currentUser.userName;
                this.avatar = this.$store.state.user.currentUser.avatar;
            }).catch((e) => {
                console.log(e);
            });
        }

    };


</script>
