# cowin_map

# Development

We use [Jekyll](https://jekyllrb.com) and [Github pages](https://pages.github.com)
for development and deployment.

## Pre-requisites

* Docker
* docker-compose

## Install dependancies

* Ruby packages (gems)
  ```console
  $ docker-compose run --rm site bundle install
  ```
Ideally, you will need to install these dependancies only the first-time
you setup the codebase on your machine.

Or, when the dependancies are changed.

## Usage

Start the server with
```console
$ docker-compose up site
```

and visit http://localhost:4000

As you edit the file, the site will be re-generated automatically.
