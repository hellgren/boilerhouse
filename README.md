# Boilerhouse
An Express + Next.js boilerplate/scaffold
<!-- Build Status -->
<a href="https://travis-ci.org/hellgren/boilerhouse">
  <img src="https://travis-ci.org/hellgren/homepage.svg" alt="Build Status" />
</a>
<!-- Dependency Status -->
<a href="https://david-dm.org/hellgren/boilerhouse">
  <img src="https://david-dm.org/hellgren/homepage.svg" alt="Dependency Status" />
</a>
<!-- devDependency Status -->
<a href="https://david-dm.org/hellgren/boilerhouse#info=devDependencies">
  <img src="https://david-dm.org/hellgren/homepage/dev-status.svg" alt="devDependency Status" />
</a>
<!-- Vulnerabilities Status -->
<a href="https://snyk.io/test/github/hellgren/boilerhouse/badge.svg">
  <img src="https://snyk.io/test/github/hellgren/boilerhouse/badge.svg" alt="Vulnerabilities Status" />
</a>
## Setup

```bash
$ npm ci
$ npm run dev
```

## Additional configuration
- Enable http to https redirection. Many cloud hosting solutions allow you to configure this (GCP, AWS, etc). If this is not supported, you will need to use a package like [express-sslify](https://www.npmjs.com/package/express-sslify).

- Serve request over HTTP/2. Express does not yet support this out of the box, in the mean time you can use https://github.com/spdy-http2/node-spdy. Note that your hosting provider may not support HTTP/2.
