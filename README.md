## Quick start

1.  Clone this repo
2.  Move to the appropriate directory: `cd eostoolkit`.<br />
3.  Run `yarn` in order to install dependencies and clean the git repo.
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
4.  Run `yarn run format:js` prior to making commits for nice clean code    
5.  Run `npm run build` to build the deployable package.

Now you're ready to rumble!


### Deploy to Google Cloud

Important: You must build locally before deploying to Google Cloud

```
$ npm install
$ npm run build

$ gcloud config set project open-rights-exchange
$ gcloud -q app deploy app.yaml
```
