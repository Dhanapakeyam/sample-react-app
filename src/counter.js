import { useState } from "react"
import './App.css';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
    let [like, setLike] = useState(0);
    let [dislike, setdisLike] = useState(0);

    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setdisLike(dislike + 1);
    return (
        <div className="like-container">
            <IconButton aria-label="Like" color="primary" onClick={incrementLike}>
                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>
            </IconButton>

            <IconButton aria-label="Like" color="error" onClick={incrementDisLike}>
                <Badge badgeContent={dislike} color="error">
                    👎
                </Badge>
            </IconButton>

        </div>
    );
}
//export { Counter }