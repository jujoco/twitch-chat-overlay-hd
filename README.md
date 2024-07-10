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
2. Set a name for the source (ex. `Chat Overlay HD`) and click OK.
3. Set the URL to `https://www.twitch.tv/popout/USERNAME/chat`
4. replace `USERNAME` with your Twitch username.
5. Set the width to `600` and the height to `600`. (adjust to your liking)
6. Delete the code from within the Custom CSS section.
7. Copy the code from the `chat.css` file and paste it into the Custom CSS section. Link to the file here -> [chat.css](./chat.css)
8. Click OK and you're done!

## Customization settings

Use https://rgbcolorpicker.com to find the color you want.

-   **Font Color:** You can change the font color by changing the `color` property in the `chat.css`. (default: `#FFFFFF`)

-   **Background Color:** You can change the background color by changing the `background-color` property in the `chat.css`. (default: `rbga(0, 0, 0, 0)`)

-   **Font Size:** You can change the font size by changing the `font-size` property in the `chat.css`. (default: `28px`)
    -   don't go below `28px` or it will lose text clarity in OBS.

## Credits

Author:

-   Twitch [**@JujocoCS**](https://twitch.tv/JujocoCS)
