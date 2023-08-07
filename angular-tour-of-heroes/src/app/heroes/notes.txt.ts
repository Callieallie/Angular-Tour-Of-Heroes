@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log("App component constructed");
  }
  title = 'Tour of Heroes';
}

const appComponent = {
  init: () => { console.log("App component constructed"); }
}

function printString(message: string) {
  console.log(message);
}

const functionValue = (toPrint) => { console.log("test " + toPrint) };
functionValue("me");

const object = {
  test: {
    thing: "things",
    count: 5
  },
  something: functionValue
}
object.test.other = { subobjectvalue: 5 };
object.something("you");

function countAdder(object) {
  if (object.count == undefined) {
    object.count = 0;
  } else if (typeof(object.count) == "number") {
    object.count++;
  } else {
    console.log("cant use counts that arent numbers");
  }
}

/**
 * Callable objects
 * Classes are just a js object nut
 * Decorators are functions that take object/function nuts and transform them
 */

class JSObject {
  std::hash_map<string, JSObject> objects;
  std::hash_map<string, string> strings;
  std::hash_map<string, int> numbers;

}

class Interpretter {
  std::vector<JSObject> objects;
}

