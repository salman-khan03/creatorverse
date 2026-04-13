import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import './Card.css';

import img0 from '../assets/images.webp';
import img1 from '../assets/images (1).webp';
import img2 from '../assets/images (2).webp';
import img3 from '../assets/images (3).webp';
import img4 from '../assets/1_N0OPoUNaiWLolH_L47edlg.png';

const fallbackImages = [
    img0, img1, img2, img3, img4,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvn_oA8ZEA9wRAeGfpiJOaoJl4uqX22u8RmTezQGWmDlXjyKW2gPh4QaOOgvlroFCRJz8f_ebKEvOGYUacUu_0wEaGLjJCCyj-D50x1TJZjQ&s=10',
];

function Card(creator) {
    const bg = creator.imageURL || fallbackImages[creator.creatorId % fallbackImages.length];

    return (
        <article className="CreatorCard" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="overlay"></div>
            <div className="card-header-name">
                <h3>{creator.name}</h3>
                <Link to={'/' + creator.creatorId}>
                    <FaInfoCircle style={{ fontSize: '24px', color: '#7DF9FF' }} />
                </Link>
            </div>
            <div className="card-description">
                <p>{creator.description}</p>
                {creator.url && (
                    <a href={creator.url} target="_blank" rel="noreferrer" style={{ color: '#7DF9FF', fontSize: '14px', wordBreak: 'break-all' }}>{creator.url}</a>
                )}
            </div>
        </article>
    );
}

export default Card;
