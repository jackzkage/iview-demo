<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.username" placeholder="请输入用户名" @input="inputChange">
                            <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码" @input="inputChange">
                            <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>

                            <Button type="primary" :loading="loading" @click="handleSubmit" long>
                                <span v-if="!loading">登录</span>
                                <span v-else>登录中</span>
                            </Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip" v-show="loginTip">{{loginTip}}</p>

                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                loginTip: '',
                form: {
                    username: 'iview_admin',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '账号不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            inputChange() {
                this.loginTip = '';
            },
            handleSubmit() {
                this.loginTip = '';
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch('user/login', this.form).then(() => {
                            this.loading = false;
                            this.$router.push({
                                name: 'main'
                            });
                        }).catch((e) => {
                            this.loginTip = e.message;
                            this.loading = false;
                        });
                    } else {
                        return false;
                    }
                });
            }
        }
    };
</script>

<style>

</style>
