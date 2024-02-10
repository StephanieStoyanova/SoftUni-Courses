function encodeAndDecodeMessages() {
    const [senderTextareaRef, receiverTextareaRef] = document.querySelectorAll('textarea');
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button'); 

    encodeBtn.addEventListener('click', () => {
        const message = senderTextareaRef.value;
        const encodedMessage = encodeMessage(message);
        senderTextareaRef.value = "";
        receiverTextareaRef.value = encodedMessage;
    });

    decodeBtn.addEventListener('click', () => {
        const encodedMessage = receiverTextareaRef.value;
        const decodedMessage = decodeMessage(encodedMessage);
        receiverTextareaRef.value = decodedMessage;
    })

    function encodeMessage(message) {
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            const currCharCode = message.charCodeAt(i);
            const encodedCharCode = currCharCode + 1;
            encodedMessage += String.fromCharCode(encodedCharCode);
        }

        return encodedMessage;
    }

    function decodeMessage(encodedMessage) {
        let decodedMessage = "";
        for (let i = 0; i < encodedMessage.length; i++) {
            const currCharCode = encodedMessage.charCodeAt(i);
            const decodedCharCode = currCharCode - 1;
            decodedMessage += String.fromCharCode(decodedCharCode);
        }

        return decodedMessage;
    }
}