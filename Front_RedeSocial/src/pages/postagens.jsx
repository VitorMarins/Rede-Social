import { useState, useEffect } from 'react';
import MyNavbar from '../components/navbar.jsx';
import { useNavigate } from 'react-router-dom';
import { MyButton } from '../components/Button.jsx';
import '../styles/Postagens.css';

function Postagens() {
    const navigate = useNavigate();
    const [NewPost, setNewPost] = useState('');
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate('/login');
        }
      }, [navigate]);

    return (
        <>
            <MyNavbar/>            
            <div className="post-textarea">
              <label htmlFor="textarea-post">Label</label>
              <textarea
              id="textarea-post"
              value={NewPost}
              onChange={(e) => setNewPost(e.target.value)}
              aria-controls="limitmax"
              placeholder="Escreva o que você esta pensando..."
              />
              <MyButton/>
            </div>

        </>

    );
};

export default Postagens;