import React, { Component } from 'react';
import { Layout, Menu,  Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

class Navleft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: '11稿件发布', id: 1, menuItem: [{ name: '媒体发稿', id: 11 }, { name: '套餐发稿', id: 12 }] },
                { name: '11订单管理', id: 2, menuItem: [{ name: '订单列表', id: 21 }, { name: '结案报告', id: 22 }] },
                { name: '11财务管理', id: 3, menuItem: [{ name: '账单记录', id: 31 }] },
                { name: '11个人中心', id: 4, menuItem: [{ name: '个人中心', id: 41 }] },
                { name: '11常见问题', id: 5, menuItem: [{ name: '常见问题', id: 51 }] },
            ]
        };
    }
    render() {
        const { list } = this.state
        return (
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
                                <SubMenu key={index} title={<span><Icon type='desktop'/>{item.name}</span>}>
                                    {
                                        item.menuItem.map(function (item1, index) {
                                            return (
                                                <Menu.Item key={item1.id}>{item1.name}</Menu.Item>
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
        )
    }
}
export default Navleft