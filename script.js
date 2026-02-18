function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.getElementById('pageTitle').innerText =
    id.charAt(0).toUpperCase() + id.slice(1);
}

function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
  updateCounts();
}

function updateCounts() {
  document.getElementById('userCount').innerText =
    document.querySelectorAll('#userTable tr').length;

  document.getElementById('postCount').innerText =
    document.querySelectorAll('#postTable tr').length;
}

// Initialize counts on load
updateCounts();
