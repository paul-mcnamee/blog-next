# How to create a personal website blog with Vue, Vuetify, and Nuxt

Vue is a popular front-end framework for building user interfaces and single-page applications. Vuetify is a UI library that provides a set of components and styles based on the Material Design specification. Nuxt is a high-level framework that simplifies the development of Vue applications by providing features such as server-side rendering, file-system routing, and static site generation.

This post will demonstrate and outline how to create something similar to [my website](https://goofy-turing-c81cc1.netlify.app/) which you can view the code for on [github](https://github.com/paul-mcnamee/blog) since it is public like most of my projects.

I started with this mockup for my personal website, it is a good idea to sketch out your ideas ahead of time so you can have a better understanding what your end goal will be even if it is just a rough sketch like my original mockup:

![blog mockup](/images/posts/personal-site-mockup.jpg)

In this blog post, I will show you how to create a personal website blog with Vue, Vuetify, and Nuxt. You will learn how to:

- Scaffold a Nuxt project with TypeScript support
- Install and configure Vuetify as a Nuxt module
- Create layout and page components for your blog
- Fetch and display blog posts from a mock API
- Deploy your blog to Netlify

## Prerequisites

To follow along with this tutorial, you will need:

- Node.js (version 14 or higher) and npm (version 6 or higher) installed on your machine
- A code editor of your choice (I recommend Visual Studio Code)
- A basic understanding of Vue, Vuetify, and Nuxt concepts

## Step 1: Scaffold a Nuxt project with TypeScript support

The easiest way to create a Nuxt project is to use create-nuxt-app, a CLI tool that generates a boilerplate code for you. To use it, run the following command in your terminal:

```bash
npx create-nuxt-app nuxt-blog
```

You will be prompted to answer some questions about your project. Choose the following options:

- Project name: nuxt-blog
- Programming language: TypeScript
- Package manager: npm
- UI framework: None
- Nuxt.js modules: None
- Linting tools: ESLint, Prettier
- Testing framework: None
- Rendering mode: Universal (SSR / SSG)
- Deployment target: Static (Static/JAMStack hosting)
- Development tools: jsconfig.json (Recommended for VS Code)

After the project is created, navigate to the project folder and install the dependencies:

```bash
cd nuxt-blog
npm install
```

To enable TypeScript support in your Nuxt project, you need to install two additional packages: @nuxt/typescript-build and @nuxt/types. The former provides TypeScript support for layouts, components, plugins, and middlewares, while the latter contains TypeScript type definitions for Nuxt.

Run the following command to install them:

```bash
npm install --save-dev @nuxt/typescript-build @nuxt/types
```

Then, add @nuxt/typescript-build to the buildModules section of nuxt.config.ts file:

```ts
export default {
  // ...
  buildModules: [
    '@nuxt/typescript-build',
    // ...
  ],
  // ...
};
```

You can also optionally install @nuxt/typescript-runtime module, which provides TypeScript runtime support for asyncData, fetch, plugins, etc. To do so, run:

```bash
npm install --save-dev @nuxt/typescript-runtime
```

And add @nuxt/typescript-runtime to the modules section of nuxt.config.ts file:

```ts
export default {
  // ...
  modules: [
    '@nuxt/typescript-runtime',
    // ...
  ],
  // ...
};
```

You can now run your Nuxt project in development mode by running:

```bash
npm run dev
```

You should see a message like this in your terminal:

```bash
ℹ Listening on: http://localhost:3000/
```

If you open <http://localhost:3000/> in your browser, you should see a default Nuxt page.

Congratulations! You have successfully scaffolded a Nuxt project with TypeScript support.

## Step 2: Install and configure Vuetify as a Nuxt module

To use Vuetify in your Nuxt project, you need to install it as a dependency and register it as a Nuxt module. To do so, run the following command:

```bash
npm install @invictus.codes/nuxt-vuetify@next vuetify@next vue@next vue-router@next vuex@next --legacy-peer-deps
```

This will install the latest versions of Vuetify 3 (alpha), Vue 3 (beta), vue-router 4 (beta), and vuex 4 (beta), as well as the nuxt-vuetify module that integrates Vuetify with Nuxt.

Note: At the time of writing this blog post, Vuetify 3 is still in alpha stage and may not be stable or compatible with all Nuxt features. Use it at your own risk.

Then, add @invictus.codes/nuxt-vuetify to the modules section of nuxt.config.ts file:

```ts
export default {
  // ...
  modules: [
    '@nuxt/typescript-runtime',
    '@invictus.codes/nuxt-vuetify',
    // ...
  ],
  // ...
};
```

You can also optionally configure some Vuetify options in the vuetify property of nuxt.config.ts file. For example, you can enable treeshaking to reduce the bundle size by only including the components you actually use, or you can use a CDN to load the icons. For more details, refer to the [nuxt-vuetify documentation](https://nuxt.com/modules/nuxt-vuetify).

```ts
export default {
  // ...
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
    },
  },
  // ...
};
```

You can now use Vuetify components in your Nuxt project. For example, you can replace the default Nuxt page with a simple Vuetify button by editing the index.vue file in the pages folder:

```html
<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn color="primary">Hello Vuetify</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'IndexPage',
  });
</script>
```

If you save the file and refresh your browser, you should see a button!

Great! You have successfully installed and configured Vuetify as a Nuxt module.

## Step 3: Create layout and page components for your blog

Now that you have Vuetify and Nuxt set up, you can start creating the layout and page components for your blog. A layout component is a special component that defines the common structure and style of your pages, such as the header, footer, navigation, etc. A page component is a component that defines the content and logic of a specific route in your application, such as the home page, about page, blog post page, etc.

Nuxt uses a file-system routing convention, which means that it automatically generates the routes for your application based on the file tree of the pages directory. For example, if you have a file named about.vue in the pages directory, it will create a route /about that renders that component. Similarly, if you have a file named \_slug.vue in the pages/blog directory, it will create a dynamic route /blog/:slug that renders that component with a parameter named slug.

To create a layout component, you need to create a file named default.vue in the layouts directory and export a Vue component from it. This component will be used as the default layout for all pages unless you specify otherwise. You can use any Vuetify components inside your layout component to create the desired look and feel for your blog. For example, you can use v-app-bar, v-navigation-drawer, v-footer, etc.

Here is an example of a simple layout component for our blog:

```html
<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Nuxt Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Home</v-list-item-content>
        </v-list-item>

        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>About</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app color="indigo" dark>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'DefaultLayout',
    setup() {
      const drawer = ref(false);

      return {
        drawer,
      };
    },
  });
</script>
```

The `<nuxt />` tag is a special tag that renders the page component for the current route. You can also use `<nuxt-child />` tag to render nested routes.

To create a page component, you need to create a file with the desired name in the pages directory and export a Vue component from it. You can use any Vuetify components inside your page component to create the desired content and logic for your route. For example, you can use v-card, v-img, v-chip, etc.

Here is an example of a simple page component for our home page:

```html
<template>
  <div>
    <h1 class="text-h2 mb-4">Latest Posts</h1>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" md="6" lg="4">
        <v-card class="mb-4" outlined link :to="`/blog/${post.slug}`">
          <v-img :src="post.image" height="200px"></v-img>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-subtitle>{{ post.date }}</v-card-subtitle>
          <v-card-text>{{ post.excerpt }}</v-card-text>
          <v-card-actions>
            <v-chip v-for="tag in post.tags" :key="tag" small>{{ tag }}</v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Post } from '~/types';

  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
        posts: [] as Post[],
      };
    },
    async fetch() {
      // Fetch posts from a mock API
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      // Map the data to Post type and add some dummy fields
      this.posts = data.slice(0, 6).map((post: any) => ({
        id: post.id,
        title: post.title,
        slug: `post-${post.id}`,
        image: `https://picsum.photos/id/${post.id + 100}/600/400`,
        date: new Date().toLocaleDateString(),
        excerpt: post.body.slice(0, 100) + '...',
        tags: ['Vue', 'Vuetify', 'Nuxt'],
      }));
    },
  });
