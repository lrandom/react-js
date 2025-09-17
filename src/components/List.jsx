import { useState } from "react";
const List = ()=>{
    const [listLanguages, setListLanguage] = useState([
        "Javascript",
        "Python",
        "Java",
        "C++",
        "C#",
    ]);

    const _addMoreLanguage = ()=>{
        const p = prompt("Please type language you want to add");
        if(p){
            setListLanguage(prev=>{
                //return prev.push(p);
                return [...prev, p]; //spead operator / rest operator
            })
        }
    }
    
    return (
        <>
          <ul>
            {listLanguages.map((language, index) => (
                <li key={index}>{language}</li>
            ))}
          </ul>

          <button onClick={_addMoreLanguage}>Add More Language</button>
        </>
    )
}

export default List;