/*
  The script for likeplusone.org's homepage.

  Copyright 2011 Ashkan Soltani and Brian Kennish

  This program is free software: you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program. If not, see <http://www.gnu.org/licenses/>.

  Authors (one per line):

    Brian Kennish <byoogle@gmail.com>
*/

/* Registers lightboxing and installation handlers. */
$(function() {
  $('.feature img:first-child').each(function() {
    var thumbnail = $(this);

    thumbnail.click(function() {
      var modal = thumbnail.next();

      modal.lightbox_me({
        centered: true,
        onClose: function() { thumbnail.after(modal); }
      });
    });
  });

  var browser = $.browser;
  var mozilla = browser.mozilla;
  var webkit = browser.webkit;
  var tokens = navigator.userAgent;

  if (
    mozilla || webkit ||
        browser.msie && tokens.split('MSIE ', 2)[1].split('.', 1) >= 9
  ) setTimeout(function() {
    $('#installation a').
      addClass('activated').
      attr('tabindex', 1).
      attr(
        'href',
        mozilla ? 'like+1.xpi' :
            webkit ?
                tokens.indexOf('Chrome') >= 0 ?
                    'https://chrome.google.com/webstore/detail/lpehokhlnomihmdpgoclgbapaglbclfg'
                        : 'like+1.safariextz' : 'like+1.exe'
      );
  }, 1000);
});
