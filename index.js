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
    const user = { Name: nameInput.value, Email: emailInput.value };
    localStorage.setItem(nameInput.value, JSON.stringify(user));

    // Add function on Delete Button.
    deleteButton.addEventListener("click", () => {
      row.remove(); // Remove the row from the table
      localStorage.removeItem(nam); // Remove the user details from localStorage
    });

    // Add function on Edit Button
    editButton.addEventListener('click',editdetails);

    function editdetails()
    {
      var newtxtn=prompt('Enter new name',nam);
      var newtxte=prompt('Enter new email',eml);
      
      if (newtxtn !== null && newtxtn !== "" && newtxte!==null) {
        nameCell.textContent=newtxtn;
        localStorage.removeItem(nam);
        var obj={Name:newtxtn, Email: newtxte};
        localStorage.setItem(newtxtn,JSON.stringify(obj));
      }
      if (newtxte !== null) {
        emailCell.textContent=newtxte;
      }

      deleteButton.addEventListener('click',()=>{
        localStorage.removeItem(newtxtn);
    });
    }



    // clear details on refreshing
    nameInput.value = "";
    emailInput.value = "";
  }
}
