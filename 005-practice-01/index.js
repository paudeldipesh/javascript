let a = "Dipesh";
let b = 7;
console.log(a + b);
console.log(typeof a, typeof b, typeof (a + b));

const obj = {
    name: "Dipesh",
    section: 1,
    isPrinciple: false,
};
console.log(obj);
obj["name"] = "Aman";
obj.CEO = "Dipendra";
console.log(obj);

const dict = {
    angel: "A heavenly creature.",
    basement: "The substructure or foundation of a building.",
    capture: "To take captive, as by force or craft; seize.",
    destroy: "Demolish; ruin; annihilate; kill, slay; defeat completely.",
    early: "Of or occurring near the beginning of a given series, period of time, or course of events",
};
const { angel, basement, capture, destroy, early } = dict;
console.log(angel, basement, capture, destroy, early);
