export const GoBack = () => {
  window.history.back();
};

export function If({ condition, children }) {
  return condition ? <>{children}</> : null;
}

export const SetToStorage = (key, value) => {
  let storedValue = JSON.stringify(value);
  localStorage.setItem(key, storedValue);
};

export const GetFromStorage = (key) => {
  let value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export function ShortenSentence(sentence, maxLength) {
  if (sentence.length <= maxLength) {
    return sentence;
  } else {
    return sentence.substring(0, maxLength - 3) + "...";
  }
}

export const ShowDash = (obj) => {
  const replaceEmptyWithDash = (value) => {
    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "")
    ) {
      return "-";
    } else {
      return value;
    }
  };

  const traverseObject = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return replaceEmptyWithDash(obj);
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
      newObj[key] = traverseObject(obj[key]);
    }

    return newObj;
  };

  return traverseObject(obj);
};

export function WordCapitalize(word) {
  return word
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function FormatDate(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const daySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${month} ${day}${daySuffix(day)}, ${year}`;
}
