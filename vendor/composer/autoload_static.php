<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit968d7d27507395c7aa0f79d86f970709
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $fallbackDirsPsr4 = array (
        0 => __DIR__ . '/../..' . '/src',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit968d7d27507395c7aa0f79d86f970709::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit968d7d27507395c7aa0f79d86f970709::$prefixDirsPsr4;
            $loader->fallbackDirsPsr4 = ComposerStaticInit968d7d27507395c7aa0f79d86f970709::$fallbackDirsPsr4;
            $loader->classMap = ComposerStaticInit968d7d27507395c7aa0f79d86f970709::$classMap;

        }, null, ClassLoader::class);
    }
}
