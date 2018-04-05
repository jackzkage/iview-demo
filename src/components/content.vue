<template>
    <div>

        <Row style="border-bottom: 1px dotted #f3f3f3; margin-top: -24px; padding: 5px">
            <Col span="24">
            <Button type="text" icon="plus-round">新增</Button>
            <Button type="text" icon="edit">修改</Button>
            <Button type="text" icon="close-round">删除</Button>
            <Button type="text" icon="search">高级筛选</Button>
            </Col>
        </Row>

<div style="margin: 20px auto 10px auto">
        <Form  :label-width="100">
            <Row>
                <Col span="8">
                <FormItem label="用户名">
                    <Input placeholder="Enter something..."></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="所属部门">
                    <Select >
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                </Col>

                <Col span="8">
                <FormItem label="入职时间">
                    <Row>
                        <Col span="11">
                        <DatePicker type="date" placeholder="Select date"></DatePicker>
                        </Col>
                        <Col span="2" style="text-align: center">-</Col>
                        <Col span="11">
                        <TimePicker type="time" placeholder="Select time" ></TimePicker>
                        </Col>
                    </Row>
                </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span="8">
                <FormItem label="用户状态">
                    <CheckboxGroup >
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                </Col>


                <Col span="16">
                    <FormItem>
                    <Button type="primary" icon="ios-search">查询</Button>
                    </FormItem>
                </Col>
            </Row>
        </Form>
</div>
        <Row>
            <Table size="small"   :columns="columns1" :data="data1"></Table>
        </Row>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>