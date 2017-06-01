# Elasticsearch CoreDeveloper Training Client

Client application build with [Preact](https://github.com/developit/preact) and [Searchkit](http://docs.searchkit.co/) as a frontend to perform a faceted search with elasticsearch.

## Development and running the result

**1. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**2. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**3. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

> 🌟 This also instruments the code in `src/` using [isparta](https://github.com/douglasduteil/isparta), giving you pretty code coverage statistics at the end of your tests! If you want to see detailed coverage information, a full HTML report is placed into `coverage/`.

**4. Generate a production build in `./build`:**

```sh
npm run build
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`
> 
> **[Netlify](https://www.netlify.com/docs/cli/) Example:** `netlify deploy`
>
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pixelmord/elasticsearch_training_client)


**5. Start local production server with [serve](https://github.com/zeit/serve):**

```sh
npm start
```

> This is to simulate a production (CDN) server with gzip. It just serves up the contents of `./build`.


## CORS and using e.g. a demo app 
This app will expect to find the elasticsearch service running on `http://localhost:9200`

To be able to test, you need to set CORS e.g. in your elasticsearch.yml

Here are the MOST INSECURE settings:

```
http.cors.enabled : true
http.cors.allow-origin : "*"
http.cors.allow-methods : OPTIONS, HEAD, GET, POST, PUT, DELETE
http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type, Content-Length
```
