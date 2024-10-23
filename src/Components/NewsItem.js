import React, {/* Component */} from 'react'
import { Link } from 'react-router-dom'


// export class NewsItem extends Component{
//   render() {
//     let {title, description, imageUrl, url, author, date, source} = this.props;
//         return (
//             <div className='my-3'>
//                 <div className="card" style={{width : '390px'}}>
//                 <span class="badge rounded-pill bg-success" style={{display: 'flex',justifyContent: 'flex-end',
//                 position: 'absolute', right: '0'}}>
//                     {source}
//                 </span>
//                 <img src={imageUrl} className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">{title}...</h5>
//                     <p className="card-text">{description}...</p>
//                     <p className="card-text"><small className="text-success">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
//                     <Link to={url} target="_parent" className="btn btn-sm btn-dark">Read More</Link>
//                 </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default NewsItem

const NewsItem =(props)=>{
      let {title, description, imageUrl, url, author, date, source} = props;
          return (
              <div className='my-3'>
                  <div className="card" style={{width : '390px'}}>
                  <span class="badge rounded-pill bg-success" style={{display: 'flex',justifyContent: 'flex-end',
                  position: 'absolute', right: '0'}}>
                      {source}
                  </span>
                  <img src={imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{title}...</h5>
                      <p className="card-text">{description}...</p>
                      <p className="card-text"><small className="text-success">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                      <Link to={url} target="_parent" className="btn btn-sm btn-dark">Read More</Link>
                  </div>
                  </div>
              </div>
          )
  }
export default NewsItem