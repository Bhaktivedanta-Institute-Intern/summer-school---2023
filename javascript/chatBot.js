
const chatBox=document.querySelector('.chat_body');
const textInput=document.querySelector('#text_input');
const sends=document.querySelector('.send');
const chatContainer=document.getElementById('chat_container');
const logoChatbot=document.getElementById('logo_chatbot');
const loading=document.querySelector('.loadingChatBot');


const renderUserMessage=()=>{
    console.log('value')
     const userInput=textInput.value;
     if(userInput==""){
        return;
     }
     renderMessage(userInput,"user");
     textInput.value="";
     toggleLoading(false);
     setTimeout(()=>{
        renderChatBotResponse(userInput);
        toggleLoading(true);
        setScrollPosition();
     },600);
 } 
 
const renderChatBotResponse=(userInput)=>{
const res=getChatBotResponse(userInput);
renderMessage(res);
}

 const renderMessage=(tex,type)=>{
    let className='user_message';
    if(type!="user"){
        className="chatbot_message";
    }
 const message=document.createElement('div');
 const textNode=document.createTextNode(tex);
 message.classList.add(className);
 message.append(textNode);
 chatBox.append(message);
 
 }

 const getChatBotResponse=(userInput)=>{
    return response(userInput);
    // return responseObj[userInput]==undefined?"please contact s@123gmail.com":responseObj[userInput];
 }

const setScrollPosition=()=>{
    if(chatBox.scrollHeight>0){
        chatBox.scrollTop=chatBox.scrollHeight;
    }
}

 textInput.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        renderUserMessage(); 
    }
 })
sends.addEventListener('click',renderUserMessage);


function show(){
    // console.log('working or not');
    logoChatbot.style.display='none'; 
   
    chatContainer.style.display='block';   
   
}

function showNone(){
    chatContainer.style.display='none';
    logoChatbot.style.display='flex';
}

const toggleLoading=(show)=>{
    loading.classList.toggle('hidechatBotAnimation',show);
    }

