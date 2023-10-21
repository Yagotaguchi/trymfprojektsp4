import './Principal.css'
import caminhao from '../../public/images/caminhao.jpg'
import Image from "next/image"


export default function Principal(){

    return(
        <>
        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

             <section className='principal'>
                <div className='texto-principal'>
                    <h4>Uma parceria entre</h4>
                    <h1>PORTO e TRYMF</h1>
                    <p>Revolucionar o mercado e solucionar problemas é o que fazemos. 
                    Como uma força dinâmica e inovadora, estamos comprometidos em desafiar o status quo e encontrar soluções criativas para os desafios que enfrentamos. Nossa paixão pela inovação nos impulsiona a buscar constantemente maneiras de melhorar e transformar, criando um impacto positivo duradouro em nosso mercado e na vida daqueles que servimos.</p>
                    <a href='/Time'>Conheça a Equipe</a>
                    <a href='/Solucao' className='solucao'>Veja como funciona nossa solução! <span id= "play-icon"class="material-symbols-outlined">
play_circle
</span></a>
                </div>

                <div className='imagem-principal'>
                <Image src={caminhao} id = "caminhao" alt="caminhao" />
                </div>
             </section>

        </>
    )
}

