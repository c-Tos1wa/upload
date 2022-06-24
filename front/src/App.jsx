import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Theme from '../style/theme'

import { Upload } from './pages/home'
import { Photo } from './pages/photo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Upload />} />
          <Route path='/upload-success' element={<Photo />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
