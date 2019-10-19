function daysInYear(year) {
  try {
    if (!Number.isInteger(year)) throw new Error("parameter 'year' isn't a number");

    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365;
  } catch (error) {
    return error;
  }
}
