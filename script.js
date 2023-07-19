const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btn = document.querySelector("#button");
const errorMsg = document.querySelector("#er");
const userTable = document.querySelector("#user-table");

btn.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    //For Delete Message
    errorMsg.classList.add("error");
    errorMsg.innerHTML = "Please enter user details.";
    setTimeout(() => {
      errorMsg.classList.remove("error");
      errorMsg.innerHTML = "";
    }, 1000);
  } else {
    var nam = nameInput.value;
    var eml = emailInput.value;
    // Create table row and cells for user details
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const deleteCell = document.createElement("td");
    const editCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    nameCell.textContent = nameInput.value;
    emailCell.textContent = emailInput.value;
    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";
    deleteButton.classList.add("del");
    editButton.classList.add("del");

    deleteCell.appendChild(deleteButton);
    editCell.appendChild(editButton);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(deleteCell);
    row.appendChild(editCell);
    userTable.appendChild(row);

    //For success message
    errorMsg.classList.add("success");
    errorMsg.innerHTML = "User successfully added.";
    setTimeout(() => {
      errorMsg.classList.remove("success");
      errorMsg.innerHTML = "";
    }, 1000);

    // Add user details to localStorage
    setdata();

    // Add function on Delete Button.
    deleteButton.addEventListener("click", () => {
      row.remove(); // Remove the row from the table
      setdata();
    });

    // clear details on refreshing
    nameInput.value = "";
    emailInput.value = "";
  }
}

//Adding data to localstorage so that task is even show after refreshing and window closed
function setdata()
{
 localStorage.setItem('data',userTable.innerHTML);
}

//  Get data from localstorage
function getdata()
{
 userTable.innerHTML=localStorage.getItem('data');
}

getdata();  // Calling to get data 

// Add function on button after getting by local storage
userTable.addEventListener("click",(event)=>{
    if(event.target.classList.contains('del'))
    {
      const data=event.target.parentElement.parentElement;
      if(event.target.textContent==='Delete')
      {
        data.remove();
        setdata();
      }
      else if(event.target.textContent==='Edit')
      {
        var newnam=prompt('Enter new Name',data.children[0].textContent);
        var newemail=prompt('Enter new Email',data.children[1].textContent);

        if(newnam!=="" && newnam!== null)
        data.children[0].textContent=newnam;
        if(newemail!=="" && newemail!== null)
        data.children[1].textContent=newemail;

        setdata()
      }
    }
})
