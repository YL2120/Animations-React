import React, { useState, useRef, useEffect } from "react"; //useRef pour les inputs
import "./StateAnim.css";
import { useTransition, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";

export default function StateAnim() {
  interface stateObj {
    id: string;
    txt: string;
  }

  const [firstDisplay, setFirstDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstDisplay(false);
    }, 1000);
  }, []);

  const [inputData, setInputData] = useState<stateObj[]>([
    {
      id: uuidv4(),
      txt: "Ronaldo",
    },
    {
      id: uuidv4(),
      txt: "Messi",
    },
    {
      id: uuidv4(),
      txt: "Mbappé",
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newObj: stateObj = {
      id: uuidv4(),
      txt: inputRef!.current!.value as string,
    };

    setInputData([...inputData, newObj]); //on recopie notre tableau actuel et on ajoute le nouvel objet

    inputRef!.current!.value = ""; //on vide la barre d'input après avoir ajouté le nom
  };

  const listTransitions = useTransition(inputData, {
    from: { opacity: 0, transform: "translateY(10px" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    keys: inputData.map((item) => item.id), //retourne un tableau avec les différents ID pour pouvoir prendre ne compte les nouveaux éléments qui vont apparaître
  });

  // useEffect(() => {
  //     console.log(inputRef);
  // }, [])

  return (
    <form onSubmit={handleData}>
      <label htmlFor="football">
        What are your favorite football players ?
      </label>
      <input ref={inputRef} type="text" id="football" />

      {firstDisplay ? ( //si c'est le premier affichage, j'envoie la liste sans animation
        <ul>
          {inputData.map((item) => (
            <li key={item.id}>{item.txt}</li>
          ))}
        </ul>
      ) : ( //sinon j'ajoute uniquement le dernier input avec animation
        <ul>
          {listTransitions((styles, item) => {
            // c'est grâce à usetransition qu'on a accès aux items
            return <animated.li style={styles}>{item.txt}</animated.li>;
          })}
        </ul>
      )}
    </form>
  );
}

{
  /* <ul>
{inputData.map((item) => (
    <li key={item.id}>{item.txt}</li>
))}
</ul> */
}
