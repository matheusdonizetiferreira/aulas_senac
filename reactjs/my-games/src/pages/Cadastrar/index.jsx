import './style.module.css'
import styles from './style.module.css'

function Cadastrar() {
    const CadastrarLivro = (e) => {
        e.preventDefault()
    }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>Cadastrar Jogo</h1>
                <form onSubmit={CadastrarLivro}>
                    <label htmlFor="nome">
                        Nome do Jogo:
                        <input type="text" name="nome" />
                    </label>
                    <label htmlFor="image">
                        Url da Imagem:
                        <input type="text" name="image" />
                    </label>
                    <label htmlFor="url">
                        Url do Jogo:
                        <input type="text" name="url" />
                    </label>
                    <label htmlFor="price">
                        Preço:
                        <input type="text" name="price" />
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