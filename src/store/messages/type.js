import PropTypes from 'prop-types'

export default {
    status: PropTypes.shape({
        id: PropTypes.number,
        sender_id: PropTypes.number,
        recipient_id: PropTypes.number,
        body: PropTypes.string,
    }),
}