# 🖥️ Picture-in-Picture Screen Sharing
This project enables users to share their screen and display it in a Picture-in-Picture (PiP) mode using JavaScript and the navigator.mediaDevices.getDisplayMedia() API.
## 📌 Features

Prompts the user to select a media stream (screen/window/tab).
Plays the selected media stream in a video element.
Enables Picture-in-Picture mode for a floating video window.

## 🛠️ How It Works

The selectMediaStream function prompts the user to select a screen to share.
The selected media stream is assigned to the video element.
Clicking the button triggers Picture-in-Picture mode.

## 📜 Code Implementation

 ```bash
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =&gt; {
            videoElement.play();
        };
    } catch (error) {
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () =&gt; {
    // Disable button
    button.disabled = true;
    // Start Picture-in-Picture mode
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// Start media stream on page load
selectMediaStream();

## 🚀 Usage

Open the index.html file in a browser.
Click the button to start screen sharing.
The selected screen will appear in a Picture-in-Picture mode.

## 🔧 Requirements

A modern browser that supports navigator.mediaDevices.getDisplayMedia() and requestPictureInPicture().

## 📜 License
This project is open-source and available under the MIT License.


