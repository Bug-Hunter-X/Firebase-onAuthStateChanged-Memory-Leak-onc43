import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; //Import your Firebase config
import { useNavigate } from 'react-router-dom'; // Or your navigation solution

const MyComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); //Update state instead of directly navigating
      if (user) {
        console.log('user is signed in', user);
      } else {
        console.log('user is signed out');
        navigate('/login');
      }
    });

    return () => unsubscribe(); // Clean up on component unmount
  }, []);

  // ... rest of component
};
export default MyComponent;