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

  if (
    day != "" &&
    month != "" &&
    year != "" &&
    day != 0 &&
    month != 0 &&
    year != 0 &&
    day != " " &&
    month != " " &&
    year != " " &&
    day <= 31 &&
    month <= 12 &&
    day >= 1 &&
    month >= 1 &&
    get_year >= year
  ) {
    document.getElementById(
      "age"
    ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
     , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
     <h3>
      Remain  <span id="id22">${11 - monthinif}</span>
      Month And <span id="id33">${
        31 - daysinif
      } </span> Day to your next birthday
      </h3>
     `;

    document.getElementById("id1").style.color = "red";
    document.getElementById("id2").style.color = "red";
    document.getElementById("id3").style.color = "red";
    document.getElementById("id22").style.color = "red";
    document.getElementById("id33").style.color = "red";
    document.getElementById("id1").style.fontSize = "25px";
    document.getElementById("id2").style.fontSize = "25px";
    document.getElementById("id3").style.fontSize = "25px";

    if (day == get_day && month == get_month && get_year >= year) {
      document.getElementById(
        "age1"
      ).innerHTML = `Today is Your  Birthday, Happy Birthday <div><audio
      src="Happy-Birthday-To-You-Happy-Birthday-Songs-2021-WishesPlus.com_.mp3"
      controls
      autoplay
      style="display: none"
     ></audio></div> <img src="happy_birthday_PNG1.png" style="width: 250px;margin-top:50px;" alt="" /> `;
    }

    if (day == get_day + 1 && month == get_month && get_year >= year) {
      document.getElementById(
        "age1"
      ).innerHTML = `Tomorrow is Your  Birthday, Happy Birthday <div><audio
      src="Happy-Birthday-To-You-Happy-Birthday-Songs-2021-WishesPlus.com_.mp3"
      controls
      autoplay
      style="display: none"
    ></audio></div><img src="happy_birthday_PNG1.png" style="width: 250px;margin-top:50px;" alt="" />  `;
    }

    document.getElementById("name").innerHTML = `By : MiNa SaLib`;
  } else {
    alert(`Please Enter Avalid Age !`);
  }
}
