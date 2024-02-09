function solve() {
   const addButtons = Array.from(document.querySelectorAll('.add-product'));
   const checkoutButton = document.querySelector('.checkout');
   const cartTextarea = document.querySelector('textarea');

   let cart = [];
   let totalPrice = 0;

   if (!addButtons[0].hasAttribute('data-event-listeners-added')) {
       addButtons.forEach((button, index) => {
           button.addEventListener('click', function() {
               const product = document.querySelectorAll('.product')[index];
               const productName = product.querySelector('.product-title').textContent;
               const productPrice = parseFloat(product.querySelector('.product-line-price').textContent);
               totalPrice += productPrice;
               cart.push({ name: productName, price: productPrice });
               cartTextarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
           });
       });

       checkoutButton.addEventListener('click', function() {
           let uniqueProducts = [];
           cart.forEach(product => {
               if (!uniqueProducts.some(p => p.name === product.name)) {
                   uniqueProducts.push(product);
               }
           });
           let list = uniqueProducts.map(product => product.name).join(', ');
           cartTextarea.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
           disableButtons();
       });

       addButtons.forEach(button => {
           button.setAttribute('data-event-listeners-added', true);
       });
   }

   function disableButtons() {
       addButtons.forEach(button => {
           button.disabled = true;
       });
       checkoutButton.disabled = true;
   }
}

