import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange
} from "@material-ui/core/colors";

const colors = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange
];

export default function colorFrom(string) {
  try {
    const index = string
      .toString()
      .split("")
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);
    const colorIndex = index % colors.length;

    return colors[colorIndex][500];
  } catch (e) {
    console.error(e);
    return lime[500];
  }
}
