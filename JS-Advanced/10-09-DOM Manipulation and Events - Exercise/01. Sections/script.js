function create(words) {
   const divRef = document.getElementById('content');

   for (let word of words) {
      const divEl = document.createElement('div');

      const pEl = document.createElement('p');
      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.addEventListener('click', clickHandler);

      divEl.appendChild(pEl);
      divRef.appendChild(divEl);
   }

   function clickHandler(event) {
      let target = event.currentTarget;
      let children = target.children;
      let p = children[0];
      p.style.display = 'block';
   }
}