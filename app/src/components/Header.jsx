import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
const { Header} = Layout;

class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin:'管理员',
            list: [
             { name: '新闻营销', id: '1',path:'/'},
             { name: '微信营销', id: '2',path:'wechat'},
             { name: '微博营销', id: '3',path:'weibo'}, 
             { name: '自媒体营销', id: '4',path:'zimeiti'}, 
             { name: '视频营销', id: '5',path:'shipin'}, 
             { name: '口碑营销', id: '6',path:'koubei'}]
        };
    }
    render() {
        const {list,admin} = this.state
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    {list.map((item, index) => {
                        return (
                            <Menu.Item key={item.id}>
                            <Link to={item.path}>
                             {item.name}
                             </Link>
                            </Menu.Item>
                            )
                    })
                    }
                    <Menu.Item key="7" style={{ position: 'absolute', right: 0 }}>{admin}:退出</Menu.Item> 
                </Menu>
            </Header>
        )
    }
}
export default HeaderTop;