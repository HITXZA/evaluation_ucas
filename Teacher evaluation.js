var str1 = "课堂气氛非常好                           " //这里自行修改为你最喜欢什么
var str2 = "老师讲的非常好                           " //这里自行修改为对老师的建议
for(var i =0; i<360; i++) { 
    if($("input[name='item_"+i+"']").length) 
        $("input[name='item_"+i+"']").get(0).checked=true; 
}
$("textarea[id='item_291']").text(str1)
$("textarea[id='item_292']").text(str2)

$("form").submit()
$("button[value='ok']").click()
