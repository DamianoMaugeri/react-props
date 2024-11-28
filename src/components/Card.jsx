import image from '../assets/spiaggia.jpg'
import style from './Card.module.css'
import Button from './Button'


export default function Card() {
    return (
        <div className={style.card}>
            <div className={style.card_header}>
                <div className="figure">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className={style.card_body}>
                <div className={style.title}>
                    <h3>Cala della Pirillina</h3>
                </div>
                <p className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, tenetur mollitia? Ex magnam cumque velit perspiciatis vero eaque dolores delectus?
                </p>
                <Button />

            </div>
        </div>
    )
}