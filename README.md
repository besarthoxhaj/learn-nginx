## Learn Nginx

Nginx is a web server written is C.

### Install

You can install it via Homebrew or source.

```
$ brew update
$ brew install nginx
```

For source installation check the get started [guide]() and also 

```
$ cd source/1.10.3/
$ ./configure
$ 
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
# sets the maximum number of simultaneous connections
# by our experiments the minimum seems 3
events {
  worker_connections 3;
}

# this is the bare minimum to run the server
# it will connect to port 8000 with no static
# files to server for any path
http {
  server {}
}
```

### Resources

- [Official wiki:](https://www.nginx.com/resources/wiki/)
- [Wiki on GitHub:](https://github.com/nginxinc/nginx-wiki)
- 