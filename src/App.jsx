import { useState } from "react";

function App() {
  const [yesSize, setYesSize] = useState(90);
  const [noText, setNoText] = useState("No");
  const [noCount, setNoCount] = useState(0);
  const [yes, setYes] = useState(false);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    if (noCount === 0) {
      setNoText("Are you sure?");
    }
    if (noCount === 1) {
      setNoText("Really sure?");
    }
    if (noCount === 2) {
      setNoText("Pookiee please....");
    }
    if (noCount === 3) {
      setNoText("Just Think About it.......");
    }
    setYesSize((prev) => prev + 350);
  };

  const handleYesClick = () => {
    setYes(true);
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-pink-100 p-10 overflow-hidden">
      {!yes && (
        <>
          <h1 className="text-red-500 text-4xl font-bold text-center mb-6 max-w-xl">
            Will you be my forever waaala Chuzu? 💖
          </h1>
          <div className="flex gap-4 items-center">
            <button
              onClick={handleYesClick}
              style={{
                width: yesSize,
                height: yesSize / 2,
                fontSize: yesSize / 6,
                transition: "all 0.5s ease",
                backgroundColor: "#22c55e",
                color: "white",
                fontWeight: "bold",
                borderRadius: "12px",
                cursor: "pointer",
                display: "block",
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              style={{
                width: 90,
                height: 90 / 2,
                fontSize: 90 / 6,
                transition: "all 0.5s ease",
                backgroundColor: "#ef4444", // Tailwind's red-500
                color: "white",
                fontWeight: "bold",
                borderRadius: "12px",
                cursor: "pointer",
                display: "block",
              }}
            >
              {noText}
            </button>
          </div>
          <img className="mt-4 w-96 h-auto" src="/Cat-Heart.gif" alt="Danace" />
        </>
      )}
      {yes && (
        <>
          <div className="h-screen w-screen flex flex-col justify-center items-center bg-pink-100 p-10 overflow-hidden">
            <h1 className="text-red-500 text-4xl font-bold text-center mb-6 max-w-xl">
              Knew you would say Yes!!!!!!!!!
            </h1>
            <img className="mt-4 w-100 h-auto" src="/Bot-Cat.gif" alt="Happy" />
          </div>
          <button
            className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-400 transition"
            onClick={() => setYes(false)}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
