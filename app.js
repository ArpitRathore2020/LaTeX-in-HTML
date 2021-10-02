// Variable initialization
let islive = false;
let SettingOpen = false;
let new_user = false;
let innerContent;
let file_name;
let realContent;
let use;
let current_font = document.querySelector(".CodeMirror").style.fontSize;
document.getElementById("snippets").style.display = "none";

// Break points
// if (window.innerWidth <= 1005) {
//   window.alert(window.innerWidth);
// }

document
  .querySelector("#vertical-bar-button")
  .addEventListener("onclick", vertical_bar_visibility);

// document.onload = function () {
//   lang_value_list = ["xml", "stex"];
//   lang_visible_list = ["Html", "LaTeX"];

//   let lang_innerHTML = "";

//   for (i = 0; i < lang_value_list.length; i++) {
//     lang_innerHTML +=
//       '<option value="' +
//       lang_value_list[i] +
//       '">' +
//       lang_visible_list[i] +
//       "</option>";
//   }
//   document.getElementById("select_lang").innerHTML = lang_innerHTML;
// };
// document.getElementById("select_lang").innerHTML =

function typset() {
  MathJax.typeset();
}

// setInterval(typset, 1500);

function test(use = editor.getValue()) {
  use = editor.getValue();
  console.log(use);
  // use = "<div id='SDF3744HH42V3424234HJ'>" + use;
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
  // use = use.replace("</style>", "}</style>");
  // use += "</div>";
  // document.querySelector("#output").innerHTML = use;
  let doc_elem = document.getElementById("output").contentWindow.document;
  doc_elem.open();
  doc_elem.write(use);
  doc_elem.close();
  // MathJax.typeset();
}

function clear() {
  let k = " ";
  editor.getDoc().setValue(k);
}

function add(cmd) {
  let initial_value = editor.getValue();
  let final_value = initial_value + cmd;
  editor.getDoc().setValue(final_value);
  // document.querySelector("#input").value += cmd;
}

function vertical_bar_visibility() {
  if (
    document.querySelector("#vertical-bar-wrapper").style.display == "block"
  ) {
    document.querySelector("#vertical-bar-wrapper").style.display = "none";
  } else {
    document.querySelector("#vertical-bar-wrapper").style.display = "block";
  }
}

function matrix_visibility() {
  if (document.querySelector("#matrix-wrapper").style.display == "block") {
    document.querySelector("#matrix-wrapper").style.display = "none";
  } else {
    document.querySelector("#matrix-wrapper").style.display = "block";
  }
}

function visibility(holder) {
  if (document.querySelector(holder).style.display == "block") {
    document.querySelector(holder).style.display = "none";
  } else {
    document.querySelector(holder).style.display = "block";
  }
}