</script>

<style scoped lang="scss">
  h1 {
    font-weight: bold;
  }
</style>
```

In this component, we use the fetch hook to fetch some posts from a mock API and store them in a data property. Then we use a v-for directive to loop over the posts and render them as cards. We also use a link prop on the v-card component to make it navigate to the corresponding blog post page when clicked.

You can create other page components for your blog in a similar way. For example, you can create an about.vue file in the pages directory for the about page, and a \_slug.vue file in the pages/blog directory for the blog post page.

Here is an example of an about page component:

```html
<template>
  <div>
    <h1 class="text-h2 mb-4">About Me</h1>
    <p>Hi, I'm Paul.</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AboutPage',
  });
</script>

<style scoped lang="scss">
  h1 {
    font-weight: bold;
  }
</style>
```

And here is an example of a blog post page component:

```html
<template>
  <div>
    <v-img :src="post.image" height="400px"></v-img>
    <h1 class="text-h2 my-4">{{ post.title }}</h1>
    <p class="text-subtitle-1">{{ post.date }}</p>
    <v-divider class="my-4"></v-divider>
    <p>{{ post.content }}</p>
    <v-divider class="my-4"></v-divider>
    <v-chip v-for="tag in post.tags" :key="tag" small>{{ tag }}</v-chip>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Post } from '~/types';

  export default defineComponent({
    name: 'BlogPostPage',
    data() {
      return {
        post: {} as Post,
      };
    },
    async fetch() {
      // Fetch the post from a mock API using the slug parameter
      const slug = this.$route.params.slug;
      const id = slug.slice(5);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      // Map the data to Post type and add some dummy fields
      this.post = {
        id: data.id,
        title: data.title,
        slug: `post-${data.id}`,
        image: `https://picsum.photos/id/${data.id + 100}/600/400`,
        date: new Date().toLocaleDateString(),
        content: data.body,
        tags: ['Vue', 'Vuetify', 'Nuxt'],
      };
    },
  });
