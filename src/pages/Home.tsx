
import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../style/auth.scss';

export function Home(){
    return(
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="ilustracao perguntas e rsp"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire duvidas de suas reuniões em tempo real</p>
            </aside>
            <main>
                <div>
                <img src={logoImg} alt="logoLetmeask"/>
                <button>
                <img src={googleIconImg} alt="logo Google"/>
                Crie uma sala com o Google
                </button>
                <div>-- Ou entre em uma sala --</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}