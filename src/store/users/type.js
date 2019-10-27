import PropTypes from 'prop-types'

export default {
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        company: PropTypes.string,
        phone: PropTypes.string,
        address: PropTypes.string,
    }),
}