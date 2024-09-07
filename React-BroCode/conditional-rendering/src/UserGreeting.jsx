import PropTypes from 'prop-types'
function UserGreeting(props){
    if(props.isLoggedIn){
        return(
            <div>
                <h1> Welcome back {props.username}</h1>
            </div>
            );
    }
    else{
        return(
            <div>
                <h1>Please login to continue</h1>
            </div>
        );
    }
   
}
UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false
}
export default UserGreeting;