export default function titleInitials(title) {
  try {
    return title
      .split(" ")
      .map(word => word[0])
      .map(char => char.toUpperCase())
      .slice(0, 2);
  } catch (e) {
    console.error(e);
    return "AN";
  }
}