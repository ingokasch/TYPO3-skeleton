#FAVICON
page.headerData.600 = TEXT
page.headerData.600.value (
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
)

#TOUCHICONS (@see http://iconogen.com)
page.headerData.601 = TEXT
page.headerData.601.value (
	<link rel="apple-touch-startup-image" href="startup.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
    <meta name="msapplication-square70x70logo" content="/smalltile.png" />
    <meta name="msapplication-square150x150logo" content="/mediumtile.png" />
    <meta name="msapplication-wide310x150logo" content="/widetile.png" />
    <meta name="msapplication-square310x310logo" content="/largetile.png" />
)

#META
page.meta.author = [Your author name]
page.meta.robots = index,follow

#CSS
page.includeCSS {
#    fonts = http://fonts.googleapis.com/css?family=Lato:400,700|Open+Sans:700,400
#    fonts.external = 1
    main_css = fileadmin/css/my_sass_file.min.css
}

page.CSS_inlineStyle >
config.inlineStyle2TempFile = 1

page.headerData.10 = TEXT
page.headerData.10.value (
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
)

# [browser = msie] && [version= <9]
#  page.includeCSS.ie8                        = fileadmin/templates/css/ie8.css
# [global]

#JAVASCRIPT
page.includeJS {
    html5 = http://html5shiv.googlecode.com/svn/trunk/html5.js
    html5.external = 1
    html5.allWrap = <!--[if lt IE 9]>|<![endif]-->
    html5 {
        disableCompression = 1
        forceOnTop = 1
        excludeFromConcatenation = 1
    }
}

page.includeJSFooter {
    jquery = http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
    jquery {
        external = 1
        forceOnTop = 1
        disableCompression = 1
        excludeFromConcatenation = 1
    }

#    vendors = fileadmin/js/vendors.min.js
    main_js = fileadmin/js/my_javascript_file.min.js
}

config.removeDefaultJS = external