</script>

<style scoped lang="scss">
  h1 {
    font-weight: bold;
  }
</style>
```

In this component, we use the fetch hook to fetch the post from a mock API using the slug parameter from the route. Then we render the post details as an image, a title, a date, a content, and some tags.

You have now created the layout and page components for your blog.

## Step 4: Fetch and display blog posts from a mock API

In the previous step, we used a mock API (<https://jsonplaceholder.typicode.com/posts>) to fetch some dummy posts for our blog. This API returns an array of objects with id, title, and body properties. We mapped these objects to our Post type and added some additional fields such as slug, image, date, excerpt, and tags.

However, this is not a realistic scenario for a real blog. In most cases, you would have a backend service or a CMS that provides an API for your blog posts. The API would return the posts with all the necessary fields and in the desired format.

For example, you could use Strapi, a headless CMS that lets you create and manage your own API. You could create a collection type named Post with fields such as title, slug, image, date, content, and tags. Then you could use Strapi's REST or GraphQL API to fetch the posts from your Nuxt project.

To demonstrate how to do this, I have created a Strapi project with some sample posts and deployed it to Heroku. You can access the REST API at <https://nuxt-blog-strapi.herokuapp.com/posts>. You can also access the GraphQL playground at <https://nuxt-blog-strapi.herokuapp.com/graphql>.

To fetch and display the posts from this API, you need to make some changes to your page components. First, you need to install axios, a popular HTTP client library for JavaScript. To do so, run:

```bash
npm install axios
```

Then, you need to register axios as a Nuxt plugin. To do so, create a file named axios.js in the plugins directory and paste the following code into it:

```js
import axios from 'axios';

export default ({ $axios }) => {
  // Set the base URL of your API
  $axios.defaults.baseURL = 'https://nuxt-blog-strapi.herokuapp.com';
};
```

Then, add plugins/axios.js to the plugins section of nuxt.config.ts file:

```ts
export default {
  // ...
  plugins: ['plugins/axios.js'],
  // ...
};
```

You can now use $axios in your page components to make HTTP requests to your API. For example, you can modify your home page component to fetch the posts from /posts endpoint:

````html
<template>
  <div>
    <h1 class="text ```html
    <template>
      <div>
        <h1 class="text-h2 mb-4">Latest Posts</h1>
        <v-row>
          <v-col v-for="post in posts" :key="post.id" cols="12" md="6" lg="4">
            <v-card class="mb-4" outlined link :to="`/blog/${post.slug}`">
              <v-img :src="post.image.url" height="200px"></v-img>
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-subtitle>{{ post.date }}</v-card-subtitle>
              <v-card-text>{{ post.excerpt }}</v-card-text>
              <v-card-actions>
                <v-chip v-for="tag in post.tags" :key="tag.id" small
                  >{{ tag.name }}</v-chip
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </template>

    <script lang="ts">
      import { defineComponent } from 'vue';
      import { Post } from '~/types';

      export default defineComponent({
        name: 'HomePage',
        data() {
          return {
            posts: [] as Post[],
          };
        },
        async fetch() {
          // Fetch posts from Strapi API
          const response = await this.$axios.get('/posts');
          const data = response.data;
          // Map the data to Post type
          this.posts = data.map((post: any) => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            image: post.image,
            date: new Date(post.date).toLocaleDateString(),
            excerpt: post.excerpt,
            tags: post.tags,
          }));
        },
      });
    </script>

    <style scoped lang="scss">
      h1 {
        font-weight: bold;
      }
    </style>
  </div></template
>
````

Notice that we use this.$axios.get('/posts') to make a GET request to the /posts endpoint. We also map the data to our Post type and use the fields from the API response.

You can also modify your blog post page component to fetch the post from /posts/:slug endpoint:

