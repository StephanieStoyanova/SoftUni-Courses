function solve() {
  const inputText = document.getElementById('input').value;
  let sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);
  let output = document.getElementById('output');

  for (let i = 0; i < sentences.length; i += 3) {
    const parSentences = sentences.slice(i, i + 3).join('. ');
    const paragraph = document.createElement('p');
        paragraph.textContent = parSentences + '.';
        output.appendChild(paragraph);
  }
}