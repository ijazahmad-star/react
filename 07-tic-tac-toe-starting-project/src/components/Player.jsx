import { useState } from "react";

export default function Player({initName, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initName)

    function handleChangeName(event){
        setPlayerName(event.target.value)
    }

    function handlEditClick(){
        setIsEditing((editing) => !editing)
    }

    let editplayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editplayerName = <input type="text" required value={playerName} onChange={handleChangeName}/>
    }
  return (
    <li className={isActive ? 'active': undefined}>
      <span className="players">
        {editplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlEditClick}>{isEditing ? 'save': 'Edit'}</button>
    </li>
  );
}
