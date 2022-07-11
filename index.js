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

  if (year <= get_year) {
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

  let daystring = day.toString();
  let monthstring = month.toString();
  let yearstring = year.toString();
  let ramaindays = 31 - daysinif;
  let ramainmonths = 11 - monthinif;
  if (day > 29 && month == 2)
    alert(
      `February doesn't enclude ${day} days , Please Enter Avalid Date !`
    ); //2
  else if (day > 30 && month == 4)
    alert(`April doesn't enclude ${day} days , Please Enter Avalid Age !`); //4
  else if (day > 30 && month == 6)
    alert(`june doesn't enclude ${day} days , Please Enter Avalid Age !`); //6
  else if (day > 30 && month == 9)
    alert(
      `September doesn't enclude ${day} days , Please Enter Avalid Age !`
    ); //9
  else if (day > 30 && month == 11)
    alert(
      `November doesn't enclude ${day} days , Please Enter Avalid Age !`
    ); //11
  else if (year > get_year)
    alert(`Your Date of birth is invalid , Please Enter Avalid Date !`);
  else if (
    daystring[0] != "+" &&
    monthstring[0] != "+" &&
    yearstring[0] != "+" &&
    daystring[0] != "-" &&
    monthstring[0] != "-" &&
    yearstring[0] != "-" &&
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
    month >= 1
  ) {
    //if the year is 1

    if (yearsinif <= 1) {
      //1
      if (daysinif <= 1 && monthinif <= 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //1.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //1.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //1.3
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        } else if (ramainmonths > 1 && ramaindays > 1) {
          //1.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        }
      }
      //2
      else if (daysinif > 1 && monthinif > 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //2.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>
          `;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //2.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>
          `;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //2.3
          2.3;
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        } else if (ramainmonths > 1 && ramaindays > 1) {
          //2.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        }
      }

      //3
      else if (daysinif > 1 && monthinif <= 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //3.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //3.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //3.3
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        } else {
          //3.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        }
      }
      //4
      else if (daysinif <= 1 && monthinif > 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //4.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //4.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //4.3
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        } else {
          //4.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Year 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        }
      }
    }

    //if the year is greater than 1

    if (yearsinif > 1) {
      //1
      if (daysinif <= 1 && monthinif <= 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //1.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //1.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //1.3
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        } else {
          //2.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        }
      }
      //2
      else if (daysinif > 1 && monthinif > 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //2.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>
          `;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //2.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>
          `;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //2.3
          2.3;
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        } else {
          //2.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        }
      }

      //3
      else if (daysinif > 1 && monthinif <= 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //3.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //3.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //3.3
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        } else {
          //3.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Month And  <span id='id3'>${daysinif}</span> Days
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>
          `;
        }
      }
      //4
      else if (daysinif <= 1 && monthinif > 1) {
        if (ramainmonths <= 1 && ramaindays <= 1) {
          //4.1
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths > 1 && ramaindays <= 1) {
          //4.2
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Day to your next birthday
            </h3>`;
        } else if (ramainmonths <= 1 && ramaindays > 1) {
          //4.3
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Month And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        } else {
          //4.4
          document.getElementById(
            "age"
          ).innerHTML = `Your Age is <span id='id1'>${yearsinif}</span> Years 
          , <span id='id2'>${monthinif}</span> Months And  <span id='id3'>${daysinif}</span> Day
          <h3>
            Remain  <span id="id22">${ramainmonths}</span>
            Months And <span id="id33">${ramaindays} </span> Days to your next birthday
            </h3>`;
        }
      }
    }

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
