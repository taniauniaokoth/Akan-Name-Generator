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

  