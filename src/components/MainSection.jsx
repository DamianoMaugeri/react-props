import { posts } from '../posts.jsx'
import Card from './Card.jsx'
import style from './MainSection.module.css'




export default function MainSection() {
    return (
        <main>
            <section className='main_section'>
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col_4">
                                <Card title={post.title} image={post.image} description={post.content} tags={post.tags} published={post.published} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </main>
    )
}