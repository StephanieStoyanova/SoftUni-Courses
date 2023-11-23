function extractFile(file) {
    let fileNameWithExtension = file.split("\\").slice(-1)[0];
    let lastDotIndex = fileNameWithExtension.lastIndexOf(".");

    let fileName = fileNameWithExtension.slice(0, lastDotIndex);
    let fileExtension = fileNameWithExtension.slice(lastDotIndex + 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
extractFile('C:\\Internal\\training-internal\\template.bak.ppt');