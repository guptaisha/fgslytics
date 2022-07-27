console.log('<----- Injected script started running ----->');

/*function parseEssentialDetails() {
    let main = {};

    main.performance = window.utag || null;

    return main;
}*/

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
const obj = window.utag
obj.name = obj;
const essential = JSON.stringify(obj, getCircularReplacer());
console.log(essential);

setInterval(() => {
    //let essential = parseEssentialDetails();
    window.postMessage({ type: "FROM_PAGE", essential});
}, 1000);