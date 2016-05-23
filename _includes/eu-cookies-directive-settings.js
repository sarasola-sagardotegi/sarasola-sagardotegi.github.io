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
    privacyPolicyUri: '/aviso-legal.html',
    explicitConsent: false,
    position : 'bottom',
    //scriptWrapper: cookieScripts, 
    cookieScripts: 'Google Analytics', 
    backgroundColor: '#52B54A',
    linkColor: '#ffffff'
  });
});
</script>
