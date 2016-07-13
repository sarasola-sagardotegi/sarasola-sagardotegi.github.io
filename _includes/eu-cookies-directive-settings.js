<script>
$(document).ready(function(){
  // Cookie setting script wrapper
  var cookieScripts = function () {
    // Internal javascript called
    console.log("Running");
		
    // Loading external javascript file
    $.cookiesDirective.loadScript({
      uri:'external.js',
	  appendTo: 'eantics'
	});
  }
  $.cookiesDirective({
    privacyPolicyUri: '/aviso-legal/',
    explicitConsent: false,
    position : 'bottom',
    //scriptWrapper: cookieScripts, 
    cookieScripts: 'Google Analytics', 
    backgroundColor: '#7ea438',
    linkColor: '#2b2b2a'
  });
});
</script>
