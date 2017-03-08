## Learn Nginx

Nginx is a web server written is C.

### Install

#### OSX

You can install it via Homebrew or source.

```
$ brew update
$ brew install nginx
```

To install openresty (for lua and other packages) using homebrew:

```
$ brew update
$ brew install homebrew/nginx/openresty
```
<!--((TODO: improve npm scripts to auto start/stop if running))-->

For source installation check the get started [guide]() and also

```
$ cd source/1.10.3/
$ ./configure
$
```

#### Linux

You can install nginx using apt-get

```
sudo apt-get update
sudo apt-get install nginx
```

### Commands

**Ask help**
```
$ nginx -h
```

In order to run it independently regardless of the default configs which depends
on the absolute path of nginx installation, you can use:

```
nginx -p "$(pwd)" -c configs/simple.conf
```

### Configs

The bare minimum config possible is:

```
# Sets the maximum number of simultaneous connections
# by our experiments the minimum seems 3.
events {
  worker_connections 3;
}

# This is the bare minimum to run the server
# it will connect to port 8000 with no static
# files to server for any path.
# On Linux it will connect to port 80 instead.
http {
  server {
    # root ./html;
    # listen 8000;
  }
}
```

### Proxy

In order to create a reverse proxy the minimum configuration is:

```
events {
  worker_connections 10;
}

http {
  server {
    location / {
      proxy_pass http://127.0.0.1:3001$1;
    }
  }
}
```

### Locations

```
location /assets/ {
  root ./; # assets is appended to root
}
location /assets/ {
  alias assets/; # literal directory path
}
```

Using alias: With a request of `/i/top.gif`, the file `/data/w3/images/top.gif` will be sent.
Using root: With a request of `/i/top.gif`, the file `/data/w3/i/top.gif` will be sent.

### Logs

There are two main log types: `access_log` and `error_log`

**Access log**
Syntax: $remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"


**Error log**

### npm scripts
```
SERVER=proxy npm run restart
```

### Resources

- [Official wiki:](https://www.nginx.com/resources/wiki/)
- [Wiki on GitHub:](https://github.com/nginxinc/nginx-wiki)
- [Official doc on logs:](http://nginx.org/en/docs/http/ngx_http_log_module.html)
- [Log parsing:](https://easyengine.io/tutorials/nginx/log-parsing/)
- [Official debug log](http://nginx.org/en/docs/debugging_log.html)
- [Nginx config tutorial](http://openresty.org/download/agentzh-nginx-tutorials-en.html)
- [Realtime metrics + log monitoring](https://github.com/lebinh/ngxtop)
-
