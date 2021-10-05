import {
  Avatar,
  Box,
  Container,
  Divider,
  Paper,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Axios from 'axios'
import Page from 'Components/Base/Page'
import moment from 'moment'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#333',
    boxShadow:
      'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
    padding: '2rem',
    marginBottom: '2rem',
  },
  title: {
    textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
    fontSize: '2.8rem',
    fontWeight: '600',
    color: 'white',
  },
  subtitle: {
    color: 'white',
  },
  meta: {
    display: 'flex',
    marginTop: '2rem',
  },
  date: {
    color: 'grey',
  },
  titles: { paddingLeft: '7px' },
}))
const SingleArticle = () => {
  const [state, setState] = useState({})
  const { slug } = useParams()
  const getArticle = async () => {
    const article = await Axios.get(`articles/${slug}`)
    setState(article.data.article)
    return article
  }
  useEffect(() => {
    getArticle()
  }, [slug])
  const classes = useStyles()
  if (!state.author) return <Typography>Loading...</Typography>
  return (
    <Page>
      <Box className={classes.box}>
        <Container>
          <Typography className={classes.title} variant="h3">
            {state.title}
          </Typography>
          <div className={classes.meta}>
            <Avatar src={state.author.image} />
            <div className={classes.titles}>
              <Typography className={classes.subtitle}>
                {state.author.username}
              </Typography>
              <Typography variant="caption" className={classes.date}>
                {moment(state.createdAt).format('LLLL')}
              </Typography>
            </div>
          </div>
        </Container>
      </Box>
      <Container>
        <Paper elevation={0} style={{ padding: '1em' }}>
          <Typography variant="h5">{state.body}</Typography>
        </Paper>
        <Divider />
      </Container>
    </Page>
  )
}

export default SingleArticle
