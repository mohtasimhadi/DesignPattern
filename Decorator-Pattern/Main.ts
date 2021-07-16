import Plain from "./Plain"
import Italic from "./Italic";
import Bold from "./Bold";

const text = new Italic(new Bold(new Plain("Design Pattern")))

console.log("Decorated :" + text)