import {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class AuthCheck extends Component {

    componentDidMount() {
        const { currentUrl, history } = this.props;
        const routes = ['inicio', 'blog', 'catalogo', 'contacto', 'comercio-e-industria', 'nosotros', 'login', 'admin'];

        if (!routes.includes(currentUrl.split('/')[1])) {
            history.replace('/inicio');
        }

    }

    componentDidUpdate(prevProps) {
        const { redirectUrl, role } = this.props;
        const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
        const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

        if (isLoggingIn) {
            if (role === "ADMIN") {
                if (redirectUrl.split('/')[1] === 'admin') {
                    this.props.history.replace(redirectUrl);
                } else {
                    this.props.history.push('/admin');
                }
            } else {
             this.props.history.replace("/inicio");
            }
        } else if (isLoggingOut) {
            this.props.history.push('/inicio')
        }
    }

    render() {
        return this.props.children;
    }
}

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.auth.isAuthenticated,
    redirectUrl: state.auth.redirectUrl,
    currentUrl: ownProps.location.pathname,
    role: state.auth.role
});

export default withRouter(connect(mapStateToProps)(AuthCheck));