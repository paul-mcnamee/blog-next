# Twitch clip concatenator and uploader

## What is the project about?

At the time there were a lot of youtube videos which were downloading clips from twitch and making compilation videos. I wanted to see if I could automate this process for fun. I was still learning python at the time so it was a fun exercise and a slightly larger project that was a little more complicated than one single script.

This was just a fun project, but I could see content creators possibly wanting to use something like this for converting their popular twitch clips into youtube videos without needing to hire an editor.

Ultimately I decided to stop development after I finished the initial proof of concept, but it was still a fun project and I learned quite a bit about python, video codecs, ffmpeg, and web scraping, and using web API's.

Here is the repo:

<https://github.com/paul-mcnamee/ClipConcatenator>

## How did I build the project?

I broke the problem up into smaller pieces to make it a little bit more manageable. Most of this project was python which was initiated with windows batch files and scheduled tasks (I sure did miss linux cron jobs).

- First, the clips needed to be downloaded from twitch.
- Then the clips needed to be combined together with an intro and outro
- Finally, the result would be uploaded to youtube.

I used python to do most of the heavy lifting for finding and downloading the clips. After the clips were downloaded, there was a separate process running that would then take the clips and combine them with the intro and outro movies using FFMPEG.

## What challenges did I face?

I ran into a lot of issues with the broadcasters using different bitrates and video sizes. Combining those together was fairly cumbersome at first until I figured out the correct arguments to provide to FFMPEG.

## What did I learn from the project?

I learned a lot about encoding, video formats, ffmpeg limitations, downloading and uploading large files automatically, programmatically completing a task from start to finish, and authentication.

## Conclusion

This project was a lot of fun and I learned quite a bit. I do not think any of this code is really super sustainable or maintainable since it was not really designed to be that way. The project heavily relied on the twitch API staying the same so it is fairly flawed. If I had to re-do this project I would certainly do a lot of things different.
