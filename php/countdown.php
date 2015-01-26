<?php
if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}

function countdown($seconds)
{
    
    for ($i=$seconds; $i>=0; $i--) {
        echo "\r"; //start at the beginning of the line
        echo "$i "; //added space moves cursor further to the right
        sleep(1);
    }
    echo "\r  ";
    
}

countdown(5);

die('0 All done...');