alert("اولا في بعض الاشياء لازم تفعليها قبل ما يفتح الموقع");
prompt(" اولا ابعدي صورتك بالانستا وعدتيني ما تحطي من جديد😮‍💨. لما تخلصي اكتبي تم او اوك او اي شي");

var sorry = prompt("قولي اسفه 3 مرات");

while (1) {
    if (sorry === ("اسفه اسفه اسفه")) {
        alert("شطوره انا هم اسف يا غبيه");
        break;

        } else if (sorry === ("اسفه اسفه اسفه اسفه")) {
        alert("ليش 4 مرات؟ بس شطوره انا هم اسف يا غبيه");
        break;

        } else if (sorry === ("اسفه اسفه اسفه اسفه اسفه")) {
        alert("ليش 5 مرات؟ بس شطوره انا هم اسف يا غبيه");
        break;
        
        } else if (sorry === ("اسفه اسفه")) {
        var sorry = prompt("قلت 3 مرات");

        if (sorry === ("اسفه اسفه اسفه")) {
            alert("كتبتي اسفه 5 مرات بس عادي");
            break;
        } else if (sorry === ("اسفه اسفه")) {
            alert("كتبتي اسفه 4 مرات بس عادي");
            break;
        } else if (sorry === ("اسفه")) {
            alert("ok");
            break;
        } else {
            var sorry = prompt("قولي اسفه 3 مرات");
        }
    } else if (sorry === ("اسفه")) {
        var sorry = prompt("قلت 3 مرات");

        if (sorry === ("اسفه اسفه اسفه")) {
            alert("كتبتي اسفه 4 مرات بس عادي");
            break;
        } else if (sorry === ("اسفه اسفه")) {
            alert("ok");
            break;
        } else if (sorry === ("اسفه")) {
            var sorry = prompt("باقي مره ما تعرفي تعدي؟ 😪");

            if (sorry === ("اسفه اسفه اسفه")) {
                alert("كتبتي اسفه 5 مرات بس عادي");
                break;
            } else if (sorry === ("اسفه اسفه")) {
                alert("كتبتي اسفه 4 مرات بس عادي");
                break;
            } else if (sorry === ("اسفه")) {
                alert("ok");
                break;
            } else {
                var sorry = prompt("ما تعرفي تعدي؟ قلت 3 مرات");
            }
        } else {
            var sorry = prompt("قلت 3 مرات");
        }
    } else {
        var sorry = prompt("قلت قولي اسفه 3 مرات");
    }
}

document.querySelector("body").classList.remove("vis");