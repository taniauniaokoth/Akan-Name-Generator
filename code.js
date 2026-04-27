function getName() {
  // get input values
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  //  DEBUG (optional but useful)
  console.log("Day:", day);
  console.log("Month:", month);
  console.log("Year:", year);
  console.log("Gender:", gender);

  //  validation
  if (!day || !month || !year) {
    alert("Please fill all fields");
    return;
  }

  if (day < 1 || day > 31) {
    alert("Invalid day");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Invalid month");
    return;
  }

  if (gender === "") {
    alert("Please select gender");
    return;
  }

  //  Akan name arrays
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  //  create date
  let date = new Date(year, month - 1, day);

  // get day of week (0–6)
  let d = date.getDay();
  console.log("Day index:", d);

  //  pick name
  let name;

  if (gender === "male") {
    name = male[d];
  } else {
    name = female[d];
  }

  console.log("Akan Name:", name);

  //  display result
  let resultBox = document.getElementById("result");
  resultBox.innerHTML = "Your Akan name is: " + name;

  //  small styling touch
  resultBox.style.color = "#6c63ff";

  //  trigger animation
  resultBox.classList.remove("show");
  void resultBox.offsetWidth; // reset animation
  resultBox.classList.add("show");

  //  clear inputs (nice UX)
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("gender").value = "";
}
