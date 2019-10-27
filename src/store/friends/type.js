import PropTypes from 'prop-types'

export default {
    status: PropTypes.shape({
        id: PropTypes.number,
        status_id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
    }),
}