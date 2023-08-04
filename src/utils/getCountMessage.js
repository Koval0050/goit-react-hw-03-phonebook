export function getCountMessage(contactCount) {
  if (contactCount === 0) {
    return "You don't have contacts";
  } else if (contactCount === 1) {
    return "You have 1 contact";
  } else {
    return `You have ${contactCount} contacts`;
  }
}
