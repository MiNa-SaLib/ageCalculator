function age() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  let date = new Date();
  let get_day = date.getDate();
  console.log(get_day);
  let get_month = 1 + date.getMonth();
  console.log(get_month);
  let get_year = date.getFullYear();
  console.log(get_year);
  let daysinif = 0;
  let monthinif = 0;
  let yearsinif = 0;

  if (year < get_year) {
    if (month == get_month) {
      if (day == get_day) {
        monthinif = get_month - month;
        daysinif = get_day - day;
        yearsinif = get_year - year;
      }
    }

    if (month < get_month) {
      if (day == get_day) {
        monthinif = get_month - month;
        daysinif = get_day - day;
        yearsinif = get_year - year;
      }
    }

    if (month > get_month) {
      if (day == get_day) {
        monthinif = get_month - month + 12 - 1;
        daysinif = get_day - day + 30;
        yearsinif = get_year - year - 1;
      }
    }

    if (month == get_month) {
      if (day > get_day) {
        monthinif = get_month - month - 1 + 12;
        daysinif = get_day - day + 31;
        yearsinif = get_year - year - 1;
      }
    }

    if (month == get_month) {
      if (day < get_day) {
        monthinif = get_month - month;
        daysinif = get_day - day;
        yearsinif = get_year - year;
      }
    }

    if (month < get_month) {
      if (day < get_day) {
        monthinif = get_month - month;
        daysinif = get_day - day;
        yearsinif = get_year - year;
      }
    }

    if (month < get_month) {
      if (day > get_day) {
        monthinif = get_month - month - 1;
        daysinif = get_day - day + 30;
        yearsinif = get_year - year;
      }
    }

    if (month > get_month) {
      if (day < get_day) {
        monthinif = get_month - month + 12;
        daysinif = get_day - day;
        yearsinif = get_year - year - 1;
      }
    }

    if (month > get_month) {
      if (day > get_day) {
        monthinif = get_month - month - 1 + 12;
        daysinif = get_day - day + 31;
        yearsinif = get_year - year - 1;
      }
    }

    if (month > get_month) {
      if (day > get_day) {
        monthinif = get_month - month - 1 + 12;
        daysinif = get_day - day + 31;
        yearsinif = get_year - year - 1;
      }
    }
  }

  if (day != "" && month != "" && year != "") {
    document.getElementById("age").innerHTML = `Your Age is ${yearsinif} Year 
     , ${monthinif} Month And  ${daysinif} Day`;
    if (day == get_day && month == get_month) {
      document.getElementById(
        "age1"
      ).innerHTML = `Today is Your  Birthday, Happy Birthday`;
    }

    document.getElementById("name").innerHTML = `By : MiNa SaLib`;
  }
  if (day == "" && month == "" && year == "") {
    alert(`Please Enter Avalid Age !`);
  }
}
