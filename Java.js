var currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 1);

var year = currentDate.getFullYear();
var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
var day = currentDate.getDate().toString().padStart(2, '0');
var formattedDate = day + '-' + month + '-' + year;

const emailInd = "adrian.sedziak@cevalogistics.com,agnieszka.nowak@cevalogistics.com,ali.sahin@cevalogistics.com,bartosz.jamrozy@cevalogistics.com,jasper.schuller@cevalogistics.com,mo.el.mrabet@cevalogistics.com,haris.duratovic@cevalogistics.com,ellen.dumoulin@cevalogistics.com,roberta.katiliute@cevalogistics.com,magdalena.siegert@cevalogistics.com,edwin.van.vugt@cevalogistics.com,imnl.security.desk.industrieweg@cevalogistics.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com"
const emailVW = "vw.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com"
const emailBFC = "bfc.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com"
const emailBRC = "brc.beveiliging@bol.com?cc=sh-eu-nl-cls-flex.coaches@cevalogistics.com"

function sendEmailAvailabilityIND() {
    var emailLink = "mailto:" + emailInd + "&subject=Flex%20Coach%20Availability&body=Good%20day,%0D%0A%0D%0ADue%20to%20a%20meeting,%20I%20will%20not%20be%20available%20on%20the%20location%20today%20from%20[Time].%20For%20urgent%20matters%20you%20can%20call%20me.%0D%0A%0D%0AHave%20a%20good%20day!";
    window.location.href = emailLink;
}

function sendEmailPresentielijstVW() {
    var emailLink = "mailto:" + emailVW + "&subject=VW%20-%20Presentielijst%20" + formattedDate + "&body=Good%20day,%0D%0A%0D%0AAttached%20to%20this%20email%20you%20will%20find:%0D%0A- Regular%20list%20of%20employees%20for%20tomorrow%20" + formattedDate;
    window.location.href = emailLink;
}

function sendEmailPresentielijstBFC() {
    var emailLink = "mailto:" + emailBFC + "&subject=BFC%20-%20Presentielijst%20" + formattedDate + "&body=Good%20day,%0D%0A%0D%0AAttached%20to%20this%20email%20you%20will%20find:%0D%0A- Regular%20list%20of%20employees%20for%20tomorrow%20" + formattedDate;
    window.location.href = emailLink;
}

function sendEmailPresentielijstBRC() {
    var emailLink = "mailto:" + emailBRC + "&subject=BRC%20-%20Presentielijst%20" + formattedDate + "&body=Good%20day,%0D%0A%0D%0AAttached%20to%20this%20email%20you%20will%20find:%0D%0A- Regular%20list%20of%20employees%20for%20tomorrow%20" + formattedDate;
    window.location.href = emailLink;
}

function sendEmailRotationIND() {
    var emailLink = "mailto:" + emailInd + "&subject=FC%20Building%20Rotation&body=Good%20afternoon%20everyone,%0D%0A%0D%0A%0D%0A%0D%0AFollowing%20the%20rotations%20in%20the%20Flexcoach%20team,%20next%20week,%20another%20member%20of%20our%20team%20will%20be%20working%20in%20[location].%0D%0A%0D%0AI%20would%20like%20to%20share%20with%20you%20the%20contact%20details%20of%20the%20Flexcoach%20who%20will%20be%20present%20here%20next%20week: %0D%0A%0D%0AName %20of%20the%20Flexcoach:%20[Name]%0D%0A%0D%0APhone%20Number:%20[PhoneNumber]%0D%0A%0D%0A%0D%0A%0D%0AHave%20a%20nice%20weekend.";
    window.location.href = emailLink;
}  

function sendEmailRotationVW() {
    var emailLink = "mailto:" + emailVW + "%subject=FC%20Building%20Rotation&body=Good%20afternoon%20everyone,%0D%0A%0D%0A%0D%0A%0D%0AFollowing%20the%20rotations%20in%20the%20Flexcoach%20team,%20next%20week,%20another%20member%20of%20our%20team%20will%20be%20working%20in%20[location].%0D%0A%0D%0AI%20would%20like%20to%20share%20with%20you%20the%20contact%20details%20of%20the%20Flexcoach%20who%20will%20be%20present%20here%20next%20week: %0D%0A%0D%0AName %20of%20the%20Flexcoach:%20[Name]%0D%0A%0D%0APhone%20Number:%20[PhoneNumber]%0D%0A%0D%0A%0D%0A%0D%0AHave%20a%20nice%20weekend.";
    window.location.href = emailLink;
}

function sendEmailRotationBFC() {
    var emailLink = "mailto:" + emailBFC + "%subject=FC%20Building%20Rotation&body=Good%20afternoon%20everyone,%0D%0A%0D%0A%0D%0A%0D%0AFollowing%20the%20rotations%20in%20the%20Flexcoach%20team,%20next%20week,%20another%20member%20of%20our%20team%20will%20be%20working%20in%20[location].%0D%0A%0D%0AI%20would%20like%20to%20share%20with%20you%20the%20contact%20details%20of%20the%20Flexcoach%20who%20will%20be%20present%20here%20next%20week: %0D%0A%0D%0AName %20of%20the%20Flexcoach:%20[Name]%0D%0A%0D%0APhone%20Number:%20[PhoneNumber]%0D%0A%0D%0A%0D%0A%0D%0AHave%20a%20nice%20weekend.";
    window.location.href = emailLink;
}

function sendEmailRotationBRC() {
    var emailLink = "mailto:" + emailBRC + "%subject=FC%20Building%20Rotation&body=Good%20afternoon%20everyone,%0D%0A%0D%0A%0D%0A%0D%0AFollowing%20the%20rotations%20in%20the%20Flexcoach%20team,%20next%20week,%20another%20member%20of%20our%20team%20will%20be%20working%20in%20[location].%0D%0A%0D%0AI%20would%20like%20to%20share%20with%20you%20the%20contact%20details%20of%20the%20Flexcoach%20who%20will%20be%20present%20here%20next%20week: %0D%0A%0D%0AName %20of%20the%20Flexcoach:%20[Name]%0D%0A%0D%0APhone%20Number:%20[PhoneNumber]%0D%0A%0D%0A%0D%0A%0D%0AHave%20a%20nice%20weekend.";
    window.location.href = emailLink;
}  
