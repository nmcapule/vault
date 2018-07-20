function initNotes() {
    const storage = browser.storage.local;
    const notesEl = document.querySelector('#notes');
    
    // Load value from storage if exists.
    storage.get(['notes']).then(table => {
        notesEl.value = table['notes'];
    });

    // Create listener to save to storage when changed.
    notesEl.addEventListener('keyup', value => {
        storage.set({'notes': notesEl.value});
    });
}

initNotes();