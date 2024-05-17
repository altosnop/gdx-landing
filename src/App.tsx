import { Route, Routes } from 'react-router-dom'
import { ROUTER_KEYS } from './keys'
import PageOne from './pages/PageOne'
import NotFoundPage from './pages/NotFoundPage'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import PageFour from './pages/PageFour'
import PageFive from './pages/PageFive'
import PageSix from './pages/PageSix'

const App = () => {
  return (
    <Routes>
      <Route path={ROUTER_KEYS.ROOT} element={<PageOne />} />
      <Route path={ROUTER_KEYS.PAGE_1} element={<PageOne />} />
      <Route path={ROUTER_KEYS.PAGE_2} element={<PageTwo />} />
      <Route path={ROUTER_KEYS.PAGE_3} element={<PageThree />} />
      <Route path={ROUTER_KEYS.PAGE_4} element={<PageFour />} />
      <Route path={ROUTER_KEYS.PAGE_5} element={<PageFive />} />
      <Route path={ROUTER_KEYS.PAGE_6} element={<PageSix />} />
      <Route path={ROUTER_KEYS.ALL_MATCH} element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
