import PropTypes from "prop-types"

const FlashStatus = ({ message }) => {
    return (
        <>
            <p>{message}</p>
        </>
    )
}

FlashStatus.propTypes = {
    message: PropTypes.string.isRequired
}

export default FlashStatus
