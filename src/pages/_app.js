import App from 'next/app';

// CSSS
import '../css/global.css';
import '../css/responsive.css';


const MyApp = ({ Component, props }) => {
  return(
    <>
      <Component {...props} />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default App;