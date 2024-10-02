function determineFolderSize() {
    var folder = DriveApp.getFolderById('FolderID'); // Get folder by ID
    var totalSize = getFolderSize(folder); // Calculate total size
    Logger.log("The total folder size is: " + (totalSize/ (1024*1024)).toFixed(1) + " MB"); // Log total size in MB
}

// Recursive function to calculate size
function getFolderSize(folder) {
    var contents = folder.getFiles(); // Get all files in the folder
    var size = 0;

    // Loop through each file and add its size
    while (contents.hasNext()) {
        var file = contents.next();
        size += file.getSize();
    }

    // Get subfolders and calculate their sizes
    var subFolders = folder.getFolders();
    while (subFolders.hasNext()) {
        var subFolder = subFolders.next();
        size += getFolderSize(subFolder); // Add size of subfolder
    }

    return size; // Return total size
}
