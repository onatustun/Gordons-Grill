$(document).ready(() => {

  // localeData plugin for dayJS 

  dayjs.extend(dayjs_plugin_localeData);

  // Stores/caches selectors

  const dayGrid = $("#dayGrid");
  const monthLabel = $("#monthLabel");
  const prevMonth = $("#prevMonth");
  const nextMonth = $("#nextMonth");
  const weekdaysGrid = $("#weekdaysGrid");


  // Gets current date and makes the active date null

  let currentDate = dayjs();
  let activeDate = null;


  /* 
    Renders the calendar for the date chosen (initially the current day)
    Rerenders for new dates in future
  */

  const renderCalendar = (date) => {

    // Clears previous days and week elements

    dayGrid.empty();
    weekdaysGrid.empty();


    // For the active date it grabs info about the month the date is in

    const startOfMonth = date.startOf("month");
    const endOfMonth = date.endOf("month");
    const startDay = startOfMonth.day();
    const daysInMonth = endOfMonth.date();


    // Updates the month and year

    monthLabel.text(date.format("MMMM YYYY"));


    // Generates elements for the weekday labels (m-s etc.)

    dayjs.weekdays().forEach((weekday) => {
      $("<div>", {
        class: "font-medium text-black",

        // Cuts down the words to the first two characters

        text: weekday.substring(0, 2),
      }).appendTo(weekdaysGrid);
    });


    /*
      Append empty divs for days before the first day of the month
      For example if the first day of the month is on a thursday
      the days prior would be blanked out
    */

    for (i = 0; i < startDay; i++) {
      dayGrid.append("<div></div>");
    }


    // Renders each day of the month

    for (day = 1; day <= daysInMonth; day++) {
      const dayCell = $("<div>", {
        class:
          "flex items-center justify-center aspect-square cursor-pointer w-10 rounded-full hover:bg-accent/10 hover:text-accent",
        text: day,
        "data-day": day,
      });


      // Creates object for the current day

      const dateToCheck = dayjs(date).date(day);


      // Highlights the active date or current date

      if (activeDate && dateToCheck.isSame(activeDate, "day")) {
        dayCell.addClass("bg-accent text-white");
      } else if (day === dayjs().date() && date.isSame(dayjs(), "month")) {
        if (!activeDate) {

          // If there is not active/selected date it will highlight the current

          activeDate = dayjs();
          dayCell.addClass("bg-accent text-white");
        }
      }


      // Click event for selecting a date

      dayCell.on("click", () => {
        if (activeDate) {

          // Removes previous styling

          const previousActiveDayCell = dayGrid.find(
            `div[data-day='${activeDate.date()}']`,
          );
          if (previousActiveDayCell.length > 0) {
            previousActiveDayCell.removeClass("bg-accent text-white");
          }
        }


        // Updates the active date

        activeDate = dateToCheck;
        dayCell.addClass("bg-accent text-white");
      });


      // Adds the day cell to the grid

      dayGrid.append(dayCell);
    }
  };


  // Event listener for the booking submit button

  $("#book-submit").on("click", (e) => {

    /*
      When normally pressing a submit in a form it reloads the page.
      This prevents that normal behaviour so the rest of the
      logic can be executed.
    */

    e.preventDefault();


    // Checks whether the inputs are valid

    if (
      $("#start-time")[0].checkValidity() &&
      $("#end-time")[0].checkValidity() &&
      $("#book-email")[0].checkValidity() &&
      $("#name")[0].checkValidity() &&
      $("#table-quantity")[0].checkValidity()
    ) {

      // Stores the inputs if valid

      const startTime = $("#start-time").val();
      const endTime = $("#end-time").val();
      const email = $("#book-email").val();
      const name = $("#name").val();
      const bookQuantity = $("#table-quantity").val();

      // If the times are correct then it finally stores

      if (startTime < endTime) {
        const bookingDetails = {
          date: activeDate ? activeDate.format("MMMM D, YYYY") : null,
          startTime: startTime,
          endTime: endTime,
          email: email,
          name: name,
          quantity: bookQuantity,
        };


        // Using emailjs api sends an email with the details

        emailjs.send("service_9abbw7m", "template_3iodd3e", bookingDetails);
        alert(
          "We have received your booking and you will get an email about the details.",
        );

        // If not valid time reprompts user

      } else {
        alert("Please ensure that the start time is less than the end time.");
      }

      // If inputs arent valid reprompts user

    } else {
      alert("Please fill out the booking form first.");
    }
  });


  /*
    Workaround for numeric and number input types
    Validates fields
  */

  $("#table-quantity").on("input", (e) => {
    const input = $(e.currentTarget);
    let value = input.val().replace(/[^1-9]/g, "");

    if (parseInt(value, 10) > 20) {
      value = "20";
    }

    input.val(value);
  });


  // Updates the current month on clicking on either prev or next

  prevMonth.on("click", () => {
    currentDate = currentDate.subtract(1, "month");
    renderCalendar(currentDate);
  });

  nextMonth.on("click", () => {
    currentDate = currentDate.add(1, "month");
    renderCalendar(currentDate);
  });


  // Initial render

  renderCalendar(currentDate);
});
