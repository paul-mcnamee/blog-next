# Mischief: The New Way to Connect Gamers to Games

![mischief streamer dashboard](/images/posts/mischief-logo.png)

If you are a gamer, you know how hard it can be to find the perfect game for you. There are so many options out there, but how do you know which ones are worth your time and money? How do you discover new games that match your preferences and interests? How do you share your gaming experiences with other gamers who share your passion?

That's where mischief.gg comes in. Mischief is a new platform that connects gamers to the games they love, and helps them discover new ones they will love. Mischief is founded by a team of gaming and ecommerce veterans who share a passion for creating amazing gaming experiences.

Mischief is more than just a game store. It is a social network for gamers, where you can follow your favorite streamers, join communities, chat with friends, and get personalized recommendations based on your gaming profile. You can also create your own content, such as reviews, guides, videos, and more, and share it with other gamers who care about the same games as you.

Our app used firebase and google cloud platform for authentication, user management, and data storage. Our front end was made with angular (typescript), rxjs, and we had automatic continuous integration setup with circleCI. We had setup stripe integration for payments, and had a service that pulled steam prices since that was used to evaluate prices from genba digital.

We implemented a lot of twitch, mixer, and google API's for retrieving the stream and channels to link that to the mischief users. The watcher clicking on the link was presented with the game that the person was currently playing and they could receive a discount when purchasing that game, a portion of the cost of the game went to Mischief, and another portion went to the streamer.

Unfortunately the code is closed source, and the company has failed and closed, but I am able to share some screenshots that I have of the previously operational website.

Here is a view of the dashboard that the users would be presented with when viewing one of the streamers:
![mischief streamer dashboard](/images/posts/mischief_streamer.png)

Here is a view of the referrals page where streamers could refer their friends and keep track of who joined
![mischief streamer referrals](/images/posts/mischief_referrals.png)

This is what the members were presented with when signing up for the website initially before launch
![mischief streamer prior launch sign up](/images/posts/mischief_prior_launch_signup.jfif)

Streamers were able to display these images with a link to their profile to allow viewers to purchase the game they were playing
![mischief streamer dashboard](/images/posts/Mischief_Badge.png)
![mischief streamer dashboard](/images/posts/mischief-founder-card.png)

The users were also able to view all games offered by genba digital on this page:
![mischief streamer dashboard](/images/posts/mischief-game-catalog.png)

If the game was not currently available in the catalog offered by genba, we allowed the users to recommend the games to us so we could then pass on the info to genba that it was a highly requested game, and we would later notify the user if the game was added to the catalog (they probably would have bought it by then but who knows...)
![mischief streamer dashboard](/images/posts/mischief-recommendation.png)

We were given designs from a designer and had the freedom to pretty much implement the designs however we wanted as long as they looked like the design which was pretty nice. The entire website's front end and back end were developed by myself and another guy Jason. It was a pleasure working with Jason and we got quite a lot done in a very short amount of time. Later towards the end of the project's life we brought on Justin who did some tickets as well, and he was great to work with too.

Ultimately the CEO Chase decided to stop developing mischief after about 1 month after launching it. While I feel the project really did not have a lot of time to succeed or have a proper trial, I learned a lot about angular, rxjs, firebase, gcp, stripe, twitch and enjoyed a lot of the process. It was also very interesting to see the distribution and marketing sides of the video games industry.

Overall I think it was a very interesting idea, and I am very surprised that twitch and youtube have not somehow partnered with game companies to tie the game sales to the content creators marketing their games.
