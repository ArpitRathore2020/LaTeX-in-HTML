// Variable initialization (Global scope)
let islive = false;
let SettingOpen = false;
let innerContent;
let file_name;
let realContent;
let use;

// Event Listner on Vertical bar button (Image)
document
  .querySelector("#vertical-bar-button")
  .addEventListener("onclick", visibility("#vertical-bar-button"));

function test(use = editor.getValue()) {
  // Retreiving text from the editor
  use = editor.getValue();

  // Processing user input to process Math (MathJax compiler)
  if (use.replace("<head>", "test<head>") === use) {
    if (use.replace("<html>", "test1<html>" === use)) {
      use = "<html><head></head>" + use + "</html>";
    }
  }
  use = use.replace(
    "<head>",
    `<head> <script
  id="MathJax-script"
  async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
></script>
<script>
  window.MathJax = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
  };
</script>`
  );

  // Injecting finalized code into iframe
  let doc_elem = document.getElementById("output").contentWindow.document;
  doc_elem.open();
  doc_elem.write(use);
  doc_elem.close();
}

// Snippet addition into the editor
function add(cmd) {
  let initial_value = editor.getValue();
  let final_value = initial_value + cmd;
  editor.getDoc().setValue(final_value);
}

// Makes DOM elements visible (invisible).
function visibility(holder) {
  if (document.querySelector(holder).style.display == "block") {
    document.querySelector(holder).style.display = "none";
  } else {
    document.querySelector(holder).style.display = "block";
  }
}

// Live functionality (eventlistner, display)
function live() {
  if (islive) {
    document.removeEventListener("keyup", test);
    document.getElementById("live").style.display = "none";
    islive = false;
  } else {
    document.getElementById("live").style.display = "block";
    document.addEventListener("keyup", test);
    islive = true;
  }
}

// About page (personal, links & license)
function about_page() {
  realContent = editor.getValue();
  let use =
    `<body><h1 style='background-color:white;
    padding: 10px 15px;
    border-radius: 10px;'> About </h1>
  <div style='background-color:white;
  padding: 10px 15px;
  padding-bottom:2px;
  border-radius: 10px;
  margin: 10px 0px;'>
  <h2 style = 'margin: 0px 0px 5px 0px; color:rgb(214, 20, 85); margin-bottom: 8px;'> Personal </h2>
  <hr>
  
  <div style='display:flex; align-items:center; padding:10px 0px;'>
  <img src="pp.jpeg"
       style='width:45px; margin-right: 10px;'
       ></img>
       <p> Arpit Rathore </p>
  </div>
  
    <div style='display:flex; align-items:center;'>
    <img src="arsd.jpeg"
         style='width:45px; margin-right: 10px;'
         ></img>
     <p>Atma Ram Sanatan Dharma College, Delhi University</p>
    </div>
    
    </div>
    
   <div style='background-color:white;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 10px 0px;'>
     <h2 style = 'margin: 0px 0px 5px 0px; color:rgb(214, 20, 85);'> Links </h2>
     <hr>
     <div style='display: flex; justify-content: flex-start; align-items:center;'>
     <a href='https://github.com/ArpitRathore2020' target='_blank'> 
     <img style='width:45px; padding-top:10px; padding-right:20px;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png'>  </img>
     </a>
     <a href='https://www.linkedin.com/in/arpit-rathore-13a0221b8/' target='_blank'> 
     <img style='width:105px; padding-top:10px;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'></img>
     </a>
     </div>
    </div>
  
    <div style='background-color:white;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 10px 0px;'>
       <h2 style = 'margin: 0px 0px 5px 0px; color:rgb(214, 20, 85);'> ♥️ </h2>
       <hr>
  
       <div style='display:flex; align-items:center;'>
       <img style='width:45px; padding-top:10px; padding-right:10px;' src='https://codemirror.net/doc/logo.png'>  </img>
       <p> <b> CodeMirror </b> is an open-source project shared under an <a href='https://codemirror.net/LICENSE' target='_blank'>MIT license</a>. </p>
       </div>
  
       <div style='display:flex; align-items:center;'>
       <a href="https://www.mathjax.org" target='_blank' >
      <img title="Powered by MathJax"
      src="https://www.mathjax.org/badge/badge-square.png" 
      border="0" alt="Powered by MathJax" style='width:45px; padding-top:10px; padding-right:10px;'  /></a>
      <p> <b> MathJax </b>is an open-source JavaScript display engine for LaTeX under <a href='https://github.com/mathjax/MathJax/blob/master/LICENSE' target='_blank'> Apache License 2.0
      </a> </p>
       </div>
      </div>

      <div style='display: flex; justify-content: center;'>
      <button onclick='document.querySelector("body").innerHTML = "<h1>` +
    realContent +
    `</h1>"' style='border-radius: 10px;
      color: rgb(214, 20, 85);
      background-color: white;
      width: 80px; height:40px;'>
      <b>Close</b>
      </button>
      </div>
      </body>
`;
  let doc_elem = document.getElementById("output").contentWindow.document;
  doc_elem.open();
  doc_elem.write(use);
  doc_elem.close();
}

// Removing popup (open & save)
function popup_remove() {
  document.getElementById("popup").style.display = "none";
}

