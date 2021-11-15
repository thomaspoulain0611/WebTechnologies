
/** @jsxImportSource @emotion/react */
import {useContext, useReducer, useState} from 'react'
import './App.css';
// Local
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Login from './Login'
import {Context} from './Context'



const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#565E71',
    padding: '50px',
  },
}

export default function App() {
  const {user} = useContext(Context)
  const [drawerMobileVisible, setDrawerMobileVisible] = useState(false)
  const drawerToggleListener = () => {
    setDrawerMobileVisible(!drawerMobileVisible)
  }
  return (
    <div className="App" css={styles.root}>
      <Header drawerToggleListener={drawerToggleListener}/>
      {
        user ? <Main drawerMobileVisible={drawerMobileVisible} /> : <Login />
      }
      <Footer />
    </div>
  );
}
