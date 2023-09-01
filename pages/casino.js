import { useState, useRef } from "react";

const items = [
  "Nothing",
  "Iron",
  "Golden Carrot",
  "Emerald",
  "Foggy Buck",
  "Diamond",
  "Diamond Block",
  "Netherite",
  "Netherite Block",
  "CONTRABAND",
];

export default function Casino() {
  const [results, setResults] = useState(new Array(10).fill(0));
  const [values, setValues] = useState(new Array(10).fill(0));
  const [simulationRunning, setSimulationRunning] = useState(false);
  const intervalRef = useRef(); // Declare a new Ref

  const runSimulation = () => {
    if (simulationRunning) return;
    setSimulationRunning(true);

    intervalRef.current = setInterval(() => {
      const newResults = new Array(10).fill(0);
      for (let i = 0; i < 10; i++) {
        const pass = Math.random() < 0.5;
        if (pass) {
          newResults[i] += 1;
        } else {
          break;
        }
      }
      setResults((results) =>
        results.map((result, i) => result + newResults[i])
      );
    }, 0);
  };

  const stopSimulation = () => {
    clearInterval(intervalRef.current); // Clear the interval when needed
    setSimulationRunning(false); // Then stop the simulation
  };

  const diamondsSpent = results[0];
  const diamondValue = results
    .slice(1)
    .reduce((acc, cur, i) => acc + cur * values[i + 1], 0);
  const profit = diamondValue - diamondsSpent;
  const profitPerDiamond = profit / diamondsSpent;

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full max-w-xl h-72 p-4">
        <div className="text-2xl font-bold">Casino Simulation</div>
        <div>Input diamond value of winnings:</div>
        <div className="flex flex-col pl-2">
          {items
            .map((item, i) => (
              <div key={item} className="flex flex-col">
                <div className="flex flex-row space-x-2 text-sm pt-1">
                  <div className="">{item}</div>
                  <input
                    type="number"
                    className="w-16 bg-gray-100"
                    value={values[i]}
                    onChange={(e) =>
                      setValues((values) =>
                        values.map((value, j) =>
                          i === j ? e.target.value : value
                        )
                      )
                    }
                  />
                </div>
              </div>
            ))
            .slice(1)}
        </div>
        <div className="space-x-2 w-full justify-center flex pt-8">
          <button
            className="rounded-md border-2 border-gray-700 px-1 hover:bg-gray-50"
            onClick={() => runSimulation()}
          >
            Start Simulation
          </button>
          <button
            className="rounded-md border-2 border-gray-700 px-1 hover:bg-gray-50"
            onClick={() => stopSimulation()}
          >
            Stop Simulation
          </button>
          <button
            className="rounded-md border-2 border-gray-700 px-1"
            onClick={() => setResults(new Array(10).fill(0))}
          >
            Reset Simulation
          </button>
        </div>
        <div className="flex flex-row justify-between pt-4">
          <div className="flex flex-col">
            <div className="">Results:</div>
            <div className="flex flex-col text-sm pl-2">
              {items
                .map((item, i) => (
                  <div key={item} className="flex flex-row space-x-2">
                    <div className="">{item}</div>
                    <div className="w-24">{results[i]}</div>
                  </div>
                ))
                .slice(1)}
            </div>
          </div>
          <div className="flex flex-col">
            <span>Diamonds used:</span>
            <div className="flex flex-col text-sm pl-2">{diamondsSpent}</div>
            <span>Diamond value won:</span>
            <div className="flex flex-col text-sm pl-2">{Math.round(diamondValue * 100) / 100}</div>
            <span>Profit:</span>
            <div className="flex flex-col text-sm pl-2">{Math.round(profit * 100) / 100}</div>
            <span>Profit per diamond:</span>
            <div className="flex flex-col text-sm pl-2">{Math.round(profitPerDiamond * 100) / 100}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
