# cowin_map

# Development

We use [Jekyll](https://jekyllrb.com) and [Github pages](https://pages.github.com)
for development and deployment.

## Setup with Docker

We have well tested the setup of development environment with Docker for this
project.
However, we understand that not everyone is familiar with Docker or that Docker
on Windows is not optimal.

> If you want to setup this project for development without Docker, skip to the
alternative setup setup.

### Pre-requisites

* Docker
* docker-compose

> On MacOS, this setup has been testing on MacOS Big Sur with Docker Desktop 3.3.1

> On Windows, this setup seem ot have issues. Use the alternative setup from below.

### Install dependancies

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

### Usage

Start the server with
```console
$ docker-compose up
```
and visit http://localhost:4000

As you edit the files, the site will be re-generated automatically.

## Alternative Setup: Without Docker and natively on your machine

### Pre-requisites

* Ruby version 2.7.1
  * We recommend using [rbenv](https://github.com/rbenv/rbenv) and
  installing version 2.7.1 with it.
  * If you are Windows, you could install it using Windowns Ubuntu Subsystem
  following the rbenv instructions for Debian, Ubuntu and their derivatives.
* Node JS - LTS version

### Install dependencies

From witin the project root:

* Ruby package manager and gems:
  ```console
  $ bundle config set --local path .bundle
  $ bundle install
  ```
* Node modules
  ```console
  $ npm install
  ```

### Usage

You need to start both Jekyll server and Webpack server.
Without the webpack server, your Javascript changes from `src/` directory
will not be reflected in the `/dist` directory.

* Jekyll server
  ```console
  $ jekyll server -H 0.0.0.0
  ```
* Webpack server
  ```console
  $ npx webpack --watch
  ```

and visit http://localhost:4000

As you edit the files, the site will be re-generated automatically.
