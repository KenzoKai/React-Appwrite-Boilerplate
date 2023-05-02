import {useContext, useState} from "react";
import {UserContext} from "../UserContext";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    return (
      <div>
          <p>
              <h1>Hello World!</h1>
          </p>
      </div>
    );
};

export default Home;