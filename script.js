document.addEventListener('DOMContentLoaded', () => {
  let selectedNumber = 0;
  // Add event listener on each number. When user clicks on the number, it add the class 'active'
  const numbers = document.querySelectorAll('#rating ul li');
  numbers.forEach((number, index) => {
    number.addEventListener('click', () => {
      const currentActive = document.querySelector('#rating li.active');
      if (currentActive) currentActive.classList.remove('active');
      number.classList.add('active');
      selectedNumber = index + 1;
    });
  });

  // Add event listener on submit button. If the user clicks on the button, switch to different view
  const submit = document.querySelector('#submit');
  submit.addEventListener('click', () => {
    const rating = document.querySelector('#rating');
    const thankyou = document.querySelector('#thankyou');
    const span = document.querySelector('#thankyou span');
    span.textContent = `You selected ${selectedNumber} out of 5`;
    rating.classList.add('hidden');
    thankyou.classList.add('active');
  });
});