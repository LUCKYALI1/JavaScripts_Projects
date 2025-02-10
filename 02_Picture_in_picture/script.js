const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// promt to select media stream , pass to video element , then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }
    catch(error){
        //catch error
        console.log('whoops , error here :' , error)
    }
}

button.addEventListener('click' , async () => {
    //diable vutton
    button.disabled = true 
    //start picture in picture
    await  videoElement.requestPictureInPicture()
    button.disabled = false

})
selectMediaStream()