const nameinput=document.querySelector('#name');
const email=document.querySelector('#email');
const btn=document.querySelector('#button');
const msg=document.querySelector('#er');
// const userlist=document.querySelector('#output');
const nm=document.querySelector('.nm');
const em=document.querySelector('.em')

// Apply function on Button

btn.addEventListener('click',onsubmit);

function onsubmit(e)
{
  e.preventDefault();
  if(nameinput.value==='' || email.value==='')
  {
     msg.classList.add('error');                // Add class error in msg.
     msg.innerHTML="Hey Taani can you please Enter User details";

     setTimeout(() => {                           // Remove the message with class after 1 sec.
      msg.classList.remove('error');
      msg.innerHTML = '';
    }, 1000);
  }
  else
  {
    const li1=document.createElement('p');
    const li2=document.createElement('p');

    // const adddetails=document.createTextNode(`Name is: ${nameinput.value} and Email is: ${email.value}`);

    const adddetails1=document.createTextNode(`${nameinput.value}`);  // Take name value
    const adddetails2=document.createTextNode(`${email.value}`);      // Take email value
    li1.appendChild(adddetails1);
    li2.appendChild(adddetails2);

    // Adding Class in Element

    li1.classList.add('details1');
    li2.classList.add('details2');
    nm.appendChild(li1);
    em.appendChild(li2);

    // Give Success message
    msg.classList.add('success');                // Add class Success in msg.
    msg.innerHTML="Hey, you SuccessFully Added..";

    setTimeout(() => {                           // Remove the message with class after 1 sec.
      msg.classList.remove('success');
      msg.innerHTML = '';
    }, 1000);
                          
    // clear details on refreshing
      nameinput.value='';
      email.value='';
  }
}