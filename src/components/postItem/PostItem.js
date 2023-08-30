import { useState } from 'react';
import './PostItem.css'

function PostItem({user,likes, saved, image, caption}) {
    const [selected, setSelected] = useState(false);

    function handleClickUser(){
        setSelected(!selected)
    }

    return (
        <article className='Posts__items' onClick={handleClickUser}>
            
        </article>
    );
}

export default PostItem