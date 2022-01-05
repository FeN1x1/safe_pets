export default (to, from) => {
  function getName(name) {
    return name.split("___")[0];
  }
  if (!to || !from) {
    return;
  }
  if (getName(to.name) === getName(from.name)) {
    return "no-transition";
  }
};
