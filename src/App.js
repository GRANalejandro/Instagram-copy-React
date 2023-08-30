import './App.css';
import {MenuToggle, Profile, Status} from './components/principalComponents/PrincipalComponents'
import PostItem from './components/postItem/PostItem';
import { useState } from 'react';

function App() {
  const post = [
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
    {
      user: 'Juana',
      likes: 50,
      saved: false,
      image: '',
      caption: 'De vacaciones',
    },
  ];
  const [ShowPosts, setShowPosts] = useState(false)
  function ShowPostsFunction() {
    setShowPosts(!ShowPosts)
  }
  return (
    <div className="App">
      <header className='navBar'>
      <MenuToggle/>
      </header>
      <main className='main'>
        <Profile/>
        <Status/>
        <div className={`Posts ${ShowPosts ? 'PostsShow' : ''}`}>
          {
            post.map(itemPost =>{
              <PostItem 
              name={itemPost.user}
              likes={itemPost.likes}
              saved={itemPost.saved}
              image={itemPost.image}
              caption={itemPost.caption}
              />
            })
          }
          <button onClick={ShowPostsFunction}></button>
        </div>
      </main>
      <button onClick={ShowPostsFunction}>

      </button>
    </div>
  );
}

export default App;
