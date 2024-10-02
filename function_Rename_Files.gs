function rename_files() {
  var folder = DriveApp.getFolderById('FolderID'); // Change 'FOLDER_ID' to your folder's ID
  var files = folder.getFiles();

  while (files.hasNext()) {
    var file = files.next();
    var name = file.getName();

    // Check if the file name starts with "whatever (copia de in this case)" and rename it
    if (name.toLowerCase().startsWith('copia de ')) {
      var newName = name.replace(/^copia de\s+/i, ''); // Remove "whatever (copia de in this case)" from the beginning
      file.setName(newName);
    }
  }
  
}
