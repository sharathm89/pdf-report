export function getMonthName(no) {
  let name = null;

  switch (no) {
    case 1:
      name = "Jan";
      break;
    case 2:
      name = "Feb";
      break;
    case 3:
      name = "Mar";
      break;
    case 4:
      name = "Apr";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "Jun";
      break;
    case 7:
      name = "Jul";
      break;
    case 8:
      name = "Aug";
      break;
    case 9:
      name = "Sep";
      break;
    case 10:
      name = "Oct";
      break;
    case 11:
      name = "Nov";
      break;
    case 12:
      name = "Dec";
      break;

    default:
      break;
  }

  return name;
}

export function getQuarterName(no) {
  if (no >= 0 && no <= 2) {
    return "Q1";
  } else if (no >= 3 && no <= 5) {
    return "Q2";
  } else if (no >= 6 && no <= 8) {
    return "Q3";
  } else if (no >= 9 && no <= 11) {
    return "Q4";
  }

  return "-";
}

export function nFormatter(value, digits = 2) {
  if (value === null) {
    return 0;
  }

  if (value >= 10000000) value = `${(value / 10000000).toFixed(digits)} CR`;
  else if (value >= 100000) value = `${(value / 100000).toFixed(digits)} L`;
  else if (value >= 1000) value = `${(value / 1000).toFixed(digits)} K`;
  return value;
}
