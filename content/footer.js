function setFooter() {
 var s=''
/* s+=' <footer  class="footer fixed-bottom py-3 bg-light">'
 s+='    <div class="container" >'
 s+='      <span class="text-muted">My Event - Site d\'organisation d\'évènement</span>'
 s+='    </div>'
 s+='  </footer>'
 */

 s+='<footer class="fixed-bottom py-3 bg-dark">'
 s+='   <div class="d-flex justify-content-center">'
 s+='       <span class="text-muted text-center">My Event - Site d\'organisation d\'évènement</span>'
 s+='   </div>'
 s+='</footer>'
 document.getElementById("footer").innerHTML = s
}