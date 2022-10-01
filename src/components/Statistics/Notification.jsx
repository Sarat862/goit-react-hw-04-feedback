import PropTypes from 'prop-types';

export function Notification({message}) {
    return (
        <b>{message}</b>
    )
}

Notification.propTypes = {
    message:PropTypes.string.isRequired
}