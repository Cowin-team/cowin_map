# cowin_map

# Development

We use [Jekyll](https://jekyllrb.com) and [Github pages](https://pages.github.com)
for development and deployment.

## Pre-requisites

* Docker
* docker-compose

> On MacOS, this setup has been testing on MacOS Big Sur with Docker Desktop 3.3.1

## Install dependancies

* Ruby packages (gems)
  ```console
  $ docker-compose run --rm site bundle install
  ```
* Node modules
```console
$ docker-compose run --rm site npm install
```

Ideally, you will need to install these dependancies only the first-time
you setup the codebase on your machine.

Or, when the dependancies are changed.

## Usage

Start the server with
```console
$ docker-compose up
```

and visit http://localhost:4000

As you edit the file, the site will be re-generated automatically.

