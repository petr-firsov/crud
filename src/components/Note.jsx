import PropTypes from "prop-types"

export default function Note({id, content, handleClick}) {
    return (
        <div className="note" key={id}>
            {content}
            <div type="button" className="remove-btn" onClick={handleClick}>✖</div>
        </div>
    )
}

Note.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    handleClick: PropTypes.func,
}