<?php
require '../vendor/autoload.php';
require "../config/web.php";

use Main\Kernel;
use Router\Router;

Kernel::start(new Router);