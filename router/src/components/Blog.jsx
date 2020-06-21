import React from 'react'
import { Link,useRouteMatch,Switch,Route } from 'react-router-dom'
import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Blog3 from './Blog3'

const Blog = () => {

    const {path , url} = useRouteMatch()
    // console.log('Path:',path)
    // console.log('Url:',url)



    return (
        <div>
            <h1>Blog</h1>

            <ul>
                <li>
                    <Link to={`${url}/Blog1`}>Blog1</Link>
                </li>
                <li>
                    <Link to={`${url}/Blog2`}>Blog2</Link>
                </li>
                <li>
                    <Link to={`${url}/Blog3`}>Blog3</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${url}/Blog1`}>
                    <Blog1/>
                </Route>
                
                <Route path={`${path}/Blog2`}>
                    <Blog2/>
                </Route>
                
                <Route path={`${path}/Blog3`}>
                    <Blog3/>
                </Route>
            </Switch>
             </div>


    )
}

export default Blog
