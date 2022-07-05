import { useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header'

const index = () => {
    // let name = "Bonieky";
    const [name, setName] = useState('Bonieky');

    // let age = 90; faz assim tbm
    const [age, setAge] = useState(90);

    // let bg = "#FF0000"
    const [bg, setBg] = useState('#FF0000');

    const [list, setList] = useState([
        "O rato roueu a roupa do Rei de roma",
        "aqui vai uma frase poética.",
        "a Inspiração é pouca."

    ]);

    const handle20 = () => {
        setAge(20);
        setBg('#00FF00')
    }

    const handle90 = () => {
        setAge(90);
        setBg('#FF0000')
    }


    // const HandleClick = () => {
    //     // alert("Clicou a função."
    //     setBg('#0000FF')
    // }

    return (
        <div style={{ backgroundColor: bg }}>
            <Header name={name} age={age} />

            {age === 90 &&
                <button onClick={handle20}>Tenho 20 anos</button>
            }

            {age === 20 &&
                <button onClick={handle90}>Tenho 90 anos</button>
            }
            {/* <button onClick={HandleClick}>Clique aqui</button> */}

            {/* <button onClick={handle20}>Tenho 20 anos</button> */}
            {/* <button onClick={handle90}>Tenho 90 anos</button> */}
            {/* {age > 30 && "Eu sou maior de 30 anos." } */}

            <hr />

            <ul>
                {list.map((frase, index)=>(
                    <li key={index}>{frase}</li>
                ))}
            </ul>

            <Footer />
        </div>
    )
}

export default index;
