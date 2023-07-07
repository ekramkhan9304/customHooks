
import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {

    // ------------------------ without using custom hooks -------------------------

    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter((prevCounter) => prevCounter + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);


    const counter = useCounter();
    console.log(counter);

    return <Card>{counter}</Card>;
};

export default ForwardCounter;
