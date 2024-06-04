function getDayName(date) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);

var year = currentDate.getFullYear();
var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
var day = currentDate.getDate().toString().padStart(2, "0");
var formattedDate = day + "-" + month + "-" + year;

var dayName = getDayName(currentDate);

const emailIND =
  "adrian.sedziak@cevalogistics.com,agnieszka.nowak@cevalogistics.com,ali.sahin@cevalogistics.com,bartosz.jamrozy@cevalogistics.com,jasper.schuller@cevalogistics.com,mo.el.mrabet@cevalogistics.com,haris.duratovic@cevalogistics.com,ellen.dumoulin@cevalogistics.com,roberta.katiliute@cevalogistics.com,magdalena.siegert@cevalogistics.com,edwin.van.vugt@cevalogistics.com,imnl.security.desk.industrieweg@cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com,Joanna.RasPetraitis@Cevalogistics.com,arnas.bulatovas@cevalogistics.com";
const emailVW = "vw.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com,Joanna.RasPetraitis@Cevalogistics.com,arnas.bulatovas@cevalogistics.com";
const emailBFC = "bfc.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com,Joanna.RasPetraitis@Cevalogistics.com,arnas.bulatovas@cevalogistics.com";
const emailBRC = "brc.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com,Joanna.RasPetraitis@Cevalogistics.com,arnas.bulatovas@cevalogistics.com";
const emailBSE = "sh-gl-security.bestseller@cevalogistics.com,anna.romaniuk@cevalogistics.com,patrycja.papina@cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com";
const wfpe = "SH-EU-CLS-BOL-Workforceplanning@Cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com,Joanna.RasPetraitis@Cevalogistics.com,arnas.bulatovas@cevalogistics.com";
const wfpb = "SH-EU-CLS-Workforceplanning@cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com,Joanna.RasPetraitis@Cevalogistics.com,arnas.bulatovas@cevalogistics.com";

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
  var startTime = prompt("Enter the start time:");
  var endTime = prompt("Enter the ending time:");
  var body = `
  Good day everyone,

  Please be advised of our Flex Coach availability for today:
  Availability: ${startTime} to ${endTime}
  If you require our support, kindly reach out to us before ${endTime}.
  
  Thank you
`;
  var emailLink = "mailto:" + email + `&subject=Flex%20Coach%20Availability&body=${encodeURIComponent(body)}`;
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
    "&body=Good%20evening,%0D%0A%0D%0AIn%20the%20attachment,%20You%20will%20find%20the%20presentielijst%20and%20list%20of%20new%20employees%20for%20tomorrow%20" +
    dayName +
    " " +
    formattedDate +
    ".%0D%0A%0D%0ACould%20you%20please%20prepare%20the%20badges%20for%20the%20new%20instroom%20on%20the%209000%20account?%0D%0A%0D%0AThank%20you%20in%20advance.";
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
  var loc = prompt("Enter working location:");
  var fcName = prompt("Enter FC name:");
  var fcNumber = prompt("Enter FC phone number:");
  var body = `Good afternoon everyone,

  Following the rotations in the Flexcoach team, next week, another member of our team will be working in ${loc}.
  I would like to share with you the contact details of the Flexcoach who will be present here next week:
  
  Name of the Flexcoach: ${fcName}
  Phone Number: ${fcNumber}
  Have a nice weekend.`;

  var emailLink = "mailto:" + email + `&subject=FC%20Building%20Rotation&body=${encodeURIComponent(body)}`;
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

  var department = prompt("Enter the deparrment:");
  var emailLink =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(building + " - Instroom Multipand Update " + date) +
    `&body=Good day,%0D%0A%0D%0ABelow you will find update for the new instroom/Crosstraining multipand from ${department} department.%0D%0A%0D%0A@Workforce, could you please remove the planning and skills for the no-shows and inform the agency about this?`;
  window.location.href = emailLink;
}

function sendEmailWFP(buttonId) {
  let building = "";
  let email = "";
  var eName = prompt("Copy name from Isabel:");
  var agency = prompt("Enter the agency:");
  var contactDate = prompt("Enter contact Date");
  var employer = prompt("Prior contact with employer? Yes/No");
  var feedback = prompt("Feedback from employer? Yes/No");
  var category = prompt(
    "Enter the category (Transport/Planning/Skills in Isabel/Housing/Contact with employer/Contracting & documents/Holiday request/Payslip and salary/Cross-training/Health issues/Work hours registration/Access card and facility/Outflow request/No-show registration, personal issues/problems):"
  );
  var advice = prompt("Enter the advice (contact employer/Check planning possibilities (includes extra planning, crosstraining)/Contact operations/Resolve internally/Outflow):");
  var attachment = prompt("Any attachment? Yes/No:");

  var body = [
    "Good day Workforce planning,",
    "",
    "Please check the information below:",
    "",
    `1. Name: ${eName}`,
    "",
    `2. Agency: ${agency}`,
    "",
    `3. Date of contact: ${contactDate}`,
    "",
    `4. Prior contact with employer: ${employer}`,
    "",
    `5. Feedback from employer: ${feedback}`,
    "",
    `6. Category and short description: ${category}
        [DESCRIPTION]`,
    "",
    `7. Advice of action to be taken: ${advice}`,
    "",
    `8. Attachments: ${attachment}`,
    "",
    "Thank you for processing this request.",
  ].join("\n");

  var encodedBody = encodeURIComponent(body);

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

  var emailLink = "mailto:" + email + "&subject=" + encodeURIComponent(building + " - " + `${eName} - ${agency} - ${category}`) + "&body=" + encodedBody;
  window.location.href = emailLink;
}

function sendEmailPresentielijstWeekend(buttonId) {
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
  function getFormattedDateString(days, month, year) {
    return days.join("/") + "-" + month.toString().padStart(2, "0") + "-" + year;
  }

  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth() + 1; 
  var currentYear = currentDate.getFullYear();
  var days = [];

  for (var i = 1; i <= 3; i++) {
    var nextDay = currentDay + i;
    days.push(nextDay.toString().padStart(2, "0"));
  }

  var formattedDate = getFormattedDateString(days, currentMonth, currentYear);

  var emailLink =
    "mailto:" +
    email +
    "&subject=" +
    encodeURIComponent(building + " - Presentielijst " + formattedDate) +
    "&body=Good%20evening,%0D%0A%0D%0AIn%20the%20attachment,%20You%20will%20find%20the%20presentielijst%20for%20weekend%20and%20Monday" +
    " " +
    formattedDate +
    ".%0D%0A%0D%0AHave%20a%20nice%20weekend!";
  window.location.href = emailLink;
}
