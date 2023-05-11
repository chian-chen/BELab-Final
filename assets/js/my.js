
function Download(){

    filename = "Setting.json";
    
    text = "[\n";
    Gestures = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'V', 'O', 'N', 'Z'];
    for(i = 0; i < 8; i++){
        one = document.getElementById(Gestures[i] + "1").value;
        two = document.getElementById(Gestures[i] + "2").value;
        thr = document.getElementById(Gestures[i] + "3").value;
        console.log(one + " " + two + " " + thr);
        text += '{\n';
        text += '"Gesture" : "' + Gestures[i] + '",\n';
        text += '"Key1" : "' + one + '",\n';
        text += '"Key2" : "' + two + '",\n';
        text += '"Key3" : "' + thr + '",\n';
        text += (i == 7)? '}\n' : '},\n';
    }
    text += "]";

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

(function($){
    console.log("I'm here!");
    container = document.getElementById("container");

    Gestures = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'V', 'O', 'N', 'Z'];

    for(i = 0; i < 8; i++){

        Node1 = `<div class="field quarter">
                <label for="${Gestures[i]}1">Gesture</label>
                <select name="${Gestures[i]}1" id="${Gestures[i]}1">
                    <option value="">-</option>
                    <option value="Control">Control</option>
                    <option value="Shift">Shift</option>
                    <option value="Option">Option</option>
                    <option value="Command">Command</option>
                </select>
                </div>`;

        Node2 = `<div class="field quarter">
                <label for="${Gestures[i]}2">${Gestures[i]}</label>
                <select name="${Gestures[i]}2" id="${Gestures[i]}2">
                    <option value="">-</option>
                    <option value="Control">Control</option>
                    <option value="Shift">Shift</option>
                    <option value="Option">Option</option>
                    <option value="Command">Command</option>
                </select>
                </div>`;

        Node3 = `<div class="field half">
                    <label for="${Gestures[i]}3">Shortcuts</label>
                    <input name = "${Gestures[i]}3" type="text" id="${Gestures[i]}3" value="" placeholder="Alphabet or Number" maxlength="1"/>
                </div>`;

        Nodes = Node1 + Node2 + Node3;

        container.innerHTML += Nodes;
    }
}())