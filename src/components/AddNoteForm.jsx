import PropTypes from "prop-types"

export default function AddNoteForm({handleSubmit}) {
    return (
        <form id="add-note-form" onSubmit={handleSubmit}>
            <label htmlFor="new-note-input">New Note</label>
            <textarea id="new-note-input" name="new-note"></textarea>
            <button type="submit" className="add-btn">➤</button>
        </form>
    )
}

AddNoteForm.propTypes = {
    handleSubmit: PropTypes.func,
}