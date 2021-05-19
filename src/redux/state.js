
//import {render} from '../render.jsx'
let render=()=>{}
export let subscribe=(observer)=>{render = observer}
let avapath = 'https://reactjs.e3dr8nj.repl.co/src/images/'
let userid='0'
function Member(obj){
 
  this.id=obj.id
  this.username=obj.username
  this.color = obj.color
  this.ava=avapath+this.id+'.jpg'
  this.path='/'+userid+'_'+this.id
  this.logid=userid+'_'+this.id
  
}


//let state1 =()=>{
//_________________
const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'
const ADD_MESSAGE='ADD_MESSAGE'

export const AddPostActionCreator =(msg,channelID,userID)=>({type:ADD_POST,message:msg,channelID:channelID, userID:userID})
export const ChangePostActionCreator =(text)=>({type:CHANGE_POST,value:text})
//_____________________
let state= {
  header:'this is header',
  navbar:[
   {name:'Profile',path:'/profile'}
   ,{name:'News',path:"/news"}
   ,{name:'Dialogs',path:'/dialogs'}
  ,{name:'Chat',path:'/chat'}

  ]
  
 ,dialogs:{test:'dialogs',dul: [
    { id: '1', name: 'D',ava:'https://i.ytimg.com/vi/vQlKe4NLytA/maxresdefault.jpg' }
    , { id: '2', name: 'S' }
    , { id: '3', name: 'A' }

  ]
  , messages: [
    { id: '1', content: 'hi' }
    , { id: '2', content: 'hi are you?' }
    , { id: '3', content: 'hmm..' }
  ]
 }
  , posts: [
    { id: '1', message: 'first post', like_counts: '15' }
    , { id: '2', message: 'second post', like_counts: '25' }
  ]
  //----
  
  ,members2:{
    '1':{username:'Alien',color:'#0f0f12'}
    ,'2':{username:'Owl',color:'green'}
  }
 
  //---
}
state.userid='0'
state.members={
   '0':new Member({
      id:'0',username:'0u',color:'red',frends:['1']
      
      })

  ,'1':new Member({id:'1',username:'1u',color:'geen',frends:['1']
      
      })
  ,'2':new Member({id:'2',username:'2u',color:'blue',frends:['1']
      
      })
      ,'3':new Member({id:'3',username:'3u',color:'blue',frends:['1']
      
      })
}
 state.chat={
    messages:[
      {id:'1',content:'msg1',userName:'1',member:state.members['1']}
      ,{id:'2',content:'msg2',userName:'2',member:state.members['2']}
    ]

 }
 state.channels={
   '0_0':{messages:[
  {id:'1',content:'hello this is my first posts here',member:state.members['0']}
      ,{id:'2',content:'hi,now it is the second post',member:state.members['0']} 
]} 
,'0_1':{messages:[
  {id:'1',content:'hello',member:state.members['0']}
      ,{id:'2',content:'hi,how are you',member:state.members['1']} 
]} 
,'0_2':{messages:[
  {id:'1',content:'hello',member:state.members['0']}
      ,{id:'2',content:'no, go away',member:state.members['2']} 
]} 
,'0_3':{messages:[
  {id:'1',content:'hello',member:state.members['3']}
      ,{id:'2',content:'ohh',member:state.members['0']} 
]} 
 }//channels
//settings
state.set={}
state.set.disign='messenger'//compact/messenger
state.set.userid='0'
state.set.text=''
state.set.channelid=''
state.set.current_channel='0_0'
//
 
 
//   return state
//}

  
export default state;

export let  addPost=(message)=>{
  

 state.channels['0_0'].messages.push({id:'4',content:message.content,member:state.members['0']})
 state.set.text=''
 return render()
}
export let changePost=(value)=>{
  state.set.text=value
  return render()
}

export let  addMessage=(message)=>{
  //=>channelID, content, userID
 
 let len= state.channels[message.channelID].messages.length
 let last = state.channels[message.channelID].messages[len-1].id
 last+=1
 state.channels[message.channelID].messages.push({id:last,content:message.content+" "+last,member:state.members[action.message.userID]})
 state.set.text=''
 return render()
}

//--------------
export let store={
  _state:state
  ,getState(){return this._state}
  ,_render(){}
  ,subscribe(observer){return this._render = observer}
  ,addPost(message){
    this._state.channels['0_0'].messages.push({id:'4',content:message.content,member:this._state.members['0']})
 this._state.set.text=''
 return this._render()
    }
    ,changePost(value){
      this._state.set.text=value
      return this._render()
    }
    ,dispatch(action){
      if(action.type==ADD_MESSAGE){ 
        //action:{type,channelID,userID}
       
         let channelID = this._state.set.current_channel
         let userID = this._state.set.userid
         let channel=this._state.channels[channelID]
         //console.log(channel)
         let len= channel.messages.length
         let member = this._state.members[userID]
 let last =Number(channel.messages[len-1].id)
 last+=1
channel.messages.push({id:last,content:action.message.content+" "+last,member:member})
console.log(channel)
 /*
         this._state.channels[action.message.channelID].messages.push({id:'4',content:action.message.content,member:this._state.members['0']})
         */
       this._state.set.text=''
       console.log(this._store)
       return this._render()
        }else if(action.type==CHANGE_POST){
          this._state.set.text=action.value
      return this._render()
        }
    }
    
}
store.messageActionCreator=(content)=>{ 
  return {type:ADD_MESSAGE ,message:{content:content}}
 }
window.store=store