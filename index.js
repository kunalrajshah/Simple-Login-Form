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
    var nam=nameInput.value;
    // Create table row and cells for user details
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    nameCell.textContent = nameInput.value;
    emailCell.textContent = emailInput.value;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("del");

    deleteCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(deleteCell);
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

    // clear details on refreshing
    nameInput.value = "";
    emailInput.value = "";
  }
}