// To save key-value pairs in Local Storage
function save() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("open_button").style.border =
    "3px solid var(--accent_color)";
  document.getElementById("save_button").style.borderRadius =
    "10px 10px 0px 0px";
  document.getElementById("save_button").style.border = "0px";
  document.getElementById("open_button").style.borderRadius = "10px";
  document.getElementById("popup").innerHTML =
    ` <div class="popup_main_div">
  <h1 style="color:var(--accent_color)">📥&nbsp; ` +
    "Save" +
    `</h1>
  <div style="display:flex; align-items:center;">
  <h2 style="padding: 5px 0px; margin-right:15px;" >` +
    "File name" +
    `</h2> 
    <input type='text' id='documentName' style="width:200px; height:26px; border: 2px solid var(--accent_color); border-radius:10px; padding: 0px 7px">
    </div>
    <ul style='padding: 10px 20px;'>
    <li>
    If there already is a file with the same name, content of the file will be replaced.
    </li>
    <li>
    If there is no such file present, a <b> new file </b> will be created with the provided name.
    </li>
    </ul>
    <div style="display:flex; flex-direction: row-reverse;
    justify-content: right; margin-top:2px;">
    <button style="border: 2px solid var(--accent_color);" onclick="` +
    `set_storage_val(); document.getElementById('save_button').style.borderRadius =
    '10px';
    document.getElementById('save_button').style.border = '3px solid var(--accent_color)';` +
    `">Save</button>
    <button style="border: 2px solid var(--accent_color);" onclick="popup_remove(); document.getElementById('save_button').style.borderRadius =
    '10px';
    document.getElementById('save_button').style.border = '3px solid var(--accent_color)';">Cancel</button>
    </div>
</div>`;
}

// Sets (or replaces) key-value pairs
function set_storage_val() {
  let raw_file_name = document.getElementById("documentName").value;
  localStorage.setItem(
    raw_file_name.replaceAll("'", "").replaceAll('"', ""),
    editor.getValue()
  );

  popup_remove();
}

// Retreives stored key-value pairs from Local Storage
function checkcheck() {
  let docNames = "";
  if (localStorage.length === 0) {
    docNames +=
      "<p style='color:red; font-size:22px; display:flex; justify-content: center;'> <b> Empty </b> </p> Create new files by clicking the save button on main page";
  }
  for (i = 0; i < localStorage.length; i++) {
    docNames +=
      `<div style='display:flex; align-items: center;'>
      ` +
      `<button style="min-width:200px; cursor:default;" id="a_item_` +
      i +
      `"><p>` +
      localStorage.key(i).toString() +
      `</p><button id='b_item_` +
      i +
      `' 
      style = 'background-color:blue; color:white; cursor:pointer;' 
      onclick='editor.getDoc().setValue(localStorage.getItem(localStorage.key(` +
      i +
      `).toString())); test(); '> Open <b>
      </b></button>` +
      `<button id='c_item_` +
      i +
      `'` +
      `style="background-color: red; color:white;" onclick="localStorage.removeItem('` +
      localStorage.key(i).toString() +
      `'); document.querySelector('#a_item_` +
      i +
      `').style.display='none';  document.querySelector('#b_item_` +
      i +
      `').style.display='none';  document.querySelector('#c_item_` +
      i +
      `').style.display='none'; " ` +
      `> Delete </button></div></td></tr>`;
  }

  document.getElementById("popup").style.display = "block";
  document.getElementById("save_button").style.borderRadius = "10px";
  document.getElementById("open_button").style.borderRadius =
    "10px 10px 0px 0px";
  document.getElementById("open_button").style.border = "0px";
  document.getElementById("save_button").style.border =
    "3px solid var(--accent_color)";
  document.getElementById("popup").innerHTML =
    ` <div class="popup_main_div" id="popup_height">
  <h1> 📂 &nbsp;
  Files
  </h1>
  <hr />
  <p style="padding: 5px 0px">
  Files that you have created are listed here: 
  </p >` +
    docNames +
    `<div style="display:flex; flex-direction: row-reverse;
  justify-content: right; margin-top:2px; ">
  <button style='border: 2px solid var(--accent_color);' onclick='popup_remove();   document.getElementById("open_button").style.borderRadius =
  "10px";
  document.getElementById("open_button").style.border = "3px solid var(--accent_color)";'>Okay</button>
  </div>`;
}

// Changes webpage settings
function setting() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup").innerHTML =
    ` <div class="popup_main_div">
  <h1 style="color:var(--accent_color)">⚙︎&nbsp; ` +
    "Settings" +
    `</h1>
      <div style=""background-color:grey;>
      <h2>Style</h2>
      <p> Choose your accent colour </p>
      <div style="display:flex; "> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','rgb(214, 20, 85)');" style="background-color:rgb(214, 20, 85); width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','grey');" style="background-color:grey; width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','red')" style="background-color:red; width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','orange')" style="background-color:orange; width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','purple')" style="background-color:purple; width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','fuchsia')" style="background-color:fuchsia; width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','green')" style="background-color:green; width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','navy')" style="background-color:navy; width:25px; height:25px; border-radius: 20px;"></button> 
      <button onclick="document.documentElement.style.setProperty('--accent_color','blue')" style="background-color:blue; width:25px; height:25px; border-radius: 20px;"></button> 
      </div>
      </div>
    <div style="display:flex; flex-direction: row-reverse;
    justify-content: right; margin-top:2px;">
    <button style="border: 2px solid var(--accent_color);" onclick="popup_remove(); document.getElementById('save_button').style.borderRadius =
    '10px';
    document.getElementById('save_button').style.border = '3px solid var(--accent_color)';">Okay</button>
    </div>
</div>`;
}
