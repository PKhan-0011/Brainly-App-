import "./App.css";
import { Button } from "../src/components/ui/Button";
import PlusIcon from "./components/Icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        size="lg"
        text={
          <div className="flex items-center gap-2">
            <PlusIcon size="lg" />
            <h1 className="text-base font-semibold ">Share</h1>
          </div>
        }
      ></Button>
      <Button size="md" text="hi there"></Button>
      <Button size="sm" text="hi there"></Button>
    </>
  );
}

export default App;

// mai kah rha hu like ki pehle landingPage jo dekh hai
//  usko complete karlo then ek link dena jisse wo kisi aur
// url p jaye and wha p actaully sara ye current ui dikhe use okkh!>.
