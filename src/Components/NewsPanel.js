import React, {useEffect, useState/* Component */} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


// export class NewsPanel extends Component {
//     static propTypes = {
//       country: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired
//     }
//     static defaultProps = {
//       country: 'in',
//       category: "general",
//       pazeSize: 8
//     }
//     capitalizeFirstCharacter = (str)=> {
//       return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//     articles = []
//     constructor(props){
//         super(props);
//         console.log("lifecycles Constructor Invoked.");
//         state = {
//             articles: articles,
//             loading: true,
//             page : 1,
//             totalResults: 0
//         }
//         document.title = `${capitalizeFirstCharacter(category)} - Top Headlines`;
//     }
//     // async componentData(){
//     //   const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
//     //   setState({loading: true});
//     //   let data = await fetch(apiUrl);
//     //   let parsedData = await data.json();
//     //   console.log("lifecycles componentDidMount method Invoked.",parsedData);
//     //   setState({
//     //     page : page,
//     //     articles : parsedData.articles,
//     //     loading : false
//     //   })
//     // }
//     async componentDidMount(){
//       setProgress(0);
//       let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
//       setState({loading: true});
//       let data = await fetch(apiUrl);
//       let parsedData = await data.json();
//       setProgress(30);
//       console.log("lifecycles componentDidMount method Invoked.",parsedData);
//       setState({
//         articles : parsedData.articles,
//         totalResults : parsedData.totalResults,
//         loading : false
//       })
//       setProgress(70);
//       setProgress(100);
//     }
//     fetchMoreData = async() =>{
//       setState({page : page + 1});
//       const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
//       setState({loading: true});
//       let data = await fetch(apiUrl);
//       let parsedData = await data.json();
//       console.log("lifecycles fetchMoreData Invoked.",parsedData);
//       setState({
//         totalResults : parsedData.totalResults,
//         articles : articles.concat(parsedData.articles),
//         loading : false
//       })
//     }
//     /*handlePrev = async () => {*/
//       // console.log("handlePrev method invoked");
//       // let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=73e9449eace54080b4a088d728469543&page=${page - 1}&pageSize=${pageSize}`;
//       // setState({loading: true});
//       // let data = await fetch(apiUrl);
//       // let parsedData = await data.json();
//       // console.log("lifecycles componentDidMount method Invoked.",parsedData);
//       // setState({
//       //   page : page - 1,
//       //   articles : parsedData.articles,
//       //   loading : false
//       // })
//     /*  setState({
//         page : page - 1
//       });
//       componentData();
//     } */
//     /*handleNext = async () => {
//       console.log("handleNext method invoked");
//       if(!(page > totalResults/pageSize)){
//         console.log("handleNext method invoked");*/
//         // let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=73e9449eace54080b4a088d728469543&page=${page + 1}&pageSize=${pageSize}`;
//         // setState({loading: true});
//         // let data = await fetch(apiUrl);
//         // let parsedData = await data.json();
//         // console.log("lifecycles componentDidMount method Invoked.",parsedData);
//         // setState({
//         //   page : page + 1,
//         //   articles : parsedData.articles,
//         //   loading : false
//         // })
//       /*  setState({
//           page : page + 1
//         });
//         componentData();
//       }
//     }*/
//     render() {
//       console.log("Lifecycles render method Activated.");
//         return (
//             <div className="container my-3">
//                 <h1 className="text-center bg-black" style={{border: "2px dotted grey", borderRadius: '15%', color: 'white', marginTop: '90px'}}>{`World of Hustle - Top ${capitalizeFirstCharacter(category)} Headlines`}</h1>
//                 {loading && <Spinner/>}
//                 <InfiniteScroll
//                   dataLength={articles.length} //This is important field to render the next data
//                   next={fetchMoreData}
//                   hasMore={articles.length !== totalResults}
//                   loader={<Spinner/>}
//                 >
//                     <div className="row">
//                       {/*!loading && */articles.map((element)=>{
//                           return <div className="col md-3" key={element.url}>
//                                       <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""}
//                           imageUrl={element.urlToImage?element.urlToImage:"https://www.journaldugeek.com/app/uploads/2024/03/MacBook-1.jpg"} url={element.url}
//                             author={element.author} date={element.publishedAt} source={element.source.name}
//                           />
//                                   </div>
//                       })}
//                     </div>

//                 </InfiniteScroll>
//                 {/* <div className="container d-flex justify-content-between">
//                     <button disabled={page<=1} typeof="button" onClick={handlePrev} className="btn btn-dark"> &larr; prev </button>
//                     <button disabled={page > totalResults/pageSize} typeof="button" onClick={handleNext} className="btn btn-dark"> Next &rarr; </button>
//                 </div> */}
//             </div>
//         )
//     }
// }
// export default NewsPanel

const NewsPanel =(props)=> {
  let {setProgress, pageSize, country, category, apiKey} = props;
  const capitalizeFirstCharacter = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {
    document.title = `${capitalizeFirstCharacter(category)} - Top Headlines`;
    updateData();
    // eslint-disable-next-line
  },[])

  const updateData = async (props)=>{
    setProgress(30);
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    console.log("lifecycles update method Invoked.",parsedData);
    setProgress(50);
    setTotalResults(parsedData.totalResults)
    setArticles(parsedData.articles)
    setLoading(false);
    setProgress(70);
    setProgress(100);
  }
  const fetchMoreData = async (props) =>{
    setPage(page + 1);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    console.log("lifecycles fetchMoreData Invoked.",parsedData);
    setTotalResults(parsedData.totalResults)
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
  }
  return (
      <div className="container my-3">
          <h1 className="text-center bg-black" style={{border: "2px dotted grey", borderRadius: '15%', color: 'white', marginTop: '90px'}}>{`World of Hustle - Top ${capitalizeFirstCharacter(category)} Headlines`}</h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
              <div className="row">
                {/*!loading && */articles.map((element)=>{
                    return <div className="col md-3" key={element.url}>
                                <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""}
                    imageUrl={element.urlToImage?element.urlToImage:"https://www.journaldugeek.com/app/uploads/2024/03/MacBook-1.jpg"} url={element.url}
                      author={element.author} date={element.publishedAt} source={element.source.name}
                    />
                            </div>
                })}
              </div>

          </InfiniteScroll>
      </div>
  )
}
export default NewsPanel

NewsPanel.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}
NewsPanel.defaultProps = {
  country: 'in',
  category: "general",
  pazeSize: 8
}