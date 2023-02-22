const date1 = document.getElementById('date1')
const date2 = document.getElementById('date2')
const date3 = document.getElementById('date3')
const date4 = document.getElementById('date4')


const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
};
const date = new Date('22 Feb 2023').toLocaleDateString("en-US", options);

date1.innerHTML = date;
date2.innerHTML = date;
date3.innerHTML = date;
date4.innerHTML = date;
