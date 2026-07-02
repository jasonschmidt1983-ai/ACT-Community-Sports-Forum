# ACT Community Sport Leadership Forum

A modern, responsive landing page for the ACT Community Sport Leadership Forum.

## Event

**Strong Clubs Build Strong Communities**  
Wednesday 29 July 2026  
6.00pm to 7.30pm  
Strike Room, ACT Hockey Centre, Lyneham ACT

## Registration

Registration links point to:

https://forms.office.com/r/61zBA1AWbn

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

After uploading the files to GitHub:

1. Go to **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main`.
5. The site will deploy automatically.

## Update partner logos

Partner placeholders are in `src/App.jsx` in the `partners` array. Replace the placeholder cards with image files when final logos are available.
