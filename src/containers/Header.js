import React from 'react';

const Header = () => {
    return (
        <div style={{    
        padding: '10px 20px',
        backgroundColor: 'white',
        textAlign: 'center',
        borderBottom: '1px solid gray'
        }}>
            <h2 style={{
                textAlign: 'left',
                fontSize: '35px',
                fontWeight: '700'
        }}>FakeShop</h2>
        </div>
    );
};

export default Header;