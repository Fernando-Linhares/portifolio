<?php
namespace Router;

use \Contracts\RouterInterface;

class Router implements RouterInterface
{
    public function executeHandler(): void
    {
        eval($this->getRoutes());
    }

    public function getRoutes(): string
    {
        $routes =  require routes;

        foreach($routes as $key => $value){
            if($key==$_SERVER['REQUEST_URI']){
               list($controller,$method)= explode(":",$value);
               return "\$obj=new $controller; \$obj->$method();";
            }
            else
                continue;
            
        }
    }
}