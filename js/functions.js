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
    if (!navigator.clipboard) {
      document.execCommand('copy');
    } else {
      navigator.clipboard.writeText(textArea.value.trim());
    }
  });
};

const getActualDate = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();
  const setYear = document.getElementById('year');
  setYear.innerHTML = year;
}

//* Menu listeners
document.querySelector("a.ham-icon").addEventListener("click", (event) => {
  document.getElementById("sideNavigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
});
document.querySelector("a.close-btn").addEventListener("click", (event) => {
  document.getElementById("sideNavigation").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
});

export { manipulateText, getActualDate };