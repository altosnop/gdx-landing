import { createBrowserRouter } from 'react-router-dom'
import { ROUTER_KEYS } from '../keys'
import App from '../App'
import NotFoundPage from '../pages/NotFoundPage'
import PageTwo from '../pages/PageTwo'
import PageThree from '../pages/PageThree'
import PageFour from '../pages/PageFour'
import PageFive from '../pages/PageFive'
import PageSix from '../pages/PageSix'

export const router = createBrowserRouter([
  {
    path: ROUTER_KEYS.ROOT,
    element: <App />,
  },
  {
    path: ROUTER_KEYS.PAGE_1,
    element: <App />,
  },
  {
    path: ROUTER_KEYS.PAGE_2,
    element: <PageTwo />,
  },
  {
    path: ROUTER_KEYS.PAGE_3,
    element: <PageThree />,
  },
  {
    path: ROUTER_KEYS.PAGE_4,
    element: <PageFour />,
  },
  {
    path: ROUTER_KEYS.PAGE_5,
    element: <PageFive />,
  },
  {
    path: ROUTER_KEYS.PAGE_6,
    element: <PageSix />,
  },
  {
    path: ROUTER_KEYS.ALL_MATCH,
    element: <NotFoundPage />,
  },
])
