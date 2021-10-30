import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

const App = () =>{
   if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height = "100vh"
            projectID ="9f564cf7-0b0b-4804-a0a7-9941f0ae88f4"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
};

export default App;