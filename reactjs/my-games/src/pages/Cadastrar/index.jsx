import './style.module.css'
import styles from './style.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'


const initialState = {
    nome: '',
    image: '',
    url: '',
    price: 0

}

function Cadastrar() {
    const [values, setValues] = useState(initialState) 

    const navigate = useNavigate()

    const CadastrarLivro =  (e) => {
        e.preventDefault() 
        fetch('http://localhost:3000/data',{
            method:'POST',
            body:JSON.stringify(values)
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    const onChange = (e) => {
        const {name,value} = e.target
        let newState = {...values}
        newState[name] = value
        setValues(newState)
    }

    return (

        <div className={styles.container}>

            <div className={styles.overlay}></div>

            <div className={styles.main}>
                <h1>Cadastrar Jogo</h1>
                <form onSubmit={CadastrarLivro}>
                    <label htmlFor="nome">
                        Nome do Jogo:
                        <input onChange={onChange} autoComplete='off' type="text" name="nome" />
                    </label>

                    <label htmlFor="image">
                        Url da Imagem:
                        <input onChange={onChange} autoComplete='off' type="text" name="image" />
                    </label>

                    <label htmlFor="url">
                        Url do Jogo:
                        <input onChange={onChange} autoComplete='off' type="text" name="url" />
                    </label>

                    <label htmlFor="price">
                        Preço:
                        <input onChange={onChange} autoComplete='off' type="text" name="price" />
                    </label>

                    <div className={styles.wrap}>
                        <button className={styles.button}>Cadastrar Jogo</button>
                    </div>
                </form>
            </div>

        </div>

    );

}

export default Cadastrar;