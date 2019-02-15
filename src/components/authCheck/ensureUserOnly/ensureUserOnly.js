import {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {redirectUrlPut} from "../../../actions/auth.actions";

class EnsureUserOnly extends Component {
    componentDidMount() {
        const { currentUrl, dispatch, isLoggedIn, history, role } = this.props;

        if (!isLoggedIn) {
            if (currentUrl.split('/')[1] === 'admin') {
                dispatch(redirectUrlPut({ redirectUrl: currentUrl }));
                history.push('/login')
            }
        }
    }

    render() {
        const { children, isLoggedIn, role } = this.props;

        if (isLoggedIn && role === "ADMIN") {
            return children;
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.auth.isAuthenticated,
    currentUrl: ownProps.location.pathname,
    role: state.auth.role
});

export default withRouter(connect(mapStateToProps)(EnsureUserOnly));