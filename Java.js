var currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 1);

var year = currentDate.getFullYear();
var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
var day = currentDate.getDate().toString().padStart(2, "0");
var formattedDate = day + "-" + month + "-" + year;

const emailIND =
  "adrian.sedziak@cevalogistics.com,agnieszka.nowak@cevalogistics.com,ali.sahin@cevalogistics.com,bartosz.jamrozy@cevalogistics.com,jasper.schuller@cevalogistics.com,mo.el.mrabet@cevalogistics.com,haris.duratovic@cevalogistics.com,ellen.dumoulin@cevalogistics.com,roberta.katiliute@cevalogistics.com,magdalena.siegert@cevalogistics.com,edwin.van.vugt@cevalogistics.com,imnl.security.desk.industrieweg@cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";
const emailVW = "vw.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";
const emailBFC = "bfc.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";
const emailBRC = "brc.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";
const emailBSE = "sh-gl-security.bestseller@cevalogistics.com,anna.romaniuk@cevalogistics.com,patrycja.papina@cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";
const wfpe = "SH-EU-CLS-BOL-Workforceplanning@Cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";
const wfpb = "SH-EU-CLS-Workforceplanning@cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";

const ind = document.getElementById("ind");
const vw = document.getElementById("vw");
const bfc = document.getElementById("bfc");
const brc = document.getElementById("brc");

function sendEmailAvailability(buttonId) {
  switch (buttonId) {
    case "vw":
      building = "VW";
      email = emailVW;
      break;
    case "ind":
      building = "IND";
      email = emailIND;
      break;
    case "bfc":
      building = "BFC";
      email = emailBFC;
      break;
    case "brc":
      building = "BRC";
      email = emailBRC;
      break;
    case "bse":
      building = "BSE";
      email = emailBSE;
    default:
      break;
  }

  var emailLink =
    "mailto:" +
    email +
    "&subject=Flex%20Coach%20Availability" +
    "&body=Good%20day,%0D%0A%0D%0ADue%20to%20a%20meeting,%20I%20will%20not%20be%20available%20on%20the%20location%20today%20from%20[Time].%20For%20urgent%20matters%20you%20can%20call%20me.%0D%0A%0D%0AHave%20a%20good%20day!";
  window.location.href = emailLink;
}

function sendEmailPresentielijst(buttonId) {
  switch (buttonId) {
    case "vw":
      building = "VW";
      email = emailVW;
      break;
    case "ind":
      building = "IND";
      email = emailIND;
      break;
    case "bfc":
      building = "BFC";
      email = emailBFC;
      break;
    case "brc":
      building = "BRC";
      email = emailBRC;
      break;
    case "bse":
      building = "BSE";
      email = emailBSE;
    default:
      break;
  }
  var emailLink =
    "mailto:" +
    email +
    "&subject=" +
    encodeURIComponent(building + " - Presentielijst " + formattedDate) +
    "&body=Good%20day,%0D%0A%0D%0AAttached%20to%20this%20email%20you%20will%20find:%0D%0A- Regular%20list%20of%20employees%20for%20tomorrow%20" +
    formattedDate;
  window.location.href = emailLink;
}

function sendEmailRotation(buttonId) {
  switch (buttonId) {
    case "vw":
      building = "VW";
      email = emailVW;
      break;
    case "ind":
      building = "IND";
      email = emailIND;
      break;
    case "bfc":
      building = "BFC";
      email = emailBFC;
      break;
    case "brc":
      building = "BRC";
      email = emailBRC;
      break;
    case "bse":
      building = "BSE";
      email = emailBSE;
    default:
      break;
  }

  var emailLink =
    "mailto:" +
    email +
    "&subject=FC%20Building%20Rotation&body=Good%20afternoon%20everyone,%0D%0A%0D%0A%0D%0A%0D%0AFollowing%20the%20rotations%20in%20the%20Flexcoach%20team,%20next%20week,%20another%20member%20of%20our%20team%20will%20be%20working%20in%20[location].%0D%0A%0D%0AI%20would%20like%20to%20share%20with%20you%20the%20contact%20details%20of%20the%20Flexcoach%20who%20will%20be%20present%20here%20next%20week: %0D%0A%0D%0AName %20of%20the%20Flexcoach:%20[Name]%0D%0A%0D%0APhone%20Number:%20[PhoneNumber]%0D%0A%0D%0A%0D%0A%0D%0AHave%20a%20nice%20weekend.";
  window.location.href = emailLink;
}

function sendEmailMulti(buttonId) {
  var year = currentDate.getFullYear();
  var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  var day = (currentDate.getDate() - 1).toString().padStart(2, "0");
  var date = day + "-" + month + "-" + year;

  let building = "";
  let email = "";

  switch (buttonId) {
    case "vw":
      building = "VW";
      email = wfpe;
      break;
    case "ind":
      building = "IND";
      email = wfpb;
      break;
    case "bfc":
      building = "BFC";
      email = wfpe;
      break;
    case "brc":
      building = "BRC";
      email = wfpe;
      break;
    case "bse":
      building = "BSE";
      email = wfpb;
    default:
      break;
  }

  var emailLink =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(building + " - Instroom Multipand Update " + date) +
    "&body=Good day,%0D%0A%0D%0ABelow you will find update for the new instroom/Crosstraining multipand from [department].department.%0D%0A%0D%0A@Workforce, could you please remove the planning and skills for the no-shows and inform the agency about this?";
  window.location.href = emailLink;
}

function sendEmailWFP(buttonId) {
  let building = "";
  let email = "";

  switch (buttonId) {
    case "vw":
      building = "VW";
      email = wfpe;
      break;
    case "ind":
      building = "IND";
      email = wfpb;
      break;
    case "bfc":
      building = "BFC";
      email = wfpe;
      break;
    case "brc":
      building = "BRC";
      email = wfpe;
      break;
    default:
      break;
  }

  var emailLink =
    "mailto:" +
    email +
    "&subject=" +
    encodeURIComponent(building + " - Name - Agency - Issue") +
    "&body=Good%20day%20Workforce%20planning,%0D%0A%0D%0Aplease%20check%20information%20below:%0D%0A%0D%0A1.Name:XXXXXX%0D%0A%0D%0A2.Agency:%20XXXXXX%0D%0A%0D%0A3.Date%20of%20contact:%20XXXX%0D%0A%0D%0A4.Prior%20contact%20with%20employer:%20yes/no%0D%0A%0D%0A5.Feedback%20from%20employer%20:%20yes/no%0D%0A%0D%0A6.Category%20and%20short%20description:%20Transport/Planning/Skills%20in%20Isabel/Housing/Contact%20with%20employer/Contracting%20&%20documents/Holiday%20request/Payslip%20and%20salary/Cross-training/Health%20issues/Work%20hours%20registration/Access%20card%20and%20facility/Outflow%20request/No-show%20registration,%20personal%20issues/problems%0D%0A%0D%0A7.Advice%20of%20action%20to%20be%20taken:%20contact%20employer/Check%20planning%20possibilities%20(includes%20extra%20planning,%20crosstraining)/Contact%20operations/Resolve%20internally/Outflow%0D%0A%0D%0A8.Attachments:%20yes/no%0D%0A%0D%0AThank%20you%20for%20processing%20this%20request";

  window.location.href = emailLink;
}
