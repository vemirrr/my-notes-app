const noteInput = document.getElementById('note');
const saveButton = document.getElementById('save');
const notesList = document.getElementById('notes-list');

// Load saved notes
let notes = JSON.parse(localStorage.getItem('notes')) || [];
notes.forEach(addNoteToUI);

saveButton.addEventListener('click', () => {
  const text = noteInput.value.trim();
  if (text) {
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    addNoteToUI(text);
    noteInput.value = '';
  }
});

function addNoteToUI(text) {
  const li = document.createElement('li');
  li.textContent = text;
  notesList.appendChild(li);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}
  