function getName() {
  // get input values
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value); // ✅ FIXED
  let year = Number(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // validation
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

  // ✅ February + month fix
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29;
  }

  if (day > daysInMonth[month - 1]) {
    alert("Invalid date for that month");
    return;
  }

  // Akan names
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // formula (UNCHANGED ✅)
  let CC = Math.floor(year / 100);
  let YY = year % 100;

  let d =
    (Math.floor(CC / 4) -
      2 * CC +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day -
      1) %
    7;

  d = (d + 7) % 7;

  // pick name
  let name = gender === "male" ? male[d] : female[d];

  // display
  let resultBox = document.getElementById("result");
  resultBox.innerHTML = "Your Akan name is: " + name;
  resultBox.style.color = "#6c63ff";

  resultBox.classList.remove("show");
  void resultBox.offsetWidth;
  resultBox.classList.add("show");

  // clear inputs
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("gender").value = "";
}
