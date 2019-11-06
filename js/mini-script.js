var link = document.querySelector(.feedback);
var popup = document.querySelector(.modal-feedback);
var close = popup.querySelector(.modal-close);
var form = popup.querySelector(form);
var name = popup.querySelector([name=user-name]);
var email = popup.querySelector([name=user-email]);
var letterUser = popup.querySelector(textarea)
var isStorageSupport = true;
var storageName = ;
var storageEmail = ;
try{storagename:localStorage.getItem(name);storageemail:localStorage.getItem(email)}catch (err){isstoragesupport:false}link.addEventListener(click,function (evt){ifstoragenamenamevalue:storageName}if (storageEmail){emailvalue:storageEmail});
form.addEventListener(submit,function (evt){popupoffsetwidth:popup.offsetWidth});
window.addEventListener(keydown,function (evt){ifevtkeycode:== 27 { evt.preventDefault()