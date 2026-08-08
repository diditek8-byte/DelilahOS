export default class notesAPI {
    static getNotes() {
        const notes = JSON.parse(localStorage.getItem("notes-app") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = notesAPI.getNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
          noteToSave.id = Math.floor(Math.random() * 1000000);
          noteToSave.updated = new Date().toISOString();
          notes.push(noteToSave);
        }

    
        localStorage.setItem("notes-app", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = notesAPI.getNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notes-app", JSON.stringify(newNotes));
    }
}