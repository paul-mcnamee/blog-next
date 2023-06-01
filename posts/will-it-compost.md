# How I Built a Website to Show Compostable Materials for Gardening with Vue.js and the Nuxt framework

I made [Will It Compost](https://vigorous-saha-c8666c.netlify.app/) because I could not find a good searchable resource for which materials were compostable at home. You can also see the code which is public on [github](https://github.com/paul-mcnamee/WillItCompost) if you are more interested in the specific implementation details.

## What is the project about?

I began gardening a few years back and wanted to be able to have a resource to see what items could compost down in a normal home scenario. There are a lot of materials that require a large scale manufacturer setting to be close to compostable unfortunately, so any way to spread the word about which items you can compost at home is something that interested me. This information was not really widely available in an easily searchable format so I scoured the sources that I found, extracted, and consolidated the information so it was in one place.

The website displays a searchable list of compostable materials that can be used for gardening. The website also provides some general information about if the materials should be pre-processed before adding them to the compost pile.

The purpose of the project is to help people who are interested in learning more about composting at home. The project is also a way for me to practice my web development skills and learn more about Vue.js, a popular JavaScript framework for building user interfaces.

## How did I build the project?

I built the project using Vue.js and more specifically the nuxt framework, which is very useful, efficient, and quick for implementing single page applications. Here are the main steps I followed:

- **Planning**: I started by sketching out the layout and structure of the website, and defining the features and functionalities I wanted to implement. I also researched some sources of data for the compostable materials and decided to use a JSON file as the database since I would not have anyone really adding content initially. This was more just a consolidation of these sources that I found:
  - <https://www.smallfootprintfamily.com/100-things-you-can-compost>
  - <https://www.planetnatural.com/composting-101/making/what-to-use/>
  - <https://green.wikia.org/wiki/List_of_compostable_materials>
- **Designing**: I used vuetify to create a responsive and attractive design for the website, using some custom CSS styles and icons.
- **Developing**: I used nuxt along with vuetify to create the components and logic for the website. When finished, I used netlify to host the website.
- **Testing**: I tested the website on different browsers and devices, and fixed some bugs and errors.
- **Deploying**: I deployed the website to netlify and called it good there.

## What challenges did I face?

Some of the challenges I faced while building the project were:

- **Finding reliable data**: It was not easy to find accurate and comprehensive data about compostable materials and their properties. I had to search through various websites, and cross-check the information from different sources. I also had to format the data into a JSON file that could be easily used by the website later.
- **Filtering and sorting the data**: I ended up using an existing fuzzy search library called fuze. There was an adaptation of the library created for vue under the [vue-fuse](https://www.npmjs.com/package/vue-fuse) npm package.

## What did I learn from the project?

Some of the things I learned from the project were:

- **Fuzzy search with fuse is simple**: I am appreciative that someone else has gone through the hardships of implementing fuzzy search so I can use their libraries which are open sourced. I enjoyed implementing and working with the fuse library quite a bit, it was quite easy to implement.
- **Working with component libraries**: I decided to use component libraries to cut down the time to implement even more, but in the end I think it is more difficult to maintain a setup like this since there are so many dependencies. In the end they are still worth using for one off projects like this one, but if there is any amount of reusability or expectation to maintain the website going forward then I think it is best to stray from them.

## Conclusion

In conclusion, this project was a fun and rewarding experience for me. I enjoyed building a website that shows compostable materials for gardening, and I hope it can be useful for others who share the same interest. I also improved my web development skills and learned a lot from the project.

Happy composting and gardening! 😊
