import axios from 'axios'
const api = {
    Root: "https://daily.evetry.xyz/api/4",
    StoriesLast: "/stories/latest",
    StoriesByDate: "/stories/",
    StoryByID: "/story/",
    StoryInfoByID: "/story-extra/",
}
export default {
    getStoriesLast(){
        return axios.get(api.Root + api.StoriesLast)
    },
    getStoriesByDate(date){
        //查询过往Stories,不包含 `top_stories` 轮播部分
        return axios.get(api.Root + api.StoriesByDate + date)
    },
    getStoryByID(storyID){
        return axios.get(api.Root + api.StoryByID + storyID)
    },
    getStoryInfoByID(storyID){
        return axios.get(api.Root + api.StoryInfoByID + storyID)
    },
}