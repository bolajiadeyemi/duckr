import React, { PropTypes } from 'react';
import { Authenticate } from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from 'redux/modules/users';

const AuthenticateContainer = React.createClass({
   propTypes:{
   isFetching: PropTypes.bool.isRequired,
   error: PropTypes.string.isRequired,
   fetchAndHandleAuthedUser: PropTypes.func.isRequired

   },
  handleAuth (){
   this.props.fetchAndHandleAuthedUser();
  },
  render () {
    console.log(this.props);
    return (
    <Authenticate
    isFetching={this.props.isFetching}
    error={this.props.error}
    onAuth={this.handleAuth}
    />
    )
  },
})

function mapStateToProps(state){
  console.log(state);
  const {isFetching, error} = state
  return {
  isFetching,
  error
 }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(userActionCreators, dispatch);
}
export default connect(
// (state) => ({isFetching: state.isFetching, error: state.error}),
mapStateToProps,
(dispatch) => bindActionCreators(userActionCreators, dispatch)
  )(AuthenticateContainer)