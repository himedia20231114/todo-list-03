import React from 'react';

function Header() {
    // win + .    : 이모콘티 넣기 

    return (
        <div>
            <h3> 오늘은 🤣💖👌 </h3>
            <h1> { new Date().toDateString() } </h1>
        </div>
    );
}

export default Header;