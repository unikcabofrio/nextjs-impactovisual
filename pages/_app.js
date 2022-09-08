import '../styles/globals.css'
import react,{useEffect,useState} from 'react';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return <Component {...pageProps} />
  }
}

export default MyApp


