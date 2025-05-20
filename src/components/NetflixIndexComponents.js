import './NetflixIndexComponents.css'
import NetflixHeaderComponents from './NetflixHeaderComponents'
import NetflixMainComponents from './NetflixMainComponents'
import { Register } from './register'
import NetflixFooterComponents from './NetflixFooterComponents'
export default function NetflixIndexComponents(){
    return (
        <div className="container-fluid">
        <div className='box'>
            <header>
            < NetflixHeaderComponents />
            </header>
            <section className='d-flex justify-content-center align-items-center'>
                <main>
                <NetflixMainComponents />
                <Register />
                </main>
            </section>
            <footer className='m-2 p-2'>
            <NetflixFooterComponents />
            </footer>
           
           
           
            
        </div>

        </div>
    )
}