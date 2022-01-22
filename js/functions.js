const manipulateText = () => {
  const textArea = document.getElementById('textArea');
  const toLowerCase = document.getElementById('toLowerCase');
  const toUpperCase = document.getElementById('toUpperCase');
  const toCapitalCase = document.getElementById('toCapitalCase');
  const deleteAllText = document.getElementById('deleteAllText');
  const copyAllText = document.getElementById('copyAllText');

  textArea.addEventListener('keyup', () => {
    textArea.value = textArea.value;
  });

  toLowerCase.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase();
  });

  toUpperCase.addEventListener('click', () => {
    textArea.value = textArea.value.toUpperCase();
  });

  toCapitalCase.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  });

  deleteAllText.addEventListener('click', () => {
    textArea.value = '';
  });

  copyAllText.addEventListener('click', () => {
    textArea.select();
    document.execCommand('copy');
  });
};

const getActualDate = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();
  const setYear = document.getElementById('year');
  setYear.innerHTML = year;
}

export { manipulateText, getActualDate };