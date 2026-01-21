import { useState } from "react";
import "./App.css";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import DisplayBill from "./components/DisplayBill";
import Reset from "./components/Reset";

function App() {
  const [totalBill, setTotalBill] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const totalTip = totalBill * ((yourTip + friendTip) / 2 / 100);

  function handleReset() {
    setTotalBill("");
    setYourTip("");
    setFriendTip("");
  }

  // const totalTip = (totalBill * yourTip / 100) + (totalBill * friendTip / 100)
  // const total = totalBill + totalTip

  return (
  <div className="app">
    <BillInput bill={totalBill} setBill={setTotalBill} />

    <SelectPercentage percentage={yourTip} onSelect={setYourTip}>
      How did you like the service?
    </SelectPercentage>

    <SelectPercentage percentage={friendTip} onSelect={setFriendTip}>
      How did your friend like the service?
    </SelectPercentage>

    {totalBill > 0 && (
      <>
        <DisplayBill bill={totalBill} totalTip={totalTip} />
        <Reset onReset={handleReset} />
      </>
    )}
  </div>
  );
}

export default App;
