var client = isIE()?document.applets[0]:document.ExamClient;
var key = client.getKey();
var xml = readUserAnwser(key);
var result = client.submitClientPaper(xml);
var state = result.split("@-%_#");
document.getElementById("FillCenter").innerHTML = state[2];
document.getElementById("closeshow").style.display="none";
