const inputFile = document.querySelector('#input-file');

inputFile.addEventListener('change', findsFrequencyOfWord);

function findsFrequencyOfWord() {
  var files = this.files;
  let fr = new FileReader();

  fr.onload = () => {
    let regex = /Java/g;
    let countResult = fr.result.match(regex).length;

    document.querySelector('#output').textContent = countResult;
  };
  fr.readAsText(files[0]);
}
