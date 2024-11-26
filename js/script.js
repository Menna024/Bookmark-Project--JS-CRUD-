var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("table-body");

var bookmarkList = [];

function InsertData() {
    var isURLValid = ValidateURL(siteUrl.value);

    if (isURLValid) {
        var bookmark = {
            name: siteName.value,
            url: siteUrl.value
        }

        console.log(bookmark);
        bookmarkList.push(bookmark);
        localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
        console.log(bookmarkList);

        console.log(siteName, siteUrl, submitBtn);
        DisplayData();
    }
    else
    {
        alert("Invalid URL");
    }
}


if (localStorage.getItem("bookmarkList") != null) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    DisplayData();
}
else {
    bookmarkList = [];
}


function DisplayData() {
    var str = ``;
    console.log(bookmarkList);
    for (var i = 0; i < bookmarkList.length; i++, j++) {
        var j = i + 1;
        var bookmark = bookmarkList[i];
        str += `<tr>
                     <td>${j}</td>
                     <td>${bookmark.name}</td>                           
                     <td>
                     <button class="btn btn-success" onclick="OpenURL('${bookmark.url}')" >
                        <i class="fa-solid fa-eye px-1"></i>
                        Visit
                     
                     </button>
                     </td>
                     <td><button class="btn btn-danger" onclick="DeleteData(${i})"><i class="fa-solid fa-trash px-1"></i>Delete</button></td>
                </tr>`
    }
    tableBody.innerHTML = str;
    console.log(str);
}

function OpenURL(url) {   //in new tab
    window.open(url, "_blank");
}

function DeleteData(index) {
    bookmarkList.splice(index, 1);
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    DisplayData();
}

function ValidateURL(url) {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;

    if (!urlPattern.test(url)) {
        return false;
    } else {
        return true;
    }
}