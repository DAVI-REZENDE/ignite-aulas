# Ignite Shop

Ignite Shop is an e-commerce that sells rocketseat shirts, where Next.js was used to make Static Site Generation (SSG) to render the main screen and the product screen and Server Side Rendering (SSR) to render the success, to purchase the t-shirts I used the stripe API

> Attention: for the purchase of shirts, use the card with the number 4242 4242 4242 424, and a date greater than the current day

<p align="center">
 <img src="https://raw.githubusercontent.com/DAVI-REZENDE/ignite-aulas/main/assets/ignite_shop_prev.png" alt="Preview" />
</p>

## Technologies used in the project

- Next.js
- TypeScript
- Axios
- Stitches
- Stripe
- Keen Slider
- EsLint

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Configure your global variables: (.env.local)

```bash
# App
NEXT_URL=http://localhost:3000

# Stripe
STRIPE_PUBLIC_KEY=your-value
STRIPE_SECRET_KEY=your-value
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Thanks🤙