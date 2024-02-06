function search() {
   const towns = Array.from(document.querySelectorAll('#towns li'));
   const match = document.getElementById('searchText').value.toLowerCase();
   let counter = 0;

   towns.forEach(town => {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   });

   for (let town of towns) {
      let text = town.textContent.toLowerCase();
      if (text.includes(match)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   document.getElementById('result').textContent = `${counter} matches found`;
}
