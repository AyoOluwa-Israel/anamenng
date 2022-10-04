const array = [
  "category__animal",
  "category__career",
  "category__celebrity",
  "category__dev",
  "category__explicit",
  "category__fashion",
  "category__food",
];

export const backgroundPicker = (el: any) => {
  if (el === "animal") {
    return "category__animal";
  } else if (el === "career") {
    return "category__career";
  } else if (el === "celebrity") {
    return "category__celebrity";
  } else if (el === "dev") {
    return "category__dev";
  } else if (el === "explicit") {
    return "category__explicit";
  } else if (el === "fashion") {
    return "category__fashion";
  } else if (el === "food") {
    return "category__food";
  } else {
    return array[Math.floor(Math.random() * 6)];
  }
};
