# Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth

![Home page](https://res.cloudinary.com/dbiliw2ja/image/upload/v1689002823/homePage_gaj0hu.png)
![Reservation page](https://res.cloudinary.com/dbiliw2ja/image/upload/v1689002932/reservationPage_xfioeo.png)
![Signup form](https://res.cloudinary.com/dbiliw2ja/image/upload/v1689003223/signUpForm_cknvbp.png)
![Responsive appearance](https://res.cloudinary.com/dbiliw2ja/image/upload/v1689003151/responsivePage_ubaobd.png)

This project is a full stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.


Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Plain sign up / log in method 
- Google authentication
- Github authentication
- Image upload using Cloudinary
- Form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results

### Prerequisites

**Node version 14.x**

**NextJS version 13.x**

### Cloning the repository

```shell
git clone https://github.com/tuanloc288/bnbHouseForRent.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL= 
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma / Mongodb

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
