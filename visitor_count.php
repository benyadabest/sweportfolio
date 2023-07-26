<?php
$counter_file = 'visitor_count.txt';

if (!file_exists($counter_file)) {
    file_put_contents($counter_file, '0');
}
$current_count = (int)file_get_contents($counter_file);
$current_count++;

file_put_contents($counter_file, $current_count);

echo $current_count;
?>