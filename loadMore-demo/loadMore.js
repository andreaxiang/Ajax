
var btn = document.querySelector("#btn");
var ct = document.querySelector(".ct");
var pageIdx = 2;
var isDataArrive = true;
btn.addEventListener('click', function(e) {
  e.preventDefault();
  if(!isDataArrive) {
    return
  }
  isDataArrive = false;
  ajax({
    url: '/loadMore', //接口地址
    type: 'get',
    data: {
      index: pageIdx,
      length: 5
    },
    success: function(results) {
      renderPage(results);
    },
    error: function() {
      console.log("error");
    }
  })
});
function renderPage(news) {
  var fragment = document.createDocumentFragment();
  for(var i = 0; i < news.length; i++) {
    var node = document.createElement("li");
    node.innerText = news[i];
    fragment.appendChild(node);
  }
  ct.appendChild(fragment);
}
function ajax(opts) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      if(xhr.status === 200 || xhr.status === 304) {
        var results = JSON.parse(xhr.responseText);
        opts.success(results);
        pageIdx += 5;
      } else {
        opts.error();
      }
      isDataArrive = true;
    }
  };
  var dataStr = '';
  for(var key in opts.data) {
    dataStr += key + "=" + opts.data[key] + "&";
  }
  dataStr = dataStr.substr(0, dataStr.length-1);
  if(opts.type.toLowerCase() === "get") {
    xhr.open("get", opts.url + "?" + dataStr, true);
    xhr.send();
  }
  if(opts.type.toLowerCase() === "post") {
    xhr.open("post", opts.url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(dataStr);
  }
}