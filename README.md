Chrome/Firefox EZProxy Redirect
=======================

By: Tom Wambold <tom5760@gmail.com>

Updates By: Rohit Agrawal <https://github.com/rohitagr>

Firefox Adaptation By: Kieran Ramos <https://github.com/krrk>

Code: https://github.com/tom5760/chrome-ezproxy
Firefox Code: https://github.com/krrk/chrome-ezproxy

Extension: https://chrome.google.com/extensions/detail/gfhnhcbpnnnlefhobdnmhenofhfnnfhi

Destription
-----------

Many universities use EZProxy to allow its students access to various online
databases.  This extension adds a button to Chrome which allows for a quick way
to reload the current page through your EZProxy system.

All it does is pass the URL to your library's EZProxy login URL.  For example:

    http://ieeexplore.ieee.org/

would change to:

    http://www.library.drexel.edu/cgi-bin/r.cgi?url=http://ieeexplore.ieee.org

Change Log
----------

Version 15 - April 30, 2017:
* Adapt plugin to work with Firefox Webextensions

Version 14 - December 12, 2014:
* Use chrome's synced storage to save the redirect url

Version 10 - March 23, 2011:
* Added support for updating URL lists from my EZProxy URL Database, so
  I don't have to release new versions of the extension just to add new
  URLs. https://ezproxy-db.appspot.com/
* Fixed Columbia University URL (thanks Chris)
* Added RIT URL (thanks Sakshar)

Version 8,9 - December 20, 2010:
* Added URL for University of Central Florida (thanks Pieter).
* Updated icon (I seem to have forgotten to commit it last time).

Version 5 - September 8, 2010:
* Added context menu item for links.
* Added drop down box in options to select school.

Version 4 - March 3, 2010:
* Initial version on GitHub.
* Simple redirect button.
