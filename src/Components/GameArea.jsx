import React, { useEffect, useState } from "react";
import Box from "./Box";
import Win from "./Win";

let user = 1;
function GameArea() {
  let [Id1, setId1] = useState(-1);
  let [Id2, setId2] = useState(-1);
  let [Id3, setId3] = useState(-1);
  let [Id4, setId4] = useState(-1);
  let [Id5, setId5] = useState(-1);
  let [Id6, setId6] = useState(-1);
  let [Id7, setId7] = useState(-1);
  let [Id8, setId8] = useState(-1);
  let [Id9, setId9] = useState(-1);
  let [Winner, setWinner] = useState(-1);

  function updateWinner() {
    if (
      Id1 != -1 &&
      Id2 != -1 &&
      Id3 != -1 &&
      Id4 != -1 &&
      Id5 != -1 &&
      Id6 != -1 &&
      Id7 != -1 &&
      Id8 != -1 &&
      Id9 != -1
    ) {
      setWinner(-2);
      user = -1;
    }

    // h-1
    if (Id1 === 1 && Id2 === 1 && Id3 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id1 === 0 && Id2 === 0 && Id3 === 0) {
      setWinner(2);
      user = -1;
    }

    // h-2
    if (Id4 === 1 && Id5 === 1 && Id6 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id4 === 0 && Id5 === 0 && Id6 === 0) {
      setWinner(2);
      user = -1;
    }

    // h-3
    if (Id7 === 1 && Id8 === 1 && Id9 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id7 === 0 && Id8 === 0 && Id9 === 0) {
      setWinner(2);
      user = -1;
    }

    // v-1
    if (Id1 === 1 && Id4 === 1 && Id7 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id1 === 0 && Id4 === 0 && Id7 === 0) {
      setWinner(2);
      user = -1;
    }

    // v-2
    if (Id2 === 1 && Id5 === 1 && Id8 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id2 === 0 && Id5 === 0 && Id8 === 0) {
      setWinner(2);
      user = -1;
    }

    // v-3
    if (Id3 === 1 && Id6 === 1 && Id9 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id3 === 0 && Id6 === 0 && Id9 === 0) {
      setWinner(2);
      user = -1;
    }

    // c-1
    if (Id1 === 1 && Id5 === 1 && Id9 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id1 === 0 && Id5 === 0 && Id9 === 0) {
      setWinner(2);
      user = -1;
    }

    // c-2
    if (Id3 === 1 && Id5 === 1 && Id7 === 1) {
      setWinner(1);
      user = -1;
    }
    if (Id3 === 0 && Id5 === 0 && Id7 === 0) {
      setWinner(2);
      user = -1;
    }
  }

  function clear() {
    setId1(-1);
    setId2(-1);
    setId3(-1);
    setId4(-1);
    setId5(-1);
    setId6(-1);
    setId7(-1);
    setId8(-1);
    setId9(-1);
    setWinner(-1);
    user = 1;
  }

  useEffect(() => {
    updateWinner();
    if (Winner != -1) {
      setTimeout(() => {
        alert("Restart your Game !!!");
        clear();
      }, 1000);
    }
  }, [Id1, Id2, Id3, Id4, Id5, Id6, Id7, Id8, Id9, Winner]);

  const getId = (val) => {
    if (val === 1) {
      if (user === 1) {
        setId1(1);
        user = 2;
      } else {
        setId1(0);
        user = 1;
      }
    }

    if (val === 2) {
      if (user === 1) {
        setId2(1);
        user = 2;
      } else {
        setId2(0);
        user = 1;
      }
    }

    if (val === 3) {
      if (user === 1) {
        user = 2;
        setId3(1);
      } else {
        user = 1;
        setId3(0);
      }
    }

    if (val === 4) {
      if (user === 1) {
        user = 2;
        setId4(1);
      } else {
        user = 1;
        setId4(0);
      }
    }

    if (val === 5) {
      if (user === 1) {
        user = 2;
        setId5(1);
      } else {
        user = 1;
        setId5(0);
      }
    }

    if (val === 6) {
      if (user === 1) {
        user = 2;
        setId6(1);
      } else {
        user = 1;
        setId6(0);
      }
    }

    if (val === 7) {
      if (user === 1) {
        user = 2;
        setId7(1);
      } else {
        user = 1;
        setId7(0);
      }
    }

    if (val === 8) {
      if (user === 1) {
        user = 2;
        setId8(1);
      } else {
        user = 1;
        setId8(0);
      }
    }

    if (val === 9) {
      if (user === 1) {
        user = 2;
        setId9(1);
      } else {
        user = 1;
        setId9(0);
      }
    }
  };

  const draw = -2;

  return (
    <div className="w-screen h-[80vh] bg-zinc-900 text-white flex justify-center">
      <div className="h-[60vh]">
        <div className="w-[330px] h-[330px] bg-white rounded-lg flex flex-wrap gap-y-2">
          <div className="flex gap-x-2">
            <button
              onClick={() => {
                if (Id1 == -1) {
                  getId(1);
                }
              }}
            >
              <Box id={Id1} />
            </button>

            <button
              onClick={() => {
                if (Id2 == -1) {
                  getId(2);
                }
              }}
            >
              <Box id={Id2} />
            </button>

            <button
              onClick={() => {
                if (Id3 == -1) {
                  getId(3);
                }
              }}
            >
              <Box id={Id3} />
            </button>
          </div>

          <div className="flex gap-x-2">
            <button
              onClick={() => {
                if (Id4 == -1) {
                  getId(4);
                }
              }}
            >
              <Box id={Id4} />
            </button>

            <button
              onClick={() => {
                if (Id5 == -1) {
                  getId(5);
                }
              }}
            >
              <Box id={Id5} />
            </button>

            <button
              onClick={() => {
                if (Id6 == -1) {
                  getId(6);
                }
              }}
            >
              <Box id={Id6} />
            </button>
          </div>

          <div className="flex gap-x-2">
            <button
              onClick={() => {
                if (Id7 == -1) {
                  getId(7);
                }
              }}
            >
              <Box id={Id7} />
            </button>

            <button
              onClick={() => {
                if (Id8 == -1) {
                  getId(8);
                }
              }}
            >
              <Box id={Id8} />
            </button>

            <button
              onClick={() => {
                if (Id9 == -1) {
                  getId(9);
                }
              }}
            >
              <Box id={Id9} />
            </button>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          {user === 1 && (
            <h1 className="font-semibold text-4xl">Player 1 Turn (&#128938;)</h1>
          )}
          {user === 2 && (
            <h1 className="font-semibold text-4xl">
              Player 2 Turn (&#128901;)
            </h1>
          )}
          {user === -1 && Winner === 1 && (
            <h1 className="font-semibold text-4xl text-green-700">
              Player 1 Wins
            </h1>
          )}
          {user === -1 && Winner === 2 && (
            <h1 className="font-semibold text-4xl text-green-700">
              Player 2 Wins
            </h1>
          )}
          {Winner === -2 && (
            <h1 className="font-semibold text-4xl text-green-700">Draw</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameArea;
