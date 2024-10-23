import './App.css';
import LoadingBar from 'react-top-loading-bar';
import React, { useState /* Component */ } from 'react'
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsPanel from './Components/NewsPanel';

// export class App extends Component{
//   pageContentSize = 15;
//   // apiKey = process.env.REACT_APP_NEWS_API_TWO;
//   state = {
//     progress: 20
//   }
//   setProg = (progress)=> {
//     setState({
//       progress: progress
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <div>
//             <LoadingBar
//               height={3}
//               color='#f11946'
//               progress={progress}
//             />
//           </div>
//           <Routes>
//             <Route exact path="/" key={'general'}  element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="general" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
//           </Routes>
//           <Routes>
//             <Route exact path="/business" key={'business'}  element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="business" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
//           </Routes>
//           <Routes>
//             <Route exact path="/health" key={'health'}  element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="health" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} /> } />
//           </Routes>
//           <Routes>
//             <Route exact path="/entertainment" key={'entertainment'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="entertainment" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
//           </Routes>
//           <Routes>
//             <Route exact path="/sports" key={'sports'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="sports" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
//           </Routes>
//           <Routes>
//             <Route exact path="/science" key={'science'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="science" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
//           </Routes>
//           <Routes>
//             <Route exact path="/technology" key={'technology'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="technology" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }
// export default App 

const App =()=>{
  const pageContentSize = 15;
  // apiKey = process.env.REACT_APP_NEWS_API_TWO;
  const [prog, setProg] = useState(0);
    return (
      <div>
        <Router basename='/News-React'>
          <NavBar />
          <div>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={prog}
            />
          </div>
          <Routes>
            <Route exact path="/" key={'general'}  element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="general" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
          </Routes>
          <Routes>
            <Route exact path="/business" key={'business'}  element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="business" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
          </Routes>
          <Routes>
            <Route exact path="/health" key={'health'}  element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="health" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} /> } />
          </Routes>
          <Routes>
            <Route exact path="/entertainment" key={'entertainment'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="entertainment" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
          </Routes>
          <Routes>
            <Route exact path="/sports" key={'sports'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="sports" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
          </Routes>
          <Routes>
            <Route exact path="/science" key={'science'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="science" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
          </Routes>
          <Routes>
            <Route exact path="/technology" key={'technology'} element={<NewsPanel setProgress={setProg} pageSize={pageContentSize} country={'us'} category="technology" apiKey={"61eb6c60cf484db3a2a6185690ff1bbc"} />} />
          </Routes>
        </Router>
      </div>
    )
}
export default App;