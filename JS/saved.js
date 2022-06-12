console.log("Saved.js");


var chrome_tabs = JSON.parse(localStorage.getItem("my_colors"));
var listDiv = document.getElementById("list-div");
 
document.getElementById("numberTabs").innerHTML = chrome_tabs.length;
var completelist = document.getElementById("thelist-2");
for(let i =0; i<chrome_tabs.length; i++){
    var style = 'style="display:block;text-overflow: ellipsis;width: 250px;overflow: hidden; white-space: nowrap;"'
    var tag= '<li class="chromeTabs" id="Link'+ i  +'"'+ style +' draggable="true"> <img src="'+ chrome_tabs[i].favIconUrl +'" alt="NOPE " width="16" height="16">' + chrome_tabs[i].title + '</li>';
    completelist.innerHTML += tag; 

}


var openButton = document.getElementById('openButton');
openButton.onclick = function(){
    chrome.browserAction.setPopup({popup: "HTML/groups.html"});
    for(var i =0; i<chrome_tabs.length; i++){
        window.open(chrome_tabs[i].url);
    }
    localStorage.setItem("my_colors", JSON.stringify([])); //store colors
    
}

var deleteButton = document.getElementById('deleteButton');
deleteButton.onclick = function(){
    localStorage.setItem("my_colors", JSON.stringify([])); //store colors
    chrome.browserAction.setPopup({popup: "HTML/groups.html"});

    window.close();

}