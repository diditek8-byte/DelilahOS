import notesUI from "./notesUI.js";
import notesAPI from "./notesAPI.js";

export default class App {
    constructor(root) {
        this.notes = [];
        this.activenote = null;
        this.UI = new notesUI(root, this._handlers());

        this._refreshNotes();
    }

    _refreshNotes() {
        const notes = notesAPI.getNotes();

        this._setNotes(notes);

        if (notes.length > 0) {
            this._setActiveNote(notes[0])
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.UI.updateNotesList(notes);
        this.UI.updateNotePreviewVisibility(notes.length > 0);
    }

    _setActiveNote(note) {
        this.activeNote = note;
        this.UI.updateActiveNote(note);
    }

    _handlers() {
        return {
            onNoteSelect: noteId => {
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "Enter your title",
                    body: "Write your thoughts..."
                };

                notesAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title, body) => {
                notesAPI.saveNote({
                    id: this.activeNote.id,
                    title,
                    body
                });

                this._refreshNotes();
            },
            onNoteDelete: noteId => {
                notesAPI.deleteNote(noteId);
                this._refreshNotes();
            },
        };
    }
}