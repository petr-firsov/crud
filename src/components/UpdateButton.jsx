import PropTypes from "prop-types"

export default function UpdateButton({updateNotes}) {
    return (
        <button type="button" className="update-btn" onClick={updateNotes}>🗘</button>
    )
}

UpdateButton.propTypes = {
    updateNotes: PropTypes.func,
}