import {API, graphqlOperation} from 'aws-amplify'
import {createPost,updatePost} from '../graphql/mutations'
import {listPosts} from '../graphql/queries'

  const savePost = async (value, oldValue, setValue, user) => {
    try{
      const payload = {
        imagePath:'',
        likes:0,
        user:user,
        text:value
      }
      const postData = await API.graphql(graphqlOperation(createPost, {input:payload}))
      const newPostData = [...oldValue]
      newPostData.push(postData.data.createPost)
      setValue(newPostData);
    }
    catch (error){
      console.error('error on fetching posts', error);
    }
  }

  

  const fetchPosts = async (setFeed) =>{
    try{
      const feedData = await API.graphql(graphqlOperation(listPosts))
      const feedList = feedData.data.listPosts.items;
      console.log('feedList', feedList);
      setFeed(feedList);
    }
    catch (error){
      console.error('error on fetching posts', error);
    }
  }

export {savePost, fetchPosts}