function live() {
  if (new_user) {
    popup();
  }
  new_user = false;
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

function close_setting() {
  test();
}

function settings() {
  realContent = editor.getValue();
  let use = `<div style='background-color:white;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 10px 0px;'>
  <h2 style = 'margin: 0px 0px 5px 0px; color:rgb(214, 20, 85);'> Style </h2>
  <hr>
  <h3 style = 'margin: 5px 0px 5px 0px; font-size: 16px;'> Select syntax highlighting language</h3>
  <select id="select_lang">
                <option value="xml">HTML</option>
                <option value="stex">LaTeX</option>
              </select>
              <h3 style = 'margin: 5px 0px 5px 0px; font-size: 16px;'> Select text editor theme</h3>
              <select onchange="theme()" id="select_theme">
                <option value="3024-day">3024-day</option>
                <option value="3024-night">3024-night</option>
                <option value="abbott">abbott</option>
                <option value="abcdef">abcdef</option>
                <option value="ambiance-mobile">ambiance-mobile</option>
                <option value="ambiance">ambiance</option>
                <option value="ayu-dark">ayu-dark</option>
                <option value="ayu-mirage">ayu-mirage</option>
                <option value="base16-dark">base16-dark</option>
                <option value="base16-light">base16-light</option>
                <option value="bespin">bespin</option>
                <option value="blackboard">blackboard</option>
                <option value="cobalt">cobalt</option>
                <option value="colorforth">colorforth</option>
                <option value="darcula">darcula</option>
                <option value="dracula" selected>dracula</option>
                <option value="duotone-dark">duotone-dark</option>
                <option value="duotone-light">duotone-light</option>
                <option value="eclipse">eclipse</option>
                <option value="elegant">elegant</option>
                <option value="erlang-dark">erlang-dark</option>
                <option value="gruvbox-dark">gruvbox-dark</option>
                <option value="hopscotch">hopscotch</option>
                <option value="icecoder">icecoder</option>
                <option value="idea">idea</option>
                <option value="isotope">isotope</option>
                <option value="juejin">juejin</option>
                <option value="lesser-dark">lesser-dark</option>
                <option value="liquibyte">liquibyte</option>
                <option value="lucario">lucario</option>
                <option value="material-darker">material-darker</option>
                <option value="material-ocean">material-ocean</option>
                <option value="material-palenight">material-palenight</option>
                <option value="material">material</option>
                <option value="mbo">mbo</option>
                <option value="mdn-like">mdn-like</option>
                <option value="midnight">midnight</option>
                <option value="monokai">monokai</option>
                <option value="moxer">moxer</option>
                <option value="neat">neat</option>
                <option value="neo">neo</option>
                <option value="night">night</option>
                <option value="nord">nord</option>
                <option value="oceanic-next">oceanic-next</option>
                <option value="panda-syntax">panda-syntax</option>
                <option value="paraiso-dark">paraiso-dark</option>
                <option value="paraiso-light">paraiso-light</option>
                <option value="pastel-on-dark">pastel-on-dark</option>
                <option value="railscasts">railscasts</option>
                <option value="rubyblue">rubyblue</option>
                <option value="seti">seti</option>
                <option value="shadowfox">shadowfox</option>
                <option value="solarized">solarized</option>
                <option value="the-matrix">the-matrix</option>
                <option value="tomorrow-night-bright">
                  tomorrow-night-bright
                </option>
                <option value="tomorrow-night-eighties">
                  tomorrow-night-eighties
                </option>
                <option value="ttcn">ttcn</option>
                <option value="twilight">twilight</option>
                <option value="vibrant-ink">vibrant-ink</option>
                <option value="xq-dark">xq-dark</option>
                <option value="xq-light">xq-light</option>
                <option value="yeti">yeti</option>
                <option value="yonce">yonce</option>
                <option value="zenburn">zenburn</option>
              </select>
  </div>`;
  // document.querySelector("#output").innerHTML = use;
  MathJax.typeset();
  test(use);
  let doc_elem = document.getElementById("output").contentWindow.document;
  doc_elem.open();
  doc_elem.write(use);
  doc_elem.close();
  editor.setValue(html_beautify(editor.getValue()));
}

function setting_change() {
  innerContent = editor.getValue();
  let fs = document.getElementById("font_size").value + "px";
  document.querySelector(".CodeMirror").style.fontSize = fs;
  let mh = document.getElementById("min_height").value + "px";
  document.querySelector(".CodeMirror").style.minHeight = mh;
  let iww = document.getElementById("input_wrapper_width").value + "%";
  document.querySelector("#input-wrapper").style.width = iww;
  if (document.getElementById("yes_checked").checked) {
    document.getElementById("live_btn").style.display = "block";
  } else {
    document.getElementById("live_btn").style.display = "none";
    islive = true;
    live();
  }
}

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
      <p> <b> MathJax </b>is an open-source JavaScript display engine for $\\displaystyle \\LaTeX$ under <a href='https://github.com/mathjax/MathJax/blob/master/LICENSE' target='_blank'> Apache License 2.0
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

function popup(
  h1 = "Warning",
  p = "If you experience lag, RELOAD the page and make sure that the LIVE feature is OFF.",
  extra = "",
  final_exceution_fn = "popup_remove()"
) {
  // document.getElementById("main").style.filter = "blur(2px)";
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup").innerHTML =
    ` <div class="popup_main_div">    
  <h2>⚠️ ` +
    h1 +
    `</h2>
  <hr />
  <p style="padding: 5px 0px">` +
    p +
    `</p>
    ` +
    extra +
    `<button onclick="` +
    final_exceution_fn +
    `">Okay</button>
</div>`;
}

function popup_remove() {
  // document.getElementById("main").style.filter = "blur(0px)";
  document.getElementById("popup").style.display = "none";
}

function save() {
  // document.getElementById("main").style.filter = "blur(2px)";
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

function set_storage_val() {
  let raw_file_name = document.getElementById("documentName").value;
  localStorage.setItem(
    raw_file_name.replaceAll("'", "").replaceAll('"', ""),
    editor.getValue()
  );

  popup_remove();
}

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

  // document.getElementById("main").style.filter = "blur(2px)";
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

function open() {
  window.alert("sfgf");

  // let docNames = "";
  // document.getElementById("main").style.filter = "blur(2px)";
  // document.getElementById("popup").style.display = "block";

  // for (i = 0; i < localStorage.length; i++) {
  //   docNames += `<tr><td>` + localStorage.key(i) + `</tr></td>`;
  // }

  // document.getElementById("popup").innerHTML =
  //   ` <div>
  // <h1 style='color:black;'>⚠️ ` +
  //   "Save" +
  //   `</h1>
  // <hr />
  // <p style="padding: 5px 0px">` +
  //   "document name plaease" +
  //   `</p>
  //   <input type='text' id='documentName'>
  //   <div style="display:flex; flex-direction: row-reverse;
  //   justify-content: right; margin-top:2px;">
  //   <button onclick="` +
  //   `set_storage_val()` +
  //   `">Okay</button>
  //   <button onclick='popup_remove()'>Cancel</button>
  //   </div><table>` +
  //   docNames`</table></div>`;
}

console.log(localStorage);
