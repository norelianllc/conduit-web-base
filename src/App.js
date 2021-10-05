import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline, createTheme, MuiThemeProvider } from '@material-ui/core'
import Axios from 'axios'
import Layout from './Layout'
import './App.css'
import AppRouter from './Routes'

Axios.defaults.baseURL = 'https://api.realworld.io/api/'
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Source Sans Pro',
    },
    palette: {
      primary: {
        main: '#5CB85C',
      },
      text: {
        secondary: '#999',
      },
    },
    // palette: {
    //   type: Theme ? 'dark' : 'light',
    // },
  })
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Layout>
            <AppRouter />
          </Layout>
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  )
}

export default App
