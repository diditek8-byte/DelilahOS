
export default class notesUI {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete} = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd =  onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
        <div class="windowbtnn" id="appheader">
                  <p onclick="closeNotesWindow()" class="icon3"><i class="fa-solid fa-x"></i></p>
                  <p class="second-btn"></p>
                  <p class="icon4"><i class="fa-solid fa-expand"></i></p>
               </div>
            <div class="sidebar">
                <button class="add-notes">+</button>
                <div class="notes-item"></div>
                <div class="side-border"></div>
            </div>
            <div class="notes-text">
                <input class="notes-title" type="text" placeholder="Enter your title">
                <textarea class="notes-body" placeholder="write your thoughts..."></textarea>
            </div>`;


            const btnAddNote = this.root.querySelector(".add-notes");
            const inputTitle = this.root.querySelector(".notes-title");
            const inputBody = this.root.querySelector(".notes-body");

            btnAddNote.addEventListener("click", () => {
                this.onNoteAdd();
            });


            [inputTitle, inputBody].forEach(inputField => {
                inputField.addEventListener("blur", () => {
                    const updateTitle = inputTitle.value.trim();
                    const updateBody = inputBody.value.trim();

                    this.onNoteEdit(updateTitle, updateBody);
                });
            });
        }
        
    

   _createListItemHTML(id, title, body, date) {
       const max_body_length = 15;
       const max_note_length = 4;

       return `
           <div class="notes-list-item" data-note-id="${id}">
              <div class="title">${title}</div>
              <div class="body">
                  ${body.substring(0, max_body_length)}
                  ${body.length > max_body_length ? "..." : ""}
              </div>
              <div class="notes-date">
                  ${date.toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })}
              </div>
           </div>
       `;
      
   }
   


   updateNotesList(notes) {
      const notesListContainer = this.root.querySelector(".notes-item");

      notesListContainer.innerHTML = "";

      for (const note of notes) {
        const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

        notesListContainer.insertAdjacentHTML("beforeend", html);
      }

      notesListContainer.querySelectorAll(".notes-list-item").forEach(noteListItem => {
        noteListItem.addEventListener("click", () => {
            this.onNoteSelect(noteListItem.dataset.noteId);
        });

        noteListItem.addEventListener("dblclick", () => {
            const doDelete = confirm("Are you sure you want to delete this note?");

            if (doDelete) {
                this.onNoteDelete(noteListItem.dataset.noteId);
            }
        });
        
      });
   }

   updateActiveNote(note) {
      this.root.querySelector(".notes-title").value = note.title;
      this.root.querySelector(".notes-body").value = note.body;

      this.root.querySelectorAll(".notes-list-item").forEach(noteListItem => {
        noteListItem.classList.remove("notes__list-item--selected");
      });

      this.root.querySelector(`.notes-list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
   }

   updateNotePreviewVisibility(visible) {
      this.root.querySelector(".notes-text").style.visibility = visible ? "visible" : "hidden";
   }
}

