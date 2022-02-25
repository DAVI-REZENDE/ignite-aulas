# Ignews
In this project I learned how to social login with Github, I learned how to use Next.js to your routing system, I learned how to use the stripe api to make payment within the application, I learned the server side render (SSR) and static site generator methods (SSG) with next, I learned to display the content of posts only to the user who signed the application, I used CMS Prismic and consumed its api to write the posts. All this in this project developed in the Rocketseat course!
<p align="center">
 <img src="https://raw.githubusercontent.com/DAVI-REZENDE/ignite-aulas/main/assets/ignews_prev.png" alt="Preview" />
</p>

## Technologies used in the project

- Next.js
- TypeScript
- Axios
- FaunaDB
- Stripe
- Prismic
- Sass

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Configure your global variables:

```bash
# Stripe 
STRIPE_API_KEY=1234
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=1234
STRIPE_WEBHOOK_SECRET=1234
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/

# Github
GITHUB_CLIENT_ID=1234
GITHUB_CLIENT_SECRET=1234

# FaunaDB
FAUNADB_KEY=234

# Prismic
PRISMIC_ACCESS_TOKEN=1234

PRISMIC_ENDPOINT=https://yourproject-yourname.prismic.io/api/v2
```

Run stripe webhooks in your terminal:

```bash
stripe listen --forward-to http://localhost:3000/api/webhooks
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Thanks🤙