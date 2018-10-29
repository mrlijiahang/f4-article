import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Media from './Media'
import Order from './Order'


const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Navleft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: '稿件发布', id: 1, 
                menuItem: [
                    { name: '媒体发稿', id: 11 ,path:'media'}, { name: '套餐发稿', id: 12,path:'media' }] 
                },
                { name: '订单管理', id: 2, menuItem: [{ name: '订单列表', id: 21 ,path:'order'}, { name: '结案报告', id: 22 ,path:'order'}] },
                { name: '财务管理', id: 3, menuItem: [{ name: '账单记录', id: 31 }] },
                { name: '个人中心', id: 4, menuItem: [{ name: '个人中心', id: 41 }] },
                { name: '常见问题', id: 5, menuItem: [{ name: '常见问题', id: 51 }] },
            ]
        };
    }
    render() {
        const { list } = this.state
        return (
            <BrowserRouter>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                                list.map(function (item, index) {
                                    return (
                                        <SubMenu key={index} title={<span><Icon type='desktop' />{item.name}</span>}>
                                            {
                                                item.menuItem.map(function (item1, index) {
                                                    return (
                                                        <Menu.Item key={item1.id}>
                                                            <Link to={item1.path}>
                                                                {item1.name}
                                                            </Link>
                                                        </Menu.Item>
                                                    );
                                                })
                                            }
                                        </SubMenu>
                                    );
                                }
                                )
                            }
                        </Menu>
                    </Sider>

                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Switch>
                                <Route path='/media' component={Media} />
                                <Route path='/order' component={Order} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}
export default Navleft