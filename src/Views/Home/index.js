import Page from 'Components/Base/Page'
import Banner from 'Components/Banner'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import Axios from 'axios'
import TabPanel from 'Components/TabPanel'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Tags from 'Components/tags'
import { tagList } from 'Config'

const Home = () => {
  const [state, setState] = useState()
  const getArticles = async () => {
    const articles = await Axios.get('articles')
    setState(articles.data.articles)
    return articles
  }
  const tabs = [
    {
      tabButton: 'you Feed',

      tabContent: (
        <span>
          <p>{!state ? 'Loading..' : 'No articles are here... yet.'}</p>
        </span>
      ),
    },
    {
      tabButton: 'Global Feed',
      tabContent: (
        <div>
          {state?.map((article) => (
            <Card key={article.title} style={{ padding: '1em' }}>
              <CardHeader
                avatar={<Avatar src={article.author.image} />}
                title={article.author.username}
                subheader={moment(article.createdAt).format('LLLL')}
                action={
                  <div className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart" /> {article.favoritesCount}
                  </div>
                }
              />
              <CardContent component={Link} to={`/article/${article.slug}`}>
                <Typography variant="h6" color="textPrimary">
                  {article.title}
                </Typography>
                <Typography color="textSecondary">
                  {article.description}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Read more...
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
  ]
  useEffect(() => {
    getArticles()
  }, [])
  return (
    <Page title="conduit">
      <Banner />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9}>
            <Paper>
              <TabPanel tabs={tabs} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <CardHeader subheader="Polupar Tags" />
              <CardContent>
                <Tags tags={tagList} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Home
