$(document).ready(() => {
  dayjs.extend(dayjs_plugin_localeData);

  const dayGrid = $("#dayGrid");
  const monthLabel = $("#monthLabel");
  const prevMonth = $("#prevMonth");
  const nextMonth = $("#nextMonth");
  const weekdaysGrid = $("#weekdaysGrid");

  let currentDate = dayjs();
  let activeDate = null;

  const renderCalendar = (date) => {
    dayGrid.empty();
    weekdaysGrid.empty();

    const startOfMonth = date.startOf("month");
    const endOfMonth = date.endOf("month");
    const startDay = startOfMonth.day();
    const daysInMonth = endOfMonth.date();

    monthLabel.text(date.format("MMMM YYYY"));

    dayjs.weekdays().forEach((weekday) => {
      $("<div>", {
        class: "font-medium text-black",
        text: weekday.substring(0, 2),
      }).appendTo(weekdaysGrid);
    });

    for (i = 0; i < startDay; i++) {
      dayGrid.append("<div></div>");
    }

    for (day = 1; day <= daysInMonth; day++) {
      const dayCell = $("<div>", {
        class:
          "flex items-center justify-center aspect-square cursor-pointer w-10 rounded-full hover:bg-accent/10 hover:text-accent",
        text: day,
        "data-day": day,
      });

      const dateToCheck = dayjs(date).date(day);

      if (activeDate && dateToCheck.isSame(activeDate, "day")) {
        dayCell.addClass("bg-accent text-white");
      } else if (day === dayjs().date() && date.isSame(dayjs(), "month")) {
        if (!activeDate) {
          activeDate = dayjs();
          dayCell.addClass("bg-accent text-white");
        }
      }

      dayCell.on("click", () => {
        if (activeDate) {
          const previousActiveDayCell = dayGrid.find(
            `div[data-day='${activeDate.date()}']`,
          );
          if (previousActiveDayCell.length > 0) {
            previousActiveDayCell.removeClass("bg-accent text-white");
          }
        }

        activeDate = dateToCheck;
        dayCell.addClass("bg-accent text-white");
      });

      dayGrid.append(dayCell);
    }
  };

  $("#book-submit").on("click", (e) => {
    e.preventDefault();

    if (
      $("#start-time")[0].checkValidity() &&
      $("#end-time")[0].checkValidity() &&
      $("#book-email")[0].checkValidity() &&
      $("#name")[0].checkValidity() &&
      $("#table-quantity")[0].checkValidity()
    ) {
      const startTime = $("#start-time").val();
      const endTime = $("#end-time").val();
      const email = $("#book-email").val();
      const name = $("#name").val();
      const bookQuantity = $("#table-quantity").val();

      const bookingDetails = {
        date: activeDate ? activeDate.format("MMMM D, YYYY") : null,
        startTime: startTime,
        endTime: endTime,
        email: email,
        name: name,
        quantity: bookQuantity,
      };

      console.log(bookingDetails);
      alert(
        "We have received your booking and you will get an email about the details.",
      );
    } else {
      alert("Please fill out the booking form first.");
    }
  });

  $("#table-quantity").on("input", (e) => {
    const input = $(e.currentTarget);
    let value = input.val().replace(/[^1-9]/g, "");

    if (parseInt(value, 10) > 20) {
      value = "20";
    }

    input.val(value);
  });

  prevMonth.on("click", () => {
    currentDate = currentDate.subtract(1, "month");
    renderCalendar(currentDate);
  });

  nextMonth.on("click", () => {
    currentDate = currentDate.add(1, "month");
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});
