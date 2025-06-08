---
title: 'Setup PHP without XAMPP or MAMP for development and deploy to production'
description: ''
pubDate: 'June 08 2025'
heroImage: '/blog-placeholder.jpg'
setup:
---

### Intro
Since I started learn how to programming PHP is the first programming language I have learned. It’s well know and easy for beginners. Many startups use PHP stacks to build their successful products. I started by installed XAMPP on my window machine, it has a window panel for start and stop processes and I have no ideas how is this work, I just drag and drop files into “htdocs” folder. So this article will explain about how each components works.

### What is XAMPP or MAMP
XAMPP or MAMP is stack package including Apache, MariaDB/MySQL, PHP, and Perl installed in your machine out of the box, which is great if you too lazy or use all of them. But it is unnecessary if you use only one of them. This is like a black box when I started using it.

### Setup local development
Windows

You can download latest PHP version on https://windows.php.net/download/ , extract to folder and setup environment variables point to folder example  C:\Users\{youruser}\php-8.4.7-Win32-vs17-x64. After setup the following command. There it is you got a  PHP CLI and ready to start.

```jsx
php -v

PHP 8.4.7 (cli) (built: May  6 2025 14:12:45) (ZTS Visual C++ 2022 x64)
Copyright (c) The PHP Group
Zend Engine v4.4.7, Copyright (c) Zend Technologies
```

PHP CLI [more..](https://www.php.net/manual/en/features.commandline.php) , Start to create an index.php file and run run “php -S [http://localhost:8080](http://localhost:8080)”, it will start a server for development.

```php
<?php
   echo "Hello Word";
```

Try to access [http://localhost:8080](http://localhost:8080) you will get result.

![hello-world.png](/blogs/setup-php-without-xampp/hello-world.png)

So now you can build a website without install XAMPP or MAMP, if you want MySQL or different or phpMyAdmin you can install it separately and use only what you need.