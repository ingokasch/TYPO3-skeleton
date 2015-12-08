HTML resource files
===================

This folder should be used to store extension layouts, templates and partials. This will allow you to modify the view templates without modifying the the
extension itself. This will kepp your extension upgradable.

best practice should be to create a folder using the extensions name "news" for example.
After that copy the view files of the extension in the related folder.

So the structure will be:

fileadmin/templates/html/ext/news/

- Layout

- Templates

- Partials

After that you need to set the news view paths in the extensions constants.
