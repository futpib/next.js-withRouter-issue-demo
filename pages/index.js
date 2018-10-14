
import r from 'r-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { withRouter } from 'next/router';

// XXX remove `connect()` below to fix
const Broken = connect()(withRouter(props => r.div([
    r.button({
        onClick: () => props.router.push({
            pathname: '/',
            query: {
                x: Math.random()
            }
        })
    }, 'Hook me up with some reproductions, boi'),
    r.pre(JSON.stringify(props.router.query, null, 2))
])));

console.log(Broken.contextTypes);

const store = createStore(x => x);

export default withRouter(() => r(Provider, { store }, r.div([
    r(Broken),
])));
