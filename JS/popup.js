console.log("SEE");
var test = document.getElementById('createSession');
test.onclick = function(){

  var listDiv = document.getElementById("list-div");
  var chrome_tabs = getChromeTabs();
  
  document.getElementById('thelist').style.display = "block"; 

  setTimeout(function() {
    document.getElementById("numberTabs").innerHTML = chrome_tabs.length;
    var completelist = document.getElementById("thelist");
    for(let i =0; i<chrome_tabs.length; i++){
      var style = 'style="display:block;text-overflow: ellipsis;width: 250px;overflow: hidden; white-space: nowrap;"'
      var tag= '<li class="chromeTabs" id="Link'+ i  +'"'+ style +' draggable="true"> <img src="'+ chrome_tabs[i].favIconUrl +'" alt="NOPE " width="16" height="16">' + chrome_tabs[i].title + '</li>';
      completelist.innerHTML += tag; 
  }}, 5);

    setTimeout(function() {
      tag = '<button id="saveButton"> Save </button>'
      listDiv.innerHTML += tag;
      test.style.display = "none";
      document.getElementById('divHeadContent').style.display = "none"; 
    },5);
}

//ALL chrome tab values

function getChromeTabs(){
  var chrome_tabs = []
  var fixedWindowId;
  chrome.tabs.query({currentWindow: true, active: true},function(tabs){
    console.log(tabs);
    fixedWindowId = tabs[0].windowId;
  });
  chrome.tabs.query({},function(tabs){  
    tabs.forEach(function(tab){
      if(fixedWindowId == tab.windowId){
        chrome_tabs.push(tab);}
    });
  });
 return chrome_tabs;
}



//Save button
document.addEventListener('click', function(e){
  if(e.target && e.target.id == "saveButton"){  
    var chrome_tabs = getChromeTabs();
    setTimeout(function(){
      localStorage.setItem("my_colors", JSON.stringify(chrome_tabs)); //store colors
      //console.log(storedChrome_tabs);
      //window.open("https://www.youtube.com/","_blank");
    
      for(let i =0; i<chrome_tabs.length; i++){
        console.log(chrome_tabs[i].favIconUrl);
        chrome.tabs.remove(chrome_tabs[i].id);
      }
      window.open("https://www.youtube.com/","_blank");
    },50);
    chrome.browserAction.setPopup({popup: "HTML/saved.html"});
  }

}); 




//Make one function for chrome tabs
