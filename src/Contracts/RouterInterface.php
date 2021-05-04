<?php
namespace Contracts;

interface RouterInterface
{
    public function executeHandler(): void;
}