const nameinput = document.querySelector("#name");
const email = document.querySelector("#email");
const btn = document.querySelector("#button");
const msg = document.querySelector("#er");
// const userlist=document.querySelector('#output');
const nm = document.querySelector(".nm");
const em = document.querySelector(".em");

// Apply function on Button

btn.addEventListener("click", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  if (nameinput.value === "" || email.value === "") {
    msg.classList.add("error"); // Add class error in msg.
    msg.innerHTML = "Hey can you please Enter User details";

    setTimeout(() => {
      // Remove the message with class after 1 sec.
      msg.classList.remove("error");
      msg.innerHTML = "";
    }, 1000);
  } else {
    const li1 = document.createElement("p");
    const li2 = document.createElement("p");

    // const adddetails=document.createTextNode(`Name is: ${nameinput.value} and Email is: ${email.value}`);

    const adddetails1 = document.createTextNode(`${nameinput.value}`); // Take name value
    const adddetails2 = document.createTextNode(`${email.value}`); // Take email value
    li1.appendChild(adddetails1);
    li2.appendChild(adddetails2);

    // Adding Class in Element

    li1.classList.add("details1");
    li2.classList.add("details2");
    nm.appendChild(li1);
    em.appendChild(li2);

    // Give Success message
    msg.classList.add("success"); // Add class Success in msg.
    msg.innerHTML = "Hey, you SuccessFully Added..";

    setTimeout(() => {
      // Remove the message with class after 1 sec.
      msg.classList.remove("success");
      msg.innerHTML = "";
    }, 1000);

    // Adding value into Local Storage when we click on Submit-> it set data for single user only

    /* var nameval = nameinput.value;
    var emailval = email.value;
    localStorage.setItem("Name:", nameval);
    localStorage.setItem("Email:", emailval);*/

    // Adding value as an object into Local Storage -> it add more than one user details
    
    var existuser=localStorage.getItem('UserDetails');  // take existing userdetails
    var listofdetails=existuser ? JSON.parse(existuser) : [];
    // This line checks if existuser is truthy, meaning it contains a non-empty string. If it is truthy, it indicates that there are existing user details stored in the local storage. In that case, JSON.parse(existuser) is used to convert the string back into an array of user details objects. The result is assigned to the listofdetails variable.If existuser is falsy, indicating there are no existing user details in the local storage (or it is null, undefined, or an empty string), an empty array [] is assigned to listofdetails.

    var newobj={
      Name:nameinput.value,
      Email:email.value
    };

    listofdetails.push(newobj);  // push to the list

    var newobj_serialize=JSON.stringify(listofdetails);
    localStorage.setItem('UserDetails',newobj_serialize);
    

    // clear details on refreshing
    nameinput.value = "";
    email.value = "";
  }
}

