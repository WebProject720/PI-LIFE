function PostNote(e) {
    e.preventDefault();
    const data = new FormData(e.target).get('textarea');
    showAddNote(null);
    return false;
};
