var itemList = document.getElementById("items");
var form = document.getElementById("addForm");
var filter = document.getElementById("filter");
//form submit event
form.addEventListener("submit", addItem);
//items delete event
itemList.addEventListener("click", delItem);
//filter items
filter.addEventListener("keyup", filterItem);

//add Item
function addItem(e) {
  e.preventDefault();
  //take input value
  var newItem = document.getElementById("item").value;
  //create new  li element
  li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  //create delete button
  deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm delete float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  itemList.append(li);
}

function delItem(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

function filterItem(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
