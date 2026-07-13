# SnapLink - URL Shortener

SnapLink is a full-stack URL Shortener built with Next.js and MongoDB. It allows users to generate custom short URLs and redirect them to the original website quickly and efficiently.

## Features

- Generate custom short URLs
- Redirect short URLs to original URLs
- MongoDB database integration
- Responsive user interface
- Fast and lightweight application

## Tech Stack

- Next.js
- React.js
- MongoDB
- Tailwind CSS
- JavaScript

## Project Structure

```
app/
├── api/
├── Shorten/
├── components/
├── about/
├── page.js
├── layout.js
```

## Live Demo

[https://url-shortner-six-jade.vercel.app](https://url-shortner-six-jade.vercel.app)


## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/url-shortner.git
```

Go to the project directory:

```bash
cd url-shortner
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Author

Shaik Nazeer
