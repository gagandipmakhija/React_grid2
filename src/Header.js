import React from 'react';
import Leftheader from './Leftheader'
import Rightheader from './Rightheader';

function Header() {
    return (
        <div style={{ height:'100px',width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid gray', backgroundColor: 'lightyellow' }}>
            <Leftheader />
            <Rightheader />
        </div>)
}
export default Header;