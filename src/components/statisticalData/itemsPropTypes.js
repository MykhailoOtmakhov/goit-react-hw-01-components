import PropTypes from 'prop-types';
export default { 
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ) 
}
