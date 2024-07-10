# Twitch Chat Overlay HD

## **App Features ✨**

-   Free to use
-   Easy setup
-   High Resolution Text
-   Customizable font-color & background-color
-   No ads or watermarks
-   Doesn't collect any data

## Content

-   [Installation](#installation)
-   [Customization settings](#customization-settings)
-   [Credits](#credits)

## Installation

1. Open your OBS program & add a new Browser source to your scene.
   image here
   <image src="images/chat-overlay-part1.gif" width="600">

2. Set a name for the source (ex. `Chat Overlay HD`) and click OK.
   <image src="images/chat-overlay-part2.gif" width="600">

3. Set the URL to `https://www.twitch.tv/popout/USERNAME/chat`

4. replace `USERNAME` with your Twitch username.

 <image src="images/chat-overlay-part3.gif" width="600">

5. Set the width to `600` and the height to `600`. (adjust to your liking)

6. Delete the code from within the Custom CSS section.

7. Copy all 43 lines of code from the `chat.css` file and paste it into the Custom CSS section. Link to the file here -> [chat.css](./chat.css)

 <image src="images/chat-overlay-part4.gif" width="600">

8. Click OK to save and close the window.

9. Last step! Right-click on the `Chat Overlay HD` source and click on `Interact`. The chat will appear in a new window - click on the cogwheel and select `Chat Appearance`. Set `font-size` to "Biggest" and set `Replies in Chat` to "Minimum". Close windows to save. Crop the bottom of the chat to remove the Twitch chat bar. Done!

 <image src="images/chat-overlay-part5-final.gif" width="600">

## Customization settings

Use https://rgbcolorpicker.com to find the color you want.

-   **Font Color:** You can change the font color by changing the `color` property in the `chat.css`. (default: `#FFFFFF`)

-   **Background Color:** You can change the background color by changing the `background-color` property in the `chat.css`. (default: `rbga(0, 0, 0, 0)`)

-   **Font Size:** You can change the font size by changing the `font-size` property in the `chat.css`. (default: `28px`)
    -   don't go below `28px` or it will lose text clarity in OBS.

## Credits

Author:

-   Twitch [**@JujocoCS**](https://twitch.tv/JujocoCS)
