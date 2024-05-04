# Paul McNamee's Personal Website

## Main Tech/Libraries Used

1. Next.js
1. React.js
1. Tailwind CSS
1. Jest
1. ESLint
1. Prettier

## Environment

1. VSCode + WSL + NVM (node v22.1.0)

## Building The Project

You can run the code locally if you wish, to start the development server see the scripts included in the `.package.json` file. The main script you should use to run and debug the website is initiated via `npm run dev` which will build and start the local web server with the inspect node option to enable breakpoints.

## Initial Template

This project was initially created with a template that I found [here](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter). It has been heavily modified and cleaned up to remove a lot of the bloat from the template.

## Components

Components are located under the `/src/components` directory. Each react component added here is meant to be something that will be reused multiple times throughout the website, or are components that may be re-used in the future. Each page on the website also has its own main component which lives in this directory.

## Posts

Posts are generated from kebab case named markdown files which are stored in the posts directory. The post helper functions can be found in `lib/posts.ts`. The actual post content is formatted with the `/pages/posts/[id].ts` page.

### Creating a New Post

1. Create a new markdown file with a kebab case name in the posts directory.
2. That's it. The post is accessible after rebuilding the website via the url http://localhost:3000/posts/name-of-new-post

## Projects

I have listed most of the projects that I worked on here which typically has a related post.

### Creating a new Project

1. Add the new entry for the projects page to `/src/components/Projects.tsx`
2. If there is a related post, make sure to include it in the link variable as `link: '/posts/name-of-post',`
3. If there is a related image, usually they are stored in the `/images/logos` directory.

## Contributing

Since this is my personal blog, I likely will not accept very many contributions from outside sources, but you are more than welcome to fork the repo for your own use. In the event that you fid a bug and would like to commit to the source here, please do.

This repo is using [commitlint](https://commitlint.js.org/), so all commit messages must follow their conventions. The config can be found here: `commitlint.config.js`

There are several commit hooks run via husky which can be found here `.husky/_/husky.sh`
