import Card from './Card.jsx'
import style from './MainSection.module.css'



export default function MainSection() {
    return (
        <main>
            <section className='main_section'>
                <div className="container">
                    <div className="row">
                        <div className="col_4">
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}