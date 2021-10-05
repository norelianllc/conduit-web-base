import { lazy } from 'react'

const Home = lazy(() => import('../Views/Home'))
const SingUp = lazy(() => import('../Views/SignUp'))
const Login = lazy(() => import('../Views/Login'))
const SingleArticle = lazy(() => import('../Views/Article/SingleArticle'))

export const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/signup',
    exact: true,
    component: SingUp,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/article/:slug',
    exact: true,
    component: SingleArticle,
  },
]
