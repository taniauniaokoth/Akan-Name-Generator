function getName() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let gender = document.getElementById("gender").value;

  // validation
  if (day === "" || month === "" || year === "") {
    alert("Fill all fields");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Invalid month");
    return;
  }

  // arrays
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  