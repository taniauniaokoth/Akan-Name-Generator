function getName() {
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // validation
  if (day === "" || month === "" || year === "") {
    alert("Fill all fields");
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

  // arrays
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // date logic
  let date = new Date(year, month - 1, day);
  let d = date.getDay();

  let name;

  if (gender === "male") {
    name = male[d];
  } else {
    name = female[d];
  }

  // output
  document.getElementById("result").innerHTML = "Your Akan name is: " + name;

  document.getElementById("result").style.color = "#6c63ff";
}
