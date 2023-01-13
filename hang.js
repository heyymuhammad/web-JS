function outer(){
    i+=1;
    inner();
    function inner(){
        document.write("bye"+ i +"<br>");
        outer();
    }
}
i = 0;
outer();

