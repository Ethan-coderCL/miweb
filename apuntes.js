/* 

ls / lista de carpetas
pwd / saber en que directorio estoy
cd / acceder a alguna carpeta
cd .. / devolverme una carpeta
mkdir / crea una carpeta
ls -a / muestra todos los elementos ocultos
code . / abre la carpeta en vscode
git status / mostrarnos el estado actual de nuestro repositorio
git add (1.- nombre del archivo/2.-  .txt /3.-  . )
	1.- colocar el nombre del archivo que queremos.
	2.- selecciona TODOS los TIPOS de archivos.
	3.- Selecciona TODOS LOS ARCHIVOS (mala práctica).
	4.- agregar multiples archivos separados por un espacio.
    
rm 'nombrearchivo' / Borra el archivo
rm 'nombre origen' 'nombre a cambiar'/ cambiar el nombre del archivo
git commit -m "aqui va comentario" / sube el o los archivos a commit
git diff / nos muestra los cambios
git diff --staged / se muestran los cambios en staged
git log / muestra el historial realizado con nombre y correo
git log --online / muestra el historial pero sin la informacion del que realizó los cambios
git restore --staged 'nombre archivo' /restaura un archivo del staged
git restore / restaura archivos de una rama de trabajo
git branch / nos muestra en que rama estamos trabajando
git checkout -b 'nombre que le asignamos a la rama' / crea y/o te cambia a la rama
cat 'nombre del archivo' / te muestra el contenido del archivo
git merge 'nombre de la rama' / nos trae los cambios realizados a la rama en la que estamos
git push / sube todos los cambios
git push -u origin 'nombre de la rama' / crea una rama en el repositorio 

*/