import image from '../assets/spiaggia.jpg'
import style from './Card.module.css'
import Button from './Button'

const placeHolderSrc = 'https://picsum.photos/1200/1000'


export default function Card({ title = '', image = '', description = '', tags = [], published }) {
    return (
        <div className={style.card}>
            <div className={style.card_header}>
                <div className="figure">
                    <img src={image ? image : placeHolderSrc} alt="" />
                </div>
            </div>
            <div className={style.card_body}>
                <div className={style.title}>
                    <h3>{title}</h3>
                </div>
                <p className={style.description}>
                    {description}
                </p>
                <Button />

            </div>
        </div>
    )
}