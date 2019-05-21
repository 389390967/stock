/* cookie --start */
function setCookie(name, value, expiredays) {
    var exDate = new Date();
    exDate.setDate(exDate.getDate() + expiredays);
    document.cookie = name + '=' + encodeURIComponent(value) + (expiredays ? ';expires=' + exDate.toGMTString() : '');
}
/*--
encodeURIComponent(string) 函数可把字符串作为 URI 组件进行编码。
返回已编码的 string 的副本，其中某些字符被替换成了十六进制的转义序列。
这样就可以在所有的计算机上读取该字符串。 
--*/

function getCookie(name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + '=');
        if (start != -1) {
            start = start + name.length + 1;
            var end = document.cookie.indexOf(';', start);
            if (end == -1) {
                end = document.cookie.length;
            }
            return decodeURIComponent(document.cookie.substring(start, end));
        }
    }
    return '';
}
/* cookie --end */