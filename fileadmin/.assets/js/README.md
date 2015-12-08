JavaScript assets
=================

This folder contains custom JavaScript resources which will be concatenated and minified.

To control the order in which the files are concatenated use a numeric index like 10_foo.js, 20_bar.js. The files will be concatenated in ascending order. 

All custom JavaScript code will be concatenated after the vendor resources (vendor.js + custom.js = complete.min.js).