```html
<template>
  <div>
    <v-img :src="post.image.url" height="400px"></v-img>
    <h1 class="text-h2 my-4">{{ post.title }}</h1>
    <p class="text-subtitle-1">{{ post.date }}</p>
    <v-divider class="my-4"></v-divider>
    <div v-html="post.content"></div>
    <v-divider class="my-4"></v-divider>
    <v-chip v-for="tag in post.tags" :key="tag.id" small>{{ tag.name }}</v-chip>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Post } from '~/types';

  export default defineComponent({
    name: 'BlogPostPage',
    data() {
      return {
        post: {} as Post,
      };
    },
    async fetch() {
      // Fetch the post from Strapi API using the slug parameter
      const slug = this.$route.params.slug;
      const response = await this.$axios.get(`/posts?slug=${slug}`);
      const data = response.data[0];
      // Map the data to Post type
      this.post = {
        id: data.id,
        title: data.title,
        slug: data.slug,
        image: data.image,
        date: new Date(data.date).toLocaleDateString(),
        content: data.content,
        tags: data.tags,
      };
    },
  });
</script>

<style scoped lang="scss">
  h1 {
    font-weight: bold;
  }
</style>
```

Notice that we use `this.$axios.get('/posts?slug=${slug}')` to make a GET request to the /posts endpoint with a query parameter named slug. We also map the data to our Post type and use the fields from the API response. We also use v-html directive to render the content as HTML.

You have now fetched and displayed the blog posts from a mock API.

## Step 5: Deploy your blog to Netlify

The final step is to deploy your blog to Netlify, a popular platform for hosting static websites and web applications. Netlify provides features such as continuous deployment, serverless functions, forms, analytics, and more.

To deploy your blog to Netlify, you need to:

- Create a GitHub repository for your Nuxt project and push your code to it
- Create a Netlify account and connect it to your GitHub account
- Create a new site on Netlify and select your GitHub repository
- Configure the build settings and deploy your site

Let's go through these steps in detail.

### Create a GitHub repository for your Nuxt project

To create a GitHub repository for your Nuxt project, you need to:

- Go to <https://github.com/new> and create a new repository with the name nuxt-blog
- Copy the remote URL of your repository (e.g., <https://github.com/your-username/nuxt-blog.git>)
- Go to your terminal and navigate to your Nuxt project folder
- Run the following commands to initialize a local git repository, add your files, commit them, and push them to the remote repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/nuxt-blog.git
git push -u origin main
```

You should see a message like this in your terminal:

```bash
Enumerating objects: 86, done.
Counting objects: 100% (86/86), done.
Delta compression using up to 4 threads
Compressing objects: 100% (74/74), done.
Writing objects: 100% (86/86), 1.03 MiB | 1.03 MiB/s, done.
Total 86 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), done.
To https://github.com/your-username/nuxt-blog.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

If you refresh your GitHub repository page, you should see your files there.

### Create a Netlify account and connect it to your GitHub account

To create a Netlify account and connect it to your GitHub account, you need to:

- Go to <https://app.netlify.com/signup> and sign up with your GitHub account
- Authorize Netlify to access your GitHub account
- Confirm your email address and complete your profile

### Create a new site on Netlify and select your GitHub repository

To create a new site on Netlify and select your GitHub repository, you need to:

- Click on the New site from Git button on the top right corner of the dashboard
- Select GitHub as the provider and authorize Netlify to access your repositories
- Search for nuxt-blog and select it as the repository
- Configure the build settings

The build command is npm run generate, which tells Nuxt to generate a static version of your site. The publish directory is dist, which is where Nuxt puts the generated files. The deploy mode is Git LFS, which tells Netlify to use Git Large File Storage for handling large files such as images.

- Click on the Deploy site button and wait for Netlify to build and deploy your site

You should see a successful deploy message.

### Configure the build settings and deploy your site

To configure the build settings and deploy your site, you need to:

- Click on the Site settings button on the top right corner of the dashboard
- Click on the Change site name button under Site information and enter a custom name for your site (e.g., nuxt-blog)
- Click on the Save button and confirm the change

Your site is now deployed and accessible. You can also use a custom domain name if you want.

You have now deployed your blog to Netlify.

## Conclusion

In this blog post, I showed you how to create a personal website blog with Vue, Vuetify, and Nuxt. You learned how to:

- Scaffold a Nuxt project with TypeScript support
- Install and configure Vuetify as a Nuxt module
- Create layout and page components for your blog
- Fetch and display blog posts from a mock API
- Deploy your blog to Netlify

I hope you enjoyed this tutorial and learned something new. If you have any questions or feedback, feel free to tell me about it and I will try to help. Thanks for reading!
