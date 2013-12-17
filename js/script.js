function convert(i){
  if (i<=100)
  {
    document.getElementById("progress").style.width = i + "%";
    i++;
    t = setTimeout('convert('+i+')', 30);
  } else {
    setTimeout("document.location.href = 'result.html'", 1000);
  };
}
