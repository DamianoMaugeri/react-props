import spiaggia from './assets/spiaggia.jpg'
import spiaggia2 from './assets/spiaggia2.jpg'
import spiaggia3 from './assets/spiaggia3.jpg'




export const posts = [
    {
        id: 1,
        title: 'Titolo del Post',
        image: spiaggia /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html', 'css'],
        published: true,
    },
    {
        id: 2,
        title: 'Titolo del Post',
        image: '' /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'css'],
        published: true,
    },
    {
        id: 3,
        title: 'Titolo del Post',
        image: spiaggia2 /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'php'],
        published: false,
    },
    {
        id: 4,
        title: 'Titolo del Post',
        image: spiaggia3 /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: [],
        published: true,
    },
]