import React from 'react';

export default function Header(props){
    const {countCartIterms} = props;
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    Cart{' '}
                    {countCartIterms ? (
                        <button className="badge">{countCartIterms}</button>
                    ) : (
                        ''
                    )}
                </a>{' '}
                <a href="#/signin">Sign In</a>
            </div>
        </header>
    );
}