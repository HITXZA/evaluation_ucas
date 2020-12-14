var str1 = "老师上课生动形象有趣味性，举的例子非常利于理解。" //这里自行修改为你最喜欢什么
var str2 = "老师辛苦啦，讲的特别好，同学们听的很认真。" //这里自行修改为对老师的建议
for(var i =0; i<1000; i++) { 
    if($("input[name='item_"+i+"']").length) 
        $("input[name='item_"+i+"']").get(0).checked=true; 
}
$("textarea[id='item_291']").text(str1)
$("textarea[id='item_292']").text(str2)

$("form").submit()
$("button[value='ok']").click()
