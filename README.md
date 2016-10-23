TYPO3 Skeleton
==============

The TYPO3 Skeleton provides a base for new TYPO3 projects. 

The contents of this repository should be extracted in the project root folder. All files and folders should be integrated in the `fileadmin` subfolder.
All existing `README.md` files should be deleted afterwards.

Content
-------

*   [sass](fileadmin/.assets/.sass): Folder for Sass resources (gulp is using this folder)
*   [js](fileadmin/.assets/.js): Folder for JavaScript resources (gulp is using folder)
*   [css](fileadmin/css): Folder for CSS resources webfonts, icons, images and Sass sourcemaps (CSS resources should be generated using gulp)
*   [js](fileadmin/js): Folder for JavaScript resources (should be generated using gulp)
*   [.templaVoila](fileadmin/templates/.templaVoila): Folder for TemplaVoila! resources
*   [.ts](fileadmin/templates/.ts): Folder for TypoScript resources
*   [html](fileadmin/templates/html): Folder for HTML resources (Extensions & TemplaVoila! templates)
*   [lang](fileadmin/templates/lang): Folder for localisation/internationalisation resources
*   [res](fileadmin/templates/res): Folder for other resources

TypoScript
----------

To use the TYPO3 Skeleton follow these steps:

1.  The follwing line needs to be included in the TypoScript root template in the **Setup** section:

        <INCLUDE_TYPOSCRIPT: source="DIR: fileadmin/templates/.ts/includes">

    
2.  This line needs to be included in the **pageTSconfig** on the website root page (`Edit page > Resourcen > TypoScript Configuration`):
    
        <INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/.ts/TSconfig/page.ts">

3.  You may want to include this line user's **userTSconfig**, to further configure the user settings:
    
        <INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/.ts/TSconfig/user.ts">
        
4.  These constants are mandatory and need to be included in the TypoScript main templates **Constants** section:

        compressJs = 1
        compressCss = 1
        concatenateJsAndCss = 1
        
Safety precautions
------------------

To prevent the webserver from calling certain resources (TypoScript & Sass files, TemplaVoila! structures etc.) you should include the following lines in your .htaccess file. All files and folders beginning with a "." will not be callable via HTTP.  

    ###########################################################################
    # Disabling all files or folders within fileadmin starting with a .
    ###########################################################################
    RewriteRule ^fileadmin/(.*/)?\. - [F]
