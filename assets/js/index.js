function archivo(evt) {
      var files = evt.target.files; // FileList object
       
        //Obtenemos la imagen del campo "file". 
      for (var i = 0, f; f = files[i]; i++) {         
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }
       
           var reader = new FileReader();
           
           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
                      document.getElementById("list-logo").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
               };      document.getElementById("list-contact").innerHTML = ['<img class="thumb-1" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
           })(f); 
 
           reader.readAsDataURL(f);
       }
}
             
      document.getElementById('files-logo').addEventListener('change', archivo, false);
      document.getElementById('files-contact').addEventListener('change', archivo, false);